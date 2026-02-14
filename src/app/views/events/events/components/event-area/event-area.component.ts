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
  currentPage = 1;
  pageSize = 6;

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.eventAreaData.length / this.pageSize));
  }

  get pagedEvents(): EventItem[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.eventAreaData.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.currentPage = page;
  }
}
