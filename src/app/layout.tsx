import type { Metadata } from "next";
import { Archivo, Inter, JetBrains_Mono } from "next/font/google";

import { GoogleAnalyticsProvider } from "@/components/analytics/google-analytics";
import { WebVitals } from "@/components/analytics/web-vitals";
import { JsonLd } from "@/components/seo/json-ld";
import { env } from "@/lib/env";
import { siteConfig } from "@/lib/site";

import "./globals.css";

// Body — neutral humanist sans, the quiet voice carrying the prose.
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Display — a wide technical grotesque for headlines, set like signage on a drawing.
const archivo = Archivo({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

// Utility — monospace for coordinates, plate numbers, schedules, and eyebrows.
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: env.siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: env.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${archivo.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <JsonLd />
      </head>
      <body className="flex min-h-full flex-col pb-24 md:pb-0">
        <WebVitals />
        {children}
        <GoogleAnalyticsProvider />
      </body>
    </html>
  );
}
