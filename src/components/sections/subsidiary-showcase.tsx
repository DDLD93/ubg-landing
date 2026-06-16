import Image from "next/image";

import {
  subsidiaryDeepDives,
  type SubsidiaryDeepDive,
} from "@/lib/content";
import { cn } from "@/lib/utils";

function FeatureMark() {
  return (
    <svg
      className="mt-0.5 size-4 shrink-0 text-accent-warm"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SubsidiaryBlock({
  subsidiary,
  index,
}: {
  subsidiary: SubsidiaryDeepDive;
  index: number;
}) {
  const imageFirst = index % 2 === 0;

  return (
    <section
      id={subsidiary.id}
      className={cn(
        "border-t border-border section-padding",
        index % 2 === 0 ? "bg-surface" : "bg-background",
      )}
    >
      <div className="container-editorial">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div
            className={cn(
              "relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-[0_20px_56px_-24px_rgba(44,62,80,0.14)]",
              !imageFirst && "lg:order-2",
            )}
          >
            <Image
              src={`/${subsidiary.imageSlot}.png`}
              alt={`${subsidiary.name} — ${subsidiary.sector}`}
              fill
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className={cn("space-y-7", !imageFirst && "lg:order-1")}>
            <div className="flex items-center gap-4">
              <Image
                src={subsidiary.icon}
                alt=""
                width={48}
                height={48}
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-muted">
                  {subsidiary.sector}
                </p>
                <p className="mt-1 font-heading text-lg text-foreground">
                  {subsidiary.name}
                </p>
              </div>
            </div>

            <h2 className="font-heading text-3xl tracking-tight text-foreground sm:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
              {subsidiary.headline}
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
              {subsidiary.body}
            </p>

            <ul className="space-y-3.5 pt-2">
              {subsidiary.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm sm:text-base">
                  <FeatureMark />
                  <span className="text-foreground/85">{feature}</span>
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
