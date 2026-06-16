"use client";

import type { ComponentProps } from "react";
import Link from "next/link";

import { trackCtaClick } from "@/lib/analytics";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  ctaName: string;
  href: string;
  className?: string;
  children: React.ReactNode;
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
  onAfterClick?: () => void;
};

type CtaButtonProps = ComponentProps<typeof Button> & {
  ctaName: string;
  href?: undefined;
};

type CtaProps = CtaLinkProps | CtaButtonProps;

function isLinkProps(props: CtaProps): props is CtaLinkProps {
  return typeof (props as CtaLinkProps).href === "string";
}

export function CtaButton(props: CtaProps) {
  if (isLinkProps(props)) {
    const {
      ctaName,
      href,
      className,
      children,
      variant = "default",
      size = "default",
      onAfterClick,
    } = props;

    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size }), "min-h-11", className)}
        onClick={() => {
          trackCtaClick(ctaName);
          onAfterClick?.();
        }}
      >
        {children}
      </Link>
    );
  }

  const { ctaName, className, onClick, children, variant, size, ...buttonProps } =
    props;

  return (
    <Button
      className={cn("min-h-11", className)}
      variant={variant}
      size={size}
      onClick={(event) => {
        trackCtaClick(ctaName);
        onClick?.(event);
      }}
      {...buttonProps}
    >
      {children}
    </Button>
  );
}
