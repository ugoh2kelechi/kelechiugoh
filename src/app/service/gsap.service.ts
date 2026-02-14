import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root",
})
export class GsapService {
  constructor() {}

  animateReveal(container: HTMLElement): void {
    if (!container) {
      return;
    }

    container.style.visibility = "visible";
    container.style.opacity = "1";
  }
}
