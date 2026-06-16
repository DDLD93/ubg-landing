export const navItems = [
  { href: "#register", label: "Register" },
  { href: "#nonitel", label: "Subsidiaries" },
  { href: "#framework", label: "Framework" },
  { href: "#contact", label: "Contact" },
] as const;

// Drawing-sheet metadata used by the drafting frame and title block.
export const sheetMeta = {
  drawingNo: "UBG-001",
  revision: "C",
  scale: "1:1",
  discipline: "GROUP STRUCTURE",
} as const;

export const heroContent = {
  eyebrow: "Multi-disciplinary group · Sheet 01 / 05",
  headline: ["Engineering the framework", "of modern enterprise."],
  subheadline:
    "UBG Group holds and operates four specialist companies — the signal, the conduit, the structure, and the law. Each is run to its own standard. Together they let an enterprise be built end to end, by one accountable group.",
  ctaLabel: "Walk the structure",
  ctaHref: "#register",
  secondaryLabel: "Partner with us",
  secondaryHref: "#contact",
  // Annotations rendered around the hero truss like dimension callouts.
  callouts: [
    { node: "A", label: "Signal", entity: "Nonitel" },
    { node: "B", label: "Conduit", entity: "Blurinvestment" },
    { node: "C", label: "Structure", entity: "Elite Edge" },
    { node: "D", label: "Counsel", entity: "Dynamite Legal" },
  ],
} as const;

// The "register" replaces the old at-a-glance table: a drawing schedule of holdings.
export const registerContent = {
  eyebrow: "Schedule of holdings",
  title: "Four companies, one load path.",
  intro:
    "A conglomerate is only as sound as the joints between its parts. Read the register the way you would a structural schedule — entity, discipline, and the load it carries.",
  columns: ["Ref", "Subsidiary", "Discipline", "Carries"] as const,
  rows: [
    {
      ref: "A",
      glyph: "nonitel",
      subsidiary: "Nonitel",
      discipline: "Telecommunications",
      carries: "Networks, voice, and real-time data — the signal layer.",
    },
    {
      ref: "B",
      glyph: "blurinvestment",
      subsidiary: "Blurinvestment",
      discipline: "Fibre & infrastructure",
      carries: "Licensed fibre routes and the physical plant beneath them.",
    },
    {
      ref: "C",
      glyph: "elite-edge",
      subsidiary: "Elite Edge",
      discipline: "Construction & estate",
      carries: "Commercial builds and the assets they become.",
    },
    {
      ref: "D",
      glyph: "dynamite-legal",
      subsidiary: "Dynamite Legal",
      discipline: "Corporate law",
      carries: "Contracts, compliance, and the structure that holds.",
    },
  ],
} as const;

export type GlyphKey =
  | "nonitel"
  | "blurinvestment"
  | "elite-edge"
  | "dynamite-legal";

export type SubsidiaryDeepDive = {
  id: string;
  plate: string;
  ref: string;
  name: string;
  sector: string;
  headline: string;
  body: string;
  features: readonly string[];
  glyph: GlyphKey;
};

export const subsidiaryDeepDives: readonly SubsidiaryDeepDive[] = [
  {
    id: "nonitel",
    plate: "02 / 05",
    ref: "A",
    name: "Nonitel",
    sector: "Telecommunications",
    glyph: "nonitel",
    headline: "The signal that everything else rides on.",
    body: "Nonitel builds and runs the networks underneath modern communication — carrier-grade voice, real-time data, and the gateways between them. We design for the worst day, not the demo: routes that reconverge, capacity that holds at peak, and uptime measured against contracts rather than promises.",
    features: [
      "Carrier-grade routing with measured, contracted uptime.",
      "Unified voice, SIP, and cloud telephony for enterprise.",
      "Bandwidth that scales without re-architecting the network.",
    ],
  },
  {
    id: "blurinvestment",
    plate: "03 / 05",
    ref: "B",
    name: "Blurinvestment",
    sector: "Fibre & Infrastructure",
    glyph: "blurinvestment",
    headline: "We lay the ground the network stands on.",
    body: "Blurinvestment holds the multi-tier licences to deploy and operate fibre at scale, and does the unglamorous physical work that makes connectivity real — route survey, trenching, high-density installation, and the node management that keeps it lit. This is the layer most providers rent. We own it.",
    features: [
      "Multi-tier fibre licensing, held and maintained in-house.",
      "Route survey through to high-density installation.",
      "Node management and maintenance across the live plant.",
    ],
  },
  {
    id: "elite-edge",
    plate: "04 / 05",
    ref: "C",
    name: "Elite Edge",
    sector: "Construction & Estate",
    glyph: "elite-edge",
    headline: "From breaking ground to the yield it returns.",
    body: "Elite Edge takes commercial projects from first survey to handover, then stays to manage what we built. Construction and estate management under one roof means the people who set the foundations are accountable for how the asset performs a decade later — so decisions are made for the lifecycle, not the deadline.",
    features: [
      "Commercial and industrial construction, ground to handover.",
      "Lifecycle estate and facility management of the finished asset.",
      "High-efficiency methods chosen for cost over the long run.",
    ],
  },
  {
    id: "dynamite-legal",
    plate: "05 / 05",
    ref: "D",
    name: "Dynamite Legal",
    sector: "Corporate Law",
    glyph: "dynamite-legal",
    headline: "The structure that keeps the rest standing.",
    body: "Dynamite Legal is the counsel that lets the other three move quickly without coming apart. Corporate governance, sector compliance for telecoms and construction, real-estate work, and the contracts that hold deals together. We treat law as load-bearing — drawn early, sized correctly, and built to carry growth rather than just survive a dispute.",
    features: [
      "Contract architecture and high-stakes dispute resolution.",
      "Regulatory compliance across telecoms and construction.",
      "Mergers, acquisitions, and clean corporate structuring.",
    ],
  },
] as const;

export const frameworkContent = {
  eyebrow: "The case for one group",
  title: "Most deals fail at the joints.",
  body: "A network is only as good as the fibre it runs on; the fibre is only as good as the build that houses it; the build is only as good as the contracts that govern it. Hand those four to four vendors and the seams become someone else's problem. Hand them to UBG and they become ours.",
  ctaLabel: "Partner with us",
  ctaHref: "#contact",
} as const;

export const footerContent = {
  // Rendered as an architectural title block.
  titleBlock: {
    client: "UBG Group",
    project: "Framework of Modern Enterprise",
    contactEmail: "inquiries@ubggroup.com",
    contactPhone: "+1 (000) 000-0000",
    address: "[HQ address — to be confirmed]",
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
  copyright: "© 2026 UBG Group. Drawn to carry load.",
} as const;
