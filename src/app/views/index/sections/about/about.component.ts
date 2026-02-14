import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { GsapRevealDirective } from "../../../../directives/gsap-reveal.directive";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-about",
  imports: [GsapRevealDirective, RouterLink, NgOptimizedImage],
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent {}
