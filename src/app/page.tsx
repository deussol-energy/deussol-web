export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto flex max-w-7xl flex-col px-6 py-32">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            Infrastructure Software for American Solar
          </div>

          <h1 className="max-w-4xl text-6xl font-semibold tracking-tight">
            Supply Chain Intelligence for the Domestic Solar Industry
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-white/60">
            DeusSol helps developers, manufacturers, and financiers
            automate domestic-content compliance, trace component
            provenance, and coordinate procurement across the U.S.
            solar supply chain.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90">
              Request Access
            </button>

            <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition hover:bg-white/10">
              View Platform
            </button>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">
              AI Document Extraction
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Extract supplier provenance, certifications,
              manufacturing origin, and procurement metadata
              from PDFs and invoices.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">
              Domestic Content Compliance
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Track IRA domestic-content eligibility and
              identify sourcing risks across projects.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-lg font-medium">
              Procurement Intelligence
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/60">
              Coordinate suppliers, lead times, tariffs,
              and sourcing visibility across the solar stack.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
