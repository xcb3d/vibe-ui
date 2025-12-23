"use client";

import * as React from "react";
import { statelessPreviews } from "./stateless-previews";
import { statefulPreviews } from "./stateful-previews";

// Deep merge previews - combine stateless and stateful for same component
const examplePreviews: Record<string, Record<string, React.ReactNode>> = {
  ...statelessPreviews,
};

// Merge stateful previews (deep merge for components that exist in both)
Object.entries(statefulPreviews).forEach(([key, value]) => {
  if (examplePreviews[key]) {
    examplePreviews[key] = { ...examplePreviews[key], ...value };
  } else {
    examplePreviews[key] = value;
  }
});

// Get example preview for a specific component and example title
function getExamplePreview(slug: string, title: string): React.ReactNode {
  return (
    examplePreviews[slug]?.[title] ?? (
      <p className="text-muted-foreground">No preview available.</p>
    )
  );
}

export { examplePreviews, getExamplePreview };
