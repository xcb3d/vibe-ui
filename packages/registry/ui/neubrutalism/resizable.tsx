"use client";

import * as React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { cn } from "../../lib/utils";
import type {
  ResizablePanelGroupProps,
  ResizableHandleProps,
} from "../types/resizable";

const GripVerticalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-2.5 w-2.5"
  >
    <circle cx="9" cy="12" r="1" />
    <circle cx="9" cy="5" r="1" />
    <circle cx="9" cy="19" r="1" />
    <circle cx="15" cy="12" r="1" />
    <circle cx="15" cy="5" r="1" />
    <circle cx="15" cy="19" r="1" />
  </svg>
);

/**
 * Neubrutalism Resizable - Bold borders with playful styling
 */
const ResizablePanelGroup = ({
  className,
  direction = "horizontal",
  ...props
}: ResizablePanelGroupProps) => (
  <PanelGroup
    data-slot="resizable-panel-group"
    direction={direction}
    className={cn(
      "flex h-full w-full",
      direction === "vertical" && "flex-col",
      className,
    )}
    {...props}
  />
);

const ResizablePanel = Panel;

const ResizableHandle = ({
  withHandle,
  className,
  ...props
}: ResizableHandleProps) => (
  <PanelResizeHandle
    data-slot="resizable-handle"
    className={cn(
      "relative flex items-center justify-center",
      "bg-black dark:bg-white",
      "after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
      "data-[panel-group-direction=vertical]:h-1 data-[panel-group-direction=vertical]:w-full",
      "data-[panel-group-direction=horizontal]:w-1 data-[panel-group-direction=horizontal]:h-full",
      "data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0",
      "[&[data-panel-group-direction=vertical]>div]:rotate-90",
      className,
    )}
    {...props}
  >
    {withHandle && (
      <div
        className={cn(
          "z-10 flex h-6 w-4 items-center justify-center rounded-md",
          "bg-yellow-400 border-2 border-black",
          "dark:bg-yellow-500 dark:border-white",
        )}
      >
        <GripVerticalIcon />
      </div>
    )}
  </PanelResizeHandle>
);

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
