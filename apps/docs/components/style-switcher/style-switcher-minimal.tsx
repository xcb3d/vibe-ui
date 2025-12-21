"use client";

import { useStyle, type StyleName } from "../style-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@vibe-ui/registry/ui/minimal/dropdown-menu";
import { Button } from "@vibe-ui/registry/ui/minimal/button";
import { PaletteIcon, styleIcons } from "./style-switcher-icons";

export function StyleSwitcherMinimal() {
  const { style, setStyle, styles } = useStyle();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          title="Change style"
          className="hover:bg-muted/50"
        >
          <PaletteIcon />
          <span className="sr-only">Change style</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border border-border shadow-sm"
      >
        <DropdownMenuRadioGroup
          value={style}
          onValueChange={(value: string) => setStyle(value as StyleName)}
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

export function StyleSwitcherButtonsMinimal() {
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
                ? "bg-foreground/5 text-foreground border-border"
                : "bg-transparent text-muted-foreground border-transparent hover:bg-muted/50 hover:text-foreground"
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

export function StyleSwitcherGridMinimal() {
  const { style, setStyle, styles } = useStyle();

  return (
    <div className="grid grid-cols-2 gap-3">
      {styles.map((s) => (
        <button
          key={s.name}
          onClick={() => setStyle(s.name)}
          className={`
            flex flex-col items-center gap-2 p-4
            rounded-xl border transition-all duration-200
            ${
              style === s.name
                ? "border-foreground/20 bg-foreground/5 shadow-sm"
                : "border-border bg-transparent hover:border-foreground/10 hover:shadow-sm"
            }
          `}
        >
          <div
            className={`
              w-10 h-10 rounded-lg flex items-center justify-center
              ${style === s.name ? "bg-foreground/10 text-foreground" : "bg-muted text-muted-foreground"}
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
