"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {
  type StyleName,
  getAllStyles,
  DEFAULT_STYLE,
  isValidStyle,
} from "@/components/demos/theme-registry";

// Re-export StyleName for backward compatibility
export type { StyleName };

interface StyleContextType {
  style: StyleName;
  setStyle: (style: StyleName) => void;
  styles: { name: StyleName; label: string; description: string }[];
}

// Derived from theme registry (single source of truth)
const styles = getAllStyles();

const StyleContext = React.createContext<StyleContextType | undefined>(
  undefined,
);

// Dynamic CSS loader for theme switching
function loadThemeCSS(theme: StyleName) {
  const linkId = "vibe-ui-theme";
  let link = document.getElementById(linkId) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.id = linkId;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }

  link.href = `/styles/${theme}.css`;
}

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [style, setStyleState] = React.useState<StyleName>(DEFAULT_STYLE);

  const setStyle = React.useCallback((newStyle: StyleName) => {
    setStyleState(newStyle);
    loadThemeCSS(newStyle);
    localStorage.setItem("vibe-ui-style", newStyle);
  }, []);

  // Load saved style on mount
  React.useEffect(() => {
    const saved = localStorage.getItem("vibe-ui-style");
    if (saved && isValidStyle(saved)) {
      setStyleState(saved);
      loadThemeCSS(saved);
    } else {
      loadThemeCSS(DEFAULT_STYLE);
    }
  }, []);

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <StyleContext.Provider value={{ style, setStyle, styles }}>
        {children}
      </StyleContext.Provider>
    </NextThemesProvider>
  );
}

export function useStyle() {
  const context = React.useContext(StyleContext);
  if (!context) {
    throw new Error("useStyle must be used within a StyleProvider");
  }
  return context;
}
