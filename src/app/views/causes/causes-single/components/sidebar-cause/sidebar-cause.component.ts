import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import {
  DEFAULT_DONATION_AMOUNT,
  DONATION_AMOUNTS,
} from "../../../../../data/donation-amounts";
import { LatestCauseLinkService } from "../../../../../service/latest-cause-link.service";

@Component({
  selector: "app-sidebar-cause",
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: "./sidebar-cause.component.html",
  styleUrls: ["./sidebar-cause.component.scss"],
})
export class SidebarCauseComponent implements OnInit {
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
  donateLink = "/cause-details";

  constructor(private latestCauseLink: LatestCauseLinkService) {}

  async ngOnInit(): Promise<void> {
    this.donateLink = await this.latestCauseLink.getLatestCauseLink();
  }

  selectAmount(amount: number) {
    this.selectedAmount = amount;
  }
}
