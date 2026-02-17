import "dotenv/config";
import express from "express";
import { z } from "zod";
import { publishToAll } from "./publisher.js";

const app = express();

app.use(express.json({ limit: "2mb" }));

const sanityPayloadSchema = z
  .object({
    _type: z.string(),
    _id: z.string().optional(),
    title: z.string().optional(),
    slug: z.object({ current: z.string() }).optional(),
    excerpt: z.string().optional(),
    description: z.string().optional(),
    publishedAt: z.string().optional(),
    eventDate: z.string().optional(),
    eventTime: z.string().optional(),
    imageUrl: z.string().url().optional(),
    mainImageUrl: z.string().url().optional(),
    featuredImageUrl: z.string().url().optional(),
    coverImageUrl: z.string().url().optional(),
    featuredImage: z.any().optional(),
    mainImage: z.any().optional(),
    coverImage: z.any().optional(),
    gallery: z.any().optional(),
  })
  .passthrough();

app.post("/webhooks/sanity", async (req, res) => {
  const secret = process.env.WEBHOOK_SECRET;
  if (secret) {
    const header = req.header("x-webhook-secret");
    if (!header || header !== secret) {
      return res.status(401).json({ ok: false, error: "Unauthorized" });
    }
  }

  const parsed = sanityPayloadSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ ok: false, error: "Invalid payload" });
  }

  try {
    if (parsed.data._id?.startsWith("drafts.")) {
      return res.json({ ok: true, skipped: "draft" });
    }
    await publishToAll(parsed.data);
    return res.json({ ok: true });
  } catch (error) {
    console.error("Publish failed", error);
    return res.status(500).json({ ok: false, error: "Publish failed" });
  }
});

app.get("/health", (_req, res) => res.json({ ok: true }));

const port = Number(process.env.PORT || 8787);
app.listen(port, () => {
  console.log(`social-publisher listening on ${port}`);
});
