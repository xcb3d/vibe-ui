"use client";

import { useStyle } from "@/components/style-provider";
import {
  SectionHeaderMinimal,
  ExampleHeaderMinimal,
} from "./section-header-minimal";
import {
  SectionHeaderNeubrutalism,
  ExampleHeaderNeubrutalism,
} from "./section-header-neubrutalism";
import { SectionHeaderProps, ExampleHeaderProps } from "./section-header-types";

export function SectionHeader(props: SectionHeaderProps) {
  const { style } = useStyle();

  if (style === "minimal") {
    return <SectionHeaderMinimal {...props} />;
  }

  return <SectionHeaderNeubrutalism {...props} />;
}

export function ExampleHeader(props: ExampleHeaderProps) {
  const { style } = useStyle();

  if (style === "minimal") {
    return <ExampleHeaderMinimal {...props} />;
  }

  return <ExampleHeaderNeubrutalism {...props} />;
}

// Re-export
export {
  SectionHeaderMinimal,
  ExampleHeaderMinimal,
} from "./section-header-minimal";
export {
  SectionHeaderNeubrutalism,
  ExampleHeaderNeubrutalism,
} from "./section-header-neubrutalism";
export type {
  SectionHeaderProps,
  ExampleHeaderProps,
} from "./section-header-types";
