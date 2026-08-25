import { FolderOpen, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { platform, platformToolsNote, driveJoin } from "@/lib/booklet-data";

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

      <a
        href={driveJoin.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-xl border-[1.5px] border-ink bg-ink px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wide text-cream transition-colors hover:bg-ink/85"
      >
        <FolderOpen size={16} />
        {driveJoin.label}
        <ArrowUpRight size={14} />
      </a>
    </section>
  );
}
