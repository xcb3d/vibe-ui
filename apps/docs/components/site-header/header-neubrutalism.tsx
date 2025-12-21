"use client";

import Link from "next/link";
import { Button } from "@vibe-ui/registry/ui/neubrutalism/button";
import { Badge } from "@vibe-ui/registry/ui/neubrutalism/badge";
import { StyleSwitcherDropdown } from "@/components/style-switcher";
import { ThemeSwitcher } from "@/components/theme-switcher";

// Navigation links shared across themes
const navLinks = [
  { title: "Components", href: "/components" },
  { title: "Docs", href: "/docs" },
  { title: "Github", href: "https://github.com", external: true },
];

export function SiteHeaderNeubrutalism() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b-4 border-black flex-none">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-10">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-all hover:translate-x-1"
          >
            <div className="size-10 flex items-center justify-center bg-primary text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-colors group-hover:bg-accent font-black">
              V
            </div>
            <span className="text-2xl font-black uppercase leading-tight tracking-tight">
              Vibe_UI
            </span>
            <Badge
              variant="secondary"
              className="text-xs capitalize border-2 border-black"
            >
              neubrutalism
            </Badge>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.title}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-bold uppercase hover:text-accent hover:underline decoration-4 underline-offset-4 decoration-primary transition-all"
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
            className="hidden sm:inline-flex uppercase font-bold border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all"
          >
            <Link href="/docs">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
