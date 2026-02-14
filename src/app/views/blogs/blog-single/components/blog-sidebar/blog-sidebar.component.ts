import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-blog-sidebar",
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: "./blog-sidebar.component.html",
  styleUrls: ["./blog-sidebar.component.scss"],
})
export class BlogSidebarComponent {}
