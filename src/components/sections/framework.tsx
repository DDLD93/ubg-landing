import { CtaButton } from "@/components/cta-button";
import { Truss } from "@/components/graphics/truss";
import { Reveal } from "@/components/reveal";
import { frameworkContent } from "@/lib/content";

export function FrameworkSection() {
  return (
    <section
      id="framework"
      className="relative overflow-hidden border-b border-line bg-well"
    >
      <div
        className="draft-grid pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      />

      <Reveal className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-12 lg:py-32 lg:px-8">
        <div className="lg:col-span-7">
          <p className="label text-teal">{frameworkContent.eyebrow}</p>
          <h2 className="mt-6 max-w-2xl font-heading text-4xl font-bold leading-[1.04] tracking-tight text-ink sm:text-5xl">
            {frameworkContent.title}
          </h2>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {frameworkContent.body}
          </p>
          <div className="mt-10">
            <CtaButton
              ctaName="framework_partner"
              size="lg"
              href={frameworkContent.ctaHref}
            >
              {frameworkContent.ctaLabel}
            </CtaButton>
          </div>
        </div>

        <div className="lg:col-span-5" aria-hidden="true">
          <Truss className="w-full text-ink opacity-25" />
        </div>
      </Reveal>
    </section>
  );
}
