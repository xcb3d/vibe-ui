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
      <h4 className="text-sm uppercase tracking-wide text-foreground mb-2 font-semibold">
        On this page
      </h4>
      <div className="flex flex-col gap-2.5 text-sm text-muted-foreground font-normal border-l border-border/50 pl-4">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "transition-all hover:text-foreground -ml-[17px] pl-4 border-l border-transparent hover:border-l-foreground",
                activeId === item.id && "text-foreground border-l-foreground",
              )}
            >
              {item.label}
            </a>
            {item.children && item.children.length > 0 && (
              <div className="pl-4 flex flex-col gap-2 ml-1 border-l border-border/50">
                {item.children.map((child) => (
                  <a
                    key={child.id}
                    href={`#${child.id}`}
                    className={cn(
                      "transition-colors py-1 text-xs hover:text-foreground",
                      activeId === child.id && "text-foreground font-medium",
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
