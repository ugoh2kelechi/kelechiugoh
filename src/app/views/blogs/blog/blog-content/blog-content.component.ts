import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SanityService } from "../../../../service/sanity.service";

interface BlogPostView {
  id?: string;
  image?: string;
  title: string;
  description?: string;
  author?: string;
  date?: string;
}

@Component({
  selector: "app-blog-content",
  imports: [RouterLink],
  templateUrl: "./blog-content.component.html",
  styleUrls: ["./blog-content.component.scss"],
})
export class BlogContentComponent implements OnInit {
  blogs: BlogPostView[] = [];

  constructor(private sanity: SanityService) {}

  async ngOnInit(): Promise<void> {
    if (!this.sanity.isConfigured()) {
      // fallback to static content if Sanity not configured
      try {
        const { blogs: staticBlogs } = await import("../../data");
        this.blogs = staticBlogs.map((b: any) => ({
          id: String(b.id),
          image: b.image,
          title: b.title,
          description: b.description,
          author: b.author,
          date: b.date,
        }));
        return;
      } catch {
        this.blogs = [];
        return;
      }
    }

    try {
      const results = await this.sanity.allOfType<any>(
        "blogPost",
        "title, slug, excerpt, author->{name}, publishedAt"
      );
      this.blogs = (results || []).map((r: any) => ({
        id: r._id,
        title: r.title,
        description:
          r.excerpt ||
          (Array.isArray(r.content)
            ? r.content
                .map((c: any) =>
                  (c.children || []).map((ch: any) => ch.text || "").join("")
                )
                .join("\n")
            : ""),
        author: r.author?.name || "",
        date: r.publishedAt ? new Date(r.publishedAt).toLocaleDateString() : "",
      }));
    } catch (err) {
      console.error("Failed to fetch blogs from Sanity", err);
      // fallback to static
      const { blogs: staticBlogs } = await import("../../data");
      this.blogs = staticBlogs.map((b: any) => ({
        id: String(b.id),
        image: b.image,
        title: b.title,
        description: b.description,
        author: b.author,
        date: b.date,
      }));
    }
  }
}
