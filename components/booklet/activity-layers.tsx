import { SectionHeading } from "./section-heading";
import { activityLayers } from "@/lib/booklet-data";

export function ActivityLayersSection() {
  return (
    <section id="empat-lapis" className="scroll-mt-24 py-10">
      <SectionHeading id="empat-lapis" eyebrow="Bagian 4" title="Empat Lapis Kegiatan" />
      <ol className="space-y-3">
        {activityLayers.map((a, i) => (
          <li key={a.name} className="flex gap-4 rounded-xl border-[1.5px] border-ink p-5">
            <span className="shrink-0 font-heading text-2xl font-bold text-brand-red">{i + 1}</span>
            <div>
              <p className="mb-1 font-heading text-sm font-bold uppercase text-ink">{a.name}</p>
              <p className="text-sm leading-relaxed text-ink/70">{a.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
