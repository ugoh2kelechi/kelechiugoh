import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  DEFAULT_DONATION_AMOUNT,
  DONATION_AMOUNTS,
} from "../../../../../data/donation-amounts";

@Component({
  selector: "app-sidebar-cause",
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: "./sidebar-cause.component.html",
  styleUrls: ["./sidebar-cause.component.scss"],
})
export class SidebarCauseComponent {
  @Input() cause: {
    title: string;
    description: string;
    category: string;
    raised: number;
    goal: number;
    progress: number;
    image: string;
  } | null = null;
  @Input() isLoading = false;
  @Input() errorMessage = "";
  amounts = DONATION_AMOUNTS;
  selectedAmount: number = DEFAULT_DONATION_AMOUNT;

  selectAmount(amount: number) {
    this.selectedAmount = amount;
  }
}
