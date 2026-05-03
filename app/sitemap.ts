import type { MetadataRoute } from "next";

import { PROFILE_WEBSITE_URL } from "@/constants";
import { projects } from "@/data/projects";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = PROFILE_WEBSITE_URL;
  const routes = ["", "/projects", "/contact"].map((p) => ({
    url: base + p,
    lastModified: new Date(),
  }));
  const projectRoutes = projects.map((p) => ({
    url: `${base}/projects/${p._id}`,
    lastModified: new Date(),
    images: p.images.map((image) => `${base}${image}`),
  }));
  return [...routes, ...projectRoutes];
}
