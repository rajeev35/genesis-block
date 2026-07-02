"use client";

export function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-20 overflow-hidden">

      <div className="absolute left-[-15%] top-[-10%] h-[500px] w-[500px] animate-blob rounded-full bg-yellow-500/15 blur-3xl" />

      <div className="absolute right-[-10%] top-[15%] h-[450px] w-[450px] animate-blob animation-delay-2000 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="absolute bottom-[-20%] left-1/2 h-[500px] w-[500px] -translate-x-1/2 animate-blob animation-delay-4000 rounded-full bg-amber-400/10 blur-3xl" />

    </div>
  );
}