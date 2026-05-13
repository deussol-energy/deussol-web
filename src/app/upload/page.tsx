"use client"

import { useState } from "react"
import {
  AlertTriangle,
  ArrowRight,
  FileUp,
  Loader2,
  ShieldCheck,
  Sparkles,
} from "lucide-react"
import { AppNav } from "@/components/AppNav"

type ExtractionResult = {
  document: string
  supplier: string
  component: string
  manufacturer: string
  manufacturingLocation: string
  polysiliconOrigin: string
  waferOrigin: string
  cellOrigin: string
  moduleOrigin: string
  inverterOrigin: string
  wattage: string
  certifications: string[]
  domesticContentScore: number
  complianceStatus: string
  procurementSignal: {
    inventory: string
    quotedLeadTime: string
    priceTrend: string
    bankability: string
  }
  risks: string[]
  recommendedActions: string[]
}

const fields: Array<[string, keyof ExtractionResult]> = [
  ["Supplier", "supplier"],
  ["Component", "component"],
  ["Manufacturer", "manufacturer"],
  ["Manufacturing Location", "manufacturingLocation"],
  ["Polysilicon Origin", "polysiliconOrigin"],
  ["Wafer Origin", "waferOrigin"],
  ["Cell Origin", "cellOrigin"],
  ["Module Origin", "moduleOrigin"],
  ["Inverter Origin", "inverterOrigin"],
  ["Wattage", "wattage"],
]

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
    <main className="min-h-screen bg-[#050609] text-white">
      <AppNav />
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm text-white/45">Evidence Extraction</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              Convert supplier paperwork into finance-ready compliance data.
            </h1>
            <p className="mt-4 text-white/58">
              Upload supplier certifications, BOMs, invoices, purchase orders,
              factory attestations, or spec sheets. This demo uses a sample packet
              and returns structured origin, risk, and procurement metadata.
            </p>

            <div className="mt-8 rounded-xl border border-dashed border-white/20 bg-white/7 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-4">
                <div className="grid size-12 place-items-center rounded-lg border border-white/10 bg-black/40">
                  <FileUp className="size-5 text-cyan-200" />
                </div>
                <div>
                  <p className="font-medium">Drop supplier documents here</p>
                  <p className="mt-1 text-sm text-white/45">PDF, CSV, XLSX, PNG, or JPG</p>
                </div>
              </div>

              <button
                onClick={runExtraction}
                disabled={loading}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="size-4 animate-spin" />
                    Extracting supplier data...
                  </>
                ) : (
                  <>
                    <Sparkles className="size-4" />
                    Run sample extraction
                  </>
                )}
              </button>
            </div>
          </div>

          <section className="rounded-xl border border-white/10 bg-white/7 p-5 backdrop-blur-xl">
            {!result ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center rounded-lg border border-white/10 bg-black/25 p-8 text-center">
                <ShieldCheck className="size-10 text-white/35" />
                <h2 className="mt-5 text-xl font-semibold">Awaiting document run</h2>
                <p className="mt-2 max-w-md text-sm leading-6 text-white/45">
                  The demo result will populate normalized fields, risk flags,
                  marketplace signals, and recommended actions.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start">
                  <div>
                    <p className="text-sm text-white/45">{result.document}</p>
                    <h2 className="mt-1 text-2xl font-semibold">Extraction Result</h2>
                  </div>
                  <span className="w-fit rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-100">
                    {result.complianceStatus}
                  </span>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-black/35 p-4">
                    <p className="text-sm text-white/45">Domestic Content Score</p>
                    <p className="mt-2 text-4xl font-semibold text-emerald-200">
                      {result.domesticContentScore}%
                    </p>
                    <p className="mt-2 text-sm text-white/45">
                      Eligible with evidence review and wafer-origin follow-up.
                    </p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-black/35 p-4">
                    <p className="text-sm text-white/45">Procurement Signal</p>
                    <p className="mt-2 text-lg font-semibold">
                      {result.procurementSignal.inventory}
                    </p>
                    <p className="mt-2 text-sm text-white/45">
                      {result.procurementSignal.quotedLeadTime} lead time, {result.procurementSignal.priceTrend}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {fields.map(([label, key]) => (
                    <div
                      key={label}
                      className="rounded-lg border border-white/10 bg-black/35 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                        {label}
                      </p>
                      <p className="mt-2 text-sm font-medium text-white/84">
                        {String(result[key])}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-lg border border-white/10 bg-black/35 p-4">
                    <p className="text-sm text-white/45">Certifications</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {result.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs text-white/70"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-white/10 bg-black/35 p-4">
                    <p className="text-sm text-white/45">Bankability</p>
                    <p className="mt-3 text-sm text-white/72">
                      {result.procurementSignal.bankability}
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div className="rounded-lg border border-amber-300/20 bg-amber-300/8 p-4">
                    <div className="flex items-center gap-2 text-amber-100">
                      <AlertTriangle className="size-4" />
                      <p className="text-sm font-medium">Risk Flags</p>
                    </div>
                    <div className="mt-3 space-y-2">
                      {result.risks.map((risk) => (
                        <p key={risk} className="text-sm leading-6 text-white/70">
                          - {risk}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/8 p-4">
                    <div className="flex items-center gap-2 text-cyan-100">
                      <ArrowRight className="size-4" />
                      <p className="text-sm font-medium">Recommended Actions</p>
                    </div>
                    <div className="mt-3 space-y-2">
                      {result.recommendedActions.map((action) => (
                        <p key={action} className="text-sm leading-6 text-white/70">
                          - {action}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}
