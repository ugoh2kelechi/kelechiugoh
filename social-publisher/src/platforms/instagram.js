const GRAPH_VERSION = process.env.META_GRAPH_VERSION || "v19.0";

export async function postToInstagram(payload) {
  const igBusinessId = process.env.INSTAGRAM_BUSINESS_ID;
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (!igBusinessId || !accessToken) {
    console.log("instagram skipped: missing INSTAGRAM_BUSINESS_ID or META_ACCESS_TOKEN");
    return;
  }

  if (!payload.imageUrl) {
    console.log("instagram skipped: missing imageUrl in payload");
    return;
  }

  const createUrl = `https://graph.facebook.com/${GRAPH_VERSION}/${igBusinessId}/media`;
  const publishUrl = `https://graph.facebook.com/${GRAPH_VERSION}/${igBusinessId}/media_publish`;

  const createParams = new URLSearchParams();
  createParams.set("image_url", payload.imageUrl);
  createParams.set("caption", payload.text || "");
  createParams.set("access_token", accessToken);

  const createRes = await fetch(createUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: createParams.toString(),
  });

  if (!createRes.ok) {
    const body = await createRes.text();
    throw new Error(`instagram create failed: ${createRes.status} ${body}`);
  }

  const createJson = await createRes.json();
  const creationId = createJson.id;
  if (!creationId) {
    throw new Error("instagram create failed: missing creation id");
  }

  const publishParams = new URLSearchParams();
  publishParams.set("creation_id", creationId);
  publishParams.set("access_token", accessToken);

  const publishRes = await fetch(publishUrl, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: publishParams.toString(),
  });

  if (!publishRes.ok) {
    const body = await publishRes.text();
    throw new Error(`instagram publish failed: ${publishRes.status} ${body}`);
  }
}
