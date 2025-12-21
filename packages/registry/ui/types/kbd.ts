import type * as React from "react";

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}
