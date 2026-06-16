import type { CSSProperties } from "react";

/**
 * The signature: a parallel-chord, X-braced truss. Four main posts — one per
 * subsidiary — rise from the ground chord to carry a single top chord (the
 * enterprise they hold up together). Drawn entirely in line-art and animated
 * stroke-by-stroke by the `.hero-draw` ancestor in globals.css.
 *
 * pathLength={1} normalises every member so a dasharray/offset of 1 draws the
 * whole line regardless of its real length.
 */

const TOP_Y = 64;
const BOT_Y = 180;
const MAIN = [70, 160, 250, 340]; // four subsidiary posts
const ENDS = [40, 370]; // truss end verticals
const REFS = ["A", "B", "C", "D"] as const;

type DrawProps = { delay: number; teal?: boolean };

function member(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  { delay, teal }: DrawProps,
  key: string,
) {
  return (
    <line
      key={key}
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      pathLength={1}
      data-draw
      stroke={teal ? "var(--teal)" : "var(--ink)"}
      strokeWidth={teal ? 2 : 1.4}
      strokeLinecap="round"
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

export function Truss({ className }: { className?: string }) {
  const verticals = [...ENDS, ...MAIN].sort((a, b) => a - b);
  const bays: Array<[number, number]> = [
    [MAIN[0], MAIN[1]],
    [MAIN[1], MAIN[2]],
    [MAIN[2], MAIN[3]],
  ];

  return (
    <svg
      viewBox="0 0 410 226"
      fill="none"
      className={className}
      role="img"
      aria-label="A structural truss with four posts, one for each UBG subsidiary, carrying a single top chord."
    >
      {/* faint dimension lines, drawn first */}
      <line
        x1={40}
        y1={200}
        x2={370}
        y2={200}
        pathLength={1}
        data-draw
        stroke="var(--ink)"
        strokeWidth={0.75}
        strokeOpacity={0.35}
        strokeDasharray="1"
        style={{ strokeDashoffset: 1, "--draw-delay": "0ms" } as CSSProperties}
      />

      {/* bottom (ground) chord */}
      {member(40, BOT_Y, 370, BOT_Y, { delay: 120 }, "bottom")}

      {/* end verticals */}
      {member(40, TOP_Y, 40, BOT_Y, { delay: 320 }, "v-left")}
      {member(370, TOP_Y, 370, BOT_Y, { delay: 320 }, "v-right")}

      {/* end-stub diagonals */}
      {member(40, TOP_Y, 70, BOT_Y, { delay: 760 }, "stub-l")}
      {member(340, BOT_Y, 370, TOP_Y, { delay: 760 }, "stub-r")}

      {/* X-bracing between the four main posts */}
      {bays.flatMap(([a, b], i) => [
        member(a, BOT_Y, b, TOP_Y, { delay: 820 + i * 70 }, `x1-${i}`),
        member(a, TOP_Y, b, BOT_Y, { delay: 860 + i * 70 }, `x2-${i}`),
      ])}

      {/* four subsidiary posts — the emphasised members */}
      {MAIN.map((x, i) =>
        member(x, TOP_Y, x, BOT_Y, { delay: 420 + i * 90 }, `post-${i}`),
      )}

      {/* top chord — teal, the shared enterprise they carry */}
      {member(40, TOP_Y, 370, TOP_Y, { delay: 300, teal: true }, "top")}

      {/* joint nodes */}
      {verticals.flatMap((x, i) =>
        [TOP_Y, BOT_Y].map((y, j) => {
          const isMainBase = MAIN.includes(x) && y === BOT_Y;
          return (
            <circle
              key={`n-${i}-${j}`}
              cx={x}
              cy={y}
              r={isMainBase ? 4.2 : 3}
              data-node
              fill="var(--paper)"
              stroke={isMainBase ? "var(--teal)" : "var(--ink)"}
              strokeWidth={isMainBase ? 2 : 1.4}
              style={
                { "--node-delay": `${1180 + i * 40}ms` } as CSSProperties
              }
            />
          );
        }),
      )}

      {/* ref labels under each subsidiary post */}
      {MAIN.map((x, i) => (
        <text
          key={`t-${i}`}
          x={x}
          y={216}
          textAnchor="middle"
          className="font-mono"
          fontSize={11}
          letterSpacing={1.5}
          fill="var(--ink-muted)"
          data-node
          style={{ "--node-delay": `${1320 + i * 60}ms` } as CSSProperties}
        >
          {REFS[i]}
        </text>
      ))}
    </svg>
  );
}
