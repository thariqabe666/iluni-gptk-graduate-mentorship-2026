import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

/** Display face for headings/labels — matches the booklet's Space Grotesk. */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Graduate Mentorship 2026 — ILUNI GPTK FTUI",
  description:
    "Program mentorship gratis menghubungkan alumni DTK UI dengan profesional industri. Daftar sebagai mentee atau mentor.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
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
    <html
      lang="id"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream">{children}</body>
    </html>
  );
}
