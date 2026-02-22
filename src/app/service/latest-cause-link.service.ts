import { Injectable } from "@angular/core";
import { SanityService } from "./sanity.service";

@Injectable({ providedIn: "root" })
export class LatestCauseLinkService {
  private latestLinkPromise: Promise<string> | null = null;

  constructor(private sanity: SanityService) {}

  async getLatestCauseLink(): Promise<string> {
    if (this.latestLinkPromise) {
      return this.latestLinkPromise;
    }

    this.latestLinkPromise = this.resolveLatestCauseLink();
    return this.latestLinkPromise;
  }

  private async resolveLatestCauseLink(): Promise<string> {
    if (!this.sanity.isConfigured()) {
      return "/cause-details";
    }

    try {
      const result = await this.sanity.fetch<{
        slug?: string;
        _id?: string;
      } | null>(
        `*[_type == "cause"]|order(_createdAt desc)[0]{
          "slug": slug.current,
          _id
        }`,
      );
      const slug = result?.slug || result?._id;
      return slug ? `/cause-details/${slug}` : "/cause-details";
    } catch (err) {
      console.error("Failed to resolve latest cause link", err);
      return "/cause-details";
    }
  }
}
