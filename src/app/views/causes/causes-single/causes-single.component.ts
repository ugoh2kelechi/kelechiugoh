<<<<<<< HEAD
import { Component, DestroyRef, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { SanityService } from "../../../service/sanity.service";
import { ContentCausesComponent } from "./components/content-causes/content-causes.component";
import { SidebarCauseComponent } from "./components/sidebar-cause/sidebar-cause.component";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

interface CauseDetailView {
  title: string;
  description: string;
  category: string;
  raised: number;
  goal: number;
  progress: number;
  image: string;
}

@Component({
  selector: "app-causes-single",
  imports: [BreadcrumbComponent, ContentCausesComponent, SidebarCauseComponent],
  templateUrl: "./causes-single.component.html",
  styleUrls: ["./causes-single.component.scss"],
})
export class CausesSingleComponent implements OnInit {
  cause: CauseDetailView | null = null;
  causeSlug = "";
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
        void this.loadCause(slug);
      });
  }

  private async loadCause(slug: string | null): Promise<void> {
    this.isLoading = true;
    this.errorMessage = "";
    this.cause = null;

    if (!this.sanity.isConfigured()) {
      this.errorMessage = "No records found.";
      this.isLoading = false;
      return;
    }

    try {
      const query = slug
        ? `*[_type == "cause" && (slug.current == $slug || _id == $slug)][0]{
            title,
            slug,
            description,
            category,
            status,
            raised,
            goal,
            progress,
            donationGoal,
            mainImage,
            gallery,
            impactStats
          }`
        : `*[_type == "cause"]|order(_createdAt desc)[0]{
            title,
            slug,
            description,
            category,
            status,
            raised,
            goal,
            progress,
            donationGoal,
            mainImage,
            gallery,
            impactStats
          }`;
      const result = await this.sanity.fetch<any>(
        query,
        slug ? { slug } : undefined,
      );

      if (!result) {
        this.errorMessage = "No records found.";
        return;
      }

      const galleryImage = Array.isArray(result.gallery)
        ? result.gallery[0]
        : null;
      const imageUrl =
        this.sanity.imageUrl(result.mainImage) ||
        this.sanity.imageUrl(galleryImage) ||
        "assets/img/cause/vl-cause-learge-thumb.png";

      const { raised, goal } = extractImpactNumbers(result);
      const resolvedRaised =
        typeof result.raised === "number" ? result.raised : raised;
      const resolvedGoal =
        typeof result.goal === "number"
          ? result.goal
          : (result.donationGoal ?? goal);
      const resolvedProgress =
        typeof result.progress === "number"
          ? result.progress
          : resolvedGoal > 0
            ? Math.min(100, Math.round((resolvedRaised / resolvedGoal) * 100))
            : 0;

      this.causeSlug = result.slug?.current ?? result._id ?? slug ?? "";
      this.cause = {
        title: result.title || "",
        description: result.description || "",
        category: result.category || result.status || "Impact",
        raised: resolvedRaised,
        goal: resolvedGoal,
        progress: resolvedProgress,
        image: imageUrl,
      };
      this.errorMessage = "";
    } catch (err) {
      console.error("Failed to load cause details", err);
      this.errorMessage = "No records found.";
      this.cause = null;
    } finally {
      this.isLoading = false;
    }
  }
}

function extractImpactNumbers(source: any): { raised: number; goal: number } {
  const stats = Array.isArray(source?.impactStats) ? source.impactStats : [];
  const lookup = new Map<string, string>();

  for (const stat of stats) {
    const label = String(stat?.label || "").toLowerCase();
    const value = String(stat?.value || "");
    if (label) {
      lookup.set(label, value);
    }
  }

  const raisedValue =
    lookup.get("raised") ||
    lookup.get("amount raised") ||
    lookup.get("donated") ||
    "";
  const goalValue = lookup.get("goal") || lookup.get("target") || "";

  return {
    raised: parseNumber(raisedValue),
    goal: parseNumber(goalValue),
  };
}

function parseNumber(value: string): number {
  const cleaned = value.replace(/[^0-9.]/g, "");
  if (!cleaned) return 0;
  const parsed = Number(cleaned);
  return Number.isNaN(parsed) ? 0 : parsed;
}
=======
import { Component, DestroyRef, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import { SanityService } from "../../../service/sanity.service";
import { ContentCausesComponent } from "./components/content-causes/content-causes.component";
import { SidebarCauseComponent } from "./components/sidebar-cause/sidebar-cause.component";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

interface CauseDetailView {
  title: string;
  description: string;
  category: string;
  raised: number;
  goal: number;
  progress: number;
  image: string;
}

@Component({
  selector: "app-causes-single",
  imports: [BreadcrumbComponent, ContentCausesComponent, SidebarCauseComponent],
  templateUrl: "./causes-single.component.html",
  styleUrls: ["./causes-single.component.scss"],
})
export class CausesSingleComponent implements OnInit {
  cause: CauseDetailView | null = null;
  causeSlug = "";
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
        void this.loadCause(slug);
      });
  }

  private async loadCause(slug: string | null): Promise<void> {
    this.isLoading = true;
    this.errorMessage = "";
    this.cause = null;

    if (!this.sanity.isConfigured()) {
      this.errorMessage = "No records found.";
      this.isLoading = false;
      return;
    }

    try {
      const query = slug
        ? `*[_type == "cause" && (slug.current == $slug || _id == $slug)][0]{
            title,
            slug,
            description,
            category,
            status,
            raised,
            goal,
            progress,
            donationGoal,
            mainImage,
            gallery,
            impactStats
          }`
        : `*[_type == "cause"]|order(_createdAt desc)[0]{
            title,
            slug,
            description,
            category,
            status,
            raised,
            goal,
            progress,
            donationGoal,
            mainImage,
            gallery,
            impactStats
          }`;
      const result = await this.sanity.fetch<any>(
        query,
        slug ? { slug } : undefined,
      );

      if (!result) {
        this.errorMessage = "No records found.";
        return;
      }

      const galleryImage = Array.isArray(result.gallery)
        ? result.gallery[0]
        : null;
      const imageUrl =
        this.sanity.imageUrl(result.mainImage) ||
        this.sanity.imageUrl(galleryImage) ||
        "assets/img/cause/vl-cause-learge-thumb.png";

      const { raised, goal } = extractImpactNumbers(result);
      const resolvedRaised =
        typeof result.raised === "number" ? result.raised : raised;
      const resolvedGoal =
        typeof result.goal === "number"
          ? result.goal
          : (result.donationGoal ?? goal);
      const resolvedProgress =
        typeof result.progress === "number"
          ? result.progress
          : resolvedGoal > 0
            ? Math.min(100, Math.round((resolvedRaised / resolvedGoal) * 100))
            : 0;

      this.causeSlug = result.slug?.current ?? result._id ?? slug ?? "";
      this.cause = {
        title: result.title || "",
        description: result.description || "",
        category: result.category || result.status || "Impact",
        raised: resolvedRaised,
        goal: resolvedGoal,
        progress: resolvedProgress,
        image: imageUrl,
      };
      this.errorMessage = "";
    } catch (err) {
      console.error("Failed to load cause details", err);
      this.errorMessage = "No records found.";
      this.cause = null;
    } finally {
      this.isLoading = false;
    }
  }
}

function extractImpactNumbers(source: any): { raised: number; goal: number } {
  const stats = Array.isArray(source?.impactStats) ? source.impactStats : [];
  const lookup = new Map<string, string>();

  for (const stat of stats) {
    const label = String(stat?.label || "").toLowerCase();
    const value = String(stat?.value || "");
    if (label) {
      lookup.set(label, value);
    }
  }

  const raisedValue =
    lookup.get("raised") ||
    lookup.get("amount raised") ||
    lookup.get("donated") ||
    "";
  const goalValue = lookup.get("goal") || lookup.get("target") || "";

  return {
    raised: parseNumber(raisedValue),
    goal: parseNumber(goalValue),
  };
}

function parseNumber(value: string): number {
  const cleaned = value.replace(/[^0-9.]/g, "");
  if (!cleaned) return 0;
  const parsed = Number(cleaned);
  return Number.isNaN(parsed) ? 0 : parsed;
}
>>>>>>> 3460d3272a206d44f28fcf2012211c5cd6093c76
