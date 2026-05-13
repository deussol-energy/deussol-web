"use client"

import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  MiniMap,
} from "reactflow"
import "reactflow/dist/style.css"
import { AlertTriangle, CheckCircle2, Factory, MapPin } from "lucide-react"
import { AppNav } from "@/components/AppNav"

const nodeBase = {
  background: "rgba(8, 10, 16, 0.92)",
  color: "white",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: 12,
  padding: 0,
  width: 220,
  boxShadow: "0 18px 60px rgba(0,0,0,0.34)",
}

function NodeLabel({
  title,
  subtitle,
  status,
  tone,
}: {
  title: string
  subtitle: string
  status: string
  tone: "good" | "warn" | "neutral"
}) {
  const toneClass =
    tone === "good"
      ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-100"
      : tone === "warn"
        ? "border-amber-300/25 bg-amber-300/10 text-amber-100"
        : "border-cyan-300/25 bg-cyan-300/10 text-cyan-100"

  return (
    <div className="p-4 text-left">
      <p className="text-sm font-semibold">{title}</p>
      <p className="mt-1 text-xs leading-5 text-white/48">{subtitle}</p>
      <span className={`mt-3 inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium ${toneClass}`}>
        {status}
      </span>
    </div>
  )
}

const nodes = [
  {
    id: "1",
    position: { x: 0, y: 130 },
    data: {
      label: (
        <NodeLabel
          title="REC Silicon"
          subtitle="Polysilicon - Moses Lake, WA"
          status="U.S. origin verified"
          tone="good"
        />
      ),
    },
    style: nodeBase,
  },
  {
    id: "2",
    position: { x: 300, y: 130 },
    data: {
      label: (
        <NodeLabel
          title="Wafer Supplier"
          subtitle="Wafer - Malaysia"
          status="Certificate gap"
          tone="warn"
        />
      ),
    },
    style: nodeBase,
  },
  {
    id: "3",
    position: { x: 600, y: 130 },
    data: {
      label: (
        <NodeLabel
          title="Qcells"
          subtitle="Cell - Cartersville, GA"
          status="Domestic input"
          tone="good"
        />
      ),
    },
    style: nodeBase,
  },
  {
    id: "4",
    position: { x: 900, y: 130 },
    data: {
      label: (
        <NodeLabel
          title="Qcells USA"
          subtitle="Module - Dalton, GA"
          status="Assembly verified"
          tone="good"
        />
      ),
    },
    style: nodeBase,
  },
  {
    id: "5",
    position: { x: 1200, y: 130 },
    data: {
      label: (
        <NodeLabel
          title="Hill County Solar"
          subtitle="180 MW project - Texas"
          status="Tax equity review"
          tone="neutral"
        />
      ),
    },
    style: nodeBase,
  },
  {
    id: "6",
    position: { x: 900, y: 360 },
    data: {
      label: (
        <NodeLabel
          title="Domestic Alternate"
          subtitle="First Solar Series 7 - OH"
          status="+19 domestic pts"
          tone="good"
        />
      ),
    },
    style: {
      ...nodeBase,
      border: "1px solid rgba(110, 231, 183, 0.28)",
    },
  },
]

const edgeStyle = { stroke: "rgba(125, 211, 252, 0.78)", strokeWidth: 2 }
const warningEdgeStyle = { stroke: "rgba(252, 211, 77, 0.85)", strokeWidth: 2 }

const edges = [
  { id: "e1-2", source: "1", target: "2", animated: true, style: edgeStyle },
  { id: "e2-3", source: "2", target: "3", animated: true, style: warningEdgeStyle },
  { id: "e3-4", source: "3", target: "4", animated: true, style: edgeStyle },
  { id: "e4-5", source: "4", target: "5", animated: true, style: edgeStyle },
  {
    id: "e6-5",
    source: "6",
    target: "5",
    animated: true,
    style: { stroke: "rgba(110, 231, 183, 0.8)", strokeWidth: 2 },
    markerEnd: { type: MarkerType.ArrowClosed },
  },
]

export default function GraphPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050609] text-white">
      <AppNav />
      <div className="relative flex min-h-[calc(100vh-73px)] flex-1 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(77,163,255,0.16),transparent_28%),radial-gradient(circle_at_78%_68%,rgba(110,231,183,0.12),transparent_28%)]" />

        <div className="pointer-events-none absolute left-6 top-6 z-10 max-w-xl rounded-xl border border-white/10 bg-black/55 p-5 backdrop-blur-xl">
          <p className="text-sm text-white/45">Supply Chain Provenance Graph</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Trace every component from feedstock to project site.
          </h1>
          <p className="mt-3 text-sm leading-6 text-white/56">
            The graph links origin evidence, supplier relationships, compliance
            status, and substitute products in one diligence-ready record.
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-3">
            {[
              [CheckCircle2, "4 verified", "Domestic records"],
              [AlertTriangle, "1 gap", "Wafer evidence"],
              [MapPin, "180 MW", "Mapped to site"],
            ].map(([Icon, value, label]) => (
              <div key={label as string} className="rounded-lg border border-white/10 bg-white/7 p-3">
                <Icon className="size-4 text-cyan-200" />
                <p className="mt-2 text-sm font-semibold">{value as string}</p>
                <p className="mt-1 text-xs text-white/42">{label as string}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[calc(100vh-73px)] w-full">
          <ReactFlow nodes={nodes} edges={edges} fitView minZoom={0.45} maxZoom={1.4}>
            <MiniMap
              maskColor="rgba(5,6,9,0.72)"
              nodeColor={() => "rgba(125,211,252,0.7)"}
              style={{
                background: "rgba(8,10,16,0.86)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 12,
              }}
            />
            <Controls />
            <Background color="rgba(255,255,255,0.12)" gap={28} />
          </ReactFlow>
        </div>

        <div className="pointer-events-none absolute bottom-6 right-6 z-10 max-w-sm rounded-xl border border-white/10 bg-black/55 p-5 backdrop-blur-xl">
          <Factory className="size-5 text-emerald-200" />
          <h2 className="mt-3 text-lg font-semibold">Recommended substitute</h2>
          <p className="mt-2 text-sm leading-6 text-white/56">
            First Solar allocation improves domestic-content score and removes
            wafer-origin uncertainty, with a higher ASP and longer lead time.
          </p>
        </div>
      </div>
    </main>
  )
}
