import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DeusSol | Solar Supply Chain Intelligence",
  description:
    "Infrastructure software for domestic solar traceability, compliance, and procurement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
