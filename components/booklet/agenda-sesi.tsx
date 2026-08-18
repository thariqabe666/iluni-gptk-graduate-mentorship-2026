"use client";

import { useState } from "react";
import { Info, ShieldAlert, Plus } from "lucide-react";
import { SectionHeading } from "./section-heading";
import {
  agendaSesiFrame,
  agendaSesiTable,
  agendaSesiTableNotes,
  agendaSesiDeadlineNote,
  agendaThreePillars,
  agendaSesiCards,
  agendaSesiNonNegotiable,
  insightBriefParts,
  type AgendaSesiRow,
} from "@/lib/booklet-data";
import { cn } from "@/lib/utils";

const briefTitleBySlug = new Map(insightBriefParts.map((p) => [p.slug, p.title]));

function PillarCell({ row }: { row: AgendaSesiRow }) {
  if (row.open) {
    return <span className="text-xs italic text-ink/40">Menyesuaikan kebutuhan</span>;
  }
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="rounded bg-ink px-1.5 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wide text-cream">
        {row.pillarMain}
      </span>
      {row.pillarSupport.map((p) => (
        <span key={p} className="text-[11px] text-ink/50">
          · {p}
        </span>
      ))}
    </div>
  );
}

function BriefCell({ row }: { row: AgendaSesiRow }) {
  if (row.open || row.briefRefs.length === 0) {
    return <span className="text-xs italic text-ink/40">{row.briefLabel}</span>;
  }
  return (
    <span className="text-xs text-ink/70">
      {row.briefRefs.map((slug, i) => (
        <span key={slug}>
          {i > 0 && " · "}
          <a href={`#${slug}`} className="font-medium text-brand-blue hover:underline">
            {briefTitleBySlug.get(slug) ?? row.briefLabel}
          </a>
        </span>
      ))}
    </span>
  );
}

function AgendaTable() {
  return (
    <div className="mb-3 overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead>
          <tr className="border-b-2 border-ink">
            <th className="py-2 pr-3 font-heading text-xs uppercase tracking-wide text-ink/60">Sesi</th>
            <th className="py-2 pr-3 font-heading text-xs uppercase tracking-wide text-ink/60">Kapan</th>
            <th className="py-2 pr-3 font-heading text-xs uppercase tracking-wide text-ink/60">Fokus</th>
            <th className="py-2 pr-3 font-heading text-xs uppercase tracking-wide text-ink/60">Pilar</th>
            <th className="py-2 pr-3 font-heading text-xs uppercase tracking-wide text-ink/60">
              Bahan yang Terkumpul
            </th>
            <th className="py-2 font-heading text-xs uppercase tracking-wide text-ink/60">
              Masuk Insight Brief
            </th>
          </tr>
        </thead>
        <tbody>
          {agendaSesiTable.map((row) => (
            <tr
              key={row.sesi}
              className={cn(
                "border-b border-ink/10 align-top",
                row.open && "border-dashed bg-ink/[0.03]"
              )}
            >
              <td
                className={cn(
                  "py-3 pr-3 font-heading font-bold",
                  row.open ? "text-ink/40 italic" : "text-brand-red"
                )}
              >
                {row.sesi}
              </td>
              <td className={cn("py-3 pr-3", row.open ? "italic text-ink/50" : "text-ink/80")}>
                {row.kapan}
              </td>
              <td className={cn("py-3 pr-3", row.open ? "italic text-ink/50" : "text-ink/80")}>
                {row.fokus}
              </td>
              <td className="py-3 pr-3">
                <PillarCell row={row} />
              </td>
              <td className={cn("py-3 pr-3", row.open ? "italic text-ink/50" : "text-ink/80")}>
                {row.bahan}
              </td>
              <td className="py-3">
                <BriefCell row={row} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SessionCards() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className="space-y-3">
      {agendaSesiCards.map((card, i) => {
        const open = openIndex === i;
        return (
          <li key={card.num} className="overflow-hidden rounded-xl border-[1.5px] border-ink">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full cursor-pointer items-start gap-4 px-5 py-4 text-left"
            >
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <span className="font-heading text-sm font-bold uppercase text-ink">
                    {card.num} — {card.title}
                  </span>
                  <span className="rounded bg-ink/10 px-1.5 py-0.5 font-heading text-[10px] font-semibold uppercase text-ink/60">
                    {card.duration}
                  </span>
                </div>
                <span className="inline-block rounded bg-ink px-1.5 py-0.5 font-heading text-[10px] font-bold uppercase tracking-wide text-cream">
                  {card.pillar}
                </span>
              </div>
              <Plus
                size={20}
                className={cn(
                  "mt-0.5 shrink-0 text-brand-red transition-transform duration-200",
                  open && "rotate-45"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out print:grid-rows-[1fr]",
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5">
                  <ul className="mb-3 space-y-1.5 text-sm leading-relaxed text-ink/70">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-ink/30">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {card.extra && (
                    <p className="rounded-lg bg-ink/[0.04] p-3 text-xs italic leading-relaxed text-ink/60">
                      {card.extra}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function AgendaSesiSection() {
  return (
    <section id="agenda-sesi" className="scroll-mt-24 py-10">
      <SectionHeading
        id="agenda-sesi"
        eyebrow="Bagian 6"
        title="Usulan Agenda Sesi — Bagaimana Empat Sesi Membangun Satu Tulisan"
      />

      {/* Blok 1 — Kalimat pembingkai */}
      <div className="mb-8 rounded-xl border-2 border-ink bg-ink p-5 text-cream">
        <p className="text-sm leading-relaxed">{agendaSesiFrame}</p>
      </div>

      {/* Blok 2 — Tabel peta besar */}
      <AgendaTable />
      <p className="mb-4 text-xs italic text-ink/50">{agendaSesiDeadlineNote}</p>

      <div className="mb-10 flex items-start gap-2.5 rounded-xl border border-ink/15 bg-ink/[0.03] p-3.5 text-xs sm:text-sm leading-relaxed text-ink/70">
        <Info size={16} className="mt-0.5 shrink-0 text-brand-blue" />
        <ul className="space-y-1.5">
          {agendaSesiTableNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>

      {/* Blok 3 — Tiga pilar hadir di setiap sesi */}
      <p className="mb-3 max-w-2xl text-sm leading-relaxed text-ink/70">{agendaThreePillars.lead}</p>
      <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">
        <span className="font-semibold text-ink">{agendaThreePillars.bold}</span>{" "}
        {agendaThreePillars.tail}
      </p>
      <div className="mb-10 space-y-3">
        {agendaThreePillars.paragraphs.map((p) => (
          <p key={p} className="max-w-2xl text-sm leading-relaxed text-ink/70">
            {p}
          </p>
        ))}
      </div>

      {/* Blok 4 — Empat kartu sesi (accordion) */}
      <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
        Empat Sesi, Diperinci
      </p>
      <div className="mb-10">
        <SessionCards />
      </div>

      {/* Blok 5 — Yang tidak boleh dipotong */}
      <div className="rounded-xl border-2 border-brand-red bg-brand-red/5 p-5">
        <div className="mb-2 flex items-center gap-2">
          <ShieldAlert size={18} className="shrink-0 text-brand-red" />
          <p className="font-heading text-sm font-bold uppercase tracking-wide text-brand-red">
            Yang Tidak Boleh Dipotong
          </p>
        </div>
        <p className="text-sm leading-relaxed text-ink/80">{agendaSesiNonNegotiable}</p>
      </div>
    </section>
  );
}
