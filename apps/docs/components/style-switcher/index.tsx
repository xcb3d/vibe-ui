"use client";

import { useStyle } from "@/components/style-provider";
import {
  StyleSwitcherMinimal,
  StyleSwitcherButtonsMinimal,
  StyleSwitcherGridMinimal,
} from "./style-switcher-minimal";
import {
  StyleSwitcherNeubrutalism,
  StyleSwitcherButtonsNeubrutalism,
  StyleSwitcherGridNeubrutalism,
} from "./style-switcher-neubrutalism";

export function StyleSwitcher() {
  const { style } = useStyle();

  if (style === "minimal") {
    return <StyleSwitcherMinimal />;
  }

  return <StyleSwitcherNeubrutalism />;
}

export function StyleSwitcherButtons() {
  const { style } = useStyle();

  if (style === "minimal") {
    return <StyleSwitcherButtonsMinimal />;
  }

  return <StyleSwitcherButtonsNeubrutalism />;
}

export function StyleSwitcherGrid() {
  const { style } = useStyle();

  if (style === "minimal") {
    return <StyleSwitcherGridMinimal />;
  }

  return <StyleSwitcherGridNeubrutalism />;
}

// Alias for backward compatibility
export { StyleSwitcher as StyleSwitcherDropdown };

// Re-exports
export {
  StyleSwitcherMinimal,
  StyleSwitcherButtonsMinimal,
  StyleSwitcherGridMinimal,
} from "./style-switcher-minimal";
export {
  StyleSwitcherNeubrutalism,
  StyleSwitcherButtonsNeubrutalism,
  StyleSwitcherGridNeubrutalism,
} from "./style-switcher-neubrutalism";
export { PaletteIcon, styleIcons } from "./style-switcher-icons";
