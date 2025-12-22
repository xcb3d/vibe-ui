import * as React from "react";

/**
 * Typography component types
 * Consistent text styling across the application
 */

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  /** Content to render */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

export interface HeadingProps extends TypographyProps {
  /** Optional ID for anchor links */
  id?: string;
}

export interface ColoredHeadingProps extends HeadingProps {
  /** Color indicator (neubrutalism only) */
  color?:
    | "primary"
    | "accent"
    | "destructive"
    | "success"
    | "info"
    | "warning"
    | "muted";
}

/** Color map for neubrutalism theme indicators */
export const colorMap: Record<string, string> = {
  primary: "bg-primary",
  accent: "bg-accent",
  destructive: "bg-[#ff6b6b]",
  success: "bg-[#4ade80]",
  info: "bg-[#06b6d4]",
  warning: "bg-[#fb923c]",
  muted: "bg-muted-foreground",
};
