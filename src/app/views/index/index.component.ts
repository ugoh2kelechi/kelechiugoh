import { Component, ElementRef, HostListener } from "@angular/core";
import { NavbarComponent } from "../../layout/navbar/navbar.component";
import { MobileSidebarComponent } from "../../common/mobile-sidebar/mobile-sidebar.component";
import { PageScrollComponent } from "../../layout/page-scroll/page-scroll.component";
import { RouterLink } from "@angular/router";
import { HomeComponent } from "./sections/home/home.component";
import { CounterComponent } from "./sections/counter/counter.component";
import { ChooseComponent } from "./sections/choose/choose.component";
import { FaqComponent } from "../pages/faq/faq.component";
import { WorkComponent } from "./sections/work/work.component";
import { BlogNewsComponent } from "./sections/blog-news/blog-news.component";
import { AboutComponent } from "./sections/about/about.component";

@Component({
  selector: "app-index",
  imports: [
    HomeComponent,
    AboutComponent,
    RouterLink,
    CounterComponent,
    ChooseComponent,
    FaqComponent,
    WorkComponent,
    BlogNewsComponent,
    MobileSidebarComponent,
    PageScrollComponent,
  ],
  templateUrl: "./index.component.html",
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  isMenuOpen = false;
  constructor(private el: ElementRef) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  @HostListener("window:scroll", [])
  onScroll() {
    const scrollPosition = window.scrollY;
    const header = this.el.nativeElement.querySelector(".header-area");

    if (scrollPosition < 1) {
      header.classList.remove("sticky");
    } else {
      header.classList.add("sticky");
    }
  }
}
