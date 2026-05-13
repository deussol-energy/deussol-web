export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm text-white/50">DeusSol Platform</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Procurement Intelligence Dashboard
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            ["Domestic Content", "41%", "Partially compliant"],
            ["High-Risk Suppliers", "7", "Needs review"],
            ["China Exposure", "28%", "Across wafer inputs"],
            ["Avg Lead Time", "14 weeks", "Module procurement"],
          ].map(([title, value, caption]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/50">{title}</p>
              <p className="mt-3 text-3xl font-semibold">{value}</p>
              <p className="mt-2 text-sm text-white/50">{caption}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-medium">Supplier Risk Queue</h2>

          <div className="mt-6 space-y-4">
            {[
              ["Wafer supplier origin mismatch", "China-linked wafer input detected", "High"],
              ["Missing cell certification", "Supplier document lacks manufacturing location", "Medium"],
              ["Tariff exposure", "Module BOM includes Southeast Asia routed components", "Medium"],
            ].map(([title, desc, risk]) => (
              <div key={title} className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 p-4">
                <div>
                  <p className="font-medium">{title}</p>
                  <p className="mt-1 text-sm text-white/50">{desc}</p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-sm text-white/70">
                  {risk}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
