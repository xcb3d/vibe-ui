"use client";

import { useStyle } from "@/components/style-provider";
import {
  ExampleSectionMinimal,
  ExamplesContainerMinimal,
} from "./example-section-minimal";
import {
  ExampleSectionNeubrutalism,
  ExamplesContainerNeubrutalism,
} from "./example-section-neubrutalism";
import {
  ExampleSectionProps,
  ExamplesContainerProps,
} from "./example-section-types";

export function ExampleSection(props: ExampleSectionProps) {
  const { style } = useStyle();

  if (style === "minimal") {
    return <ExampleSectionMinimal {...props} />;
  }

  return <ExampleSectionNeubrutalism {...props} />;
}

export function ExamplesContainer(props: ExamplesContainerProps) {
  const { style } = useStyle();

  if (style === "minimal") {
    return <ExamplesContainerMinimal {...props} />;
  }

  return <ExamplesContainerNeubrutalism {...props} />;
}

// Re-export
export {
  ExampleSectionMinimal,
  ExamplesContainerMinimal,
} from "./example-section-minimal";
export {
  ExampleSectionNeubrutalism,
  ExamplesContainerNeubrutalism,
} from "./example-section-neubrutalism";
export type {
  ExampleSectionProps,
  ExamplesContainerProps,
} from "./example-section-types";
