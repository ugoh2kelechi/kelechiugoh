import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { blogs } from "../../data";

@Component({
  selector: "app-blog-content",
  imports: [RouterLink],
  templateUrl: "./blog-content.component.html",
  styleUrls: ['./blog-content.component.scss'],
})
export class BlogContentComponent {
  blogs = blogs;
}
