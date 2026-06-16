import { env } from "@/lib/env";

export const siteConfig = {
  name: "UBG Group",
  tagline: "Infrastructure, connectivity, and counsel — aligned under one roof.",
  description:
    "UBG Group unites telecommunications, fiber infrastructure, construction, and corporate law into a single operating structure for enterprises that need scale without fragmentation.",
  url: env.siteUrl,
  ogImage: "/opengraph-image",
  keywords: [
    "UBG Group",
    "telecommunications",
    "fiber optics",
    "construction",
    "corporate law",
    "infrastructure",
    "conglomerate",
    "Nonitel",
    "Blurinvestment",
    "Elite Edge",
    "Dynamite Legal",
  ],
  links: {
    twitter: "",
    github: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
