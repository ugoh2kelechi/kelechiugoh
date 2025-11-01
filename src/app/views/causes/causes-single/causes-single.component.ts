import { Component } from "@angular/core";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { ContentCausesComponent } from "./components/content-causes/content-causes.component";
import { SidebarCauseComponent } from "./components/sidebar-cause/sidebar-cause.component";

@Component({
  selector: "app-causes-single",
  imports: [BreadcrumbComponent, ContentCausesComponent, SidebarCauseComponent],
  templateUrl: "./causes-single.component.html",
  styleUrls: ['./causes-single.component.scss'],
})
export class CausesSingleComponent {}
