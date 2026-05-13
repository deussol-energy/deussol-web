import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Factory,
  LineChart,
  ShieldCheck,
  Shuffle,
  Truck,
} from "lucide-react"
import { AppNav } from "@/components/AppNav"

const listings = [
  {
    product: "Qcells Q.TRON 580W Bifacial",
    supplier: "Qcells USA",
    location: "Dalton, GA",
    inventory: "18.4 MW",
    leadTime: "7-9 weeks",
    price: "$0.184/W",
    tariff: "Low",
    bankability: "Tax equity accepted",
    domestic: "67%",
    status: "Best match",
  },
  {
    product: "First Solar Series 7",
    supplier: "First Solar",
    location: "Perrysburg, OH",
    inventory: "42.0 MW",
    leadTime: "12-16 weeks",
    price: "$0.218/W",
    tariff: "None",
    bankability: "Utility-grade",
    domestic: "82%",
    status: "Credit optimized",
  },
  {
    product: "SEG 570W N-Type",
    supplier: "SEG Solar",
    location: "Houston, TX",
    inventory: "9.6 MW",
    leadTime: "5-6 weeks",
    price: "$0.176/W",
    tariff: "Medium",
    bankability: "Requires review",
    domestic: "54%",
    status: "Fastest",
  },
]

const substitutes = [
  ["Replace Malaysian wafer input", "+9 domestic pts", "Adds 3 weeks", "$4.2M bonus-credit upside"],
  ["Switch inverter supplier", "+4 domestic pts", "Same delivery", "Reduces tariff exposure"],
  ["Reserve First Solar allocation", "+19 domestic pts", "Higher ASP", "Improves public-sector eligibility"],
]

const signals = [
  [Truck, "Live inventory", "70.0 MW", "Across qualified suppliers"],
  [Clock3, "Median lead time", "8.5 weeks", "For matched module SKUs"],
  [LineChart, "Price volatility", "6.8%", "30-day spread by watt"],
  [ShieldCheck, "Compliant alternates", "14", "Meet current project constraints"],
]

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-[#050609] text-white">
      <AppNav />
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm text-white/45">Procurement Marketplace</p>
            <h1 className="mt-2 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Source bankable solar supply with compliance built into the quote.
            </h1>
            <p className="mt-4 max-w-2xl text-white/58">
              Compare U.S. manufacturers, distributors, inventory, lead times,
              tariffs, price volatility, bankability, and domestic-content impact
              before a procurement decision becomes a financing problem.
            </p>
          </div>
          <Link
            href="/upload"
            className="inline-flex h-fit items-center gap-2 rounded-lg border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
          >
            Verify supplier docs
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-4">
          {signals.map(([Icon, label, value, caption]) => (
            <div
              key={label as string}
              className="rounded-xl border border-white/10 bg-white/7 p-5 backdrop-blur-xl"
            >
              <Icon className="size-5 text-cyan-200" />
              <p className="mt-4 text-sm text-white/45">{label as string}</p>
              <p className="mt-2 text-3xl font-semibold">{value as string}</p>
              <p className="mt-1 text-sm text-white/45">{caption as string}</p>
            </div>
          ))}
        </div>

        <section className="mt-6 rounded-xl border border-white/10 bg-white/7 p-5 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Matched Supply</h2>
              <p className="mt-1 text-sm text-white/45">
                Filtered for Hill County Solar: 180 MW, IRA bonus-credit target, Q3 delivery.
              </p>
            </div>
            <Factory className="size-5 text-amber-200" />
          </div>

          <div className="mt-5 grid gap-4">
            {listings.map((item) => (
              <div
                key={item.product}
                className="rounded-xl border border-white/10 bg-black/35 p-4"
              >
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg font-semibold">{item.product}</h3>
                      <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-white/48">
                      {item.supplier} - {item.location}
                    </p>
                  </div>
                  <div className="text-left lg:text-right">
                    <p className="text-2xl font-semibold">{item.price}</p>
                    <p className="mt-1 text-sm text-white/45">Indicative landed price</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
                  {[
                    ["Inventory", item.inventory],
                    ["Lead time", item.leadTime],
                    ["Tariff", item.tariff],
                    ["Bankability", item.bankability],
                    ["Domestic", item.domestic],
                    ["Action", "Reserve"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-lg border border-white/10 bg-white/6 p-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                        {label}
                      </p>
                      <p className="mt-2 text-sm font-medium text-white/82">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-xl border border-white/10 bg-white/7 p-5 backdrop-blur-xl">
            <Shuffle className="size-5 text-cyan-200" />
            <h2 className="mt-5 text-xl font-semibold">Substitution Engine</h2>
            <p className="mt-2 text-sm leading-6 text-white/52">
              DeusSol ranks alternates by delivery risk, domestic-content lift,
              financing acceptability, and project economics.
            </p>
          </div>

          <div className="space-y-3">
            {substitutes.map(([title, lift, delivery, value]) => (
              <div
                key={title}
                className="grid gap-3 rounded-xl border border-white/10 bg-white/7 p-4 backdrop-blur-xl sm:grid-cols-[1fr_auto_auto_auto] sm:items-center"
              >
                <p className="font-medium">{title}</p>
                <p className="text-sm text-emerald-200">{lift}</p>
                <p className="text-sm text-white/52">{delivery}</p>
                <p className="text-sm text-amber-100">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-6 rounded-xl border border-emerald-300/20 bg-emerald-300/8 p-5 text-sm text-emerald-50">
          <div className="flex items-start gap-3">
            <BadgeCheck className="mt-0.5 size-5 shrink-0 text-emerald-200" />
            <p>
              Demo outcome: the buyer can preserve delivery timing, increase
              domestic-content eligibility, and attach supplier evidence to the
              same record used by finance and compliance.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
