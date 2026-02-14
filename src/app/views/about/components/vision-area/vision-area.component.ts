import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-vision-area",
  imports: [NgbNavModule, NgOptimizedImage],
  templateUrl: "./vision-area.component.html",
  styleUrl: "./vision-area.component.scss",
})
export class VisionAreaComponent {}
