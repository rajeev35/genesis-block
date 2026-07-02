import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "gold" | "success" | "danger" | "info";

interface GBBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variants = {
  gold: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  success: "bg-green-500/10 text-green-400 border-green-500/30",
  danger: "bg-red-500/10 text-red-400 border-red-500/30",
  info: "bg-blue-500/10 text-blue-400 border-blue-500/30",
};

export function GBBadge({
  variant = "gold",
  className,
  children,
  ...props
}: GBBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}