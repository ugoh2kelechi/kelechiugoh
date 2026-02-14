import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import {
  DEFAULT_DONATION_AMOUNT,
  DONATION_AMOUNTS,
} from "../../../../../data/donation-amounts";

@Component({
  selector: "app-sidebar-cause",
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./sidebar-cause.component.html",
  styleUrls: ["./sidebar-cause.component.scss"],
})
export class SidebarCauseComponent {
  amounts = DONATION_AMOUNTS;
  selectedAmount: number = DEFAULT_DONATION_AMOUNT;

  selectAmount(amount: number) {
    this.selectedAmount = amount;
  }
}
