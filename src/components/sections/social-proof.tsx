import Image from "next/image";

import { trustContent } from "@/lib/content";

export function SocialProofSection() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="container-editorial py-12 sm:py-14">
        <p className="animate-rise text-center text-sm text-muted-foreground sm:text-[0.9375rem]">
          {trustContent.statement}
        </p>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
          {trustContent.pillars.map((pillar, index) => (
            <div
              key={pillar.label}
              className="animate-rise flex flex-col items-center text-center"
              style={{ animationDelay: `${index * 0.1 + 0.1}s` }}
            >
              <span className="font-heading text-2xl tracking-tight text-foreground sm:text-3xl">
                {pillar.value}
              </span>
              <span className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {pillar.label}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Image
            src="/divider-editorial.svg"
            alt=""
            width={400}
            height={48}
            className="opacity-80"
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
