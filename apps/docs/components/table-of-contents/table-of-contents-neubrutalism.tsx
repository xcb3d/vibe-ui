"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  TableOfContentsProps,
  useActiveSection,
} from "./table-of-contents-utils";

export function TableOfContentsNeubrutalism({
  items,
  className,
}: TableOfContentsProps) {
  const activeId = useActiveSection(items);

  return (
    <nav className={cn("flex flex-col gap-4", className)}>
      <h4 className="text-sm uppercase tracking-wide text-foreground mb-2 font-black border-b-2 border-black pb-2">
        On this page
      </h4>
      <div className="flex flex-col gap-2.5 text-sm text-muted-foreground font-bold">
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "transition-all hover:text-primary hover:translate-x-1 flex items-center gap-2 group",
                activeId === item.id && "text-primary",
              )}
            >
              <span
                className={cn(
                  "w-2 h-2 bg-black opacity-0 group-hover:opacity-100 transition-opacity",
                  activeId === item.id && "opacity-100 bg-primary",
                )}
              />
              {item.label}
            </a>
            {item.children && item.children.length > 0 && (
              <div className="pl-4 flex flex-col gap-2 ml-1 border-l-2 border-black/20">
                {item.children.map((child) => (
                  <a
                    key={child.id}
                    href={`#${child.id}`}
                    className={cn(
                      "transition-colors py-1 hover:text-foreground",
                      activeId === child.id && "text-foreground font-black",
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
