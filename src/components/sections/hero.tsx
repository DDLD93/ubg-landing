import { CtaButton } from "@/components/cta-button";
import { heroContent } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-slate-800" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-screen max-w-6xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6 text-white">
          <p className="text-xs font-medium tracking-[0.2em] text-white/60 uppercase sm:text-sm">
            {heroContent.eyebrow}
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {heroContent.headline}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/75">
            {heroContent.subheadline}
          </p>
          <CtaButton
            ctaName="hero_explore_operations"
            size="lg"
            href={heroContent.ctaHref}
            className="rounded-none px-6"
          >
            {heroContent.ctaLabel}
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
