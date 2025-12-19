"use client";

import * as React from "react";

export type StyleName = "minimal" | "glass" | "brutalist" | "soft" | "neon";

interface StyleContextType {
  style: StyleName;
  setStyle: (style: StyleName) => void;
  styles: { name: StyleName; label: string; description: string }[];
}

const styles: StyleContextType["styles"] = [
  { name: "minimal", label: "Minimal", description: "Clean and simple" },
  { name: "glass", label: "Glass", description: "Frosted glass effect" },
  { name: "brutalist", label: "Brutalist", description: "Bold and raw" },
  { name: "soft", label: "Soft", description: "Neumorphic softness" },
  { name: "neon", label: "Neon", description: "Cyberpunk glow" },
];

const StyleContext = React.createContext<StyleContextType | undefined>(
  undefined,
);

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [style, setStyleState] = React.useState<StyleName>("minimal");

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
      document.documentElement.setAttribute("data-style", "minimal");
    }
  }, []);

  return (
    <StyleContext.Provider value={{ style, setStyle, styles }}>
      {children}
    </StyleContext.Provider>
  );
}

export function useStyle() {
  const context = React.useContext(StyleContext);
  if (!context) {
    throw new Error("useStyle must be used within a StyleProvider");
  }
  return context;
}
