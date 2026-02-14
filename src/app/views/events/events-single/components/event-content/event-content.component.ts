import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { EVENTS } from "../../../../../data/events";
import type { EventItem } from "../../../../../models/event.model";

@Component({
  selector: "app-event-content",
  imports: [RouterLink, CommonModule, NgOptimizedImage],
  templateUrl: "./event-content.component.html",
  styleUrls: ["./event-content.component.scss"],
})
export class EventContentComponent {
  eventData: EventItem[] = EVENTS;
  hoverIndex = 0;
}
