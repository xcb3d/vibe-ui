"use client";

import { Toaster as Sonner, toast } from "sonner";
import type { ToasterProps } from "../types/sonner";

/**
 * Minimal Toaster - Clean and simple
 */
const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white dark:group-[.toaster]:bg-gray-900 group-[.toaster]:text-gray-900 dark:group-[.toaster]:text-gray-50 group-[.toaster]:border group-[.toaster]:border-gray-200 dark:group-[.toaster]:border-gray-700 group-[.toaster]:shadow-lg group-[.toaster]:rounded-md",
          description:
            "group-[.toast]:text-gray-500 dark:group-[.toast]:text-gray-400",
          actionButton:
            "group-[.toast]:bg-zinc-900 dark:group-[.toast]:bg-white group-[.toast]:text-white dark:group-[.toast]:text-zinc-900 group-[.toast]:border group-[.toast]:border-gray-200 dark:group-[.toast]:border-gray-700 group-[.toast]:rounded-md",
          cancelButton:
            "group-[.toast]:bg-gray-100 dark:group-[.toast]:bg-gray-800 group-[.toast]:text-gray-900 dark:group-[.toast]:text-gray-50 group-[.toast]:border group-[.toast]:border-gray-200 dark:group-[.toast]:border-gray-700 group-[.toast]:rounded-md",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
