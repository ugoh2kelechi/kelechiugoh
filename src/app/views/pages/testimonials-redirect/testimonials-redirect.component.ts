import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-testimonials-redirect",
  template: "",
})
export class TestimonialsRedirectComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(["/about"], {
      fragment: "testimonials",
      replaceUrl: true,
    });
  }
}
