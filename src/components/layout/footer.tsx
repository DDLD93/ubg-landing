import Link from "next/link";

import { footerContent, sheetMeta } from "@/lib/content";
import { siteConfig } from "@/lib/site";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-paper/15">
      <p className="font-mono text-[0.6rem] tracking-[0.2em] text-paper/40 uppercase">
        {label}
      </p>
      <div className="mt-1.5 text-sm text-paper/85">{children}</div>
    </div>
  );
}

const linkClass =
  "text-sm text-paper/65 transition-colors hover:text-paper";

export function Footer() {
  const { titleBlock, subsidiaries, legal, copyright } = footerContent;

  return (
    <footer id="contact" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-heading text-2xl font-bold tracking-tight text-paper">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-paper/60">
              {siteConfig.tagline}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <Field label="Enquiries">
                <a
                  href={`mailto:${titleBlock.contactEmail}`}
                  className="transition-colors hover:text-paper"
                >
                  {titleBlock.contactEmail}
                </a>
              </Field>
              <Field label="Telephone">
                <a
                  href={`tel:${titleBlock.contactPhone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-paper"
                >
                  {titleBlock.contactPhone}
                </a>
              </Field>
              <Field label="Registered office">
                <p className="not-italic">{titleBlock.address}</p>
              </Field>
            </div>
          </div>

          <nav className="lg:col-span-4" aria-label="Subsidiaries">
            <p className="font-mono text-[0.6rem] tracking-[0.2em] text-paper/40 uppercase">
              Subsidiaries
            </p>
            <ul className="mt-4 space-y-3">
              {subsidiaries.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Legal">
            <p className="font-mono text-[0.6rem] tracking-[0.2em] text-paper/40 uppercase">
              Legal
            </p>
            <ul className="mt-4 space-y-3">
              {legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Title block */}
        <div className="mt-14 grid grid-cols-2 border border-paper/15 sm:grid-cols-4">
          {[
            ["Drawing", titleBlock.client],
            ["Discipline", sheetMeta.discipline],
            ["Scale", sheetMeta.scale],
            ["Revision", sheetMeta.revision],
          ].map(([label, value], i) => (
            <div
              key={label}
              className={`p-4 ${i < 3 ? "border-r border-paper/15" : ""} ${
                i < 2 ? "border-b border-paper/15 sm:border-b-0" : ""
              }`}
            >
              <p className="font-mono text-[0.6rem] tracking-[0.2em] text-paper/40 uppercase">
                {label}
              </p>
              <p className="mt-1.5 font-mono text-sm text-paper/85">{value}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs tracking-wide text-paper/50">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
