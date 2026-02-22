import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import type { EventItem } from "../../../../../models/event.model";
import { SanityService } from "../../../../../service/sanity.service";

@Component({
  selector: "app-event-content",
  imports: [RouterLink, CommonModule, NgOptimizedImage],
  templateUrl: "./event-content.component.html",
  styleUrls: ["./event-content.component.scss"],
})
export class EventContentComponent implements OnInit {
  eventData: EventItem[] = [];
  hoverIndex = 0;

  constructor(private sanity: SanityService) {}

  async ngOnInit(): Promise<void> {
    if (!this.sanity.isConfigured()) {
      this.eventData = [];
      return;
    }

    try {
      const results = await this.sanity.allOfType<any>(
        "event",
        "title, slug, description, eventDate, eventTime, location, featuredImage",
      );
      const fallbackImage = "assets/img/event/vl-event-thumb-1.1.png";
      this.eventData = (results || []).map((r: any) => {
        const slug = r.slug?.current ?? r._id;
        const dateValue = r.eventDate ? new Date(r.eventDate) : null;
        const day = dateValue
          ? String(dateValue.getDate()).padStart(2, "0")
          : "";
        const month = dateValue
          ? dateValue.toLocaleString("en-US", { month: "short" }).toUpperCase()
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
    } catch (err) {
      console.error("Failed to fetch more events", err);
      this.eventData = [];
    }
  }
}
