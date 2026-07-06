import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Graduate Mentorship 2026 — ILUNI GPTK FTUI",
  description:
    "Program mentorship gratis menghubungkan alumni DTK UI dengan profesional industri. Daftar sebagai mentee atau mentor.",
  openGraph: {
    title: "Graduate Mentorship 2026 — ILUNI GPTK FTUI",
    description:
      "Program mentorship gratis menghubungkan alumni DTK UI dengan profesional industri.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-cream">{children}</body>
    </html>
  );
}
