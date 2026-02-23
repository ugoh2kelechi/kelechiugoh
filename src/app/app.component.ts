<<<<<<< HEAD
import { DOCUMENT } from "@angular/common";
import {
  Component,
  DestroyRef,
  Renderer2,
  RendererFactory2,
  inject,
} from "@angular/core";
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet,
} from "@angular/router";
import { filter } from "rxjs/operators";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { TitleService } from "./service/title.service";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "Kelechi K. Ugoh";
  isLoading: boolean = true;
  private titleService = inject(TitleService);
  private destroyRef = inject(DestroyRef);
  private document = inject(DOCUMENT);
  private renderer: Renderer2;

  constructor(private router: Router) {
    const rendererFactory = inject(RendererFactory2);
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnInit() {
    this.titleService.init();
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationStart | NavigationEnd =>
            event instanceof NavigationStart || event instanceof NavigationEnd,
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.isLoading = true;
        } else {
          this.updateFavicon(event.urlAfterRedirects);
          setTimeout(() => {
            this.isLoading = false;
          }, 200);
        }
      });
  }

  updateFavicon(route: string) {
    let faviconPath = "assets/img/logo/fav-logo1.png"; // Default favicon

    if (route.includes("/index")) {
      faviconPath = "assets/img/logo/fav-logo1.png";
    } else if (route.includes("/index-2")) {
      faviconPath = "assets/img/logo/fav-logo2.png";
    } else if (route.includes("/index-3")) {
      faviconPath = "assets/img/logo/fav-logo3.png";
    } else if (route.includes("/index-4")) {
      faviconPath = "assets/img/logo/fav-logo4.png";
    } else if (route.includes("/index-5")) {
      faviconPath = "assets/img/logo/fav-logo5.png";
    }

    // Find existing favicon element or create a new one
    let link = this.document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!link) {
      link = this.renderer.createElement("link");
      this.renderer.setAttribute(link, "rel", "icon");
      this.renderer.appendChild(this.document.head, link);
    }

    this.renderer.setAttribute(
      link,
      "href",
      faviconPath + `?v=${new Date().getTime()}`,
    ); // Cache busting
  }
}
=======
import { DOCUMENT } from "@angular/common";
import {
  Component,
  DestroyRef,
  Renderer2,
  RendererFactory2,
  inject,
} from "@angular/core";
import {
  NavigationEnd,
  NavigationStart,
  Router,
  RouterOutlet,
} from "@angular/router";
import { filter } from "rxjs/operators";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { TitleService } from "./service/title.service";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "Kelechi K. Ugoh";
  isLoading: boolean = true;
  private titleService = inject(TitleService);
  private destroyRef = inject(DestroyRef);
  private document = inject(DOCUMENT);
  private renderer: Renderer2;

  constructor(private router: Router) {
    const rendererFactory = inject(RendererFactory2);
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngOnInit() {
    this.titleService.init();
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationStart | NavigationEnd =>
            event instanceof NavigationStart || event instanceof NavigationEnd,
        ),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.isLoading = true;
        } else {
          this.updateFavicon(event.urlAfterRedirects);
          setTimeout(() => {
            this.isLoading = false;
          }, 200);
        }
      });
  }

  updateFavicon(route: string) {
    let faviconPath = "assets/img/logo/fav-logo1.png"; // Default favicon

    if (route.includes("/index")) {
      faviconPath = "assets/img/logo/fav-logo1.png";
    } else if (route.includes("/index-2")) {
      faviconPath = "assets/img/logo/fav-logo2.png";
    } else if (route.includes("/index-3")) {
      faviconPath = "assets/img/logo/fav-logo3.png";
    } else if (route.includes("/index-4")) {
      faviconPath = "assets/img/logo/fav-logo4.png";
    } else if (route.includes("/index-5")) {
      faviconPath = "assets/img/logo/fav-logo5.png";
    }

    // Find existing favicon element or create a new one
    let link = this.document.querySelector<HTMLLinkElement>("link[rel='icon']");
    if (!link) {
      link = this.renderer.createElement("link");
      this.renderer.setAttribute(link, "rel", "icon");
      this.renderer.appendChild(this.document.head, link);
    }

    this.renderer.setAttribute(
      link,
      "href",
      faviconPath + `?v=${new Date().getTime()}`,
    ); // Cache busting
  }
}
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
