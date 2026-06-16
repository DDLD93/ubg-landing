import type { CSSProperties } from "react";

import type { GlyphKey } from "@/lib/content";

/**
 * A single line-art system shared across the four subsidiaries. Every glyph is
 * drawn in `currentColor`, normalised with pathLength={1}, and animated by the
 * nearest `.is-visible` ancestor (the scroll-reveal wrapper around its plate).
 */

type Drawable = {
  d?: string;
  delay?: number;
};

function Seg({
  d,
  delay = 0,
  width = 1.6,
}: Drawable & { width?: number }) {
  return (
    <path
      d={d}
      pathLength={1}
      data-draw
      strokeWidth={width}
      style={
        {
          strokeDasharray: 1,
          strokeDashoffset: 1,
          "--draw-delay": `${delay}ms`,
        } as CSSProperties
      }
    />
  );
}

function Dot({
  cx,
  cy,
  r = 3,
  delay = 0,
  fill = "currentColor",
}: {
  cx: number;
  cy: number;
  r?: number;
  delay?: number;
  fill?: string;
}) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      data-node
      fill={fill}
      stroke="currentColor"
      strokeWidth={1.4}
      style={{ "--node-delay": `${delay}ms` } as CSSProperties}
    />
  );
}

function NonitelGlyph() {
  // Telecommunications — concentric signal arcs broadcasting from a ground node.
  return (
    <>
      <Seg d="M 40 96 L 40 60" delay={120} />
      <Seg d="M 66 96 A 26 26 0 0 0 40 70" delay={300} />
      <Seg d="M 86 96 A 46 46 0 0 0 40 50" delay={520} />
      <Seg d="M 106 96 A 66 66 0 0 0 40 30" delay={740} />
      <Dot cx={40} cy={96} r={4.5} delay={1000} fill="var(--paper)" />
      <Dot cx={40} cy={60} r={3} delay={1120} fill="var(--paper)" />
    </>
  );
}

function BlurinvestmentGlyph() {
  // Fibre & infrastructure — a conduit cross-section bundled into a trench.
  const inner: Array<[number, number]> = [
    [64, 70],
    [64, 56],
    [76.1, 63],
    [76.1, 77],
    [64, 84],
    [51.9, 77],
    [51.9, 63],
  ];
  return (
    <>
      {/* trench floor + walls */}
      <Seg d="M 16 106 L 112 106" delay={120} width={1.3} />
      <Seg d="M 30 106 L 36 90" delay={260} width={1.3} />
      <Seg d="M 98 106 L 92 90" delay={260} width={1.3} />
      {/* conduit */}
      <path
        d="M 64 38 A 32 32 0 1 1 63.9 38 Z"
        pathLength={1}
        data-draw
        strokeWidth={1.8}
        style={
          {
            strokeDasharray: 1,
            strokeDashoffset: 1,
            "--draw-delay": "420ms",
          } as CSSProperties
        }
      />
      {/* fibre bundle */}
      {inner.map(([cx, cy], i) => (
        <Dot
          key={i}
          cx={cx}
          cy={cy}
          r={4}
          delay={1000 + i * 70}
          fill="var(--paper)"
        />
      ))}
    </>
  );
}

function EliteEdgeGlyph() {
  // Construction & estate — an isometric massing with stacked floor plates.
  return (
    <>
      {/* crane */}
      <Seg d="M 64 24 L 64 10 L 88 10 L 88 17" delay={120} width={1.3} />
      {/* top face */}
      <Seg d="M 64 24 L 100 44 L 64 64 L 28 44 Z" delay={320} />
      {/* left face */}
      <Seg d="M 28 44 L 28 92 L 64 112 L 64 64" delay={560} />
      {/* right face */}
      <Seg d="M 100 44 L 100 92 L 64 112" delay={680} />
      {/* floor plates */}
      <Seg d="M 28 60 L 64 80 L 100 60" delay={860} width={1.2} />
      <Seg d="M 28 76 L 64 96 L 100 76" delay={980} width={1.2} />
      <Dot cx={64} cy={64} r={3} delay={1180} fill="var(--paper)" />
    </>
  );
}

function DynamiteLegalGlyph() {
  // Corporate law — scales drawn as a balanced structural beam.
  return (
    <>
      <Seg d="M 40 110 L 88 110" delay={120} width={1.4} />
      <Seg d="M 64 110 L 64 42" delay={300} />
      <Seg d="M 64 30 L 56 42 L 72 42 Z" delay={460} />
      <Seg d="M 26 42 L 102 42" delay={600} width={1.8} />
      <Seg d="M 26 42 L 16 62" delay={820} width={1.2} />
      <Seg d="M 26 42 L 36 62" delay={820} width={1.2} />
      <Seg d="M 14 62 A 13 7 0 0 0 38 62" delay={980} />
      <Seg d="M 102 42 L 92 62" delay={880} width={1.2} />
      <Seg d="M 102 42 L 112 62" delay={880} width={1.2} />
      <Seg d="M 90 62 A 13 7 0 0 0 114 62" delay={1040} />
      <Dot cx={26} cy={42} r={3} delay={1180} fill="var(--paper)" />
      <Dot cx={102} cy={42} r={3} delay={1240} fill="var(--paper)" />
    </>
  );
}

const GLYPHS: Record<GlyphKey, () => React.ReactElement> = {
  nonitel: NonitelGlyph,
  blurinvestment: BlurinvestmentGlyph,
  "elite-edge": EliteEdgeGlyph,
  "dynamite-legal": DynamiteLegalGlyph,
};

export function Glyph({
  name,
  className,
}: {
  name: GlyphKey;
  className?: string;
}) {
  const Inner = GLYPHS[name];
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <Inner />
    </svg>
  );
}
