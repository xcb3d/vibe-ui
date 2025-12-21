import type * as React from "react";

/**
 * Badge component props - shared across all themes
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}
