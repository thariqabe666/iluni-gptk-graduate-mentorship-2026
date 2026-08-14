import type { Metadata } from "next";
import { BookletPage } from "@/components/booklet/booklet-page";

export const metadata: Metadata = {
  title: "Booklet Program — Graduate Mentorship 2026 | ILUNI GPTK FTUI",
  description:
    "Sumber kebenaran isi program Graduate Mentorship 2026: jalur peserta, kurikulum, 20 kelompok mentoring, linimasa, Final Project, penilaian, dan FAQ.",
  openGraph: {
    title: "Booklet Program — Graduate Mentorship 2026",
    description:
      "Sumber kebenaran isi program Graduate Mentorship 2026 — jalur peserta, kelompok mentoring, linimasa, dan penilaian.",
    type: "article",
  },
};

export default function Page() {
  return <BookletPage />;
}
