import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function AppNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/70 px-6 py-4 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg border border-white/15 bg-white/10 text-xs">
            DS
          </span>
          <span>DeusSol</span>
        </Link>

        <div className="hidden gap-6 text-sm text-white/60 sm:flex">
          <Link href="/dashboard" className="hover:text-white">
            Dashboard
          </Link>
          <Link href="/marketplace" className="hover:text-white">
            Marketplace
          </Link>
          <Link href="/upload" className="hover:text-white">
            Upload
          </Link>
          <Link href="/graph" className="hover:text-white">
            Graph
          </Link>
        </div>

        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white px-3 py-2 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Open demo
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </nav>
  )
}
