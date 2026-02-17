export function buildPost(doc) {
  const site = process.env.PUBLIC_SITE_URL || "";
  const slug = doc?.slug?.current ? String(doc.slug.current) : "";
  const imageUrl =
    doc?.imageUrl ||
    doc?.mainImageUrl ||
    doc?.featuredImageUrl ||
    doc?.coverImageUrl ||
    doc?.featuredImage?.asset?.url ||
    doc?.mainImage?.asset?.url ||
    doc?.coverImage?.asset?.url ||
    (Array.isArray(doc?.gallery) ? doc.gallery[0]?.asset?.url : "") ||
    "";

  let path = "";
  if (doc._type === "blogPost") {
    path = slug ? `/blog/${slug}` : "/blog";
  } else if (doc._type === "event") {
    path = slug ? `/event/${slug}` : "/event";
  } else if (doc._type === "cause") {
    path = slug ? `/causes/${slug}` : "/causes";
  }

  const url = site && path ? `${site}${path}` : "";

  const title = doc.title || "";
  const summary = doc.excerpt || doc.description || "";
  const text = [title, summary, url].filter(Boolean).join("\n\n");

  return {
    type: doc._type,
    title,
    summary,
    url,
    text,
    imageUrl,
  };
}
