"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  MousePointer2,
  Layers,
  TextCursorInput,
  LayoutDashboard,
  Square,
  Info,
} from "lucide-react";
import { componentCategories, navigation } from "./sidebar-data";

export function DocsSidebarMinimal() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-16 left-0 z-30 hidden h-[calc(100vh-4rem)] w-64 overflow-y-auto border-r border-border/50 bg-background/50 pb-10 lg:block">
      <div className="p-4 pt-6">
        {/* Header */}
        <div className="flex flex-col mb-6 px-2">
          <h1 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
            Platform
          </h1>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full" />
            <p className="text-foreground text-sm font-medium">v3.0.0 (Mono)</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-0.5">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-2.5 px-3 py-2 rounded-md transition-all",
                  pathname === item.href
                    ? "bg-foreground/5 text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                )}
              >
                <Icon className="h-[18px] w-[18px] opacity-70" />
                <p className="text-sm font-medium">{item.title}</p>
              </Link>
            );
          })}

          {/* Separator */}
          <div className="h-px bg-border/50 my-2 mx-3" />

          {/* Component categories */}
          {componentCategories.map((category) => (
            <div key={category.title}>
              <p className="text-[10px] font-bold text-muted-foreground px-3 uppercase tracking-wider mt-4 mb-1">
                {category.title}
              </p>
              {category.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex items-center gap-2.5 px-3 py-2 rounded-md transition-all",
                      pathname === item.href
                        ? "bg-foreground/5 text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                    )}
                  >
                    <Icon className="h-[18px] w-[18px] opacity-70" />
                    <p className="text-sm font-medium">{item.title}</p>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export function MobileSidebarMinimal() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden">
      <aside className="fixed inset-y-0 left-0 z-50 w-72 bg-background p-6 overflow-y-auto border-r border-border/50">
        <div className="flex flex-col mb-6">
          <h1 className="text-lg font-bold text-foreground mb-1">Components</h1>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-neutral-500 rounded-full" />
            <p className="text-muted-foreground text-xs font-medium">
              v3.0.0 (Mono)
            </p>
          </div>
        </div>
        <nav className="space-y-4">
          {componentCategories.map((category) => (
            <div key={category.title}>
              <p className="text-[10px] font-bold text-muted-foreground px-3 uppercase tracking-wider mb-1">
                {category.title}
              </p>
              {category.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-2.5 px-3 py-2 text-sm rounded-md transition-colors",
                      pathname === item.href
                        ? "bg-foreground/5 text-foreground font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                    )}
                  >
                    <Icon className="h-[18px] w-[18px] opacity-70" />
                    {item.title}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}
