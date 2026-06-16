import { CtaButton } from "@/components/cta-button";
import { CropCorners } from "@/components/graphics/crop-corners";
import { Truss } from "@/components/graphics/truss";
import { heroContent, sheetMeta } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        className="draft-grid pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-20 pb-24 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:pt-28 lg:pb-32">
        {/* Thesis */}
        <div className="lg:col-span-6">
          <p className="label text-teal">{heroContent.eyebrow}</p>

          <h1 className="mt-7 font-heading text-[2.6rem] leading-[1.02] font-bold tracking-[-0.02em] text-ink sm:text-6xl lg:text-[4.2rem]">
            {heroContent.headline[0]}
            <br />
            {heroContent.headline[1]}
          </h1>

          <div className="mt-7 flex items-center gap-4">
            <span className="h-px w-12 bg-teal" aria-hidden="true" />
            <span className="label text-ink-muted">{sheetMeta.discipline}</span>
          </div>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {heroContent.subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaButton
              ctaName="hero_walk_structure"
              size="lg"
              href={heroContent.ctaHref}
            >
              {heroContent.ctaLabel}
            </CtaButton>
            <CtaButton
              ctaName="hero_partner"
              size="lg"
              variant="outline"
              arrow={false}
              href={heroContent.secondaryHref}
            >
              {heroContent.secondaryLabel}
            </CtaButton>
          </div>
        </div>

        {/* Signature: the structural truss */}
        <div className="lg:col-span-6">
          <figure className="hero-draw relative border border-line bg-paper-raised p-6 sm:p-8">
            <CropCorners />

            <div className="flex items-center justify-between">
              <span className="label text-ink-muted">Fig. 01</span>
              <span className="label text-ink-muted">
                Scale {sheetMeta.scale}
              </span>
            </div>

            <Truss className="mt-4 w-full text-ink" />

            <figcaption className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 border-t border-line pt-4 sm:grid-cols-4">
              {heroContent.callouts.map((c) => (
                <div key={c.node} className="flex items-baseline gap-2">
                  <span className="label text-teal">{c.node}</span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-[0.8rem] font-medium text-ink">
                      {c.entity}
                    </span>
                    <span className="label tracking-[0.12em] text-ink-muted">
                      {c.label}
                    </span>
                  </span>
                </div>
              ))}
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Drawing stamp strip */}
      <div className="relative border-t border-line bg-paper-raised/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <span className="label text-ink-muted">
            Drawing {sheetMeta.drawingNo}
          </span>
          <span className="label hidden text-ink-muted sm:inline">
            UBG Group — Holding Structure
          </span>
          <span className="label text-ink-muted">Rev {sheetMeta.revision}</span>
        </div>
      </div>
    </section>
  );
}
