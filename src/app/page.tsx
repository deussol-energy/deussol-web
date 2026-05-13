import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  Factory,
  FileSearch,
  ShieldCheck,
  TrendingUp,
} from "lucide-react"
import { AppNav } from "@/components/AppNav"

const commandStats = [
  ["Traceable MW", "842", "Across 19 active projects"],
  ["Domestic Content", "63%", "+11 pts after substitutions"],
  ["Risk Holds", "$41.8M", "Credits awaiting evidence"],
  ["Inventory Located", "118 MW", "Tier 1 modules in-market"],
]

const workflow = [
  {
    icon: FileSearch,
    title: "Extract evidence",
    text: "Parse supplier attestations, BOMs, invoices, certificates, and factory declarations into normalized compliance fields.",
  },
  {
    icon: Boxes,
    title: "Trace component origin",
    text: "Connect polysilicon, wafer, cell, module, inverter, and site records into a project-level provenance graph.",
  },
  {
    icon: TrendingUp,
    title: "Source alternatives",
    text: "Compare available inventory, lead times, tariff exposure, price movement, and bankability before procurement stalls.",
  },
]

const evidenceRows = [
  ["Project", "Hill County 180 MW", "Tax equity review"],
  ["Module", "Qcells 580W Bifacial", "67% domestic score"],
  ["Gap", "Wafer origin certificate", "Blocks bonus credit memo"],
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050609] text-white">
      <AppNav />

      <section className="relative overflow-hidden border-b border-white/10 px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(77,163,255,0.20),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(255,191,92,0.16),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.07),transparent_36%)]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 py-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 text-sm text-white/70 shadow-[0_0_60px_rgba(255,255,255,0.08)] backdrop-blur-xl">
              <ShieldCheck className="size-4 text-cyan-300" />
              Infrastructure software for American solar
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              The compliance and procurement layer for domestic solar.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64">
              DeusSol turns fragmented supplier documents, origin data, inventory
              feeds, and procurement signals into a single system of record for
              IRA domestic content, tax equity diligence, and resilient sourcing.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                Launch command center
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/marketplace"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/8 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/12"
              >
                View procurement market
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/12 bg-white/8 p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl">
            <div className="rounded-xl border border-white/10 bg-black/45 p-5">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
                <div>
                  <p className="text-sm text-white/50">Live evidence room</p>
                  <h2 className="mt-1 text-2xl font-semibold">Hill County Solar</h2>
                </div>
                <span className="rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-200">
                  Review required
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {commandStats.map(([label, value, caption]) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-white/6 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                      {label}
                    </p>
                    <p className="mt-3 text-3xl font-semibold">{value}</p>
                    <p className="mt-1 text-sm text-white/48">{caption}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                {evidenceRows.map(([label, value, status]) => (
                  <div
                    key={label}
                    className="grid gap-3 rounded-lg border border-white/10 bg-black/35 p-4 sm:grid-cols-[120px_1fr_auto] sm:items-center"
                  >
                    <p className="text-sm text-white/45">{label}</p>
                    <p className="font-medium">{value}</p>
                    <p className="text-sm text-cyan-200">{status}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-3">
            {workflow.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/6 p-6 backdrop-blur-xl"
              >
                <item.icon className="size-5 text-cyan-300" />
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/58">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-xl border border-white/10 bg-white/6 p-6">
              <Factory className="size-5 text-amber-200" />
              <h3 className="mt-5 text-xl font-semibold">Built for regulated buyers</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/58">
                Developers, EPCs, manufacturers, tax equity desks, public agencies,
                and defense energy teams all need defensible supplier evidence before
                capital, steel, and modules move.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/6 p-6">
              <BadgeCheck className="size-5 text-emerald-300" />
              <h3 className="mt-5 text-xl font-semibold">VC demo story</h3>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/58">
                The demo shows a project at risk, extracts supplier evidence, maps
                origin through the solar stack, then finds compliant supply before
                the procurement window closes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
