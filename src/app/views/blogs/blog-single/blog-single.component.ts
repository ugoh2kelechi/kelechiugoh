import { Component, DestroyRef, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { SanityService } from "../../../service/sanity.service";
import { BlogContentComponent } from "./components/blog-content/blog-content.component";
import { BlogSidebarComponent } from "./components/blog-sidebar/blog-sidebar.component";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

interface BlogDetailView {
  title: string;
  author: string;
  date: string;
  image: string;
  contentParagraphs: string[];
}

@Component({
  selector: "app-blog-single",
  imports: [BreadcrumbComponent, BlogContentComponent, BlogSidebarComponent],
  templateUrl: "./blog-single.component.html",
  styleUrls: ["./blog-single.component.scss"],
})
export class BlogSingleComponent implements OnInit {
  blog: BlogDetailView | null = null;
  isLoading = true;
  errorMessage = "";
  private destroyRef = inject(DestroyRef);

  constructor(
    private route: ActivatedRoute,
    private sanity: SanityService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const slug = params.get("slug");
        void this.loadBlog(slug);
      });
  }

  private async loadBlog(slug: string | null): Promise<void> {
    this.isLoading = true;
    this.errorMessage = "";
    this.blog = null;

    if (!this.sanity.isConfigured()) {
      this.errorMessage = "No records found.";
      this.isLoading = false;
      return;
    }

    try {
      const query = slug
        ? `*[_type == "blogPost" && (slug.current == $slug || _id == $slug)][0]{
            title,
            slug,
            excerpt,
            content,
            featuredImage,
            author->{name},
            publishedAt
          }`
        : `*[_type == "blogPost"]|order(publishedAt desc, _createdAt desc)[0]{
            title,
            slug,
            excerpt,
            content,
            featuredImage,
            author->{name},
            publishedAt
          }`;
      const result = await this.sanity.fetch<any>(
        query,
        slug ? { slug } : undefined,
      );

      if (!result) {
        this.errorMessage = "No records found.";
        return;
      }

      const contentParagraphs = extractParagraphs(
        result.content,
        result.excerpt,
      );
      this.blog = {
        title: result.title || "",
        author: result.author?.name || "",
        date: result.publishedAt
          ? new Date(result.publishedAt).toLocaleDateString()
          : "",
        image: this.sanity.imageUrl(result.featuredImage),
        contentParagraphs,
      };
      this.errorMessage = "";
    } catch (err) {
      console.error("Failed to load blog details", err);
      this.errorMessage = "No records found.";
      this.blog = null;
    } finally {
      this.isLoading = false;
    }
  }
}

function extractParagraphs(content: any, excerpt?: string): string[] {
  if (Array.isArray(content)) {
    const text = content
      .map((block: any) =>
        Array.isArray(block?.children)
          ? block.children.map((ch: any) => ch.text || "").join("")
          : "",
      )
      .map((value: string) => value.trim())
      .filter(Boolean);
    if (text.length) return text;
  }
  return excerpt ? [excerpt] : [];
}
