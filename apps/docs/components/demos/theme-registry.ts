"use client";

import * as React from "react";
import { getExamplePreview as getNeubrutalismPreview } from "./neubrutalism/example-previews";
import { getExamplePreview as getMinimalPreview } from "./minimal/example-previews";

// Stateful demos module shape
export interface StatefulDemosModule {
  CollapsibleDemo: React.ComponentType;
  CalendarDemo: React.ComponentType;
  DatePickerDemo: React.ComponentType;
  SonnerDemo: React.ComponentType;
  FormDemo: React.ComponentType;
}

// Theme metadata interface
export interface ThemeMetadata {
  name: string;
  label: string;
  description: string;
  getExamplePreview: (slug: string, title: string) => React.ReactNode;
  loadStatefulDemos: () => Promise<StatefulDemosModule>;
}

// Registry definition with const assertion for type inference
export const themeRegistry = {
  neubrutalism: {
    name: "neubrutalism",
    label: "Neubrutalism",
    description: "Vivid colors and hard shadows",
    getExamplePreview: getNeubrutalismPreview,
    loadStatefulDemos: () =>
      import("./neubrutalism/stateful-demos") as Promise<StatefulDemosModule>,
  },
  minimal: {
    name: "minimal",
    label: "Minimal",
    description: "Clean and simple",
    getExamplePreview: getMinimalPreview,
    loadStatefulDemos: () =>
      import("./minimal/stateful-demos") as Promise<StatefulDemosModule>,
  },
} as const satisfies Record<string, ThemeMetadata>;

// Derive StyleName from registry keys
export type StyleName = keyof typeof themeRegistry;

// Type guard for validating style names
export function isValidStyle(style: string): style is StyleName {
  return style in themeRegistry;
}

// Get theme metadata by style name (O(1) lookup)
export function getTheme(style: StyleName): ThemeMetadata {
  return themeRegistry[style];
}

// Get all styles array for StyleProvider
export function getAllStyles(): Array<{
  name: StyleName;
  label: string;
  description: string;
}> {
  return Object.values(themeRegistry).map(({ name, label, description }) => ({
    name: name as StyleName,
    label,
    description,
  }));
}

// Default style
export const DEFAULT_STYLE: StyleName = "neubrutalism";
