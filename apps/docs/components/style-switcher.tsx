"use client";

import * as React from "react";
import { useStyle, type StyleName } from "./style-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const PaletteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4"
  >
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const styleIcons: Record<StyleName, React.ReactNode> = {
  minimal: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  ),
  glass: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" opacity="0.5" />
      <rect x="6" y="6" width="12" height="12" rx="1" />
    </svg>
  ),
  brutalist: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <rect x="3" y="3" width="18" height="18" />
      <line x1="6" y1="22" x2="22" y2="22" />
      <line x1="22" y1="6" x2="22" y2="22" />
    </svg>
  ),
  soft: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" opacity="0.5" />
    </svg>
  ),
  neon: (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <polygon points="12,2 22,12 12,22 2,12" />
      <polygon points="12,6 18,12 12,18 6,12" opacity="0.5" />
    </svg>
  ),
};

export function StyleSwitcher() {
  const { style, setStyle, styles } = useStyle();

  return (
    <div className="flex flex-wrap gap-2">
      {styles.map((s) => (
        <button
          key={s.name}
          onClick={() => setStyle(s.name)}
          className={`
            inline-flex items-center gap-2 px-4 py-2 text-sm font-medium
            rounded-lg border transition-all duration-200
            ${
              style === s.name
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-card-foreground border-border hover:bg-accent hover:text-accent-foreground"
            }
          `}
          title={s.description}
        >
          {styleIcons[s.name]}
          <span>{s.label}</span>
        </button>
      ))}
    </div>
  );
}

export function StyleSwitcherCompact() {
  const { style, setStyle, styles } = useStyle();

  return (
    <div className="relative inline-block">
      <select
        value={style}
        onChange={(e) => setStyle(e.target.value as StyleName)}
        className="
          appearance-none bg-card text-card-foreground
          border border-border rounded-lg px-4 py-2 pr-8
          text-sm font-medium cursor-pointer
          hover:bg-accent transition-colors
        "
      >
        {styles.map((s) => (
          <option key={s.name} value={s.name}>
            {s.label}
          </option>
        ))}
      </select>
      <svg
        className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
}

export function StyleSwitcherGrid() {
  const { style, setStyle, styles } = useStyle();

  return (
    <div className="grid grid-cols-5 gap-3">
      {styles.map((s) => (
        <button
          key={s.name}
          onClick={() => setStyle(s.name)}
          className={`
            flex flex-col items-center gap-2 p-4
            rounded-xl border-2 transition-all duration-200
            ${
              style === s.name
                ? "border-primary bg-primary/10 shadow-lg scale-105"
                : "border-border bg-card hover:border-primary/50 hover:shadow-md"
            }
          `}
        >
          <div
            className={`
            w-10 h-10 rounded-lg flex items-center justify-center
            ${style === s.name ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}
          `}
          >
            {styleIcons[s.name]}
          </div>
          <span className="text-sm font-medium">{s.label}</span>
          <span className="text-xs text-muted-foreground text-center">
            {s.description}
          </span>
        </button>
      ))}
    </div>
  );
}

export function StyleSwitcherDropdown() {
  const { style, setStyle, styles } = useStyle();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" title="Change style">
          <PaletteIcon />
          <span className="sr-only">Change style</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={style}
          onValueChange={(value) => setStyle(value as StyleName)}
        >
          {styles.map((s) => (
            <DropdownMenuRadioItem
              key={s.name}
              value={s.name}
              className="flex flex-col items-start gap-0.5 py-2"
            >
              <span className="font-medium">{s.label}</span>
              <span className="text-xs text-muted-foreground">
                {s.description}
              </span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
