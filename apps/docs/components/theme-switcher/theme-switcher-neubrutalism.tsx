"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@vibe-ui/registry/ui/neubrutalism/dropdown-menu";
import { Button } from "@vibe-ui/registry/ui/neubrutalism/button";
import { SunIcon, MoonIcon, themes } from "./theme-switcher-icons";

export function ThemeSwitcherNeubrutalism() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        disabled
        className="border-2 border-black"
      >
        <SunIcon />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          title="Toggle theme"
          className="border-2 border-black hover:bg-accent hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
          <SunIcon />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {themes.map((t) => (
            <DropdownMenuRadioItem
              key={t.value}
              value={t.value}
              className="flex items-center gap-2 font-bold"
            >
              <t.icon />
              <span className="uppercase tracking-wide">{t.label}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ThemeToggleNeubrutalism() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        disabled
        className="border-2 border-black"
      >
        <SunIcon />
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="border-2 border-black hover:bg-accent hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </Button>
  );
}
