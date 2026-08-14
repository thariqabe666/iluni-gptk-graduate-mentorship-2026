import { SectionHeading } from "./section-heading";
import { pillars, pillarsPrinciple } from "@/lib/booklet-data";

export function PillarsSection() {
  return (
    <section id="tiga-pilar" className="scroll-mt-24 py-10">
      <SectionHeading id="tiga-pilar" eyebrow="Bagian 3" title="Tiga Pilar Kurikulum" />
      <div className="mb-6 space-y-3">
        {pillars.map((p) => (
          <div key={p.name} className="rounded-xl border-[1.5px] border-ink p-5">
            <p className="font-heading text-base font-bold uppercase text-ink">
              {p.name}{" "}
              <span className="text-sm font-normal normal-case text-ink/50">— {p.subtitle}</span>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.content}</p>
            <p className="mt-3 font-heading text-xs uppercase tracking-wide text-brand-red">
              Disampaikan di: {p.deliveredIn}
            </p>
          </div>
        ))}
      </div>
      <p className="max-w-2xl text-sm italic text-ink/60">{pillarsPrinciple}</p>
    </section>
  );
}
