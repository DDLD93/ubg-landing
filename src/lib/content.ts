export const navItems = [
  { href: "#portfolio", label: "Portfolio" },
  { href: "#nonitel", label: "Nonitel" },
  { href: "#blurinvestment", label: "Blurinvestment" },
  { href: "#contact", label: "Contact" },
] as const;

export const heroContent = {
  eyebrow: "UBG Group",
  headline: "Where networks, buildings, and legal structure meet.",
  subheadline:
    "Four specialized divisions — telecommunications, fiber infrastructure, construction, and corporate law — operating as one coordinated group for organizations that cannot afford gaps between the physical and the procedural.",
  ctaLabel: "View the portfolio",
  ctaHref: "#portfolio",
  secondaryCtaLabel: "Start a conversation",
  secondaryCtaHref: "#contact",
} as const;

export const trustContent = {
  statement:
    "One parent company. Four operating divisions. A single standard of execution.",
  pillars: [
    { label: "Divisions", value: "4" },
    { label: "Sectors covered", value: "Telecom · Fiber · Build · Law" },
    { label: "Operating model", value: "Integrated" },
    { label: "Engagement", value: "Enterprise-first" },
  ],
} as const;

export const portfolioContent = {
  title: "The portfolio",
  subtitle:
    "Each division holds deep sector expertise. Together, they remove the friction of coordinating separate vendors for connectivity, civil works, and compliance.",
  rows: [
    {
      id: "nonitel",
      subsidiary: "Nonitel",
      sector: "Telecommunications",
      coreFocus: "Carrier-grade networks and unified communications at scale.",
      href: "#nonitel",
    },
    {
      id: "blurinvestment",
      subsidiary: "Blurinvestment",
      sector: "Fiber & Infrastructure",
      coreFocus: "Licensed fiber deployment from trench to node.",
      href: "#blurinvestment",
    },
    {
      id: "elite-edge",
      subsidiary: "Elite Edge",
      sector: "Construction",
      coreFocus: "Commercial builds and long-cycle estate stewardship.",
      href: "#elite-edge",
    },
    {
      id: "dynamite-legal",
      subsidiary: "Dynamite Legal",
      sector: "Corporate Law",
      coreFocus: "Governance, compliance, and deal architecture.",
      href: "#dynamite-legal",
    },
  ],
} as const;

export type SubsidiaryDeepDive = {
  id: string;
  name: string;
  sector: string;
  headline: string;
  body: string;
  features: readonly string[];
  imageSlot: string;
  icon: string;
};

export const subsidiaryDeepDives: readonly SubsidiaryDeepDive[] = [
  {
    id: "nonitel",
    name: "Nonitel",
    sector: "Telecommunications",
    headline: "Connectivity built for throughput, not brochures.",
    body:
      "Nonitel designs and operates telecommunications infrastructure for environments where downtime is measurable in revenue. From enterprise SIP and cloud telephony to high-capacity data networks, the division engineers systems that stay stable under load.",
    features: [
      "Carrier-grade reliability across voice and data.",
      "Unified communications with real-time routing.",
      "Bandwidth architecture sized for growth curves.",
    ],
    imageSlot: "nonitel",
    icon: "/icons/nonitel.svg",
  },
  {
    id: "blurinvestment",
    name: "Blurinvestment",
    sector: "Fiber & Infrastructure",
    headline: "The physical layer, handled end to end.",
    body:
      "Blurinvestment holds multi-tier licensing for fiber optic deployment and manages the full installation lifecycle — trenching, cable routing, node placement, and ongoing maintenance. Smart cities and corporate campuses depend on this layer; Blurinvestment builds it.",
    features: [
      "Licensed fiber deployment across multiple tiers.",
      "Field installation from civil works to termination.",
      "Node management and bare-metal scaling.",
    ],
    imageSlot: "blurinvestment",
    icon: "/icons/blurinvestment.svg",
  },
  {
    id: "elite-edge",
    name: "Elite Edge",
    sector: "Construction & Estate",
    headline: "Structures that earn their footprint.",
    body:
      "Elite Edge translates architectural intent into delivered assets — commercial and industrial construction paired with estate management that protects yield over decades, not just at handover.",
    features: [
      "Commercial and industrial project delivery.",
      "Lifecycle facility and estate management.",
      "Efficiency-focused building standards.",
    ],
    imageSlot: "elite-edge",
    icon: "/icons/elite-edge.svg",
  },
  {
    id: "dynamite-legal",
    name: "Dynamite Legal",
    sector: "Corporate Law",
    headline: "Legal structure that moves at deal speed.",
    body:
      "Dynamite Legal provides the governance layer for complex, multi-jurisdictional operations. Telecom compliance, real estate transactions, M&A structuring, and dispute resolution — handled by counsel who understand how the other three divisions operate.",
    features: [
      "Contract architecture and dispute resolution.",
      "Sector-specific regulatory compliance.",
      "Corporate structuring for acquisitions and growth.",
    ],
    imageSlot: "dynamite-legal",
    icon: "/icons/dynamite-legal.svg",
  },
] as const;

export const processContent = {
  title: "How we engage",
  subtitle:
    "A deliberate sequence — assess, align, execute, and sustain — so every division contributes to the same outcome.",
  steps: [
    {
      number: "01",
      title: "Assess",
      description:
        "Map your infrastructure, legal exposure, and growth targets across all four domains in a single discovery phase.",
    },
    {
      number: "02",
      title: "Align",
      description:
        "Assign the right division — or combination — with shared timelines and one accountable project structure.",
    },
    {
      number: "03",
      title: "Execute",
      description:
        "Deploy networks, fiber, construction, and legal frameworks in parallel where overlap saves months.",
    },
    {
      number: "04",
      title: "Sustain",
      description:
        "Transition to ongoing management — estate stewardship, node maintenance, and compliance monitoring.",
    },
  ],
} as const;

export const finalCtaContent = {
  headline: "Ready to work with one group instead of four vendors?",
  subheadline:
    "Tell us what you're building. We'll show you which divisions engage — and how they coordinate.",
  ctaLabel: "Contact UBG Group",
  ctaHref: "#contact",
} as const;

export const footerContent = {
  contact: {
    address: "[HQ Address — to be confirmed]",
    email: "inquiries@ubggroup.com",
    phone: "+1 (000) 000-0000",
  },
  subsidiaries: [
    { href: "#nonitel", label: "Nonitel" },
    { href: "#blurinvestment", label: "Blurinvestment" },
    { href: "#elite-edge", label: "Elite Edge" },
    { href: "#dynamite-legal", label: "Dynamite Legal" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Licensing Directory" },
  ],
  copyright: "© 2026 UBG Group. All rights reserved.",
} as const;
