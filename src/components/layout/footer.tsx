import Link from "next/link";

import { footerContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contact" className="bg-header-bg text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              {siteConfig.name}
            </p>
            <address className="space-y-2 text-sm not-italic leading-relaxed">
              <p>{footerContent.contact.address}</p>
              <p>
                <a
                  href={`mailto:${footerContent.contact.email}`}
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  {footerContent.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${footerContent.contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  {footerContent.contact.phone}
                </a>
              </p>
            </address>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Subsidiaries
            </p>
            <nav className="flex flex-col gap-2">
              {footerContent.subsidiaries.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </p>
            <nav className="flex flex-col gap-2">
              {footerContent.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-sm text-white/60">{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
