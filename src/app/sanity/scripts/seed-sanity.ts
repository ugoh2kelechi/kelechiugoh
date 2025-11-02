import SanityClient from "@sanity/client";
import slugify from "slugify";

async function main() {
  const projectId = process.env["SANITY_PROJECT_ID"] || "ofk5anw5";
  const dataset = process.env["SANITY_DATASET"] || "development";
  const apiVersion = process.env["SANITY_API_VERSION"] || "2025-01-01";
  const token = process.env["SANITY_TOKEN"]; // optional but required to create documents

  if (!projectId) {
    console.error(
      "SANITY_PROJECT_ID is required in the environment to run this script."
    );
    process.exit(1);
  }

  if (!token) {
    console.error(
      "SANITY_TOKEN is required to create documents. Set SANITY_TOKEN in env and try again."
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

  // Sample documents to create
  const author = {
    _type: "author",
    _id: "author-kester",
    name: "Kester Ugoh",
    slug: { _type: "slug", current: slugify("Kester Ugoh", { lower: true }) },
    bio: [
      {
        _type: "block",
        children: [{ _type: "span", text: "Founder and philanthropist." }],
      },
    ],
  };

  const blog = {
    _type: "blogPost",
    title: "Welcome to Our Blog",
    slug: {
      _type: "slug",
      current: slugify("Welcome to Our Blog", { lower: true }),
    },
    excerpt: "Introductory post",
    content: [
      {
        _type: "block",
        children: [{ _type: "span", text: "Hello world from our new blog." }],
      },
    ],
    author: { _type: "reference", _ref: "author-kester" },
    publishedAt: new Date().toISOString(),
    readTime: 2,
  };

  const event = {
    _type: "event",
    title: "Stand With Us Rally",
    slug: {
      _type: "slug",
      current: slugify("Stand With Us Rally", { lower: true }),
    },
    description: "A community rally.",
    eventDate: new Date().toISOString(),
    location: "City Hall",
    eventType: "rally",
  };

  const cause = {
    _type: "cause",
    title: "Emergency Relief Fund",
    slug: {
      _type: "slug",
      current: slugify("Emergency Relief Fund", { lower: true }),
    },
    description: "Help provide emergency relief.",
  };

  // Create or replace documents
  try {
    await client.createIfNotExists(author);
    await client.create(blog);
    await client.create(event);
    await client.create(cause);
    console.log("Seed completed.");
    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
}

main();
