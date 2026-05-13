"use client"

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow"
import "reactflow/dist/style.css"

const nodes = [
  {
    id: "1",
    position: { x: 0, y: 100 },
    data: { label: "REC Silicon\nPolysilicon" },
    style: {
      background: "#111",
      color: "white",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      padding: 10,
      width: 180,
    },
  },
  {
    id: "2",
    position: { x: 300, y: 100 },
    data: { label: "Wafer Supplier\nChina" },
    style: {
      background: "#1a1a1a",
      color: "white",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      padding: 10,
      width: 180,
    },
  },
  {
    id: "3",
    position: { x: 600, y: 100 },
    data: { label: "Qcells\nCell Manufacturing" },
    style: {
      background: "#111",
      color: "white",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      padding: 10,
      width: 180,
    },
  },
  {
    id: "4",
    position: { x: 900, y: 100 },
    data: { label: "Texas Solar Project" },
    style: {
      background: "#111",
      color: "white",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 16,
      padding: 10,
      width: 180,
    },
  },
]

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
  },
]

export default function GraphPage() {
  return (
    <main className="h-screen bg-black text-white">
      <div className="absolute left-6 top-6 z-10">
        <p className="text-sm text-white/50">
          DeusSol Platform
        </p>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Supply Chain Provenance Graph
        </h1>

        <p className="mt-4 max-w-2xl text-white/60">
          Visualize supplier relationships, component origin,
          and domestic manufacturing exposure across the
          solar supply chain.
        </p>
      </div>

      <div className="h-full w-full">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </main>
  )
}
