import Link from "next/link"
import {
  AlertTriangle,
  ArrowRight,
  BadgeDollarSign,
  Boxes,
  CircleDollarSign,
  FileCheck2,
  ShieldAlert,
} from "lucide-react"
import { AppNav } from "@/components/AppNav"

const metrics = [
  ["Domestic content", "63%", "+8 pts with approved alternates", "text-emerald-200"],
  ["Evidence gaps", "11", "Across 4 supplier packages", "text-amber-200"],
  ["At-risk credits", "$41.8M", "Pending tax equity review", "text-rose-200"],
  ["Market substitutes", "27", "Available inside lead window", "text-cyan-200"],
]

const queue = [
  {
    title: "Wafer origin certificate missing",
    desc: "Module BOM references a Malaysian wafer input, but certificate packet only includes cell and module factory attestations.",
    risk: "High",
    owner: "Compliance",
  },
  {
    title: "Lead-time exposure on domestic inverters",
    desc: "Preferred inverter SKU moved from 8 weeks to 14 weeks after public-sector demand spike.",
    risk: "Medium",
    owner: "Procurement",
  },
  {
    title: "Tax equity data room incomplete",
    desc: "Three purchase orders lack component-level origin evidence needed for domestic-content memo.",
    risk: "Medium",
    owner: "Finance",
  },
]

const projects = [
  ["Hill County Solar", "180 MW", "63%", "$18.6M", "Review required"],
  ["Canyon Mesa Storage + PV", "92 MW", "71%", "$8.4M", "On track"],
  ["Fort Liberty Microgrid", "38 MW", "79%", "$5.1M", "Procurement hold"],
  ["Red River Portfolio", "240 MW", "58%", "$9.7M", "Substitute needed"],
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#050609] text-white">
      <AppNav />
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm text-white/45">DeusSol Command Center</p>
            <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Compliance risk, procurement exposure, and bonus-credit readiness.
            </h1>
          </div>
          <Link
            href="/marketplace"
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Source replacements
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-4">
          {metrics.map(([title, value, caption, color]) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/7 p-5 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            >
              <p className="text-sm text-white/48">{title}</p>
              <p className={`mt-4 text-3xl font-semibold ${color}`}>{value}</p>
              <p className="mt-2 text-sm leading-5 text-white/45">{caption}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="rounded-xl border border-white/10 bg-white/7 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Supplier Risk Queue</h2>
                <p className="mt-1 text-sm text-white/45">
                  Evidence issues that can delay IRA bonus credits, tax equity, or government procurement.
                </p>
              </div>
              <ShieldAlert className="size-5 text-amber-200" />
            </div>

            <div className="mt-5 space-y-3">
              {queue.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-black/35 p-4"
                >
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="mt-2 text-sm leading-6 text-white/52">{item.desc}</p>
                    </div>
                    <span className="w-fit rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-100">
                      {item.risk}
                    </span>
                  </div>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/35">
                    Owner: {item.owner}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-white/10 bg-white/7 p-5 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Procurement Signals</h2>
                <p className="mt-1 text-sm text-white/45">
                  Marketplace intelligence connected to compliance outcomes.
                </p>
              </div>
              <Boxes className="size-5 text-cyan-200" />
            </div>

            <div className="mt-6 grid gap-3">
              {[
                [BadgeDollarSign, "Module ASP", "$0.184/W", "Down 3.2% over 30 days"],
                [AlertTriangle, "Tariff watch", "2 SKUs", "Southeast Asia routing flagged"],
                [FileCheck2, "Bankable supply", "64 MW", "Accepted by active tax equity desks"],
                [CircleDollarSign, "Credit upside", "$12.4M", "Recoverable through substitutions"],
              ].map(([Icon, label, value, caption]) => (
                <div
                  key={label as string}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-lg border border-white/10 bg-black/35 p-4"
                >
                  <Icon className="size-5 text-white/65" />
                  <div>
                    <p className="text-sm text-white/45">{label as string}</p>
                    <p className="mt-1 text-sm text-white/56">{caption as string}</p>
                  </div>
                  <p className="text-lg font-semibold">{value as string}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <section className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white/7 backdrop-blur-xl">
          <div className="border-b border-white/10 p-5">
            <h2 className="text-xl font-semibold">Project Credit Exposure</h2>
            <p className="mt-1 text-sm text-white/45">
              A portfolio view of where sourcing decisions affect project economics.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="border-b border-white/10 text-white/42">
                <tr>
                  <th className="px-5 py-3 font-medium">Project</th>
                  <th className="px-5 py-3 font-medium">Size</th>
                  <th className="px-5 py-3 font-medium">Domestic content</th>
                  <th className="px-5 py-3 font-medium">Credit exposure</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(([name, size, score, exposure, status]) => (
                  <tr key={name} className="border-b border-white/7 last:border-0">
                    <td className="px-5 py-4 font-medium">{name}</td>
                    <td className="px-5 py-4 text-white/58">{size}</td>
                    <td className="px-5 py-4 text-white/58">{score}</td>
                    <td className="px-5 py-4 text-white/58">{exposure}</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs text-white/68">
                        {status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  )
}
