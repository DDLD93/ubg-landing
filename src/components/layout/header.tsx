"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { CtaButton } from "@/components/cta-button";
import { navItems, sheetMeta } from "@/lib/content";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 text-ink backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="flex size-9 items-center justify-center border border-line-strong bg-paper-raised">
            <Image
              src="/ubglogo.png"
              alt=""
              width={32}
              height={32}
              className="size-6 object-contain"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-sm font-bold tracking-tight text-ink">
              {siteConfig.name}
            </span>
            <span className="label mt-1 text-[0.55rem] tracking-[0.2em] text-ink-muted">
              {sheetMeta.drawingNo}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="label text-ink-muted transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CtaButton
            ctaName="header_partner_with_us"
            size="sm"
            variant="outline"
            arrow={false}
            href="#contact"
            className="hidden md:inline-flex"
          >
            Partner with us
          </CtaButton>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center text-ink md:hidden"
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
          "border-t border-line bg-paper md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="label border-b border-line py-4 text-ink-soft transition-colors hover:text-ink"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <CtaButton
            ctaName="mobile_header_partner_with_us"
            href="#contact"
            className="mt-4 w-full"
            onAfterClick={() => setMobileOpen(false)}
          >
            Partner with us
          </CtaButton>
        </nav>
      </div>
    </header>
  );
}
