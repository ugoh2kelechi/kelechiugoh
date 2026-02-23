<<<<<<< HEAD
import { Component, DestroyRef, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { SanityService } from "../../../service/sanity.service";
import { EventContentComponent } from "./components/event-content/event-content.component";
import { EventSidebarAreaComponent } from "./components/event-sidebar-area/event-sidebar-area.component";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

interface EventDetailView {
  title: string;
  description: string;
  dateLabel: string;
  timeLabel: string;
  location: string;
  image: string;
}

@Component({
  selector: "app-events-single",
  imports: [
    BreadcrumbComponent,
    EventContentComponent,
    EventSidebarAreaComponent,
  ],
  templateUrl: "./events-single.component.html",
  styleUrls: ["./events-single.component.scss"],
})
export class EventsSingleComponent implements OnInit {
  event: EventDetailView | null = null;
  isLoading = true;
  errorMessage = "";
  private destroyRef = inject(DestroyRef);

  constructor(
    private route: ActivatedRoute,
    private sanity: SanityService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const slug = params.get("slug");
        void this.loadEvent(slug);
      });
  }

  private async loadEvent(slug: string | null): Promise<void> {
    this.isLoading = true;
    this.errorMessage = "";
    this.event = null;

    if (!this.sanity.isConfigured()) {
      this.errorMessage = "No records found.";
      this.isLoading = false;
      return;
    }

    try {
      const query = slug
        ? `*[_type == "event" && (slug.current == $slug || _id == $slug)][0]{
            title,
            description,
            eventDate,
            eventTime,
            location,
            featuredImage
          }`
        : `*[_type == "event"]|order(eventDate desc, _createdAt desc)[0]{
            title,
            description,
            eventDate,
            eventTime,
            location,
            featuredImage
          }`;
      const result = await this.sanity.fetch<any>(
        query,
        slug ? { slug } : undefined,
      );

      if (!result) {
        this.errorMessage = "No records found.";
        return;
      }

      const dateLabel = result.eventDate
        ? new Date(result.eventDate).toLocaleDateString()
        : "";

      this.event = {
        title: result.title || "",
        description: result.description || "",
        dateLabel,
        timeLabel: result.eventTime || "",
        location: result.location || "",
        image: this.sanity.imageUrl(result.featuredImage),
      };
      this.errorMessage = "";
    } catch (err) {
      console.error("Failed to load event details", err);
      this.errorMessage = "No records found.";
      this.event = null;
    } finally {
      this.isLoading = false;
    }
  }
}
=======
import { Component, DestroyRef, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { SanityService } from "../../../service/sanity.service";
import { EventContentComponent } from "./components/event-content/event-content.component";
import { EventSidebarAreaComponent } from "./components/event-sidebar-area/event-sidebar-area.component";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

interface EventDetailView {
  title: string;
  description: string;
  dateLabel: string;
  timeLabel: string;
  location: string;
  image: string;
}

@Component({
  selector: "app-events-single",
  imports: [
    BreadcrumbComponent,
    EventContentComponent,
    EventSidebarAreaComponent,
  ],
  templateUrl: "./events-single.component.html",
  styleUrls: ["./events-single.component.scss"],
})
export class EventsSingleComponent implements OnInit {
  event: EventDetailView | null = null;
  isLoading = true;
  errorMessage = "";
  private destroyRef = inject(DestroyRef);

  constructor(
    private route: ActivatedRoute,
    private sanity: SanityService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => {
        const slug = params.get("slug");
        void this.loadEvent(slug);
      });
  }

  private async loadEvent(slug: string | null): Promise<void> {
    this.isLoading = true;
    this.errorMessage = "";
    this.event = null;

    if (!this.sanity.isConfigured()) {
      this.errorMessage = "No records found.";
      this.isLoading = false;
      return;
    }

    try {
      const query = slug
        ? `*[_type == "event" && (slug.current == $slug || _id == $slug)][0]{
            title,
            description,
            eventDate,
            eventTime,
            location,
            featuredImage
          }`
        : `*[_type == "event"]|order(eventDate desc, _createdAt desc)[0]{
            title,
            description,
            eventDate,
            eventTime,
            location,
            featuredImage
          }`;
      const result = await this.sanity.fetch<any>(
        query,
        slug ? { slug } : undefined,
      );

      if (!result) {
        this.errorMessage = "No records found.";
        return;
      }

      const dateLabel = result.eventDate
        ? new Date(result.eventDate).toLocaleDateString()
        : "";

      this.event = {
        title: result.title || "",
        description: result.description || "",
        dateLabel,
        timeLabel: result.eventTime || "",
        location: result.location || "",
        image: this.sanity.imageUrl(result.featuredImage),
      };
      this.errorMessage = "";
    } catch (err) {
      console.error("Failed to load event details", err);
      this.errorMessage = "No records found.";
      this.event = null;
    } finally {
      this.isLoading = false;
    }
  }
}
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
