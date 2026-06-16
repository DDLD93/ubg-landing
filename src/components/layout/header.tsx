"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { CtaButton } from "@/components/cta-button";
import { navItems } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/60 bg-header-bg backdrop-blur-md"
    >
      <div className="container-editorial flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
        >
          <Image
            src="/ubglogo.png"
            alt="UBG Group"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
            priority
          />
          <span className="text-sm font-medium tracking-tight text-foreground sm:text-[0.9375rem]">
            UBG Group
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.8125rem] tracking-wide text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <CtaButton
            ctaName="header_contact"
            size="sm"
            href="#contact"
            className="hidden rounded-full px-5 md:inline-flex"
          >
            Contact
          </CtaButton>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center text-foreground md:hidden"
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
          "border-t border-border/60 bg-background md:hidden",
          mobileOpen ? "block" : "hidden",
        )}
      >
        <nav className="container-editorial flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-2 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <CtaButton
            ctaName="mobile_header_contact"
            href="#contact"
            className="mt-2 w-full rounded-full"
            onAfterClick={() => setMobileOpen(false)}
          >
            Contact
          </CtaButton>
        </nav>
      </div>
    </header>
  );
}
