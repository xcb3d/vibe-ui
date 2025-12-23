"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@vibe-ui/registry/ui/neubrutalism/dropdown-menu";
import { Button } from "@vibe-ui/registry/ui/neubrutalism/button";
import { ThemeSwitcherBase, ThemeToggleBase } from "./theme-switcher-base";

const classNames = {
  button:
    "border-2 border-black hover:bg-accent hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all",
  buttonDisabled: "border-2 border-black",
  content: "border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
  item: "flex items-center gap-2 font-bold",
};

const renderLabel = (label: string) => (
  <span className="uppercase tracking-wide">{label}</span>
);

export const ThemeSwitcherNeubrutalism = () => (
  <ThemeSwitcherBase
    Button={Button}
    DropdownMenu={DropdownMenu}
    DropdownMenuTrigger={DropdownMenuTrigger}
    DropdownMenuContent={DropdownMenuContent}
    DropdownMenuRadioGroup={DropdownMenuRadioGroup}
    DropdownMenuRadioItem={DropdownMenuRadioItem}
    classNames={classNames}
    renderLabel={renderLabel}
  />
);

export const ThemeToggleNeubrutalism = () => (
  <ThemeToggleBase Button={Button} classNames={classNames} />
);
