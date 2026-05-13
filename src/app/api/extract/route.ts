export async function POST() {
  const mockExtraction = {
    supplier: "Hanwha Qcells",
    component: "PV Module",
    manufacturer: "Qcells USA",
    manufacturingLocation: "Dalton, Georgia, USA",
    cellOrigin: "South Korea",
    waferOrigin: "China",
    wattage: "580W",
    certifications: ["IEC 61215", "IEC 61730", "UL 61730"],
    domesticContentScore: 41,
    complianceStatus: "Partially compliant",
    risks: [
      "Wafer origin outside U.S.",
      "Cell origin outside U.S.",
      "Domestic module assembly only",
    ],
  }

  return Response.json(mockExtraction)
}
