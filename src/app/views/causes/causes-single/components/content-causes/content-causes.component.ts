import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { SanityService } from "../../../../../service/sanity.service";

interface CauseSummaryView {
  id?: string;
  slug?: string;
  image?: string;
  title: string;
  description?: string;
  category?: string;
  raised?: number;
  goal?: number;
  progress?: number;
}

@Component({
  selector: "app-content-causes",
  imports: [RouterLink, NgOptimizedImage, CommonModule],
  templateUrl: "./content-causes.component.html",
  styleUrls: ["./content-causes.component.scss"],
})
export class ContentCausesComponent implements OnInit {
  causes: CauseSummaryView[] = [];

  constructor(private sanity: SanityService) {}

  async ngOnInit(): Promise<void> {
    if (!this.sanity.isConfigured()) {
      this.causes = [];
      return;
    }

    try {
      const results = await this.sanity.allOfType<any>(
        "cause",
        "title, slug, description, category, status, raised, goal, progress, mainImage, gallery, donationGoal, impactStats",
      );
      const fallbackImage = "assets/img/cause/vl-cause-1.1.png";
      this.causes = (results || []).map((r: any) => {
        const galleryImage = Array.isArray(r.gallery) ? r.gallery[0] : null;
        const imageUrl =
          this.sanity.imageUrl(r.mainImage) ||
          this.sanity.imageUrl(galleryImage) ||
          fallbackImage;

        const { raised, goal } = extractImpactNumbers(r);
        const resolvedRaised = typeof r.raised === "number" ? r.raised : raised;
        const resolvedGoal =
          typeof r.goal === "number" ? r.goal : (r.donationGoal ?? goal);
        const resolvedProgress =
          typeof r.progress === "number"
            ? r.progress
            : resolvedGoal > 0
              ? Math.min(100, Math.round((resolvedRaised / resolvedGoal) * 100))
              : 0;

        return {
          id: r.slug?.current ?? r._id,
          slug: r.slug?.current ?? "",
          image: imageUrl,
          title: r.title || "",
          description: r.description || "",
          category: r.category || r.status || "Impact",
          raised: resolvedRaised,
          goal: resolvedGoal,
          progress: resolvedProgress,
        } as CauseSummaryView;
      });
    } catch (err) {
      console.error("Failed to fetch more causes", err);
      this.causes = [];
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
