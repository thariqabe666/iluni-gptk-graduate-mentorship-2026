import { Info } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { assessmentComponents, assessmentKuliahUmumNote, certificates } from "@/lib/booklet-data";

export function AssessmentSection() {
  return (
    <section id="penilaian" className="scroll-mt-24 py-10">
      <SectionHeading id="penilaian" eyebrow="Bagian 10" title="Penilaian & Sertifikat" />

      <div className="mb-8 overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-ink">
              <th className="py-2 pr-3 font-heading text-xs uppercase tracking-wide text-ink/60">
                Komponen
              </th>
              <th className="py-2 pr-3 font-heading text-xs uppercase tracking-wide text-ink/60">
                Bobot
              </th>
              <th className="py-2 font-heading text-xs uppercase tracking-wide text-ink/60">
                Penilai
              </th>
            </tr>
          </thead>
          <tbody>
            {assessmentComponents.map((c) => (
              <tr key={c.component} className="border-b border-ink/10 align-top">
                <td className="py-3 pr-3 text-ink">{c.component}</td>
                <td className="py-3 pr-3 font-heading font-bold text-brand-red">{c.weight}</td>
                <td className="py-3 text-ink/70">{c.assessor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-8 flex items-start gap-2.5 rounded-xl border border-ink/15 bg-ink/[0.03] p-3.5 text-xs sm:text-sm leading-relaxed text-ink/70">
        <Info size={16} className="mt-0.5 shrink-0 text-brand-blue" />
        <span>{assessmentKuliahUmumNote}</span>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        {certificates.map((c) => (
          <div key={c.name} className="rounded-xl border-[1.5px] border-ink p-5">
            <p className="mb-2 font-heading text-sm font-bold uppercase text-ink">{c.name}</p>
            <p className="text-sm text-ink/70">{c.requirement}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
