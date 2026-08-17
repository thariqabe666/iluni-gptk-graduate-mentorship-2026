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
              <div className="mb-1.5 flex flex-wrap items-center gap-2">
                <p className="font-heading text-sm font-bold uppercase text-ink">{a.name}</p>
                <span
                  className={
                    a.type === "INTI"
                      ? "rounded-full border border-brand-red/40 bg-brand-red/10 px-2 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wide text-brand-red"
                      : "rounded-full border border-ink/20 bg-ink/5 px-2 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wide text-ink/60"
                  }
                >
                  {a.type}
                </span>
              </div>
              <p className="mb-2 text-sm leading-relaxed text-ink/70">{a.desc}</p>
              <p className="text-xs text-ink/50">
                {a.wajib} · {a.dinilai}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
