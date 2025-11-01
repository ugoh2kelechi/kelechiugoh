import { Component } from "@angular/core";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { BlogContentComponent } from "./components/blog-content/blog-content.component";
import { BlogSidebarComponent } from "./components/blog-sidebar/blog-sidebar.component";

@Component({
  selector: "app-blog-single",
  imports: [BreadcrumbComponent, BlogContentComponent, BlogSidebarComponent],
  templateUrl: "./blog-single.component.html",
  styleUrls: ['./blog-single.component.scss'],
})
export class BlogSingleComponent {}
