"use client";

import * as React from "react";
import { ExampleSection, ExamplesContainer } from "./example-section";
import { getExamplePreview } from "./component-demo";
import type { ComponentExample } from "@/lib/component-docs";

interface ExamplesRendererProps {
  slug: string;
  examples: ComponentExample[];
}

export function ExamplesRenderer({ slug, examples }: ExamplesRendererProps) {
  return (
    <ExamplesContainer>
      {examples.map((example) => (
        <ExampleSection
          key={example.title}
          id={example.title.toLowerCase().replace(/\s+/g, "-")}
          title={example.title}
          color={example.color}
          preview={getExamplePreview(slug, example.title)}
          code={example.code}
          showPattern={example.showPattern}
        />
      ))}
    </ExamplesContainer>
  );
}
