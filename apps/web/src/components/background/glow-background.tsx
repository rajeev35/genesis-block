"use client";

export function GlowBackground() {
  return (
    <>
      <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />

      <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-orange-400/10 blur-[150px]" />
    </>
  );
}