export default function UploadPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm text-white/50">DeusSol Platform</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Supplier Document Extraction
        </h1>
        <p className="mt-4 max-w-2xl text-white/60">
          Upload supplier certifications, BOMs, invoices, or spec sheets to extract
          origin, component, and compliance metadata.
        </p>

        <div className="mt-10 rounded-2xl border border-dashed border-white/20 bg-white/5 p-10 text-center">
          <p className="text-lg font-medium">Drop supplier documents here</p>
          <p className="mt-2 text-sm text-white/50">PDF, CSV, XLSX, or images</p>
          <button className="mt-6 rounded-xl bg-white px-5 py-3 font-medium text-black">
            Choose File
          </button>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-medium">Sample Extraction Result</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Supplier", "Hanwha Qcells"],
              ["Component", "PV Module"],
              ["Manufacturing Location", "Georgia, USA"],
              ["Cell Origin", "South Korea"],
              ["Wattage", "580W"],
              ["Domestic Content Score", "41%"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-black/40 p-4">
                <p className="text-sm text-white/50">{label}</p>
                <p className="mt-2 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
