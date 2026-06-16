import { env } from "@/lib/env";

export const siteConfig = {
  name: "UBG Group",
  tagline: "Engineering the Framework of Modern Enterprise.",
  description:
    "UBG Group delivers precision at scale across telecommunications, civil infrastructure, and corporate law.",
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
  ],
  links: {
    twitter: "",
    github: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
