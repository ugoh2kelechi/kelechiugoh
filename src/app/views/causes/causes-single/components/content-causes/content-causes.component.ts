import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-content-causes",
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: "./content-causes.component.html",
  styleUrls: ["./content-causes.component.scss"],
})
export class ContentCausesComponent {}
