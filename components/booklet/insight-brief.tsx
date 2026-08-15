import { AlertTriangle } from "lucide-react";
import { SectionHeading } from "./section-heading";
import {
  insightBriefParts,
  insightBriefVariants,
  insightBriefLength,
  insightBriefConfidentiality,
} from "@/lib/booklet-data";

export function InsightBriefSection() {
  return (
    <section id="insight-brief" className="scroll-mt-24 py-10">
      <SectionHeading id="insight-brief" eyebrow="Bagian 9" title="Final Project: Insight Brief" />
      <p className="mb-6 max-w-2xl text-sm text-ink/70">{insightBriefLength}</p>

      <div className="mb-6 overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-ink">
              <th className="py-2 pr-3 font-heading text-xs uppercase tracking-wide text-ink/60">
                Bagian
              </th>
              <th className="py-2 pr-3 font-heading text-xs uppercase tracking-wide text-ink/60">
                Isi
              </th>
              <th className="py-2 font-heading text-xs uppercase tracking-wide text-ink/60">
                Panjang
              </th>
            </tr>
          </thead>
          <tbody>
            {insightBriefParts.map((p) => (
              <tr key={p.title} className="border-b border-ink/10 align-top">
                <td className="py-3 pr-3 font-medium text-ink">{p.title}</td>
                <td className="py-3 pr-3 text-ink/70">{p.content}</td>
                <td className="py-3 whitespace-nowrap text-ink/50">{p.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-6 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border-[1.5px] border-brand-red p-5">
          <p className="mb-1 font-heading text-sm font-bold uppercase text-brand-red">
            {insightBriefVariants.a.label}
          </p>
          <p className="text-sm text-ink/70">{insightBriefVariants.a.desc}</p>
        </div>
        <div className="rounded-xl border-[1.5px] border-brand-blue p-5">
          <p className="mb-1 font-heading text-sm font-bold uppercase text-brand-blue">
            {insightBriefVariants.b.label}
          </p>
          <p className="text-sm text-ink/70">{insightBriefVariants.b.desc}</p>
        </div>
      </div>

      {/* Confidentiality warning box */}
      <div className="rounded-xl border-2 border-ink bg-ink p-5 text-cream">
        <div className="mb-3 flex items-center gap-2">
          <AlertTriangle size={18} className="text-brand-red" />
          <p className="font-heading text-sm font-bold uppercase tracking-wide">
            Catatan Kerahasiaan & Etika Portofolio
          </p>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-cream/85">
          {insightBriefConfidentiality.warning}
        </p>
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-cream/50">
          Saran format penulisan & sitasi
        </p>
        <p className="text-sm italic leading-relaxed text-cream/90">
          {insightBriefConfidentiality.correctCitation}
        </p>
      </div>
    </section>
  );
}
