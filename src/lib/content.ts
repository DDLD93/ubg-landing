export const navItems = [
  { href: "#subsidiaries", label: "Subsidiaries" },
  { href: "#blurinvestment", label: "Infrastructure" },
  { href: "#dynamite-legal", label: "Corporate Governance" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroContent = {
  eyebrow: "MULTI-DISCIPLINARY CONGLOMERATE",
  headline: "Build the Foundation of the Modern Enterprise.",
  subheadline:
    "UBG Group provides the physical infrastructure, high-speed networks, and legal architecture required for aggressive corporate growth.",
  ctaLabel: "Explore Infrastructure",
  ctaHref: "#subsidiaries",
} as const;

export const glanceContent = {
  title: "UBG Group at a Glance",
  columns: ["Subsidiary", "Sector", "Core Focus"] as const,
  rows: [
    {
      subsidiary: "Nonitel",
      sector: "Telecommunications",
      coreFocus: "Next-gen networking (hosted by Blur Investment)",
    },
    {
      subsidiary: "Blur Investment",
      sector: "Fiber Optics & Infra",
      coreFocus: "Fiber installation & hosting infrastructure for Nonitel",
    },
    {
      subsidiary: "Elite Edge",
      sector: "Construction",
      coreFocus: "Commercial real estate and asset management",
    },
    {
      subsidiary: "Dynamite Legal",
      sector: "Corporate Law",
      coreFocus: "Enterprise compliance and legal architecture",
    },
  ],
} as const;

export type SubsidiaryVariant =
  | "dark-card"
  | "high-contrast"
  | "bright"
  | "serif";

export type SubsidiaryDeepDive = {
  id: string;
  name: string;
  sector: string;
  headline: string;
  body: string;
  features: readonly string[];
  variant: SubsidiaryVariant;
  imageSlot: string;
};

export const subsidiaryDeepDives: readonly SubsidiaryDeepDive[] = [
  {
    id: "nonitel",
    name: "Nonitel",
    sector: "Telecommunication",
    headline: "Zero-latency connectivity for global scale.",
    body: "Nonitel operates at the cutting edge of global telecommunications. Hosted by Blur Investment to establish and launch its next-generation services, we engineer robust, scalable network architectures that handle high-throughput data and real-time communication systems.",
    features: [
      "Carrier-grade network reliability.",
      "Unified communications and real-time gateways.",
      "Hosted and powered by Blur Investment's physical fiber infrastructure.",
    ],
    variant: "dark-card",
    imageSlot: "nonitel",
  },
  {
    id: "blurinvestment",
    name: "Blur Investment",
    sector: "Infrastructure & Fiber Optics",
    headline: "Deploy high-speed fiber infrastructure anywhere.",
    body: "Blur Investment holds comprehensive multi-tier licensing for the deployment and management of vast fiber optic networks. We handle the physical layer of the internet—executing complex trenching, high-density cable installation, and node management to power smart cities and corporate hubs. and host Nonitel as it launches its service.",
    features: [
      "Multi-layer fiber optic licensing and compliance.",
      "End-to-end physical infrastructure installation.",
      "Proudly hosting and launching Nonitel's core telecom network.",
    ],
    variant: "high-contrast",
    imageSlot: "blurinvestment",
  },
  {
    id: "elite-edge",
    name: "Elite Edge",
    sector: "Construction & Estate Management",
    headline: "Scale your physical footprint with precision.",
    body: "Elite Edge bridges the gap between ambitious architectural vision and flawless execution. We oversee commercial construction projects from ground-breaking to handover, paired with long-term estate management services that maximize asset yield and operational efficiency. Our motto: 'From Foundation to fortune'.",
    features: [
      "Commercial and industrial construction.",
      "Lifecycle estate and facility management.",
      "Sustainable, high-efficiency building practices.",
      "Motto: From Foundation to fortune.",
    ],
    variant: "bright",
    imageSlot: "elite-edge",
  },
  {
    id: "dynamite-legal",
    name: "Dynamite Legal",
    sector: "Corporate Law",
    headline: "Aggressive growth secured by ironclad legal architecture.",
    body: "Dynamite Legal acts as the corporate secretary for all UBG Group subsidiaries, coordinating regulator compliance across the group's companies. We provide centralized corporate governance, filings, and legal oversight so each subsidiary operates securely and in full compliance.",
    features: [
      "Group secretariat services for all UBG subsidiaries.",
      "Regulatory compliance across telecom, infrastructure, and construction.",
      "Corporate governance, filings, and legal operations oversight.",
    ],
    variant: "serif",
    imageSlot: "dynamite-legal",
  },
] as const;

export const footerContent = {
  contact: {
    address: "United Kingdom",
    email: "hello@ubggroup.com",
    phone: "Contact us via email for inquiries",
  },
  subsidiaries: [
    { href: "https://www.nonitel.ng/", label: "Nonitel" },
    { href: "#blurinvestment", label: "Blur Investment" },
    { href: "https://www.eliteedge.com.ng/", label: "Elite Edge" },
    { href: "#dynamite-legal", label: "Dynamite Legal" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Licensing Directory" },
  ],
  copyright: "© 2026 UBG Group. All rights reserved. Engineered for scale.",
} as const;
