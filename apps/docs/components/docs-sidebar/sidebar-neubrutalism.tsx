"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { componentCategories, navigation } from "./sidebar-data";

export function DocsSidebarNeubrutalism() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-16 left-0 z-30 hidden h-[calc(100vh-4rem)] w-64 overflow-y-auto border-r-4 border-black bg-background pb-10 lg:block">
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col mb-8">
          <h1 className="text-foreground text-lg font-black uppercase tracking-wider mb-1">
            Components
          </h1>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-accent border-2 border-black rounded-full animate-pulse" />
            <p className="text-muted-foreground text-xs font-mono font-bold">
              v1.0.0 Stable
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group flex items-center gap-3 px-3 py-2 border-2 border-transparent rounded-md transition-all",
                  pathname === item.href
                    ? "bg-primary border-black shadow-[3px_3px_0px_0px_#000]"
                    : "hover:border-black hover:bg-primary/20 hover:shadow-[3px_3px_0px_0px_#000]",
                )}
              >
                <span
                  className={cn(
                    "text-muted-foreground",
                    pathname === item.href
                      ? "text-black"
                      : "group-hover:text-black",
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <p
                  className={cn(
                    "text-sm font-bold",
                    pathname === item.href
                      ? "text-black font-black uppercase"
                      : "text-muted-foreground group-hover:text-black",
                  )}
                >
                  {item.title}
                </p>
              </Link>
            );
          })}

          {/* Separator */}
          <div className="h-1 bg-black my-2 rounded-full" />

          {/* Component categories */}
          {componentCategories.map((category) => (
            <div key={category.title}>
              <p className="text-xs font-black text-accent px-3 uppercase tracking-wider mt-4 mb-1">
                {category.title}
              </p>
              {category.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group flex items-center gap-3 px-3 py-2 border-2 border-transparent rounded-md transition-all",
                      pathname === item.href
                        ? "bg-primary border-black shadow-[3px_3px_0px_0px_#000]"
                        : "hover:border-black hover:bg-primary/20 hover:shadow-[3px_3px_0px_0px_#000]",
                    )}
                  >
                    <span
                      className={cn(
                        "text-muted-foreground",
                        pathname === item.href
                          ? "text-black"
                          : "group-hover:text-black",
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                    <p
                      className={cn(
                        "text-sm font-bold",
                        pathname === item.href
                          ? "text-black font-black uppercase"
                          : "text-muted-foreground group-hover:text-black",
                      )}
                    >
                      {item.title}
                    </p>
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

export function MobileSidebarNeubrutalism() {
  const pathname = usePathname();

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden">
      <aside className="fixed inset-y-0 left-0 z-50 w-72 bg-background p-6 overflow-y-auto border-r-4 border-black">
        <div className="flex flex-col mb-6">
          <h1 className="text-lg font-black uppercase tracking-wider text-foreground mb-1">
            Components
          </h1>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-accent border-2 border-black rounded-full animate-pulse" />
            <p className="text-muted-foreground text-xs font-mono font-bold">
              v1.0.0 Stable
            </p>
          </div>
        </div>
        <nav className="space-y-4">
          {componentCategories.map((category) => (
            <div key={category.title}>
              <p className="text-xs font-black text-accent px-3 uppercase tracking-wider mb-1">
                {category.title}
              </p>
              {category.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors font-medium",
                      pathname === item.href
                        ? "bg-primary text-black font-bold border-2 border-black shadow-[2px_2px_0px_0px_#000]"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted",
                    )}
                  >
                    <Icon className="h-5 w-5" />
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
