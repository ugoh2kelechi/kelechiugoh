<<<<<<< HEAD
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
=======
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
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
