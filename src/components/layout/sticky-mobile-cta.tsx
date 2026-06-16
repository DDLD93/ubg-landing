"use client";

import { CtaButton } from "@/components/cta-button";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/90 p-4 backdrop-blur-md md:hidden">
      <CtaButton
        ctaName="mobile_sticky_partner_with_us"
        href="#contact"
        className="w-full"
      >
        Partner with us
      </CtaButton>
    </div>
  );
}
