import Link from "next/link";

export function NavbarLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)] text-lg font-bold text-black">
        G
      </div>

      <div className="flex flex-col">
        <span className="font-[family:var(--font-heading)] text-lg font-bold text-white">
          Genesis Block
        </span>

        <span className="text-xs text-zinc-500">
          Learn • Trade • Grow
        </span>
      </div>
    </Link>
  );
}