"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import type { TypographyProps, HeadingProps } from "../types/typography";

/**
 * Minimal Typography
 * Clean, subtle styling with refined spacing
 */

const H1 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, id, ...props }, ref) => (
    <h1
      ref={ref}
      id={id}
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  ),
);
H1.displayName = "H1";

const H2 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, id, ...props }, ref) => (
    <h2
      ref={ref}
      id={id}
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  ),
);
H2.displayName = "H2";

const H3 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, id, ...props }, ref) => (
    <h3
      ref={ref}
      id={id}
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  ),
);
H3.displayName = "H3";

const H4 = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, id, ...props }, ref) => (
    <h4
      ref={ref}
      id={id}
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    >
      {children}
    </h4>
  ),
);
H4.displayName = "H4";

const P = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  ),
);
P.displayName = "P";

const Lead = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-xl text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  ),
);
Lead.displayName = "Lead";

const Large = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("text-lg font-semibold", className)}
      {...props}
    >
      {children}
    </div>
  ),
);
Large.displayName = "Large";

const Small = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <small
      ref={ref}
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    >
      {children}
    </small>
  ),
);
Small.displayName = "Small";

const Muted = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <p
      ref={ref}
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  ),
);
Muted.displayName = "Muted";

const Blockquote = React.forwardRef<HTMLQuoteElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <blockquote
      ref={ref}
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    >
      {children}
    </blockquote>
  ),
);
Blockquote.displayName = "Blockquote";

const InlineCode = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <code
      ref={ref}
      className={cn(
        "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </code>
  ),
);
InlineCode.displayName = "InlineCode";

export { H1, H2, H3, H4, P, Lead, Large, Small, Muted, Blockquote, InlineCode };
