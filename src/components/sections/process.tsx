import { processContent } from "@/lib/content";

export function ProcessSection() {
  return (
    <section className="section-padding border-t border-border bg-background">
      <div className="container-editorial">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
            {processContent.title}
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            {processContent.subtitle}
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {processContent.steps.map((step, index) => (
            <div
              key={step.number}
              className="animate-rise group relative rounded-2xl border border-border bg-surface p-6 transition-colors duration-500 hover:border-accent-muted/25 sm:p-7"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <span className="font-heading text-sm text-accent-warm">
                {step.number}
              </span>
              <h3 className="mt-4 font-heading text-xl tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              <div
                className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-accent-warm/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
