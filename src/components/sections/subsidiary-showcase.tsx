import { CropCorners } from "@/components/graphics/crop-corners";
import { Glyph } from "@/components/graphics/glyphs";
import { Reveal } from "@/components/reveal";
import { subsidiaryDeepDives, type SubsidiaryDeepDive } from "@/lib/content";
import { cn } from "@/lib/utils";

function Plate({
  subsidiary,
  index,
}: {
  subsidiary: SubsidiaryDeepDive;
  index: number;
}) {
  const glyphFirst = index % 2 === 0;

  return (
    <section
      id={subsidiary.id}
      className={cn(
        "border-b border-line scroll-mt-20",
        index % 2 === 0 ? "bg-paper" : "bg-paper-raised",
      )}
    >
      <Reveal className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Glyph plate */}
          <div className={cn("relative", !glyphFirst && "lg:order-2")}>
            <figure className="draft-grid relative border border-line bg-paper p-8 sm:p-12">
              <CropCorners />
              <div className="flex items-center justify-between">
                <span className="label text-teal">Plate {subsidiary.plate}</span>
                <span className="label text-ink-muted">Ref {subsidiary.ref}</span>
              </div>
              <Glyph
                name={subsidiary.glyph}
                className="mx-auto mt-6 w-2/3 max-w-[260px] text-ink"
              />
              <figcaption className="label mt-6 border-t border-line pt-4 text-center text-ink-muted">
                {subsidiary.name} — {subsidiary.sector}
              </figcaption>
            </figure>
          </div>

          {/* Specification */}
          <div className={cn(!glyphFirst && "lg:order-1")}>
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-teal">{subsidiary.ref}</span>
              <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
              <span className="label text-ink-muted">{subsidiary.sector}</span>
            </div>

            <h2 className="mt-6 max-w-md font-heading text-3xl font-bold leading-[1.08] tracking-tight text-ink sm:text-[2.6rem]">
              {subsidiary.headline}
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft">
              {subsidiary.body}
            </p>

            <ul className="mt-8 space-y-px border-t border-line">
              {subsidiary.features.map((feature, i) => (
                <li
                  key={feature}
                  className="flex items-start gap-4 border-b border-line py-4"
                >
                  <span className="mt-1 font-mono text-xs text-teal tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-ink-soft">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function SubsidiaryShowcase() {
  return (
    <div>
      {subsidiaryDeepDives.map((subsidiary, index) => (
        <Plate key={subsidiary.id} subsidiary={subsidiary} index={index} />
      ))}
    </div>
  );
}
