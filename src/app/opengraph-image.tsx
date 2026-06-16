import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          padding: "80px",
          background: "linear-gradient(145deg, #FAFAF8 0%, #F5F3EF 55%, #EDE9E3 100%)",
          color: "#2C3E50",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#8B9AAB",
            marginBottom: 28,
          }}
        >
          UBG Group
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            maxWidth: 900,
            marginBottom: 28,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 400,
            color: "#5A6A7A",
            maxWidth: 820,
            lineHeight: 1.45,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 60,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "rgba(196, 181, 160, 0.25)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 160,
            top: 80,
            width: 120,
            height: 120,
            borderRadius: "50%",
            background: "rgba(139, 154, 171, 0.15)",
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
