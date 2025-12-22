"use client";

import { cn } from "@/lib/utils";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@vibe-ui/registry/ui/minimal/table";
import { ApiTableProps } from "./api-table-types";

export function ApiTableMinimal({ props, className }: ApiTableProps) {
  return (
    <Table className={cn("rounded-lg", className)}>
      <TableHeader className="bg-muted/30">
        <TableRow>
          <TableHead className="w-1/4 text-xs font-semibold uppercase tracking-wider">
            Prop
          </TableHead>
          <TableHead className="w-1/4 text-xs font-semibold uppercase tracking-wider">
            Type
          </TableHead>
          <TableHead className="w-1/4 text-xs font-semibold uppercase tracking-wider">
            Default
          </TableHead>
          <TableHead className="text-xs font-semibold uppercase tracking-wider">
            Description
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.map((prop) => (
          <TableRow key={prop.name} className="group">
            <TableCell className="font-mono text-foreground font-medium">
              {prop.name}
            </TableCell>
            <TableCell className="text-muted-foreground font-mono">
              {prop.type}
            </TableCell>
            <TableCell className="text-foreground font-mono">
              {prop.default || "-"}
            </TableCell>
            <TableCell className="text-muted-foreground group-hover:text-foreground transition-colors">
              {prop.description}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
