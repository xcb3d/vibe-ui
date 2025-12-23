"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  TableOfContentsProps,
  useActiveSection,
} from "./table-of-contents-utils";

export function TableOfContentsMinimal({
  items,
  className,
}: TableOfContentsProps) {
  const activeId = useActiveSection(items);

  return (
    <nav className={cn("flex flex-col gap-4", className)}>
      <h4 className="text-sm uppercase tracking-wide text-zinc-950 dark:text-zinc-50 mb-2 font-semibold">
        On this page
      </h4>
      <div className="flex flex-col gap-2.5 text-sm text-zinc-500 dark:text-zinc-400 font-normal border-l border-zinc-200/50 dark:border-zinc-800/50 pl-4">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "transition-all hover:text-zinc-950 dark:hover:text-zinc-50 -ml-[17px] pl-4 border-l border-transparent hover:border-l-zinc-950 dark:hover:border-l-zinc-50",
                activeId === item.id &&
                  "text-zinc-950 dark:text-zinc-50 border-l-zinc-950 dark:border-l-zinc-50",
              )}
            >
              {item.label}
            </a>
            {item.children && item.children.length > 0 && (
              <div className="pl-4 flex flex-col gap-2 ml-1 border-l border-zinc-200/50 dark:border-zinc-800/50">
                {item.children.map((child) => (
                  <a
                    key={child.id}
                    href={`#${child.id}`}
                    className={cn(
                      "transition-colors py-1 text-xs hover:text-zinc-950 dark:hover:text-zinc-50",
                      activeId === child.id &&
                        "text-zinc-950 dark:text-zinc-50 font-medium",
                    )}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}
