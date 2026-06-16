import { CtaButton } from "@/components/cta-button";
import { finalCtaContent } from "@/lib/content";

export function FinalCtaSection() {
  return (
    <section className="section-padding border-t border-border bg-surface">
      <div className="container-editorial">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-background px-8 py-14 text-center sm:px-12 sm:py-16 lg:px-20">
          <div
            className="pointer-events-none absolute -left-20 top-0 size-64 rounded-full bg-accent-warm/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-16 bottom-0 size-56 rounded-full bg-accent-muted/10 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
              {finalCtaContent.headline}
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {finalCtaContent.subheadline}
            </p>
            <div className="mt-9">
              <CtaButton
                ctaName="final_contact"
                size="lg"
                href={finalCtaContent.ctaHref}
                className="rounded-full px-8"
              >
                {finalCtaContent.ctaLabel}
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
