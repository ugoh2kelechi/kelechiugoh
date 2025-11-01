import { Component } from "@angular/core";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { causes } from "../data";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-causes",
  imports: [BreadcrumbComponent, CommonModule],
  templateUrl: "./causes.component.html",
  styleUrls: ['./causes.component.scss'],
})
export class CausesComponent {
  causes = causes;
}
