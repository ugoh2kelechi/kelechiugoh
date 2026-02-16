import { NgOptimizedImage } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";

interface BlogDetailView {
  title: string;
  author: string;
  date: string;
  image: string;
  contentParagraphs: string[];
}

@Component({
  selector: "app-blog-sidebar",
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: "./blog-sidebar.component.html",
  styleUrls: ["./blog-sidebar.component.scss"],
})
export class BlogSidebarComponent {
  @Input() blog: BlogDetailView | null = null;
  @Input() isLoading = false;
  @Input() errorMessage = "";
}
