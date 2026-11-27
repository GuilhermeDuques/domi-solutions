import type { MetadataRoute } from "next";
import { projects } from "./projetos/data";
import { absoluteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const home = absoluteUrl("/");
  if (!home) return [];

  return [
    { url: home, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...projects.map((project) => ({
      url: absoluteUrl(`/projetos/${project.slug}`)!,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
