import Link from "next/link";

export default function NotFound() {
  return (
    <div className="draft-grid flex min-h-screen flex-col items-center justify-center gap-8 px-4 text-center">
      <div className="space-y-3">
        <p className="label text-teal">Error 404 · Sheet not found</p>
        <h1 className="font-heading text-4xl font-bold tracking-tight text-ink">
          This drawing isn&apos;t in the set.
        </h1>
        <p className="mx-auto max-w-md text-ink-soft">
          The page you are looking for has been moved or never issued. Head back
          to the cover sheet.
        </p>
      </div>
      <Link
        href="/"
        className="group/cta inline-flex h-12 items-center gap-2.5 border border-ink bg-ink px-6 font-mono text-[0.78rem] font-medium tracking-[0.18em] text-paper uppercase transition-colors hover:bg-teal hover:border-teal"
      >
        Back to cover sheet
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="size-3.5 transition-transform group-hover/cta:translate-x-1"
        >
          <path
            d="M4 12h15M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
}
