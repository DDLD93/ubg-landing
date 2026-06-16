"use client";

import type { MouseEvent, ReactNode } from "react";
import Link from "next/link";

import { trackCtaClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline";
type Size = "sm" | "default" | "lg";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[0.7rem]",
  default: "h-11 px-5 text-[0.72rem]",
  lg: "h-12 px-6 text-[0.78rem]",
};

const variants: Record<Variant, string> = {
  solid:
    "bg-ink text-paper border border-ink hover:bg-teal hover:border-teal",
  outline:
    "bg-transparent text-ink border border-line-strong hover:bg-ink hover:text-paper hover:border-ink",
};

function classes(variant: Variant, size: Size, className?: string) {
  return cn(
    "group/cta inline-flex items-center justify-center gap-2.5 font-mono uppercase tracking-[0.18em] font-medium transition-colors duration-200 select-none",
    sizes[size],
    variants[variant],
    className,
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="size-3.5 transition-transform duration-200 group-hover/cta:translate-x-1"
    >
      <path
        d="M4 12h15M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type CommonProps = {
  ctaName: string;
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
};

type LinkProps = CommonProps & {
  href: string;
  onAfterClick?: () => void;
};

type ButtonProps = CommonProps & {
  href?: undefined;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

type CtaProps = LinkProps | ButtonProps;

export function CtaButton(props: CtaProps) {
  const {
    ctaName,
    children,
    className,
    variant = "solid",
    size = "default",
    arrow = true,
  } = props;

  const content = (
    <>
      {children}
      {arrow && <Arrow />}
    </>
  );

  if (typeof props.href === "string") {
    return (
      <Link
        href={props.href}
        className={classes(variant, size, className)}
        onClick={() => {
          trackCtaClick(ctaName);
          props.onAfterClick?.();
        }}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes(variant, size, className)}
      onClick={(event) => {
        trackCtaClick(ctaName);
        props.onClick?.(event);
      }}
    >
      {content}
    </button>
  );
}
