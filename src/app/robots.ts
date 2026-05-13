import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://yukisiki.com/sitemap.xml",
    host: "https://yukisiki.com",
  };
}
