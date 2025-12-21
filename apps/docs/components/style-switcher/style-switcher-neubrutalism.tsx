"use client";

import { useStyle, type StyleName } from "../style-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@vibe-ui/registry/ui/neubrutalism/dropdown-menu";
import { Button } from "@vibe-ui/registry/ui/neubrutalism/button";
import { PaletteIcon, styleIcons } from "./style-switcher-icons";

export function StyleSwitcherNeubrutalism() {
  const { style, setStyle, styles } = useStyle();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          title="Change style"
          className="border-2 border-black hover:bg-accent hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
        >
          <PaletteIcon />
          <span className="sr-only">Change style</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        <DropdownMenuRadioGroup
          value={style}
          onValueChange={(value: string) => setStyle(value as StyleName)}
        >
          {styles.map((s) => (
            <DropdownMenuRadioItem
              key={s.name}
              value={s.name}
              className="flex flex-col items-start gap-0.5 py-2 font-bold"
            >
              <span className="font-black uppercase tracking-wide">
                {s.label}
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                {s.description}
              </span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function StyleSwitcherButtonsNeubrutalism() {
  const { style, setStyle, styles } = useStyle();

  return (
    <div className="flex flex-wrap gap-3">
      {styles.map((s) => (
        <button
          key={s.name}
          onClick={() => setStyle(s.name)}
          className={`
            inline-flex items-center gap-2 px-4 py-2 text-sm font-black uppercase tracking-wide
            border-2 border-black transition-all duration-150
            ${
              style === s.name
                ? "bg-primary text-primary-foreground shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                : "bg-background hover:bg-accent hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
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

export function StyleSwitcherGridNeubrutalism() {
  const { style, setStyle, styles } = useStyle();

  return (
    <div className="grid grid-cols-2 gap-4">
      {styles.map((s) => (
        <button
          key={s.name}
          onClick={() => setStyle(s.name)}
          className={`
            flex flex-col items-center gap-3 p-5
            border-2 border-black transition-all duration-150
            ${
              style === s.name
                ? "bg-primary/10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                : "bg-background hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            }
          `}
        >
          <div
            className={`
              w-12 h-12 border-2 border-black flex items-center justify-center
              ${style === s.name ? "bg-primary text-primary-foreground" : "bg-accent"}
            `}
          >
            {styleIcons[s.name]}
          </div>
          <span className="text-sm font-black uppercase tracking-wide">
            {s.label}
          </span>
          <span className="text-xs text-muted-foreground font-medium text-center">
            {s.description}
          </span>
        </button>
      ))}
    </div>
  );
}
