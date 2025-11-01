import { Component } from "@angular/core";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { BlogContentComponent } from "./blog-content/blog-content.component";

@Component({
  selector: "app-blog",
  imports: [BreadcrumbComponent, BlogContentComponent],
  templateUrl: "./blog.component.html",
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent {}
