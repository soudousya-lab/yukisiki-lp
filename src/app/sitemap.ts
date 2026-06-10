import type { MetadataRoute } from "next";

const BASE_URL = "https://yukisiki.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-13");

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/kogao`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/yugami`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/case`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/yugami/blog`,
      lastModified: new Date("2026-06-10"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // 2026-05-13 公開の5本
  const blogArticles: MetadataRoute.Sitemap = [
    "/yugami/blog/causes/8-habits-cause-face-distortion",
    "/yugami/blog/symptoms/eye-asymmetry",
    "/yugami/blog/symptoms/jaw-distortion",
    "/yugami/blog/symptoms/facial-asymmetry",
    "/yugami/blog/symptoms/cheekbone-jaw-asymmetry",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 2026-06-10 公開の5本
  const newBlogArticles: MetadataRoute.Sitemap = [
    "/yugami/blog/symptoms/mouth-corner-asymmetry",
    "/yugami/blog/symptoms/nose-asymmetry",
    "/yugami/blog/causes/posture-straight-neck",
    "/yugami/blog/causes/occlusion-face-distortion",
    "/yugami/blog/causes/botox-masseter-compensation",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date("2026-06-10"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogIndex, ...blogArticles, ...newBlogArticles];
}
