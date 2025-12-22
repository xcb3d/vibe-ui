"use client";

import * as React from "react";
import { cn } from "../../lib/utils";
import type {
  TypographyProps,
  HeadingProps,
  ColoredHeadingProps,
} from "../types/typography";
import { colorMap } from "../types/typography";

/**
 * Neubrutalism Typography
 * Bold, high-contrast styling with color indicators
 */

const H1 = React.forwardRef<HTMLHeadingElement, ColoredHeadingProps>(
  ({ className, children, id, color, ...props }, ref) => (
    <h1
      ref={ref}
      id={id}
      className={cn(
        "scroll-m-20 text-4xl font-black tracking-tight lg:text-5xl",
        className,
      )}
      {...props}
    >
      {color && (
        <span
          className={cn(
            "inline-block w-3 h-8 mr-3 border-2 border-black dark:border-white",
            colorMap[color],
          )}
        />
      )}
      {children}
    </h1>
  ),
);
H1.displayName = "H1";

const H2 = React.forwardRef<HTMLHeadingElement, ColoredHeadingProps>(
  ({ className, children, id, color, ...props }, ref) => (
    <h2
      ref={ref}
      id={id}
      className={cn(
        "scroll-m-20 border-b-4 border-black dark:border-white pb-2 text-3xl font-bold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    >
      {color && (
        <span
          className={cn(
            "inline-block w-2 h-6 mr-2 border-2 border-black dark:border-white",
            colorMap[color],
          )}
        />
      )}
      {children}
    </h2>
  ),
);
H2.displayName = "H2";

const H3 = React.forwardRef<HTMLHeadingElement, ColoredHeadingProps>(
  ({ className, children, id, color, ...props }, ref) => (
    <h3
      ref={ref}
      id={id}
      className={cn("scroll-m-20 text-2xl font-bold tracking-tight", className)}
      {...props}
    >
      {color && (
        <span
          className={cn(
            "inline-block w-2 h-5 mr-2 border-2 border-black dark:border-white",
            colorMap[color],
          )}
        />
      )}
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
      className={cn("scroll-m-20 text-xl font-bold tracking-tight", className)}
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
      className={cn("text-xl font-medium text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  ),
);
Lead.displayName = "Lead";

const Large = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("text-lg font-bold", className)} {...props}>
      {children}
    </div>
  ),
);
Large.displayName = "Large";

const Small = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, children, ...props }, ref) => (
    <small
      ref={ref}
      className={cn("text-sm font-semibold leading-none", className)}
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
      className={cn(
        "mt-6 border-l-4 border-black dark:border-white pl-6 italic font-medium",
        className,
      )}
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
        "relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-bold",
        "bg-accent border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
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
