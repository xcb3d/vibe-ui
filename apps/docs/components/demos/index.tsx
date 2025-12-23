"use client";

import * as React from "react";
import { Suspense, lazy, useMemo } from "react";
import { useStyle } from "@/components/style-provider";
import {
  themeRegistry,
  DEFAULT_STYLE,
  type StatefulDemosModule,
} from "./theme-registry";

// Theme-aware example preview getter (non-hook version, uses default style)
export function getExamplePreview(
  slug: string,
  exampleTitle: string,
): React.ReactNode {
  return themeRegistry[DEFAULT_STYLE].getExamplePreview(slug, exampleTitle);
}

// React component that respects theme context (O(1) registry lookup)
export function ExamplePreview({
  slug,
  exampleTitle,
}: {
  slug: string;
  exampleTitle: string;
}) {
  const { style } = useStyle();
  const preview = themeRegistry[style].getExamplePreview(slug, exampleTitle);
  return <>{preview}</>;
}

// Re-export stateful demos for direct theme access
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

// Loading fallback for lazy-loaded demos
const DemoFallback = () => (
  <div className="animate-pulse h-20 bg-muted rounded" />
);

// Hook to create lazy-loaded themed demo component
function useThemedDemo(demoName: keyof StatefulDemosModule) {
  const { style } = useStyle();

  return useMemo(() => {
    return lazy(async () => {
      const module = await themeRegistry[style].loadStatefulDemos();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return { default: module[demoName] as React.ComponentType<any> };
    });
  }, [style, demoName]);
}

// Factory to create themed demo components (eliminates if/else chains)
function createThemedDemo(demoName: keyof StatefulDemosModule) {
  return function ThemedDemo() {
    const LazyDemo = useThemedDemo(demoName);
    return (
      <Suspense fallback={<DemoFallback />}>
        <LazyDemo />
      </Suspense>
    );
  };
}

// Theme-aware stateful demo exports (O(1) lookup, lazy loaded)
export const CollapsibleDemo = createThemedDemo("CollapsibleDemo");
export const CalendarDemo = createThemedDemo("CalendarDemo");
export const DatePickerDemo = createThemedDemo("DatePickerDemo");
export const SonnerDemo = createThemedDemo("SonnerDemo");
export const FormDemo = createThemedDemo("FormDemo");
