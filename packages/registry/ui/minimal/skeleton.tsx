import { cn } from "../../lib/utils";
import type { SkeletonProps } from "../types/skeleton";

/**
 * Minimal Skeleton - Subtle pulse
 */
function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-gray-100 dark:bg-gray-800",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
