<<<<<<< HEAD
import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CounterDirective } from "../../../../directives/counter.directive";
import { LatestCauseLinkService } from "../../../../service/latest-cause-link.service";

@Component({
  selector: "app-counter-area",
  imports: [CounterDirective, RouterLink],
  templateUrl: "./counter-area.component.html",
  styleUrl: "./counter-area.component.scss",
})
export class CounterAreaComponent implements OnInit {
  donateLink = "/cause-details";

  constructor(private latestCauseLink: LatestCauseLinkService) {}

  async ngOnInit(): Promise<void> {
    this.donateLink = await this.latestCauseLink.getLatestCauseLink();
  }
}
=======
import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CounterDirective } from "../../../../directives/counter.directive";
import { LatestCauseLinkService } from "../../../../service/latest-cause-link.service";

@Component({
  selector: "app-counter-area",
  imports: [CounterDirective, RouterLink],
  templateUrl: "./counter-area.component.html",
  styleUrl: "./counter-area.component.scss",
})
export class CounterAreaComponent implements OnInit {
  donateLink = "/cause-details";

  constructor(private latestCauseLink: LatestCauseLinkService) {}

  async ngOnInit(): Promise<void> {
    this.donateLink = await this.latestCauseLink.getLatestCauseLink();
  }
}
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
