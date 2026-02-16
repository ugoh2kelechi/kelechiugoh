import { NgOptimizedImage } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SanityService } from "../../../../service/sanity.service";

interface BlogPostView {
  id?: string;
  slug?: string;
  image?: string;
  title: string;
  description?: string;
  author?: string;
  date?: string;
}

@Component({
  selector: "app-blog-content",
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: "./blog-content.component.html",
  styleUrls: ["./blog-content.component.scss"],
})
export class BlogContentComponent implements OnInit {
  blogs: BlogPostView[] = [];
  isLoading = true;
  errorMessage = "";
  currentPage = 1;
  pageSize = 6;

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.blogs.length / this.pageSize));
  }

  get pagedBlogs(): BlogPostView[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.blogs.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  constructor(private sanity: SanityService) {}

  async ngOnInit(): Promise<void> {
    try {
      if (!this.sanity.isConfigured()) {
        this.blogs = [];
        this.errorMessage = "No records found.";
        this.resetPagination();
        return;
      }

      try {
        const results = await this.sanity.allOfType<any>(
          "blogPost",
          "title, slug, excerpt, content, featuredImage, author->{name}, publishedAt",
        );
        this.blogs = (results || []).map((r: any) => ({
          id: r.slug?.current ?? r._id,
          slug: r.slug?.current ?? "",
          image: this.sanity.imageUrl(r.featuredImage),
          title: r.title,
          description:
            r.excerpt ||
            (Array.isArray(r.content)
              ? r.content
                  .map((c: any) =>
                    (c.children || []).map((ch: any) => ch.text || "").join(""),
                  )
                  .join("\n")
              : ""),
          author: r.author?.name || "",
          date: r.publishedAt
            ? new Date(r.publishedAt).toLocaleDateString()
            : "",
        }));
        if (!this.blogs.length) {
          this.errorMessage = "No records found.";
        } else {
          this.errorMessage = "";
        }
        this.resetPagination();
      } catch (err) {
        console.error("Failed to fetch blogs from Sanity", err);
        this.blogs = [];
        this.errorMessage = "No records found.";
        this.resetPagination();
      }
    } finally {
      this.isLoading = false;
    }
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
  }

  private resetPagination(): void {
    this.currentPage = 1;
  }
}
