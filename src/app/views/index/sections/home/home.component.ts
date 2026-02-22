import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { GsapRevealDirective } from "../../../../directives/gsap-reveal.directive";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  imports: [GsapRevealDirective, RouterLink, NgOptimizedImage],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {}
