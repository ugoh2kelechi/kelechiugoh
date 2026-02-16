import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  OnDestroy,
} from "@angular/core";
import { AlertComponent } from "../alert/alert.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";
import { SubscribeComponent } from "../../common/subscribe/subscribe.component";
import { MobileSidebarComponent } from "../../common/mobile-sidebar/mobile-sidebar.component";
import { PageScrollComponent } from "../page-scroll/page-scroll.component";
import { LatestCauseLinkService } from "../../service/latest-cause-link.service";

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
export class LayoutComponent implements AfterViewInit, OnInit, OnDestroy {
  isMenuOpen = false;
  private headerEl: HTMLElement | null = null;
  private rafId: number | null = null;
  donateLink = "/cause-details";

  constructor(
    private el: ElementRef,
    private latestCauseLink: LatestCauseLinkService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.donateLink = await this.latestCauseLink.getLatestCauseLink();
  }

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
