import { GraduationCap } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { platform, platformToolsNote, classroomJoin } from "@/lib/booklet-data";

export function PlatformSection() {
  return (
    <section id="platform" className="scroll-mt-24 py-10">
      <SectionHeading id="platform" eyebrow="Bagian 12" title="Platform & Peran" />
      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        {platform.map((p) => (
          <div key={p.name} className="rounded-xl border-[1.5px] border-ink p-5">
            <p className="mb-2 font-heading text-sm font-bold uppercase text-ink">{p.name}</p>
            <p className="text-sm leading-relaxed text-ink/70">{p.desc}</p>
          </div>
        ))}
      </div>

      <p className="mb-6 text-sm italic text-ink/60">{platformToolsNote}</p>

      <div className="inline-flex flex-wrap items-center gap-3 rounded-xl border-[1.5px] border-ink p-4">
        <span className="flex items-center gap-2 rounded-lg border-[1.5px] border-ink px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wide text-ink/40">
          <GraduationCap size={16} />
          {classroomJoin.label}
        </span>
        <span className="font-heading text-xs font-semibold uppercase tracking-wide text-brand-red">
          {classroomJoin.code}
        </span>
      </div>
    </section>
  );
}
