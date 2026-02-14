// title.service.ts
import { Injectable } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { filter } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class TitleService {
  constructor(
    private titleService: Title,
    private meta: Meta,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  init(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTitle();
      });
  }

  private updateTitle(): void {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }

    const data = route.snapshot.data;
    if (data["title"]) {
      this.titleService.setTitle(String(data["title"]));
    }
    if (data["description"]) {
      this.meta.updateTag({
        name: "description",
        content: String(data["description"]),
      });
    }
  }
}
