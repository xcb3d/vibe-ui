"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StyleSwitcherDropdown } from "@/components/style-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";

// Navigation links shared across themes
const navLinks = [
  { title: "Components", href: "/components" },
  { title: "Docs", href: "/docs" },
  { title: "Github", href: "https://github.com", external: true },
];

export function SiteHeaderMinimal() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/50 flex-none">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-10">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-all"
          >
            <div className="size-8 flex items-center justify-center bg-foreground/10 text-foreground rounded-lg transition-colors group-hover:bg-foreground group-hover:text-background">
              <span className="text-sm font-bold">V</span>
            </div>
            <span className="text-lg font-bold leading-tight tracking-tight">
              VibeUI
            </span>
            <Badge variant="secondary" className="text-xs capitalize">
              minimal
            </Badge>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md transition-colors"
                >
                  {link.title}
                </Link>
              ),
            )}
          </nav>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <StyleSwitcherDropdown />
          <ThemeSwitcher />
          <Button
            size="sm"
            asChild
            className="hidden sm:inline-flex font-medium shadow-sm hover:shadow-md transition-all"
          >
            <Link href="/docs">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
