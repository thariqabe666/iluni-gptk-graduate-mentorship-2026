import { Table2, ArrowUpRight, Info } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { tracks, bookletStats, groupsSheet } from "@/lib/booklet-data";

export function GroupsSection() {
  const kelompokCount = bookletStats.find((s) => s.label === "Kelompok mentoring")?.value ?? "20";

  return (
    <section id="kelompok" className="scroll-mt-24 py-10">
      <SectionHeading id="kelompok" eyebrow="Bagian 7" title="Peta 20 Kelompok" />
      <p className="mb-6 max-w-2xl text-sm text-ink/70">
        Kode kelompok, nama &amp; organisasi mentor, dan jumlah mentee kini dikelola langsung di
        satu Google Sheet yang selalu terbaru — bukan dicetak statis di halaman ini.
      </p>

      <div className="rounded-2xl border-2 border-ink bg-ink p-6 sm:p-8 text-cream">
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-cream/20 bg-cream/5 p-4">
            <p className="font-heading text-2xl font-black text-cream">{kelompokCount}</p>
            <p className="text-xs text-cream/60">Kelompok</p>
          </div>
          <div className="rounded-xl border border-cream/20 bg-cream/5 p-4">
            <p className="font-heading text-2xl font-black text-brand-blue">{tracks.growing.count}</p>
            <p className="text-xs text-cream/60">Mentee · Growing (10 kelompok)</p>
          </div>
          <div className="rounded-xl border border-cream/20 bg-cream/5 p-4">
            <p className="font-heading text-2xl font-black text-brand-red">{tracks.entering.count}</p>
            <p className="text-xs text-cream/60">Mentee · Entering (10 kelompok)</p>
          </div>
        </div>

        <a
          href={groupsSheet.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border-2 border-cream bg-cream px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wide text-ink transition-colors hover:bg-cream/85"
        >
          <Table2 size={16} />
          {groupsSheet.label}
          <ArrowUpRight size={14} />
        </a>

        <div className="mt-5 flex items-start gap-2.5 border-t border-cream/15 pt-5 text-xs leading-relaxed text-cream/70">
          <Info size={15} className="mt-0.5 shrink-0 text-brand-blue" />
          <span>{groupsSheet.note}</span>
        </div>
      </div>
    </section>
  );
}
