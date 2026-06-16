"use client";

import { CtaButton } from "@/components/cta-button";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-header-bg p-4 backdrop-blur-md md:hidden">
      <CtaButton
        ctaName="mobile_sticky_contact"
        href="#contact"
        className="w-full rounded-full"
      >
        Contact UBG Group
      </CtaButton>
    </div>
  );
}
