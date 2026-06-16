/** L-shaped crop marks at the four corners of a drafting frame. */
export function CropCorners({ className }: { className?: string }) {
  const base = `absolute size-3 border-line-strong ${className ?? ""}`;
  return (
    <div aria-hidden="true">
      <span className={`${base} top-0 left-0 border-t border-l`} />
      <span className={`${base} top-0 right-0 border-t border-r`} />
      <span className={`${base} bottom-0 left-0 border-b border-l`} />
      <span className={`${base} right-0 bottom-0 border-r border-b`} />
    </div>
  );
}
