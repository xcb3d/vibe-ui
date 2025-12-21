"use client";

import { Toaster as Sonner, toast } from "sonner";
import type { ToasterProps } from "../types/sonner";

/**
 * Neubrutalism Toaster - Bold borders with playful styling
 */
const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-card group-[.toaster]:text-card-foreground group-[.toaster]:border-2 group-[.toaster]:border-black dark:group-[.toaster]:border-white group-[.toaster]:shadow-[4px_4px_0_black] dark:group-[.toaster]:shadow-[4px_4px_0_white]",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:border-2 group-[.toast]:border-black dark:group-[.toast]:border-white group-[.toast]:font-bold group-[.toast]:shadow-[2px_2px_0_black] dark:group-[.toast]:shadow-[2px_2px_0_white]",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground group-[.toast]:border-2 group-[.toast]:border-black dark:group-[.toast]:border-white group-[.toast]:font-bold",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
