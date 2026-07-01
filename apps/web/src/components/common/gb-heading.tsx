import * as React from "react";
import { cn } from "@/lib/utils";

interface GBHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const styles = {
  1: "text-5xl md:text-6xl font-bold tracking-tight",
  2: "text-4xl md:text-5xl font-bold tracking-tight",
  3: "text-3xl md:text-4xl font-semibold",
  4: "text-2xl font-semibold",
  5: "text-xl font-semibold",
  6: "text-lg font-semibold",
};

export function GBHeading({
  level = 1,
  className,
  children,
  ...props
}: GBHeadingProps) {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        "font-[family:var(--font-heading)] text-white",
        styles[level],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}