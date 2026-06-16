"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { CtaButton } from "@/components/cta-button";
import { navItems } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-header-bg text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
        >
          <Image
            src="/ubglogo.png"
            alt="UBG Group"
            width={40}
            height={40}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CtaButton
            ctaName="header_partner_with_us"
            size="sm"
            href="#contact"
            className="hidden rounded-none md:inline-flex"
          >
            Partner With Us
          </CtaButton>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center text-white md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-white/10 bg-header-bg md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-2 py-3 text-sm text-white/80 transition-colors hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <CtaButton
            ctaName="mobile_header_partner_with_us"
            href="#contact"
            className="mt-2 w-full rounded-none"
            onAfterClick={() => setMobileOpen(false)}
          >
            Partner With Us
          </CtaButton>
        </nav>
      </div>
    </header>
  );
}
