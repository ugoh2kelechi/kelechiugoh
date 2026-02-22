import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { BreadcrumbComponent } from "../../../common/breadcrumb/breadcrumb.component";
import type { CauseItem } from "../../../models/cause.model";
import { SanityService } from "../../../service/sanity.service";

@Component({
  selector: "app-causes",
  imports: [BreadcrumbComponent, CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: "./causes.component.html",
  styleUrls: ["./causes.component.scss"],
})
export class CausesComponent implements OnInit {
  causes: CauseItem[] = [];
  currentPage = 1;
  pageSize = 6;
  isLoading = true;
  errorMessage = "";

  constructor(private sanity: SanityService) {}

  async ngOnInit(): Promise<void> {
    try {
      if (!this.sanity.isConfigured()) {
        this.causes = [];
        this.errorMessage = "No records found.";
        this.resetPagination();
        return;
      }

      try {
        const results = await this.sanity.allOfType<any>(
          "cause",
          "title, slug, description, category, status, donationLink, raised, goal, progress, mainImage, impactStats, gallery, donationGoal",
        );

        const fallbackImage = "assets/img/cause/vl-cause-1.1.png";

        this.causes = (results || []).map((r: any) => {
          const galleryImage = Array.isArray(r.gallery) ? r.gallery[0] : null;
          const imageUrl =
            this.sanity.imageUrl(r.mainImage) ||
            this.sanity.imageUrl(galleryImage) ||
            fallbackImage;

          const { raised, goal } = this.extractImpactNumbers(r);
          const resolvedRaised =
            typeof r.raised === "number" ? r.raised : raised;
          const resolvedGoal =
            typeof r.goal === "number" ? r.goal : (r.donationGoal ?? goal);
          const progress =
            typeof r.progress === "number"
              ? r.progress
              : resolvedGoal > 0
                ? Math.min(
                    100,
                    Math.round((resolvedRaised / resolvedGoal) * 100),
                  )
                : 0;

          return {
            slug: r.slug?.current ?? r._id,
            title: r.title || "",
            image: imageUrl,
            donationLink: r.donationLink || "/donation",
            progress,
            raised: resolvedRaised,
            goal: resolvedGoal,
            category: r.category || r.status || "Impact",
            description: r.description || "",
          } as CauseItem;
        });

        if (!this.causes.length) {
          this.errorMessage = "No records found.";
        } else {
          this.errorMessage = "";
        }
        this.resetPagination();
      } catch (err) {
        console.error("Failed to fetch causes from Sanity", err);
        this.causes = [];
        this.errorMessage = "No records found.";
        this.resetPagination();
      }
    } finally {
      this.isLoading = false;
    }
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.causes.length / this.pageSize));
  }

  get pagedCauses(): CauseItem[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.causes.slice(start, start + this.pageSize);
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

  private extractImpactNumbers(source: any): { raised: number; goal: number } {
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
      raised: this.parseNumber(raisedValue),
      goal: this.parseNumber(goalValue),
    };
  }

  private parseNumber(value: string): number {
    const cleaned = value.replace(/[^0-9.]/g, "");
    if (!cleaned) return 0;
    const parsed = Number(cleaned);
    return Number.isNaN(parsed) ? 0 : parsed;
  }
}
