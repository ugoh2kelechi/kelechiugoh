import { Component, OnInit } from "@angular/core";
import { CounterDirective } from "../../../../directives/counter.directive";
import { RouterLink } from "@angular/router";
import { LatestCauseLinkService } from "../../../../service/latest-cause-link.service";

@Component({
  selector: "app-counter",
  imports: [CounterDirective, RouterLink],
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.scss"],
})
export class CounterComponent implements OnInit {
  donateLink = "/cause-details";

  constructor(private latestCauseLink: LatestCauseLinkService) {}

  async ngOnInit(): Promise<void> {
    this.donateLink = await this.latestCauseLink.getLatestCauseLink();
  }
}
