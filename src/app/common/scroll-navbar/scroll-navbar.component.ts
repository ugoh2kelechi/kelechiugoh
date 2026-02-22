import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  HostListener,
  Input,
  OnDestroy,
} from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-scroll-navbar",
  imports: [RouterLink, CommonModule],
  templateUrl: "./scroll-navbar.component.html",
  styleUrls: ["./scroll-navbar.component.scss"],
})
export class ScrollNavbarComponent implements AfterViewInit, OnDestroy {
  @Input() logoImage: string = "";
  @Input() label: string = "";
  @Input() link: string = "#";
  @Input() btnClass: string = "";
  @Input() icon: string = "";
  @Input() btnParent: string = "";
  @Input() headerArea: string = "";
  @Input() headerElement: string = "";
  @Input() menuClass: string = "";
  @Input() container: boolean = false;
  @Input() buttonClass: string = "";

  activeLink: string = "about"; // The default active link
  isNavbarOpen = false;
  isSticky = false;
  @Input() navbarColor: boolean = false;

  private rafId: number | null = null;
  private sectionElements: HTMLElement[] = [];
  private readonly sectionIds = [
    "home",
    "services",
    "features",
    "about",
    "pricing",
    "testimonial",
    "blog",
    "contact",
  ];

  ngAfterViewInit() {
    this.cacheSections();
  }

  ngOnDestroy() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if (this.rafId !== null) return;
    this.rafId = requestAnimationFrame(() => {
      this.rafId = null;
      this.updateStickyState();
      this.updateActiveSection();
    });
  }
  setActiveLink(link: string): void {
    this.activeLink = link;
  }

  scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      this.activeLink = sectionId;
    }
  }

  private cacheSections(): void {
    this.sectionElements = this.sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
  }

  private updateStickyState(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isSticky = scrollTop >= 50;
  }

  private updateActiveSection(): void {
    for (const el of this.sectionElements) {
      const rect = el.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        this.activeLink = el.id;
        return;
      }
    }
  }
}
