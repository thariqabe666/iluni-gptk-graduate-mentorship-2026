import { SectionHeading } from "./section-heading";
import { platform } from "@/lib/booklet-data";

export function PlatformSection() {
  return (
    <section id="platform" className="scroll-mt-24 py-10">
      <SectionHeading id="platform" eyebrow="Bagian 11" title="Platform & Peran" />
      <div className="grid gap-3 sm:grid-cols-3">
        {platform.map((p) => (
          <div key={p.name} className="rounded-xl border-[1.5px] border-ink p-5">
            <p className="mb-2 font-heading text-sm font-bold uppercase text-ink">{p.name}</p>
            <p className="text-sm leading-relaxed text-ink/70">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
