import { SectionHeading } from "./section-heading";
import { crossGroupSessions, crossGroupNote } from "@/lib/booklet-data";

export function CrossGroupSessionsSection() {
  return (
    <section id="lintas-kelompok" className="scroll-mt-24 py-10">
      <SectionHeading id="lintas-kelompok" eyebrow="Bagian 7" title="Empat Sesi Lintas Kelompok" />
      <div className="mb-4 grid gap-3 sm:grid-cols-2">
        {crossGroupSessions.map((s) => (
          <div key={s.name} className="rounded-xl border-[1.5px] border-ink p-5">
            <p className="mb-2 font-heading text-sm font-bold uppercase text-ink">{s.name}</p>
            <p className="text-sm text-ink/70">
              <span className="font-medium text-ink/90">Untuk:</span> {s.audience}
            </p>
            <p className="mt-1 text-sm text-ink/70">
              <span className="font-medium text-ink/90">Narasumber:</span> {s.speakers}
            </p>
          </div>
        ))}
      </div>
      <p className="text-sm italic text-ink/60">{crossGroupNote}</p>
    </section>
  );
}
