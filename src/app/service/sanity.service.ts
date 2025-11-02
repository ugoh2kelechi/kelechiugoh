import { Inject, Injectable, Optional } from "@angular/core";
import {
  createClient,
  type SanityClient,
  type QueryParams,
} from "@sanity/client";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import { SANITY_CONFIG, type SanityConfig } from "./sanity.tokens";

@Injectable({ providedIn: "root" })
export class SanityService {
  private client: SanityClient | null = null;
  private builder: ReturnType<typeof imageUrlBuilder> | null = null;
  private currentCfg: Partial<SanityConfig> | null = null;

  constructor(
    @Optional() @Inject(SANITY_CONFIG) cfg: Partial<SanityConfig> | null
  ) {
    this.currentCfg = cfg ?? this.readRuntimeConfig();
    this.tryInitClient();
  }

  configure(cfg: SanityConfig): void {
    this.currentCfg = cfg;
    this.tryInitClient(true);
  }

  isConfigured(): boolean {
    const c = this.currentCfg;
    return !!c && !!c.projectId && !!c.dataset && !!c.apiVersion;
  }

  async fetch<T = unknown>(
    query: string,
    params?: QueryParams | Record<string, unknown>
  ): Promise<T> {
    if (!this.client) {
      throw new Error(
        "Sanity is not configured. Provide SANITY_CONFIG or window.__sanity"
      );
    }
    return this.client.fetch<T>(query, params as QueryParams);
  }

  async allOfType<T = unknown>(type: string, projection = "..."): Promise<T[]> {
    const q = `*[_type == "${type}"]|order(_createdAt desc){${projection}}`;
    return this.fetch<T[]>(q);
  }

  async single<T = unknown>(
    type: string,
    projection = "..."
  ): Promise<T | null> {
    const q = `*[_type == "${type}"][0]{${projection}}`;
    return this.fetch<T | null>(q);
  }

  imageUrl(source: any): string {
    if (!this.builder) return "";
    try {
      return this.builder.image(source).url();
    } catch {
      return "";
    }
  }

  private tryInitClient(force = false): void {
    if (!force && this.client) return;
    if (!this.isConfigured()) {
      this.client = null;
      this.builder = null;
      return;
    }
    const cfg = this.currentCfg as SanityConfig;
    this.client = createClient({
      projectId: cfg.projectId,
      dataset: cfg.dataset,
      apiVersion: cfg.apiVersion,
      token: cfg.token,
      useCdn: cfg.useCdn ?? true,
      perspective: cfg.perspective ?? "published",
    });
    this.builder = imageUrlBuilder(this.client);
  }

  // Allow runtime config via window.__sanity = { ... }
  private readRuntimeConfig(): Partial<SanityConfig> | null {
    try {
      const w = window as any;
      if (w && w.__sanity && typeof w.__sanity === "object") {
        return w.__sanity as Partial<SanityConfig>;
      }
    } catch {}
    return null;
  }
}
