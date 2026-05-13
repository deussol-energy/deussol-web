"use client"

import Link from "next/link"
import type { ElementType } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Boxes,
  Database,
  Factory,
  FileScan,
  GitBranch,
  Landmark,
  Network,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react"
import { AppNav } from "@/components/AppNav"

const problemStats = [
  {
    value: "96%",
    label: "of global ingot and wafer output was concentrated in China in 2023",
  },
  {
    value: "155 GW",
    label: "of U.S. solar manufacturing announcements followed the IRA's first year",
  },
  {
    value: "5.3 GW",
    label: "of first U.S. wafer capacity has started to ramp, while module capacity is far larger",
  },
]

const chainStages = [
  {
    eyebrow: "01 / the bottleneck",
    title: "Modules are not enough.",
    text: "The U.S. is adding downstream module assembly, but the hardest strategic gap sits earlier: ingot, wafer, and cell production. Until that upstream chain is visible and financeable, domestic solar remains exposed.",
    icon: AlertTriangle,
    stat: "73 GW",
    statLabel: "U.S. module nameplate capacity reported around the end of 2025",
  },
  {
    eyebrow: "02 / the data gap",
    title: "Nobody can buy what they cannot prove.",
    text: "Developers, EPCs, manufacturers, financiers, and public buyers need origin, domestic-content, UFLPA, tariff, lead-time, and bankability data connected to the same project record.",
    icon: Database,
    stat: "1 chain",
    statLabel: "from polysilicon to project site",
  },
  {
    eyebrow: "03 / the wedge",
    title: "Traceability creates demand signals.",
    text: "A software layer can show where domestic content is missing, which substitutions raise eligibility, and where upstream suppliers should build because demand is real, qualified, and time-bound.",
    icon: Network,
    stat: "+19 pts",
    statLabel: "domestic-content lift from one qualified substitution",
  },
  {
    eyebrow: "04 / the marketplace",
    title: "Procurement becomes the operating system.",
    text: "The marketplace starts with availability, price, tariff exposure, lead times, bankability, and compliance. Over time, those decisions become the map for U.S. ingot and wafer expansion.",
    icon: Boxes,
    stat: "27",
    statLabel: "qualified alternates inside the delivery window",
  },
]

const sourceRows = [
  ["Module capacity", "large and growing", "downstream momentum"],
  ["Cell capacity", "emerging", "qualification risk"],
  ["Ingot / wafer", "thin but strategic", "market gap"],
  ["Procurement data", "fragmented", "software wedge"],
]

const graphNodes = [
  { id: "poly", label: "Polysilicon", sub: "U.S. feedstock", x: "8%", y: "46%", tone: "good" },
  { id: "ingot", label: "Ingot", sub: "missing scale", x: "25%", y: "27%", tone: "warn" },
  { id: "wafer", label: "Wafer", sub: "new U.S. ramp", x: "43%", y: "52%", tone: "upgrade" },
  { id: "cell", label: "Cell", sub: "qualifying supply", x: "61%", y: "30%", tone: "neutral" },
  { id: "module", label: "Module", sub: "assembled supply", x: "77%", y: "49%", tone: "good" },
  { id: "site", label: "Project", sub: "tax equity demand", x: "90%", y: "68%", tone: "neutral" },
]

const marketplaceRows = [
  ["Qcells USA", "module + cell", "7-9 weeks", "67%"],
  ["First Solar", "module supply", "12-16 weeks", "82%"],
  ["U.S. wafer ramp", "upstream input", "2026 allocation", "+9 pts"],
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, -100])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.22])
  const gridOpacity = useTransform(scrollYProgress, [0, 0.4, 0.86], [0.65, 0.28, 0.58])

  return (
    <main className="min-h-screen overflow-hidden bg-[#030407] text-white">
      <AppNav />
      <motion.div style={{ opacity: gridOpacity }} className="pointer-events-none fixed inset-0 deus-grid" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(115deg,rgba(90,170,255,0.14),transparent_25%,rgba(255,210,130,0.08)_54%,transparent_74%,rgba(106,255,193,0.10)),linear-gradient(180deg,rgba(255,255,255,0.055),transparent_38%)]" />

      <section id="overview" className="relative min-h-[calc(100vh-73px)] px-6">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 py-16 lg:grid-cols-[0.92fr_1.08fr]"
        >
          <div className="relative z-10">
            <div className="liquid-chip inline-flex items-center gap-2 px-4 py-2 text-sm text-white/78">
              <Sparkles className="size-4 text-cyan-200" />
              The upstream solar chain reaction
            </div>

            <h1 className="mt-8 max-w-5xl text-5xl font-semibold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
              America can assemble solar panels. Now it has to build the chain.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
              DeusSol starts with traceability and procurement intelligence,
              then compounds the data needed to make U.S. ingot and wafer
              manufacturing bankable.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="#problem" className="liquid-button group">
                <span>Follow the problem</span>
                <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/7 px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/12"
              >
                Open demo
              </Link>
            </div>
          </div>

          <HeroChain />
        </motion.div>
      </section>

      <section id="problem" className="relative border-y border-white/10 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.32em] text-cyan-100/62">
            Problem set
          </p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <h2 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              The U.S. solar buildout is downstream-heavy and upstream-thin.
            </h2>
            <p className="max-w-xl text-sm leading-6 text-white/54">
              The article&apos;s core warning is simple: factory announcements are
              not the same as a complete supply chain. The next bottleneck is
              turning fragmented demand into a trusted signal for domestic
              ingots, wafers, and cells.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {problemStats.map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="rounded-lg border border-white/10 bg-white/[0.055] p-6 backdrop-blur-2xl"
              >
                <p className="text-5xl font-semibold tracking-tight">{item.value}</p>
                <p className="mt-4 text-sm leading-6 text-white/54">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="flow" className="relative px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.46fr_0.54fr]">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-100/62">
                The chain reaction
              </p>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
                Start where the market already feels pain.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-white/52">
                DeusSol does not begin by promising to build factories. It begins
                by making demand, compliance, and supplier quality measurable.
                That is the first software wedge into a physical industrial gap.
              </p>
            </div>

            <div className="relative space-y-8">
              <div className="absolute left-5 top-2 bottom-2 hidden w-px bg-gradient-to-b from-cyan-200/0 via-cyan-200/45 to-emerald-200/0 md:block" />
              {chainStages.map((stage, index) => (
                <ChainCard key={stage.title} index={index} {...stage} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="trace" className="relative px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Traceability layer"
            title="The graph is not decoration. It shows where America is missing the chain."
            text="The graph connects proof of origin, compliance status, domestic-content value, live supply, and the upstream gaps that prevent projects from becoming fully domestic."
          />

          <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.055] p-4 shadow-2xl shadow-black/35 backdrop-blur-2xl">
            <GraphVisual />
          </div>
        </div>
      </section>

      <section id="market" className="relative px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            kicker="Procurement intelligence"
            title="The marketplace turns every quote into an upstream demand signal."
            text="Start with what buyers need today: available inventory, lead times, tariff exposure, bankability, domestic-content lift, and auditable evidence. Over time, that data shows where U.S. wafer and ingot capacity should exist."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <MarketplaceVisual />
            <DemandSignal />
          </div>
        </div>
      </section>

      <section id="endgame" className="relative px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            className="rounded-lg border border-white/10 bg-white/[0.055] p-8 backdrop-blur-2xl"
          >
            <Landmark className="size-6 text-amber-200" />
            <h2 className="mt-6 text-4xl font-semibold tracking-tight">
              The wedge is software. The goal is industrial capacity.
            </h2>
            <p className="mt-5 text-sm leading-6 text-white/54">
              Traceability wins because credits, procurement, financing, and
              government buying already require proof. The larger prize is using
              that proof to make domestic upstream manufacturing easier to
              finance, contract, and scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.12 }}
            className="rounded-lg border border-white/10 bg-black/35 p-6 backdrop-blur-2xl"
          >
            <div className="grid gap-3">
              {sourceRows.map(([segment, status, meaning]) => (
                <div
                  key={segment}
                  className="grid gap-3 rounded-lg border border-white/10 bg-white/[0.055] p-4 sm:grid-cols-[150px_1fr_auto] sm:items-center"
                >
                  <p className="font-medium">{segment}</p>
                  <p className="text-sm text-white/54">{status}</p>
                  <p className="text-sm text-cyan-100">{meaning}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function HeroChain() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10"
    >
      <div className="absolute -inset-6 rounded-lg bg-gradient-to-br from-cyan-200/10 via-transparent to-emerald-200/10 blur-3xl" />
      <div className="relative rounded-lg border border-white/14 bg-white/[0.07] p-3 shadow-2xl shadow-black/55 backdrop-blur-2xl">
        <div className="rounded-lg border border-white/10 bg-black/45 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-white/42">Strategic objective</p>
              <h2 className="mt-1 text-2xl font-semibold">Make upstream domestic supply bankable</h2>
            </div>
            <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
              software wedge
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["Today", "prove origin"],
              ["Next", "route demand"],
              ["Goal", "build wafers"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.055] p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-white/34">{label}</p>
                <p className="mt-3 text-2xl font-semibold">{value}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-6 h-[360px] overflow-hidden rounded-lg border border-white/10 bg-[#05070d]">
            <GraphVisual compact />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function ChainCard({
  index,
  eyebrow,
  title,
  text,
  stat,
  statLabel,
  icon: Icon,
}: {
  index: number
  eyebrow: string
  title: string
  text: string
  stat: string
  statLabel: string
  icon: ElementType
}) {
  return (
    <motion.div
      initial={{ opacity: 0.35, x: 28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ amount: 0.62 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative rounded-lg border border-white/10 bg-white/[0.055] p-6 pl-7 backdrop-blur-2xl md:ml-14"
    >
      <div className="absolute -left-[51px] top-7 hidden size-10 place-items-center rounded-lg border border-white/12 bg-black/80 md:grid">
        <Icon className="size-5 text-cyan-200" />
      </div>
      <p className="text-xs uppercase tracking-[0.25em] text-white/34">{eyebrow}</p>
      <h3 className="mt-3 text-3xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-white/54">{text}</p>
      <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-5 sm:flex-row sm:items-baseline sm:gap-4">
        <p className="text-4xl font-semibold">{stat}</p>
        <p className="text-sm text-white/44">{statLabel}</p>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ amount: 0.62 }}
        transition={{ delay: index * 0.04, duration: 0.9, ease: "easeOut" }}
        className="mt-5 h-px origin-left bg-gradient-to-r from-cyan-200 via-white/70 to-transparent"
      />
    </motion.div>
  )
}

function SectionHeader({
  kicker,
  title,
  text,
}: {
  kicker: string
  title: string
  text: string
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_0.65fr] lg:items-end">
      <div>
        <p className="text-sm uppercase tracking-[0.32em] text-cyan-100/62">{kicker}</p>
        <h2 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
          {title}
        </h2>
      </div>
      <p className="max-w-xl text-sm leading-6 text-white/54">{text}</p>
    </div>
  )
}

function GraphVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative overflow-hidden rounded-lg bg-[#04060b] ${compact ? "h-full" : "min-h-[660px]"}`}>
      <div className="absolute inset-0 graph-grid opacity-70" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 620" preserveAspectRatio="none">
        <defs>
          <linearGradient id="edgeCyan" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(125,211,252,0.05)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.88)" />
            <stop offset="100%" stopColor="rgba(125,211,252,0.18)" />
          </linearGradient>
          <linearGradient id="edgeWarn" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(252,211,77,0.06)" />
            <stop offset="55%" stopColor="rgba(252,211,77,0.95)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.18)" />
          </linearGradient>
        </defs>
        <path className="graph-edge delay-0" d="M80 285 C165 205 210 170 250 170" />
        <path className="graph-edge-warn delay-1" d="M250 170 C330 190 365 310 430 325" />
        <path className="graph-edge-upgrade delay-2" d="M430 325 C505 235 560 195 610 185" />
        <path className="graph-edge delay-3" d="M610 185 C690 220 720 285 770 305" />
        <path className="graph-edge delay-4" d="M770 305 C845 350 865 405 900 420" />
      </svg>

      <div className="absolute inset-x-10 top-16 h-px bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent" />
      <div className="absolute inset-x-16 bottom-20 h-px bg-gradient-to-r from-transparent via-emerald-200/24 to-transparent" />

      {graphNodes.map((node, index) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0.86 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
          viewport={{ amount: 0.5 }}
          className={`graph-node graph-node-${node.tone}`}
          style={{ left: node.x, top: node.y }}
        >
          <span className="graph-node-ping" />
          <p className="text-sm font-semibold">{node.label}</p>
          <p className="mt-1 text-xs text-white/42">{node.sub}</p>
        </motion.div>
      ))}

      {!compact && (
        <div className="absolute bottom-5 left-5 right-5 grid gap-3 lg:grid-cols-3">
          {[
            ["Where risk concentrates", "ingot + wafer scale"],
            ["Where software starts", "origin proof + qualified demand"],
            ["Where the market goes", "domestic upstream contracting"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-lg border border-white/10 bg-black/45 p-4 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.2em] text-white/34">{label}</p>
              <p className="mt-2 text-sm font-medium">{value}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function MarketplaceVisual() {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.055] p-5 backdrop-blur-2xl">
      <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/34">matched supply</p>
          <h3 className="mt-2 text-2xl font-semibold">Domestic-content alternatives</h3>
        </div>
        <div className="liquid-indicator" />
      </div>

      <div className="space-y-3">
        {marketplaceRows.map(([supplier, scope, leadTime, lift], index) => (
          <motion.div
            key={supplier}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ amount: 0.7 }}
            className="grid gap-3 rounded-lg border border-white/10 bg-black/30 p-4 sm:grid-cols-[1fr_auto_auto_auto] sm:items-center"
          >
            <p className="font-medium">{supplier}</p>
            <p className="text-sm text-white/52">{scope}</p>
            <p className="text-sm text-white/52">{leadTime}</p>
            <p className="text-sm text-emerald-200">{lift}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function DemandSignal() {
  return (
    <div className="rounded-lg border border-white/10 bg-black/35 p-6 backdrop-blur-2xl">
      <GitBranch className="size-6 text-cyan-200" />
      <h3 className="mt-5 text-3xl font-semibold tracking-tight">
        Procurement data becomes industrial planning data.
      </h3>
      <p className="mt-4 text-sm leading-6 text-white/54">
        Every quote and compliance review says something about future factory
        demand: which SKUs are bankable, where buyers tolerate price premiums,
        what lead times are acceptable, and which upstream gaps block credits.
      </p>

      <div className="mt-6 grid gap-3">
        {[
          [FileScan, "Evidence", "supplier docs and origin proof"],
          [ShieldCheck, "Eligibility", "domestic-content impact"],
          [TrendingUp, "Demand", "qualified purchase intent"],
          [Factory, "Buildout", "where upstream capacity should land"],
        ].map(([Icon, label, value]) => (
          <div
            key={label as string}
            className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-lg border border-white/10 bg-white/[0.055] p-4"
          >
            <Icon className="size-5 text-white/64" />
            <div>
              <p className="font-medium">{label as string}</p>
              <p className="mt-1 text-sm text-white/48">{value as string}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-lg border border-emerald-300/20 bg-emerald-300/8 p-4">
        <div className="flex items-start gap-3">
          <BadgeCheck className="mt-0.5 size-5 shrink-0 text-emerald-200" />
          <p className="text-sm leading-6 text-emerald-50">
            The marketplace is the wedge. The long-term prize is a bankable,
            demand-backed map for domestic ingot and wafer manufacturing.
          </p>
        </div>
      </div>
    </div>
  )
}
