import Image from "next/image";
import Link from "next/link";

import { CtaButton } from "@/components/cta-button";
import { heroContent } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 animate-drift opacity-60"
        aria-hidden="true"
      >
        <Image
          src="/editorial-mesh.svg"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container-editorial relative section-padding">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl space-y-8">
            <p className="animate-rise text-xs font-medium uppercase tracking-[0.2em] text-accent-muted">
              {heroContent.eyebrow}
            </p>
            <h1
              className="font-heading animate-rise-delay-1 text-balance text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]"
            >
              {heroContent.headline}
            </h1>
            <p className="animate-rise-delay-2 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {heroContent.subheadline}
            </p>
            <div className="animate-rise-delay-3 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton
                ctaName="hero_view_portfolio"
                size="lg"
                href={heroContent.ctaHref}
                className="rounded-full px-7"
              >
                {heroContent.ctaLabel}
              </CtaButton>
              <Link
                href={heroContent.secondaryCtaHref}
                className="inline-flex min-h-11 items-center justify-center px-4 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
              >
                {heroContent.secondaryCtaLabel}
                <span className="ml-1.5" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative animate-fade">
            <div
              className="pointer-events-none absolute -right-6 -top-6 size-32 animate-drift-slow rounded-full bg-accent-warm/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-[0_24px_64px_-24px_rgba(44,62,80,0.18)]">
              <Image
                src="/hero-editorial.png"
                alt="Abstract editorial composition of architectural lines and fiber network motifs"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-background/10 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
