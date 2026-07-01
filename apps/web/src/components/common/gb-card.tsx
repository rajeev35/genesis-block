import * as React from "react";
import { cn } from "@/lib/utils";

interface GBCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GBCard({
  children,
  className,
  ...props
}: GBCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-md",
        "p-6 transition-all duration-300",
        "hover:border-[var(--primary)] hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}