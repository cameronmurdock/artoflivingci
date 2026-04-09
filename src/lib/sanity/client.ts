import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID ?? "og7bielu",
  dataset: process.env.SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});
