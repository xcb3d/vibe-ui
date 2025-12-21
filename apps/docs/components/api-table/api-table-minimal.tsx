"use client";

import { cn } from "@/lib/utils";
import { ApiTableProps } from "./api-table-types";

export function ApiTableMinimal({ props, className }: ApiTableProps) {
  return (
    <div
      className={cn(
        "overflow-x-auto bg-card rounded-lg border border-border shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)]",
        className,
      )}
    >
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-muted/30 border-b border-border">
            <th className="p-4 w-1/4 text-xs font-semibold uppercase tracking-wider text-foreground">
              Prop
            </th>
            <th className="p-4 w-1/4 text-xs font-semibold uppercase tracking-wider text-foreground">
              Type
            </th>
            <th className="p-4 w-1/4 text-xs font-semibold uppercase tracking-wider text-foreground">
              Default
            </th>
            <th className="p-4 text-xs font-semibold uppercase tracking-wider text-foreground">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y divide-border font-normal">
          {props.map((prop) => (
            <tr
              key={prop.name}
              className="group transition-colors hover:bg-muted/20"
            >
              <td className="p-4 font-mono text-foreground font-medium">
                {prop.name}
              </td>
              <td className="p-4 text-muted-foreground font-mono">
                {prop.type}
              </td>
              <td className="p-4 text-foreground font-mono">
                {prop.default || "-"}
              </td>
              <td className="p-4 text-muted-foreground group-hover:text-foreground transition-colors">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
