import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SanityService } from "../../../../../service/sanity.service";

interface BlogSummaryView {
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
  imports: [RouterLink, CommonModule, NgOptimizedImage],
  templateUrl: "./blog-content.component.html",
  styleUrls: ["./blog-content.component.scss"],
})
export class BlogContentComponent implements OnInit {
  blogs: BlogSummaryView[] = [];

  constructor(private sanity: SanityService) {}

  async ngOnInit(): Promise<void> {
    if (!this.sanity.isConfigured()) {
      this.blogs = [];
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
        date: r.publishedAt ? new Date(r.publishedAt).toLocaleDateString() : "",
      }));
    } catch (err) {
      console.error("Failed to fetch more blogs", err);
      this.blogs = [];
    }
  }
}
