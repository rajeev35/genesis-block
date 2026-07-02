import Link from "next/link";

export function NavbarLogo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-opacity duration-300 hover:opacity-90"
    >
      {/* Logo */}
      <div
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          bg-gradient-to-br
          from-yellow-400
          to-yellow-600
          text-lg
          font-bold
          text-black
          shadow-lg
          shadow-yellow-500/20
        "
      >
        G
      </div>

      {/* Brand */}

      <div className="flex flex-col">

        <span className="font-[family:var(--font-heading)] text-xl font-bold text-white">
          Golu Vlogs
        </span>

        <span className="text-xs tracking-wide text-zinc-400">
          Learn • Trade • Grow
        </span>

      </div>
    </Link>
  );
}