import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { BLOG_POSTS } from "../../../../../data/blog-posts";
import type { BlogPost } from "../../../../../models/blog-post.model";

@Component({
  selector: "app-blog-content",
  imports: [RouterLink, CommonModule, NgOptimizedImage],
  templateUrl: "./blog-content.component.html",
  styleUrls: ["./blog-content.component.scss"],
})
export class BlogContentComponent {
  blogs: BlogPost[] = BLOG_POSTS;
}
