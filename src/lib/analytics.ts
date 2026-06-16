"use client";

import { sendGAEvent } from "@next/third-parties/google";

import { env } from "@/lib/env";

export function trackCtaClick(name: string) {
  if (!env.isAnalyticsEnabled) {
    return;
  }

  sendGAEvent("event", "cta_click", {
    cta_name: name,
  });
}
