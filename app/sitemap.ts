import type { MetadataRoute } from "next";
import { HOST_URL } from "@/source/config";
import { CASE_STUDIES } from "@/source/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/projects", "/about", "/contact"];
  return [
    ...pages.map((path) => ({
      url: `${HOST_URL}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
    ...CASE_STUDIES.map((p) => ({
      url: `${HOST_URL}/projects/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
