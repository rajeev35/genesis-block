import * as React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface GBInputProps extends React.ComponentProps<typeof Input> {
  label?: string;
  helperText?: string;
  error?: string;
}

export function GBInput({
  label,
  helperText,
  error,
  className,
  ...props
}: GBInputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-sm font-medium text-white">
          {label}
        </label>
      )}

      <Input
        className={cn(
          "h-11 rounded-xl border-zinc-800 bg-zinc-900",
          "focus-visible:ring-[var(--primary)]",
          className
        )}
        {...props}
      />

      {helperText && !error && (
        <p className="text-xs text-zinc-500">
          {helperText}
        </p>
      )}

      {error && (
        <p className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}