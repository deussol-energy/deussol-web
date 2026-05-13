export async function POST() {
  const mockExtraction = {
    document: "Module BOM + supplier attestation packet",
    supplier: "Hanwha Qcells",
    component: "PV Module",
    manufacturer: "Qcells USA Inc.",
    manufacturingLocation: "Dalton, Georgia, USA",
    polysiliconOrigin: "Moses Lake, Washington, USA",
    waferOrigin: "Malaysia",
    cellOrigin: "Cartersville, Georgia, USA",
    moduleOrigin: "Dalton, Georgia, USA",
    inverterOrigin: "Austin, Texas, USA",
    wattage: "580W",
    certifications: ["UL 61730", "IEC 61215", "UFLPA attestation", "Factory ISO 9001"],
    domesticContentScore: 67,
    complianceStatus: "Review required",
    procurementSignal: {
      inventory: "18.4 MW available",
      quotedLeadTime: "7-9 weeks",
      priceTrend: "-3.2% vs. 30-day median",
      bankability: "Tier 1, tax equity accepted",
    },
    risks: [
      "Wafer origin is non-U.S. and may reduce bonus credit contribution",
      "Supplier attestation references a prior factory audit older than 12 months",
      "Tariff exposure low, but country-of-origin backup is incomplete",
    ],
    recommendedActions: [
      "Request updated wafer certificate of origin",
      "Compare domestic wafer substitute for 2027 delivery window",
      "Attach UFLPA attestation to project evidence room",
    ],
  }

  return Response.json(mockExtraction)
}
