import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pen Drive Atualizado 2026 — Música nova pro seu som, sempre",
  description:
    "Pen drive e pacotes digitais de música atualizada para som automotivo. Funk, sertanejo, pancadão e mais, organizados e prontos pra tocar.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
