import {
  subsidiaryDeepDives,
  type SubsidiaryDeepDive,
  type SubsidiaryVariant,
} from "@/lib/content";
import { cn } from "@/lib/utils";

function variantStyles(variant: SubsidiaryVariant) {
  switch (variant) {
    case "dark-card":
      return {
        section: "bg-white",
        panel: "bg-slate-900 text-white",
        image: "bg-slate-800",
        imageLabel: "text-white/40",
        label: "text-white/50",
        body: "text-white/75",
        feature: "text-white/80",
        marker: "bg-white/40",
      };
    case "high-contrast":
      return {
        section: "bg-slate-50",
        panel: "bg-white text-slate-900",
        image: "bg-slate-950",
        imageLabel: "text-white/40",
        label: "text-slate-500",
        body: "text-slate-600",
        feature: "text-slate-700",
        marker: "bg-slate-900",
      };
    case "bright":
      return {
        section: "bg-white",
        panel: "bg-white text-slate-900",
        image: "bg-slate-200",
        imageLabel: "text-slate-500",
        label: "text-slate-500",
        body: "text-slate-600",
        feature: "text-slate-700",
        marker: "bg-slate-900",
      };
    case "serif":
      return {
        section: "bg-slate-50",
        panel: "bg-white text-slate-900",
        image: "bg-slate-300",
        imageLabel: "text-slate-600",
        label: "text-slate-500",
        body: "text-slate-600",
        feature: "text-slate-700",
        marker: "bg-slate-900",
      };
  }
}

function ImagePlaceholder({
  subsidiary,
  imageSlot,
  imageClass,
  labelClass,
}: {
  subsidiary: SubsidiaryDeepDive;
  imageSlot: string;
  imageClass: string;
  labelClass: string;
}) {
  return (
    <div
      className={cn(
        "flex aspect-[4/3] items-center justify-center border border-divider",
        imageClass,
      )}
      aria-hidden="true"
    >
      <span
        className={cn(
          "px-6 text-center text-xs tracking-wider uppercase",
          labelClass,
        )}
      >
        Image: {imageSlot}
        <span className="mt-2 block normal-case opacity-70">{subsidiary.name}</span>
      </span>
    </div>
  );
}

function SubsidiaryBlock({
  subsidiary,
  index,
}: {
  subsidiary: SubsidiaryDeepDive;
  index: number;
}) {
  const styles = variantStyles(subsidiary.variant);
  const imageFirst = index % 2 === 0;

  return (
    <section
      id={subsidiary.id}
      className={cn("border-t border-divider", styles.section)}
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className={cn(!imageFirst && "lg:order-2")}>
            <ImagePlaceholder
              subsidiary={subsidiary}
              imageSlot={subsidiary.imageSlot}
              imageClass={styles.image}
              labelClass={styles.imageLabel}
            />
          </div>

          <div
            className={cn(
              "space-y-6 p-8 lg:p-10",
              styles.panel,
              !imageFirst && "lg:order-1",
            )}
          >
            <p
              className={cn(
                "text-xs font-medium tracking-[0.15em] uppercase",
                styles.label,
              )}
            >
              {subsidiary.name} | {subsidiary.sector}
            </p>
            <h2
              className={cn(
                "text-3xl font-bold tracking-tight sm:text-4xl",
                subsidiary.variant === "serif" && "font-serif",
              )}
            >
              {subsidiary.headline}
            </h2>
            <p className={cn("leading-relaxed", styles.body)}>{subsidiary.body}</p>
            <ul className="space-y-3">
              {subsidiary.features.map((feature) => (
                <li
                  key={feature}
                  className={cn("flex items-start gap-3 text-sm", styles.feature)}
                >
                  <span
                    className={cn("mt-2 size-1.5 shrink-0", styles.marker)}
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SubsidiaryShowcase() {
  return (
    <div>
      {subsidiaryDeepDives.map((subsidiary, index) => (
        <SubsidiaryBlock
          key={subsidiary.id}
          subsidiary={subsidiary}
          index={index}
        />
      ))}
    </div>
  );
}
