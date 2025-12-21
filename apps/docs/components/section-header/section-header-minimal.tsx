"use client";

import { cn } from "@/lib/utils";
import { SectionHeaderProps, ExampleHeaderProps } from "./section-header-types";

export function SectionHeaderMinimal({
  children,
  id,
  className,
}: SectionHeaderProps) {
  return (
    <h2
      id={id}
      className={cn(
        "text-2xl font-semibold tracking-tight text-foreground",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function ExampleHeaderMinimal({
  children,
  id,
  className,
}: ExampleHeaderProps) {
  return (
    <h3
      id={id}
      className={cn(
        "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
        className,
      )}
    >
      {children}
    </h3>
  );
}
