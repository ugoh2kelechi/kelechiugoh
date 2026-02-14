import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { CAUSES } from "../../../data/causes";
import type { CauseItem } from "../../../models/cause.model";

@Component({
  selector: "app-causes",
  imports: [BreadcrumbComponent, CommonModule, NgOptimizedImage],
  templateUrl: "./causes.component.html",
  styleUrls: ["./causes.component.scss"],
})
export class CausesComponent {
  causes: CauseItem[] = CAUSES;
}
