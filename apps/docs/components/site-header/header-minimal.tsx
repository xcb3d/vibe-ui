"use client";

import Link from "next/link";
import { Button } from "@vibe-ui/registry/ui/minimal/button";
import { Badge } from "@vibe-ui/registry/ui/minimal/badge";
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
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 flex-none">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-10">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-all"
          >
            <div className="size-8 flex items-center justify-center bg-zinc-950/10 dark:bg-zinc-50/10 text-zinc-950 dark:text-zinc-50 rounded-lg transition-colors group-hover:bg-zinc-950 dark:group-hover:bg-zinc-50 group-hover:text-white dark:group-hover:text-zinc-950">
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
                  className="px-3 py-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 rounded-md transition-colors"
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 rounded-md transition-colors"
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
