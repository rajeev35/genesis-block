export function GradientBackground() {
  return (
    <>
      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-yellow-500/15 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[160px]" />
    </>
  );
}