"use client";

import { useStyle } from "@/components/style-provider";
import {
  ThemeSwitcherMinimal,
  ThemeToggleMinimal,
} from "./theme-switcher-minimal";
import {
  ThemeSwitcherNeubrutalism,
  ThemeToggleNeubrutalism,
} from "./theme-switcher-neubrutalism";

export function ThemeSwitcher() {
  const { style } = useStyle();

  if (style === "minimal") {
    return <ThemeSwitcherMinimal />;
  }

  return <ThemeSwitcherNeubrutalism />;
}

export function ThemeToggle() {
  const { style } = useStyle();

  if (style === "minimal") {
    return <ThemeToggleMinimal />;
  }

  return <ThemeToggleNeubrutalism />;
}

// Re-exports
export {
  ThemeSwitcherMinimal,
  ThemeToggleMinimal,
} from "./theme-switcher-minimal";
export {
  ThemeSwitcherNeubrutalism,
  ThemeToggleNeubrutalism,
} from "./theme-switcher-neubrutalism";
export { SunIcon, MoonIcon, MonitorIcon, themes } from "./theme-switcher-icons";
