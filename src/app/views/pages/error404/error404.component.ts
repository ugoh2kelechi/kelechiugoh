import { Component } from "@angular/core";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-error404",
  imports: [BreadcrumbComponent, RouterLink],
  templateUrl: "./error404.component.html",
  styleUrls: ['./error404.component.scss'],
})
export class Error404Component {}
