import type { NextConfig } from "next";

// The site is exported as static HTML (./out) and served by a Cloudflare
// Worker with static assets. See wrangler.jsonc and worker/index.ts.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
