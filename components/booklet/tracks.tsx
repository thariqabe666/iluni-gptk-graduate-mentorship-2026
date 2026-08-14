import { SectionHeading } from "./section-heading";
import { tracks } from "@/lib/booklet-data";

export function TracksSection() {
  return (
    <section id="dua-jalur" className="scroll-mt-24 py-10">
      <SectionHeading id="dua-jalur" eyebrow="Bagian 2" title="Dua Jalur Peserta" />
      <p className="mb-6 max-w-2xl text-sm text-ink/70">
        Program melayani dua populasi dengan kebutuhan yang berbeda secara mendasar.
      </p>
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border-[1.5px] border-brand-red p-5">
          <p className="mb-1 font-heading text-sm font-bold uppercase text-brand-red">
            {tracks.entering.name} — {tracks.entering.count} mentee
          </p>
          <p className="text-sm leading-relaxed text-ink/70">{tracks.entering.desc}</p>
        </div>
        <div className="rounded-xl border-[1.5px] border-brand-blue p-5">
          <p className="mb-1 font-heading text-sm font-bold uppercase text-brand-blue">
            {tracks.growing.name} — {tracks.growing.count} mentee
          </p>
          <p className="text-sm leading-relaxed text-ink/70">{tracks.growing.desc}</p>
        </div>
      </div>
      <div className="rounded-xl border-[1.5px] border-ink p-5">
        <p className="mb-3 font-heading text-xs font-bold uppercase tracking-wide text-ink">
          Aturan Pembagian Jalur
        </p>
        <ol className="list-inside list-decimal space-y-2 text-sm text-ink/80">
          {tracks.placementRules.map((rule, i) => (
            <li key={i}>{rule}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
