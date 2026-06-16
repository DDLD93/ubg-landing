import { Glyph } from "@/components/graphics/glyphs";
import { Reveal } from "@/components/reveal";
import { registerContent } from "@/lib/content";

export function RegisterSection() {
  const { eyebrow, title, intro, columns, rows } = registerContent;

  return (
    <section id="register" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="label text-teal">{eyebrow}</p>
            <h2 className="mt-5 max-w-xl font-heading text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {title}
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-ink-soft lg:col-span-5">
            {intro}
          </p>
        </Reveal>

        {/* Desktop schedule */}
        <Reveal className="mt-14 hidden md:block" delay={80}>
          <div
            className="grid grid-cols-[3rem_minmax(0,1.1fr)_minmax(0,1fr)_minmax(0,1.6fr)] border-t border-ink"
            role="table"
            aria-label={title}
          >
            <div role="row" className="contents">
              {columns.map((col) => (
                <div
                  key={col}
                  role="columnheader"
                  className="label border-b border-line py-3 text-ink-muted"
                >
                  {col}
                </div>
              ))}
            </div>

            {rows.map((row) => (
              <div
                key={row.subsidiary}
                role="row"
                className="group contents"
              >
                <div className="flex items-center border-b border-line py-6 font-mono text-sm text-teal transition-colors group-hover:bg-teal-tint">
                  {row.ref}
                </div>
                <div className="flex items-center gap-3 border-b border-line py-6 transition-colors group-hover:bg-teal-tint">
                  <Glyph
                    name={row.glyph}
                    className="size-9 shrink-0 text-ink"
                  />
                  <span className="font-heading text-lg font-semibold text-ink">
                    {row.subsidiary}
                  </span>
                </div>
                <div className="flex items-center border-b border-line py-6 text-sm text-ink-soft transition-colors group-hover:bg-teal-tint">
                  {row.discipline}
                </div>
                <div className="flex items-center border-b border-line py-6 pr-2 text-sm text-ink-soft transition-colors group-hover:bg-teal-tint">
                  {row.carries}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile cards */}
        <div className="mt-12 space-y-4 md:hidden">
          {rows.map((row, i) => (
            <Reveal
              key={row.subsidiary}
              className="border border-line bg-paper-raised p-5"
              delay={i * 80}
            >
              <div className="flex items-start gap-4">
                <Glyph name={row.glyph} className="size-11 shrink-0 text-ink" />
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono text-xs text-teal">
                      {row.ref}
                    </span>
                    <span className="font-heading text-lg font-semibold text-ink">
                      {row.subsidiary}
                    </span>
                  </div>
                  <p className="label mt-1 tracking-[0.12em] text-ink-muted">
                    {row.discipline}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {row.carries}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
