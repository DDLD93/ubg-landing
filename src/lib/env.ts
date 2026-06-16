function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

  try {
    return new URL(url).origin;
  } catch {
    return "https://example.com";
  }
}

export const env = {
  siteUrl: getSiteUrl(),
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || null,
  isAnalyticsEnabled: Boolean(
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim(),
  ),
} as const;
