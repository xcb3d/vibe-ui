import * as React from "react";

// Shared types
export type ExampleColor =
  | "primary"
  | "accent"
  | "destructive"
  | "success"
  | "info"
  | "warning"
  | "muted";

export const colorMap: Record<ExampleColor, string> = {
  primary: "bg-primary",
  accent: "bg-accent",
  destructive: "bg-[#ff6b6b]",
  success: "bg-[#4ade80]",
  info: "bg-[#06b6d4]",
  warning: "bg-[#fb923c]",
  muted: "bg-muted-foreground",
};

export interface ExampleSectionProps {
  title: string;
  color?: ExampleColor;
  preview: React.ReactNode;
  code: string;
  id?: string;
  showPattern?: boolean;
  className?: string;
}

export interface ExamplesContainerProps {
  children: React.ReactNode;
  className?: string;
}
