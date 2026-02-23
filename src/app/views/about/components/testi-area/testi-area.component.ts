<<<<<<< HEAD
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import {
  CarouselComponent,
  CarouselModule,
  OwlOptions,
  SlidesOutputData,
} from "ngx-owl-carousel-o";
import { CounterDirective } from "../../../../directives/counter.directive";
import { TESTIMONIALS } from "../../../../data/testimonials";
import type { Testimonial } from "../../../../models/testimonial.model";

@Component({
  selector: "app-testi-area",
  imports: [CommonModule, CarouselModule, CounterDirective, NgOptimizedImage],
  templateUrl: "./testi-area.component.html",
  styleUrl: "./testi-area.component.scss",
})
export class TestiAreaComponent {
  @ViewChild("thumbCarousel") thumbCarousel?: CarouselComponent;
  @ViewChild("contentCarousel") contentCarousel?: CarouselComponent;

  private syncLock: "thumb" | "content" | null = null;

  testimonials: Testimonial[] = TESTIMONIALS;

  thumbOptions: OwlOptions = {
    loop: true,
    items: 1,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 600,
  };

  contentOptions: OwlOptions = {
    loop: true,
    items: 1,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 600,
  };

  onThumbTranslated(data: SlidesOutputData): void {
    this.syncCarousel("thumb", data);
  }

  onContentTranslated(data: SlidesOutputData): void {
    this.syncCarousel("content", data);
  }

  private syncCarousel(
    source: "thumb" | "content",
    data: SlidesOutputData,
  ): void {
    if (this.syncLock === source) {
      this.syncLock = null;
      return;
    }

    const targetId = data?.slides?.[0]?.id;
    if (targetId === undefined || targetId === null) return;

    const target =
      source === "thumb" ? this.contentCarousel : this.thumbCarousel;
    this.syncLock = source === "thumb" ? "content" : "thumb";
    target?.to(String(targetId));
  }
}
=======
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import {
  CarouselComponent,
  CarouselModule,
  OwlOptions,
  SlidesOutputData,
} from "ngx-owl-carousel-o";
import { CounterDirective } from "../../../../directives/counter.directive";
import { TESTIMONIALS } from "../../../../data/testimonials";
import type { Testimonial } from "../../../../models/testimonial.model";

@Component({
  selector: "app-testi-area",
  imports: [CommonModule, CarouselModule, CounterDirective, NgOptimizedImage],
  templateUrl: "./testi-area.component.html",
  styleUrl: "./testi-area.component.scss",
})
export class TestiAreaComponent {
  @ViewChild("thumbCarousel") thumbCarousel?: CarouselComponent;
  @ViewChild("contentCarousel") contentCarousel?: CarouselComponent;

  private syncLock: "thumb" | "content" | null = null;

  testimonials: Testimonial[] = TESTIMONIALS;

  thumbOptions: OwlOptions = {
    loop: true,
    items: 1,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 600,
  };

  contentOptions: OwlOptions = {
    loop: true,
    items: 1,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 600,
  };

  onThumbTranslated(data: SlidesOutputData): void {
    this.syncCarousel("thumb", data);
  }

  onContentTranslated(data: SlidesOutputData): void {
    this.syncCarousel("content", data);
  }

  private syncCarousel(
    source: "thumb" | "content",
    data: SlidesOutputData,
  ): void {
    if (this.syncLock === source) {
      this.syncLock = null;
      return;
    }

    const targetId = data?.slides?.[0]?.id;
    if (targetId === undefined || targetId === null) return;

    const target =
      source === "thumb" ? this.contentCarousel : this.thumbCarousel;
    this.syncLock = source === "thumb" ? "content" : "thumb";
    target?.to(String(targetId));
  }
}
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
