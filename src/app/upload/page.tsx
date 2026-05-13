"use client"

import { useState } from "react"
import { AppNav } from "@/components/AppNav"

type ExtractionResult = {
  supplier: string
  component: string
  manufacturer: string
  manufacturingLocation: string
  cellOrigin: string
  waferOrigin: string
  wattage: string
  certifications: string[]
  domesticContentScore: number
  complianceStatus: string
  risks: string[]
}

export default function UploadPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<ExtractionResult | null>(null)

  async function runExtraction() {
    setLoading(true)

    const response = await fetch("/api/extract", {
      method: "POST",
    })

    const data = await response.json()

    setResult(data)
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <AppNav />
      <div className="mx-auto max-w-5xl">
        <p className="text-sm text-white/50">DeusSol Platform</p>

        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Supplier Document Extraction
        </h1>

        <p className="mt-4 max-w-2xl text-white/60">
          Upload supplier certifications, BOMs, invoices, or spec sheets to
          extract origin, component, and compliance metadata.
        </p>

        <div className="mt-10 rounded-2xl border border-dashed border-white/20 bg-white/5 p-10 text-center">
          <p className="text-lg font-medium">Drop supplier documents here</p>
          <p className="mt-2 text-sm text-white/50">
            PDF, CSV, XLSX, or images
          </p>

          <button
            onClick={runExtraction}
            disabled={loading}
            className="mt-6 rounded-xl bg-white px-5 py-3 font-medium text-black disabled:opacity-60"
          >
            {loading ? "Extracting supplier data..." : "Run Sample Extraction"}
          </button>
        </div>

        {result && (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <h2 className="text-xl font-medium">Extraction Result</h2>
                <p className="mt-2 text-sm text-white/50">
                  Structured metadata extracted from supplier documentation.
                </p>
              </div>

              <div className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/70">
                {result.complianceStatus}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                ["Supplier", result.supplier],
                ["Component", result.component],
                ["Manufacturer", result.manufacturer],
                ["Manufacturing Location", result.manufacturingLocation],
                ["Cell Origin", result.cellOrigin],
                ["Wafer Origin", result.waferOrigin],
                ["Wattage", result.wattage],
                ["Domestic Content Score", `${result.domesticContentScore}%`],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-black/40 p-4"
                >
                  <p className="text-sm text-white/50">{label}</p>
                  <p className="mt-2 font-medium">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm text-white/50">Certifications</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {result.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/70"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-black/40 p-4">
              <p className="text-sm text-white/50">Risk Flags</p>
              <div className="mt-3 space-y-2">
                {result.risks.map((risk) => (
                  <p key={risk} className="text-sm text-white/70">
                    • {risk}
                  </p>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
