import * as React from "react";
import { cn } from "@/lib/utils";

interface GBTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "default" | "muted" | "gold";
}

const variants = {
  default: "text-white",
  muted: "text-zinc-400",
  gold: "text-[var(--primary)]",
};

export function GBText({
  variant = "default",
  className,
  children,
  ...props
}: GBTextProps) {
  return (
    <p
      className={cn(
        "text-base leading-7",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}