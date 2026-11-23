import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { styles } from "@/lib/styles";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const fixed = ["", "/art", "/journal", "/app", "/about", "/disclosure", "/privacy"].map((p) => ({
    url: `${site.url}${p}`,
    lastModified: now,
  }));
  return [
    ...fixed,
    ...styles.map((s) => ({ url: `${site.url}/art/${s.slug}`, lastModified: now, changeFrequency: "daily" as const })),
    ...posts.map((p) => ({ url: `${site.url}/journal/${p.slug}`, lastModified: new Date(p.date) })),
  ];
}
