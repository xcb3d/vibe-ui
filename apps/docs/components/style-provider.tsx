"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export type StyleName = "minimal" | "neubrutalism";

interface StyleContextType {
  style: StyleName;
  setStyle: (style: StyleName) => void;
  styles: { name: StyleName; label: string; description: string }[];
}

const styles: StyleContextType["styles"] = [
  { name: "minimal", label: "Minimal", description: "Clean and simple" },
  {
    name: "neubrutalism",
    label: "Neubrutalism",
    description: "Vivid colors and hard shadows",
  },
];

const StyleContext = React.createContext<StyleContextType | undefined>(
  undefined,
);

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [style, setStyleState] = React.useState<StyleName>("neubrutalism");

  const setStyle = React.useCallback((newStyle: StyleName) => {
    setStyleState(newStyle);
    // Update document class
    document.documentElement.setAttribute("data-style", newStyle);
    // Persist to localStorage
    localStorage.setItem("vibe-ui-style", newStyle);
  }, []);

  // Load saved style on mount
  React.useEffect(() => {
    const saved = localStorage.getItem("vibe-ui-style") as StyleName | null;
    if (saved && styles.some((s) => s.name === saved)) {
      setStyleState(saved);
      document.documentElement.setAttribute("data-style", saved);
    } else {
      document.documentElement.setAttribute("data-style", "neubrutalism");
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
