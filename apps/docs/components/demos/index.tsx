"use client";

import * as React from "react";
import { useStyle } from "@/components/style-provider";
import { getExamplePreview as getNeubrutalismPreview } from "./neubrutalism/example-previews";
import { getExamplePreview as getMinimalPreview } from "./minimal/example-previews";

// Theme-aware example preview getter
export function getExamplePreview(
  slug: string,
  exampleTitle: string,
): React.ReactNode {
  // Note: This function cannot use hooks directly, so we export individual getters
  // Use GetExamplePreviewComponent for React context-aware rendering
  return getNeubrutalismPreview(slug, exampleTitle);
}

// React component that respects theme context
export function ExamplePreview({
  slug,
  exampleTitle,
}: {
  slug: string;
  exampleTitle: string;
}) {
  const { style } = useStyle();

  if (style === "minimal") {
    return <>{getMinimalPreview(slug, exampleTitle)}</>;
  }

  return <>{getNeubrutalismPreview(slug, exampleTitle)}</>;
}

// Re-export stateful demos based on theme
export {
  CollapsibleDemo as CollapsibleDemoNeubrutalism,
  CalendarDemo as CalendarDemoNeubrutalism,
  DatePickerDemo as DatePickerDemoNeubrutalism,
  SonnerDemo as SonnerDemoNeubrutalism,
  FormDemo as FormDemoNeubrutalism,
} from "./neubrutalism/stateful-demos";

export {
  CollapsibleDemo as CollapsibleDemoMinimal,
  CalendarDemo as CalendarDemoMinimal,
  DatePickerDemo as DatePickerDemoMinimal,
  SonnerDemo as SonnerDemoMinimal,
  FormDemo as FormDemoMinimal,
} from "./minimal/stateful-demos";

// Theme-aware stateful demo components
export function CollapsibleDemo() {
  const { style } = useStyle();

  if (style === "minimal") {
    const { CollapsibleDemo: Demo } = require("./minimal/stateful-demos");
    return <Demo />;
  }

  const { CollapsibleDemo: Demo } = require("./neubrutalism/stateful-demos");
  return <Demo />;
}

export function CalendarDemo() {
  const { style } = useStyle();

  if (style === "minimal") {
    const { CalendarDemo: Demo } = require("./minimal/stateful-demos");
    return <Demo />;
  }

  const { CalendarDemo: Demo } = require("./neubrutalism/stateful-demos");
  return <Demo />;
}

export function DatePickerDemo() {
  const { style } = useStyle();

  if (style === "minimal") {
    const { DatePickerDemo: Demo } = require("./minimal/stateful-demos");
    return <Demo />;
  }

  const { DatePickerDemo: Demo } = require("./neubrutalism/stateful-demos");
  return <Demo />;
}

export function SonnerDemo() {
  const { style } = useStyle();

  if (style === "minimal") {
    const { SonnerDemo: Demo } = require("./minimal/stateful-demos");
    return <Demo />;
  }

  const { SonnerDemo: Demo } = require("./neubrutalism/stateful-demos");
  return <Demo />;
}

export function FormDemo() {
  const { style } = useStyle();

  if (style === "minimal") {
    const { FormDemo: Demo } = require("./minimal/stateful-demos");
    return <Demo />;
  }

  const { FormDemo: Demo } = require("./neubrutalism/stateful-demos");
  return <Demo />;
}
