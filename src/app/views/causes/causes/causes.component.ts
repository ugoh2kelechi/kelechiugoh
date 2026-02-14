import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { CAUSES } from "../../../data/causes";
import type { CauseItem } from "../../../models/cause.model";

@Component({
  selector: "app-causes",
  imports: [BreadcrumbComponent, CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: "./causes.component.html",
  styleUrls: ["./causes.component.scss"],
})
export class CausesComponent {
  causes: CauseItem[] = CAUSES;
}
