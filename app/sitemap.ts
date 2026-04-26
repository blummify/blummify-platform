import type { MetadataRoute } from "next";

import { careerRoles } from "./careers/_data";
import { projects } from "./projects/_data";
import { serviceDetails } from "./services/_data";
import { siteUrl } from "./_lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/careers",
    "/projects",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const careerDetailRoutes = careerRoles.map((role) => ({
    url: `${siteUrl}/careers/${role.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const serviceDetailRoutes = serviceDetails.map((service) => ({
    url: `${siteUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...careerDetailRoutes, ...serviceDetailRoutes];
}
