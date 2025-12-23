"use client";

import * as React from "react";
import { useStyle } from "@/components/style-provider";
import {
  ComponentDemo as NeubrutalismComponentDemo,
  componentDemos as neubrutalismDemos,
} from "./component-demo-neubrutalism";
import {
  ComponentDemo as MinimalComponentDemo,
  componentDemos as minimalDemos,
} from "./component-demo-minimal";

// Re-export getExamplePreview from demos for backward compatibility
export { getExamplePreview, ExamplePreview } from "../demos";

// Theme-aware component demos registry
export function ComponentDemo({ slug }: { slug: string }) {
  const { style } = useStyle();

  if (style === "minimal") {
    return <MinimalComponentDemo slug={slug} />;
  }

  return <NeubrutalismComponentDemo slug={slug} />;
}

// Export componentDemos for direct access if needed
export function getComponentDemos(theme: "minimal" | "neubrutalism") {
  return theme === "minimal" ? minimalDemos : neubrutalismDemos;
}
