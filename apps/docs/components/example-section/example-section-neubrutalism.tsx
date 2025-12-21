"use client";

import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/code-block";
import {
  ExampleSectionProps,
  ExamplesContainerProps,
  colorMap,
} from "./example-section-types";

export function ExampleSectionNeubrutalism({
  title,
  color = "primary",
  preview,
  code,
  id,
  showPattern = false,
  className,
}: ExampleSectionProps) {
  return (
    <section id={id} className={cn("flex flex-col gap-6", className)}>
      <h3 className="text-xl font-bold uppercase bg-secondary p-2 border-2 border-black w-fit shadow-[4px_4px_0px_0px_#000] text-foreground flex items-center gap-3">
        <span
          className={cn(
            "w-4 h-4 border-2 border-black block rounded-full",
            colorMap[color],
          )}
        />
        {title}
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-8 lg:p-12 flex items-center justify-center rounded-lg relative overflow-hidden bg-card border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
          {showPattern && (
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #000 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                opacity: 0.2,
              }}
            />
          )}
          <div className="w-full max-w-sm relative z-10">{preview}</div>
        </div>

        <CodeBlock
          code={code}
          language="tsx"
          showCopyButton
          className="flex items-center"
        />
      </div>
    </section>
  );
}

export function ExamplesContainerNeubrutalism({
  children,
  className,
}: ExamplesContainerProps) {
  return (
    <div id="examples" className={cn("flex flex-col gap-2 mt-4", className)}>
      <h2 className="text-4xl font-black uppercase drop-shadow-[2px_2px_0px_rgba(255,255,255,0.2)] text-foreground">
        Examples
      </h2>
      <p className="font-medium text-lg text-muted-foreground mb-6">
        Customize the component to fit your needs.
      </p>
      <div className="flex flex-col gap-10">{children}</div>
    </div>
  );
}
