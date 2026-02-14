import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";

@Component({
  selector: "app-donation",
  imports: [BreadcrumbComponent, NgOptimizedImage],
  templateUrl: "./donation.component.html",
  styleUrls: ["./donation.component.scss"],
})
export class DonationComponent {}
