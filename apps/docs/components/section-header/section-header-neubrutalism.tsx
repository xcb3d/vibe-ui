"use client";

import { cn } from "@/lib/utils";
import {
  SectionHeaderProps,
  ExampleHeaderProps,
  colorMap,
} from "./section-header-types";

export function SectionHeaderNeubrutalism({
  children,
  id,
  className,
}: SectionHeaderProps) {
  return (
    <h2
      id={id}
      className={cn(
        "text-3xl font-black uppercase text-foreground flex items-center gap-2",
        className,
      )}
    >
      <span className="text-primary bg-black px-2 py-1 rounded text-2xl">
        #
      </span>
      {children}
    </h2>
  );
}

export function ExampleHeaderNeubrutalism({
  children,
  color = "primary",
  id,
  className,
}: ExampleHeaderProps) {
  return (
    <h3
      id={id}
      className={cn(
        "text-xl font-bold uppercase bg-secondary p-2 border-2 border-black w-fit shadow-[4px_4px_0px_0px_#000] text-foreground flex items-center gap-3",
        className,
      )}
    >
      <span
        className={cn(
          "w-4 h-4 border-2 border-black block rounded-full",
          colorMap[color],
        )}
      />
      {children}
    </h3>
  );
}
