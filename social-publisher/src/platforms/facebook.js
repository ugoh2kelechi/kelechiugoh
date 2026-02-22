const GRAPH_VERSION = process.env.META_GRAPH_VERSION || "v19.0";

export async function postToFacebook(payload) {
  const pageId = process.env.META_PAGE_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!pageId || !accessToken) {
    console.log("facebook skipped: missing META_PAGE_ID or META_ACCESS_TOKEN");
    return;
  }

  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${pageId}/feed`;

  const params = new URLSearchParams();
  if (payload.text) params.set("message", payload.text);
  if (payload.url) params.set("link", payload.url);
  params.set("access_token", accessToken);

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`facebook publish failed: ${res.status} ${body}`);
  }
}
