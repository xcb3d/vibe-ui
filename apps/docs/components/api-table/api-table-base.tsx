"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ApiTableProps } from "./api-table-types";

interface ApiTableComponents {
  Table: React.ComponentType<React.HTMLAttributes<HTMLTableElement>>;
  TableHeader: React.ComponentType<
    React.HTMLAttributes<HTMLTableSectionElement>
  >;
  TableBody: React.ComponentType<React.HTMLAttributes<HTMLTableSectionElement>>;
  TableRow: React.ComponentType<React.HTMLAttributes<HTMLTableRowElement>>;
  TableHead: React.ComponentType<React.HTMLAttributes<HTMLTableCellElement>>;
  TableCell: React.ComponentType<React.HTMLAttributes<HTMLTableCellElement>>;
  TooltipProvider: React.ComponentType<{
    children: React.ReactNode;
    delayDuration?: number;
  }>;
  Tooltip: React.ComponentType<{ children: React.ReactNode }>;
  TooltipTrigger: React.ComponentType<{
    children: React.ReactNode;
    asChild?: boolean;
  }>;
  TooltipContent: React.ComponentType<{
    children: React.ReactNode;
    className?: string;
  }>;
}

export interface ApiTableBaseProps extends ApiTableProps, ApiTableComponents {}

/**
 * Base component for ApiTable.
 * Accepts themed components via props to avoid duplication across themes.
 */
export function ApiTableBase({
  props,
  className,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
}: ApiTableBaseProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Table className={cn("rounded-lg", className)}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Prop</TableHead>
            <TableHead className="w-1/3">Type</TableHead>
            <TableHead className="w-1/3">Default</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.map((prop) => (
            <TableRow key={prop.name}>
              <TableCell className="font-mono">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span
                      tabIndex={0}
                      className="cursor-help border-b border-dashed border-muted-foreground"
                    >
                      {prop.name}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs">
                    {prop.description}
                  </TooltipContent>
                </Tooltip>
              </TableCell>
              <TableCell className="font-mono">{prop.type}</TableCell>
              <TableCell className="font-mono">{prop.default || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TooltipProvider>
  );
}
