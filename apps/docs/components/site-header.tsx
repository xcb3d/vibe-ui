"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useStyle } from "@/components/style-provider";
import { StyleSwitcherDropdown } from "@/components/style-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";

export function SiteHeader() {
  const { style } = useStyle();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold">Vibe UI</span>
            <Badge variant="secondary" className="text-xs capitalize">
              {style}
            </Badge>
          </Link>
          <nav className="hidden items-center gap-4 md:flex">
            <Link
              href="/docs"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Docs
            </Link>
            <Link
              href="/components"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Components
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <StyleSwitcherDropdown />
          <ThemeSwitcher />
          <Button size="sm" asChild className="hidden sm:inline-flex">
            <Link href="/docs">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
