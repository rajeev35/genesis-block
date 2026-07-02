export function GlowBackground() {
  return (
    <>
      <div className="absolute left-1/3 top-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-[120px]" />

      <div className="absolute right-20 top-60 h-80 w-80 rounded-full bg-orange-500/10 blur-[150px]" />
    </>
  );
}