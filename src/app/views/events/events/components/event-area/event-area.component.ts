import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import type { EventItem } from "../../../../../models/event.model";
import { SanityService } from "../../../../../service/sanity.service";

@Component({
  selector: "app-event-area",
  imports: [RouterLink, CommonModule, NgOptimizedImage],
  templateUrl: "./event-area.component.html",
  styleUrl: "./event-area.component.scss",
})
export class EventAreaComponent implements OnInit {
  eventAreaData: EventItem[] = [];
  hoverIndex: number = 0;
  currentPage = 1;
  pageSize = 6;
  isLoading = true;
  errorMessage = "";

  constructor(private sanity: SanityService) {}

  async ngOnInit(): Promise<void> {
    try {
      if (!this.sanity.isConfigured()) {
        this.eventAreaData = [];
        this.errorMessage = "No records found.";
        this.resetPagination();
        return;
      }

      try {
        const results = await this.sanity.allOfType<any>(
          "event",
          "title, slug, description, eventDate, eventTime, location, detailsUrl, featuredImage",
        );

        const fallbackImage = "assets/img/event/vl-event-thumb-1.1.png";

        this.eventAreaData = (results || []).map((r: any) => {
          const slug = r.slug?.current ?? r._id;
          const dateValue = r.eventDate ? new Date(r.eventDate) : null;
          const day = dateValue
            ? String(dateValue.getDate()).padStart(2, "0")
            : "";
          const month = dateValue
            ? dateValue
                .toLocaleString("en-US", { month: "short" })
                .toUpperCase()
            : "";
          const year = dateValue ? String(dateValue.getFullYear()) : "";

          return {
            date: day,
            month,
            year,
            eventTitle: r.title || "",
            eventTime: r.eventTime || r.description || "",
            location: r.location || "",
            detailsUrl: slug ? `/event-details/${slug}` : "/event-single",
            image: this.sanity.imageUrl(r.featuredImage) || fallbackImage,
          } as EventItem;
        });

        if (!this.eventAreaData.length) {
          this.errorMessage = "No records found.";
        } else {
          this.errorMessage = "";
        }
        this.resetPagination();
      } catch (err) {
        console.error("Failed to fetch events from Sanity", err);
        this.eventAreaData = [];
        this.errorMessage = "No records found.";
        this.resetPagination();
      }
    } finally {
      this.isLoading = false;
    }
  }

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

  private resetPagination(): void {
    this.currentPage = 1;
  }
}
