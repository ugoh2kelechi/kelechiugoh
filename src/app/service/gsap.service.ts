<<<<<<< HEAD
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
=======
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
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
