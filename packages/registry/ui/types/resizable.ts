import type * as React from "react";
import type { PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export interface ResizablePanelGroupProps extends Omit<
  React.ComponentProps<typeof PanelGroup>,
  "direction"
> {
  direction?: "horizontal" | "vertical";
}

export interface ResizableHandleProps extends React.ComponentProps<
  typeof PanelResizeHandle
> {
  withHandle?: boolean;
}
