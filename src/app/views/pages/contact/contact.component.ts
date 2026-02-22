import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";

@Component({
  selector: "app-contact",
  imports: [BreadcrumbComponent, NgOptimizedImage],
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent {}
