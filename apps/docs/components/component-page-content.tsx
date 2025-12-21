"use client";

import * as React from "react";
import { useStyle } from "@/components/style-provider";
import { ComponentDemo } from "@/components/component-demo";
import { CodeBlock } from "@/components/code-block";
import { PreviewCodeTabs } from "@/components/preview-code-tabs";
import { TableOfContents } from "@/components/table-of-contents";
import { SectionHeader } from "@/components/section-header";
import { ApiTable } from "@/components/api-table";
import { ExamplesRenderer } from "@/components/examples-renderer";
import { ExternalLink, Code } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ComponentExample } from "@/lib/component-docs";

interface ComponentDoc {
  name: string;
  description: string;
  radixDocs?: string;
  dependencies?: string[];
  examples?: ComponentExample[];
  props?: {
    name: string;
    type: string;
    default?: string;
    description: string;
  }[];
}

interface ComponentPageContentProps {
  slug: string;
  doc: ComponentDoc;
}

export function ComponentPageContent({ slug, doc }: ComponentPageContentProps) {
  const { style } = useStyle();
  const isMinimal = style === "minimal";

  const componentName = doc.name.replace(/\s/g, "");

  const usageCode = `import {
  ${componentName},
} from "@/components/ui/${slug}"

export function ${componentName}Demo() {
  return (
    <${componentName}>
      Content here...
    </${componentName}>
  )
}`;

  const tocItems = [
    { id: "installation", label: "Installation" },
    { id: "usage", label: "Usage" },
    ...(doc.examples && doc.examples.length > 0
      ? [
          {
            id: "examples",
            label: "Examples",
            children: doc.examples.map((ex) => ({
              id: ex.title.toLowerCase().replace(/\s+/g, "-"),
              label: ex.title,
            })),
          },
        ]
      : []),
    ...(doc.props && doc.props.length > 0
      ? [{ id: "api-reference", label: "API Reference" }]
      : []),
  ];

  return (
    <>
      {/* Main content */}
      <div className="flex-1 min-w-0 flex flex-col gap-12">
        {/* Breadcrumb */}
        <div
          className={cn(
            "flex items-center gap-2 text-sm text-muted-foreground",
            isMinimal ? "font-medium" : "font-mono font-bold",
          )}
        >
          <span className="hover:text-foreground cursor-pointer transition-colors">
            Docs
          </span>
          <span className="text-[10px] opacity-50">›</span>
          <span className="hover:text-foreground cursor-pointer transition-colors">
            Components
          </span>
          <span className="text-[10px] opacity-50">›</span>
          <span
            className={cn(
              "text-foreground",
              isMinimal
                ? "font-semibold"
                : "font-black underline decoration-primary decoration-4 underline-offset-4",
            )}
          >
            {doc.name}
          </span>
        </div>

        {/* Title & Description */}
        <div className="flex flex-col gap-4">
          <h1
            className={cn(
              "text-foreground tracking-tight",
              isMinimal
                ? "text-4xl lg:text-5xl font-bold"
                : "text-5xl lg:text-7xl font-black uppercase tracking-tighter drop-shadow-[4px_4px_0px_hsl(var(--primary))]",
            )}
          >
            {doc.name}
          </h1>
          <p
            className={cn(
              "text-muted-foreground text-lg leading-relaxed max-w-2xl",
              isMinimal
                ? ""
                : "text-xl font-medium border-l-4 border-primary pl-4",
            )}
          >
            {doc.description}
          </p>
          <div className="flex gap-3 mt-2">
            {doc.radixDocs && (
              <a
                href={doc.radixDocs}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "px-4 py-2 text-sm flex items-center gap-2 transition-all rounded-md",
                  isMinimal
                    ? "bg-background border border-border text-foreground hover:bg-muted/30 font-medium shadow-sm"
                    : "bg-white text-black font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 uppercase",
                )}
              >
                <ExternalLink className="h-4 w-4" />
                API Reference
              </a>
            )}
            <a
              href={`https://github.com/eliocamp/vibe-ui/blob/main/packages/registry/ui/${slug}.tsx`}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-4 py-2 text-sm flex items-center gap-2 transition-all rounded-md",
                isMinimal
                  ? "bg-foreground text-background hover:bg-foreground/90 font-medium shadow-sm"
                  : "bg-black text-white font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 uppercase",
              )}
            >
              <Code className="h-4 w-4" />
              Source Code
            </a>
          </div>
        </div>

        {/* Preview */}
        <PreviewCodeTabs
          preview={<ComponentDemo slug={slug} />}
          code={usageCode}
        />

        {/* Installation */}
        <section
          id="installation"
          className={cn(
            "flex flex-col gap-6 pb-10",
            isMinimal
              ? "border-b border-border"
              : "border-b-4 border-black border-dashed",
          )}
        >
          <SectionHeader>Installation</SectionHeader>
          <CodeBlock
            code={`npx vibe-ui add ${slug}`}
            showTerminalIcon
            showCopyButton
          />
          {doc.dependencies && doc.dependencies.length > 0 && (
            <div className="flex flex-col gap-2">
              <p
                className={cn(
                  "text-sm text-muted-foreground",
                  isMinimal ? "font-medium" : "font-bold",
                )}
              >
                Dependencies:
              </p>
              <CodeBlock
                code={`pnpm add ${doc.dependencies.join(" ")}`}
                showTerminalIcon
                showCopyButton
              />
            </div>
          )}
        </section>

        {/* Usage */}
        <section
          id="usage"
          className={cn(
            "flex flex-col gap-6 pb-10",
            isMinimal
              ? "border-b border-border"
              : "border-b-4 border-black border-dashed",
          )}
        >
          <SectionHeader>Usage</SectionHeader>
          <CodeBlock code={usageCode} language="tsx" showCopyButton />
        </section>

        {/* Examples */}
        {doc.examples && doc.examples.length > 0 && (
          <ExamplesRenderer slug={slug} examples={doc.examples} />
        )}

        {/* API Reference */}
        {doc.props && doc.props.length > 0 && (
          <section
            id="api-reference"
            className={cn(
              "flex flex-col gap-6 mt-10 pt-10",
              isMinimal
                ? "border-t border-border"
                : "border-t-4 border-black border-dashed",
            )}
          >
            <h2
              className={cn(
                "text-foreground",
                isMinimal
                  ? "text-2xl font-semibold tracking-tight"
                  : "text-3xl font-black uppercase",
              )}
            >
              API Reference
            </h2>
            <p
              className={cn(
                "text-muted-foreground max-w-3xl",
                isMinimal ? "text-base" : "text-lg font-medium",
              )}
            >
              {doc.radixDocs
                ? "This component is built using Radix UI primitives for full accessibility."
                : "Available props for this component."}
            </p>
            <ApiTable props={doc.props} />
          </section>
        )}

        {/* Footer */}
        <footer
          className={cn(
            "mt-10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm",
            isMinimal
              ? "border-t border-border font-medium"
              : "border-t-4 border-black border-double font-bold",
          )}
        >
          <p>
            © 2024 Vibe UI.{" "}
            {isMinimal ? "Minimal Design System." : "Built with Neubrutalism."}
          </p>
          <div className="flex gap-6">
            <a
              className="hover:text-foreground transition-colors"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              className="hover:text-foreground transition-colors"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="hover:text-foreground transition-colors"
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </a>
          </div>
        </footer>
      </div>

      {/* Right TOC Sidebar */}
      <aside
        className={cn(
          "hidden xl:flex flex-col w-64 p-10 fixed top-16 right-0 h-[calc(100vh-4rem)] overflow-y-auto bg-background",
          isMinimal ? "border-l border-border/50" : "border-l-4 border-black",
        )}
      >
        <TableOfContents items={tocItems} />
      </aside>
    </>
  );
}
