import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { EVENTS } from "../../../../../data/events";
import type { EventItem } from "../../../../../models/event.model";

@Component({
  selector: "app-event-area",
  imports: [RouterLink, CommonModule, NgOptimizedImage],
  templateUrl: "./event-area.component.html",
  styleUrl: "./event-area.component.scss",
})
export class EventAreaComponent {
  eventAreaData: EventItem[] = EVENTS;
  hoverIndex: number = 0;
}
