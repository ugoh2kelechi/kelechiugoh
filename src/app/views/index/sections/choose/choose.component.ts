<<<<<<< HEAD
import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { GsapRevealDirective } from "../../../../directives/gsap-reveal.directive";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-choose",
  imports: [GsapRevealDirective, CarouselModule, RouterLink, NgOptimizedImage],
  templateUrl: "./choose.component.html",
  styleUrls: ["./choose.component.scss"],
})
export class ChooseComponent {
  chooseSlider: OwlOptions = {
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
}
=======
import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { GsapRevealDirective } from "../../../../directives/gsap-reveal.directive";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-choose",
  imports: [GsapRevealDirective, CarouselModule, RouterLink, NgOptimizedImage],
  templateUrl: "./choose.component.html",
  styleUrls: ["./choose.component.scss"],
})
export class ChooseComponent {
  chooseSlider: OwlOptions = {
    loop: true,
    margin: 30,
    nav: false,
    autoplay: true,
    slideTransition: "linear",
    autoplayTimeout: 3000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };
}
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
