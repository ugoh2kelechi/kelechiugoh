import { InjectionToken } from "@angular/core";

export type SanityPerspective = "published" | "previewDrafts";

export interface SanityConfig {
  projectId: string;
  dataset: string;
  apiVersion: string; // e.g. '2025-01-01'
  token?: string; // optional (only needed for private/drafts)
  useCdn?: boolean; // default true for public content
  perspective?: SanityPerspective; // default 'published'
}

export const SANITY_CONFIG = new InjectionToken<Partial<SanityConfig> | null>(
  "SANITY_CONFIG"
);
