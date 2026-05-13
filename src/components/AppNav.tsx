import Link from "next/link"

export function AppNav() {
  return (
    <nav className="border-b border-white/10 bg-black px-6 py-4 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          DeusSol
        </Link>

        <div className="flex gap-6 text-sm text-white/60">
          <Link href="/dashboard" className="hover:text-white">
            Dashboard
          </Link>
          <Link href="/upload" className="hover:text-white">
            Upload
          </Link>
          <Link href="/graph" className="hover:text-white">
            Graph
          </Link>
        </div>
      </div>
    </nav>
  )
}