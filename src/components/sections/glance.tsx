import Image from "next/image";
import Link from "next/link";

import { portfolioContent } from "@/lib/content";

export function GlanceSection() {
  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-editorial">
        <div className="max-w-2xl">
          <h2 className="font-heading animate-rise text-3xl tracking-tight text-foreground sm:text-4xl">
            {portfolioContent.title}
          </h2>
          <p className="mt-5 animate-rise-delay-1 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {portfolioContent.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {portfolioContent.rows.map((row, index) => (
            <Link
              key={row.id}
              href={row.href}
              className="group animate-rise relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface-elevated p-7 transition-all duration-500 hover:border-accent-muted/30 hover:shadow-[0_16px_48px_-20px_rgba(44,62,80,0.12)] sm:p-8"
              style={{ animationDelay: `${index * 0.1 + 0.15}s` }}
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-muted">
                    {row.sector}
                  </p>
                  <Image
                    src={`/icons/${row.id}.svg`}
                    alt=""
                    width={40}
                    height={40}
                    className="opacity-90 transition-transform duration-500 group-hover:scale-105"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-5 font-heading text-2xl tracking-tight text-foreground">
                  {row.subsidiary}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {row.coreFocus}
                </p>
              </div>
              <p className="mt-8 text-sm font-medium text-foreground/70 transition-colors group-hover:text-foreground">
                Read more
                <span className="ml-1 transition-transform group-hover:translate-x-0.5 inline-block">
                  →
                </span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
