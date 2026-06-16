import { GoogleAnalytics } from "@next/third-parties/google";

import { env } from "@/lib/env";

export function GoogleAnalyticsProvider() {
  if (!env.gaMeasurementId) {
    return null;
  }

  return <GoogleAnalytics gaId={env.gaMeasurementId} />;
}
