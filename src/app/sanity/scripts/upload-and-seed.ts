import fs from "fs";
import path from "path";
import SanityClient from "@sanity/client";
import slugify from "slugify";

import { BLOG_POSTS } from "../../data/blog-posts";
import { EVENTS } from "../../data/events";
import { CAUSES } from "../../data/causes";

const projectId = process.env["SANITY_PROJECT_ID"] || "ofk5anw5";
const dataset = process.env["SANITY_DATASET"] || "development";
const apiVersion = process.env["SANITY_API_VERSION"] || "2025-01-01";
const token = process.env["SANITY_TOKEN"];

if (!projectId) {
  console.error("SANITY_PROJECT_ID is required in the environment.");
  process.exit(1);
}

if (!token) {
  console.error(
    "SANITY_TOKEN is required to upload assets and create documents.",
  );
  process.exit(1);
}

const client = SanityClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
});

const monthMap: Record<string, string> = {
  JAN: "January",
  FEB: "February",
  MAR: "March",
  APR: "April",
  MAY: "May",
  JUN: "June",
  JUL: "July",
  AUG: "August",
  SEP: "September",
  OCT: "October",
  NOV: "November",
  DEC: "December",
};

const uploadedAssets = new Map<string, string>();

function resolveAssetPath(assetPath: string): string {
  const normalized = assetPath.replace(/^\//, "");
  return path.join(process.cwd(), "public", normalized);
}

async function uploadImage(assetPath?: string): Promise<string | null> {
  if (!assetPath) return null;
  if (uploadedAssets.has(assetPath)) {
    return uploadedAssets.get(assetPath) || null;
  }

  const filePath = resolveAssetPath(assetPath);
  if (!fs.existsSync(filePath)) {
    console.warn(`Image not found: ${filePath}`);
    return null;
  }

  const stream = fs.createReadStream(filePath);
  const asset = await client.assets.upload("image", stream, {
    filename: path.basename(filePath),
  });

  uploadedAssets.set(assetPath, asset._id);
  return asset._id;
}

function toSlug(value: string): string {
  return slugify(value, { lower: true, strict: true });
}

async function ensureAuthor(name: string): Promise<string> {
  const id = `author-${toSlug(name)}`;
  await client.createIfNotExists({
    _id: id,
    _type: "author",
    name,
    slug: { _type: "slug", current: toSlug(name) },
  });
  return id;
}

async function seedBlogs() {
  for (const post of BLOG_POSTS) {
    const authorId = await ensureAuthor(post.author);
    const slug = toSlug(post.title);
    const imageAssetId = await uploadImage(post.image);

    await client.createIfNotExists({
      _id: `blogpost-${slug}`,
      _type: "blogPost",
      title: post.title,
      slug: { _type: "slug", current: slug },
      excerpt: post.description,
      content: [
        {
          _type: "block",
          style: "normal",
          children: [{ _type: "span", text: post.description }],
        },
      ],
      featuredImage: imageAssetId
        ? { _type: "image", asset: { _type: "reference", _ref: imageAssetId } }
        : undefined,
      author: { _type: "reference", _ref: authorId },
      publishedAt: post.date
        ? new Date(post.date).toISOString()
        : new Date().toISOString(),
      readTime: 2,
    });
  }
}

async function seedEvents() {
  for (const event of EVENTS) {
    const slug = toSlug(event.eventTitle);
    const imageAssetId = await uploadImage(event.image);
    const monthName = monthMap[event.month] || event.month;
    const dateIso = new Date(`${monthName} ${event.date}, ${event.year}`);

    await client.createIfNotExists({
      _id: `event-${slug}`,
      _type: "event",
      title: event.eventTitle,
      slug: { _type: "slug", current: slug },
      description: event.eventTime,
      eventDate: isNaN(dateIso.getTime())
        ? new Date().toISOString()
        : dateIso.toISOString(),
      location: event.location,
      eventType: "community",
      featuredImage: imageAssetId
        ? { _type: "image", asset: { _type: "reference", _ref: imageAssetId } }
        : undefined,
    });
  }
}

async function seedCauses() {
  for (const cause of CAUSES) {
    const slug = toSlug(cause.title);
    const imageAssetId = await uploadImage(cause.image);

    await client.createIfNotExists({
      _id: `cause-${slug}`,
      _type: "cause",
      title: cause.title,
      slug: { _type: "slug", current: slug },
      description: cause.description,
      status: "active",
      donationGoal: cause.goal,
      impactStats: [
        { _type: "object", label: "Raised", value: `$${cause.raised}` },
        { _type: "object", label: "Goal", value: `$${cause.goal}` },
      ],
      gallery: imageAssetId
        ? [
            {
              _type: "image",
              asset: { _type: "reference", _ref: imageAssetId },
            },
          ]
        : [],
    });
  }
}

async function main() {
  console.log("Uploading assets and seeding Sanity...");
  await seedBlogs();
  await seedEvents();
  await seedCauses();
  console.log("Seed completed.");
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
