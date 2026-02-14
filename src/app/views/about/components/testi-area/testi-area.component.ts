import { CommonModule } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import {
  CarouselComponent,
  CarouselModule,
  OwlOptions,
  SlidesOutputData,
} from "ngx-owl-carousel-o";
import { CounterDirective } from "../../../../directives/counter.directive";

@Component({
  selector: "app-testi-area",
  imports: [CommonModule, CarouselModule, CounterDirective],
  templateUrl: "./testi-area.component.html",
  styleUrl: "./testi-area.component.scss",
})
export class TestiAreaComponent {
  @ViewChild("thumbCarousel") thumbCarousel?: CarouselComponent;
  @ViewChild("contentCarousel") contentCarousel?: CarouselComponent;

  private syncLock: "thumb" | "content" | null = null;

  testimonials = [
    {
      imageLarge: "assets/img/testimonial/vl-testimonial-large-thumb-4.1.png",
      imageSmall: "assets/img/testimonial/vl-sm-thumb-4.1.png",
      name: "Chief Okon",
      role: "Traditional Ruler",
      text: "Leadership is about service. When the floods came, many promised help, but this foundation was the first on the ground with food and medical supplies. They are a true partner to our people.",
    },
    {
      imageLarge: "assets/img/testimonial/test-img.jpg",
      imageSmall: "assets/img/testimonial/vl-sm-thumb-4.1.png",
      name: "Mama Adewale",
      role: "Community Elder",
      text: "For years, our women walked miles for water. Now, with the new borehole in our village square, my grandchildren have time for their books and I have peace in my heart. This foundation is a blessing to our soil.",
    },
  ];

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
