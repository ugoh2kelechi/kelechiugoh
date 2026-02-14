import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
} from "@angular/core";
import { AlertComponent } from "../alert/alert.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";
import { SubscribeComponent } from "../../common/subscribe/subscribe.component";
import { MobileSidebarComponent } from "../../common/mobile-sidebar/mobile-sidebar.component";
import { PageScrollComponent } from "../page-scroll/page-scroll.component";

@Component({
  selector: "app-layout",
  imports: [
    AlertComponent,
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
    SubscribeComponent,
    MobileSidebarComponent,
    PageScrollComponent,
  ],
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements AfterViewInit, OnDestroy {
  isMenuOpen = false;
  private headerEl: HTMLElement | null = null;
  private rafId: number | null = null;
  constructor(private el: ElementRef) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngAfterViewInit() {
    this.headerEl = this.el.nativeElement.querySelector(".header-area");
  }

  ngOnDestroy() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }
  @HostListener("window:scroll", [])
  onScroll() {
    if (this.rafId !== null) return;
    this.rafId = requestAnimationFrame(() => {
      this.rafId = null;
      if (!this.headerEl) return;
      const scrollPosition = window.scrollY;
      if (scrollPosition < 1) {
        this.headerEl.classList.remove("sticky");
      } else {
        this.headerEl.classList.add("sticky");
      }
    });
  }
}
