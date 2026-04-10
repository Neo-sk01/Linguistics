import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/env-test", "/sentry-example-page"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: "https://imperiumlinguistics.com",
  };
}
