import type { MetadataRoute } from "next";

import { absoluteUrl, publicRoutes } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency:
      route === "/"
        ? "weekly"
        : route === "/transcription" || route === "/interpreting"
          ? "weekly"
          : "monthly",
    priority:
      route === "/"
        ? 1
        : route === "/transcription" || route === "/interpreting"
          ? 0.9
          : 0.7,
  }));
}
