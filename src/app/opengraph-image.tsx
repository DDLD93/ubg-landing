import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const PAPER = "#f1ece2";
const INK = "#1b1f1c";
const TEAL = "#1c6b61";
const MUTED = "#6b7169";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px",
          background: PAPER,
          color: INK,
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          <span>UBG Group</span>
          <span>Drawing UBG-001 · Rev C</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              fontFamily: "sans-serif",
              maxWidth: 1000,
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{ display: "flex", height: 6, width: 120, background: TEAL, marginTop: 36 }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: 40,
            fontSize: 24,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          <span style={{ color: TEAL }}>A</span>
          <span>Nonitel</span>
          <span style={{ color: TEAL }}>B</span>
          <span>Blurinvestment</span>
          <span style={{ color: TEAL }}>C</span>
          <span>Elite Edge</span>
          <span style={{ color: TEAL }}>D</span>
          <span>Dynamite Legal</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
