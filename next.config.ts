import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/yugami/blog/:category/:slug",
        destination: "/yugami/blog/:category/:slug.html",
      },
    ];
  },
};

export default nextConfig;
