import * as React from "react";
import { cn } from "@/lib/utils";

interface GBSectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

export function GBSection({
  children,
  className,
  ...props
}: GBSectionProps) {
  return (
    <section
      className={cn(
        "py-20 lg:py-28",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}