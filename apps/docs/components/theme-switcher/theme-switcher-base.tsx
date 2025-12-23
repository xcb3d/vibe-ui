"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, themes } from "./theme-switcher-icons";

interface ClassNames {
  button: string;
  buttonDisabled: string;
  content: string;
  item: string;
}

interface ThemeSwitcherComponents {
  Button: React.ComponentType<any>;
  DropdownMenu: React.ComponentType<any>;
  DropdownMenuTrigger: React.ComponentType<any>;
  DropdownMenuContent: React.ComponentType<any>;
  DropdownMenuRadioGroup: React.ComponentType<any>;
  DropdownMenuRadioItem: React.ComponentType<any>;
}

export interface ThemeSwitcherBaseProps extends ThemeSwitcherComponents {
  classNames: ClassNames;
  renderLabel?: (label: string) => React.ReactNode;
}

export interface ThemeToggleBaseProps {
  Button: React.ComponentType<any>;
  classNames: Pick<ClassNames, "button" | "buttonDisabled">;
}

/**
 * Base component for ThemeSwitcher dropdown.
 * Accepts themed components via props to avoid duplication across themes.
 */
export function ThemeSwitcherBase({
  Button,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  classNames,
  renderLabel = (label) => label,
}: ThemeSwitcherBaseProps) {
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
        className={classNames.buttonDisabled}
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
          className={classNames.button}
        >
          <SunIcon />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={classNames.content}>
        <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
          {themes.map((t) => (
            <DropdownMenuRadioItem
              key={t.value}
              value={t.value}
              className={classNames.item}
            >
              <t.icon />
              {renderLabel(t.label)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/**
 * Base component for ThemeToggle button.
 * Simple light/dark toggle without dropdown.
 */
export function ThemeToggleBase({ Button, classNames }: ThemeToggleBaseProps) {
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
        className={classNames.buttonDisabled}
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
      className={classNames.button}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
      <span className="sr-only">
        {isDark ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </Button>
  );
}
