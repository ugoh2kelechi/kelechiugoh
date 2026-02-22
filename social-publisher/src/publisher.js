import { buildPost } from "./postBuilder.js";
import { postToFacebook } from "./platforms/facebook.js";
import { postToInstagram } from "./platforms/instagram.js";
import { postToX } from "./platforms/x.js";
import { postToLinkedIn } from "./platforms/linkedin.js";
import { postToTikTok } from "./platforms/tiktok.js";
import { postToPinterest } from "./platforms/pinterest.js";

export async function publishToAll(doc) {
  const payload = buildPost(doc);

  await Promise.all([
    postToFacebook(payload),
    postToInstagram(payload),
    postToX(payload),
    postToLinkedIn(payload),
    postToTikTok(payload),
    postToPinterest(payload),
  ]);
}
