"use client";

import { sendGAEvent } from "@next/third-parties/google";
import { useReportWebVitals } from "next/web-vitals";

import { env } from "@/lib/env";

export function WebVitals() {
  useReportWebVitals((metric) => {
    if (!env.isAnalyticsEnabled) {
      return;
    }

    sendGAEvent("event", metric.name, {
      value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value,
      ),
      event_label: metric.id,
      non_interaction: true,
    });
  });

  return null;
}
