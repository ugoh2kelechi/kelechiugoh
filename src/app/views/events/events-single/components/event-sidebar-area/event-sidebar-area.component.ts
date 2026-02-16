import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  DEFAULT_DONATION_AMOUNT,
  DONATION_AMOUNTS,
} from "../../../../../data/donation-amounts";

@Component({
  selector: "app-event-sidebar-area",
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: "./event-sidebar-area.component.html",
  styleUrls: ["./event-sidebar-area.component.scss"],
})
export class EventSidebarAreaComponent {
  @Input() event: {
    title: string;
    description: string;
    dateLabel: string;
    timeLabel: string;
    location: string;
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
