import Image from "next/image";
import { CtaButton } from "@/components/cta-button";
import { heroContent } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center">
      {/* Background Image for mobile / Overlay styling */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <Image
          src="/hero.png"
          alt="Abstract 3D architectural glass and glowing fibers"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="max-w-2xl space-y-8 text-white">
            <p className="animate-fadeIn text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase sm:text-sm">
              {heroContent.eyebrow}
            </p>
            <h1 className="animate-fadeInUp text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
              {heroContent.headline}
            </h1>
            <p className="animate-fadeInUp animation-delay-200 max-w-xl text-lg leading-relaxed text-slate-300">
              {heroContent.subheadline}
            </p>
            <div className="animate-fadeInUp animation-delay-300 pt-4">
              <CtaButton
                ctaName="hero_explore_operations"
                size="lg"
                href={heroContent.ctaHref}
                className="rounded-none px-8 py-6 text-sm font-semibold tracking-wider uppercase bg-white text-slate-950 hover:bg-slate-200 transition-colors"
              >
                {heroContent.ctaLabel}
              </CtaButton>
            </div>
          </div>

          {/* Desktop Image Section */}
          <div className="hidden lg:block relative h-[600px] w-full animate-fadeIn animation-delay-200">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/20 to-transparent z-10" />
            <Image
              src="/hero.png"
              alt="Abstract 3D architectural glass and glowing fibers"
              fill
              className="object-cover object-center border border-white/10 shadow-2xl shadow-white/5"
              priority
            />
          </div>

        </div>
      </div>
    </section>
  );
}
