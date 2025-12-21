"use client";

import { cn } from "@/lib/utils";
import { ApiTableProps } from "./api-table-types";

export function ApiTableNeubrutalism({ props, className }: ApiTableProps) {
  return (
    <div
      className={cn(
        "overflow-x-auto bg-card rounded-lg border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]",
        className,
      )}
    >
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-black text-white border-b-2 border-black">
            <th className="p-4 w-1/4 text-sm font-black uppercase tracking-wider border-r-2 border-white/20">
              Prop
            </th>
            <th className="p-4 w-1/4 text-sm font-black uppercase tracking-wider border-r-2 border-white/20">
              Type
            </th>
            <th className="p-4 w-1/4 text-sm font-black uppercase tracking-wider border-r-2 border-white/20">
              Default
            </th>
            <th className="p-4 text-sm font-black uppercase tracking-wider">
              Description
            </th>
          </tr>
        </thead>
        <tbody className="text-sm divide-y-2 divide-black font-medium">
          {props.map((prop) => (
            <tr
              key={prop.name}
              className="group transition-colors hover:bg-primary/20"
            >
              <td className="p-4 font-mono border-r-2 border-black text-accent font-bold">
                {prop.name}
              </td>
              <td className="p-4 text-muted-foreground font-mono border-r-2 border-black">
                {prop.type}
              </td>
              <td className="p-4 text-foreground font-mono border-r-2 border-black">
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
