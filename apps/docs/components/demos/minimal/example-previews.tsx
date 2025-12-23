"use client";

import * as React from "react";
import { statelessPreviews } from "./stateless-previews";
import { statefulPreviews } from "./stateful-previews";

// Merge stateless + stateful previews
const examplePreviews: Record<string, Record<string, React.ReactNode>> = {
  ...statelessPreviews,
  ...statefulPreviews,
};

// Get example preview for a specific component and example title
function getExamplePreview(slug: string, title: string): React.ReactNode {
  return (
    examplePreviews[slug]?.[title] ?? (
      <p className="text-muted-foreground">No preview available.</p>
    )
  );
}

export { examplePreviews, getExamplePreview };
