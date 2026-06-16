import Link from "next/link";

import { footerContent } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-border bg-surface text-muted-foreground"
    >
      <div className="container-editorial py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-5">
            <p className="font-heading text-lg text-foreground">
              {siteConfig.name}
            </p>
            <address className="space-y-2 text-sm not-italic leading-relaxed">
              <p>{footerContent.contact.address}</p>
              <p>
                <a
                  href={`mailto:${footerContent.contact.email}`}
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                >
                  {footerContent.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${footerContent.contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                >
                  {footerContent.contact.phone}
                </a>
              </p>
            </address>
          </div>

          <div className="space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground">
              Divisions
            </p>
            <nav className="flex flex-col gap-2.5">
              {footerContent.subsidiaries.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-5">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-foreground">
              Legal
            </p>
            <nav className="flex flex-col gap-2.5">
              {footerContent.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-sm">{footerContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
