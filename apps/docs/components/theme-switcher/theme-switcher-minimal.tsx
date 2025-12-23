"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@vibe-ui/registry/ui/minimal/dropdown-menu";
import { Button } from "@vibe-ui/registry/ui/minimal/button";
import { ThemeSwitcherBase, ThemeToggleBase } from "./theme-switcher-base";

const classNames = {
  button: "hover:bg-muted/50",
  buttonDisabled: "hover:bg-muted/50",
  content: "border border-border shadow-sm",
  item: "flex items-center gap-2",
};

export const ThemeSwitcherMinimal = () => (
  <ThemeSwitcherBase
    Button={Button}
    DropdownMenu={DropdownMenu}
    DropdownMenuTrigger={DropdownMenuTrigger}
    DropdownMenuContent={DropdownMenuContent}
    DropdownMenuRadioGroup={DropdownMenuRadioGroup}
    DropdownMenuRadioItem={DropdownMenuRadioItem}
    classNames={classNames}
  />
);

export const ThemeToggleMinimal = () => (
  <ThemeToggleBase Button={Button} classNames={classNames} />
);
