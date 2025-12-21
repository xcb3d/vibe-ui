import { cn } from "../../lib/utils";
import type { SkeletonProps } from "../types/skeleton";

/**
 * Neubrutalism Skeleton - Bold pulse with border
 */
function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-gray-200 border-2 border-black",
        "dark:bg-gray-700 dark:border-white",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
