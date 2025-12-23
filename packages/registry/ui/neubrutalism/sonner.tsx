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
            "group toast group-[.toaster]:bg-white dark:group-[.toaster]:bg-slate-800 group-[.toaster]:text-stone-900 dark:group-[.toaster]:text-stone-50 group-[.toaster]:border-2 group-[.toaster]:border-black dark:group-[.toaster]:border-white group-[.toaster]:shadow-[4px_4px_0_black] dark:group-[.toaster]:shadow-[4px_4px_0_white]",
          description:
            "group-[.toast]:text-stone-500 dark:group-[.toast]:text-stone-400",
          actionButton:
            "group-[.toast]:bg-yellow-400 group-[.toast]:text-amber-950 group-[.toast]:border-2 group-[.toast]:border-black dark:group-[.toast]:border-white group-[.toast]:font-bold group-[.toast]:shadow-[2px_2px_0_black] dark:group-[.toast]:shadow-[2px_2px_0_white]",
          cancelButton:
            "group-[.toast]:bg-zinc-100 dark:group-[.toast]:bg-zinc-800 group-[.toast]:text-stone-500 dark:group-[.toast]:text-stone-400 group-[.toast]:border-2 group-[.toast]:border-black dark:group-[.toast]:border-white group-[.toast]:font-bold",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
