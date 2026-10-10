import type { MetadataRoute } from "next";
import { nav, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", ...nav.map((n) => n.href)].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
