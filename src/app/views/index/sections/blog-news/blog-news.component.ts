import { Component } from "@angular/core";
import { GsapRevealDirective } from "../../../../directives/gsap-reveal.directive";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-blog-news",
  imports: [GsapRevealDirective, RouterLink],
  templateUrl: "./blog-news.component.html",
  styleUrls: ['./blog-news.component.scss'],
})
export class BlogNewsComponent {}
