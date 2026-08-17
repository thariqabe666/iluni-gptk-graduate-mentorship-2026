"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SectionHeading } from "./section-heading";
import { groupsEntering, groupsGrowing, type Group } from "@/lib/booklet-data";
import { cn } from "@/lib/utils";

type TrackKey = "entering" | "growing";

const trackMeta: Record<TrackKey, { label: string; groups: Group[]; total: number; accent: string; border: string }> = {
  entering: {
    label: "Entering",
    groups: groupsEntering,
    total: 55,
    accent: "text-brand-red",
    border: "border-brand-red",
  },
  growing: {
    label: "Growing",
    groups: groupsGrowing,
    total: 50,
    accent: "text-brand-blue",
    border: "border-brand-blue",
  },
};

function CoMentorLabel({ coMentor }: { coMentor: Group["coMentor"] }) {
  return (
    <>
      {coMentor.map((m, i) => (
        <span key={i} className="block">
          {m.name}
          {m.org && <span className="text-ink/50"> — {m.org}, {m.role}</span>}
          {!m.org && <span className="text-ink/50"> — {m.role}</span>}
        </span>
      ))}
    </>
  );
}

export function GroupsSection() {
  const [track, setTrack] = useState<TrackKey>("growing");
  const meta = trackMeta[track];

  return (
    <section id="kelompok" className="scroll-mt-24 py-10">
      <SectionHeading id="kelompok" eyebrow="Bagian 6" title="Peta 20 Kelompok" />
      <p className="mb-6 max-w-2xl text-sm text-ink/70">
        Kode kelompok, jalur, nama Anchor &amp; Co-Mentor beserta perusahaan/jabatan, dan jumlah
        mentee. Nama mentee tidak ditampilkan.
      </p>

      <Tabs value={track} onValueChange={(v) => setTrack(v as TrackKey)}>
        <TabsList className="mb-6 h-9 rounded-xl border-2 border-ink bg-cream p-0.5">
          <TabsTrigger
            value="growing"
            className={cn(
              "h-8 rounded-lg px-4 font-heading text-xs font-bold uppercase tracking-[0.05em] transition-all",
              track === "growing"
                ? "bg-brand-blue text-white data-active:bg-brand-blue data-active:text-white"
                : "text-ink/70"
            )}
          >
            Growing — 10 kelompok
          </TabsTrigger>
          <TabsTrigger
            value="entering"
            className={cn(
              "h-8 rounded-lg px-4 font-heading text-xs font-bold uppercase tracking-[0.05em] transition-all",
              track === "entering"
                ? "bg-brand-red text-white data-active:bg-brand-red data-active:text-white"
                : "text-ink/70"
            )}
          >
            Entering — 10 kelompok
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <p className={cn("mb-4 font-heading text-xs font-semibold uppercase tracking-wide", meta.accent)}>
        Jalur {meta.label} · {meta.groups.length} kelompok · {meta.total} mentee
      </p>

      {/* Desktop: table (also used for print, regardless of viewport) */}
      <div className="hidden overflow-x-auto md:block print:!block">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-ink">
              <th className="py-2 pr-3 font-heading text-xs uppercase tracking-wide text-ink/60">Kode</th>
              <th className="py-2 pr-3 font-heading text-xs uppercase tracking-wide text-ink/60">Track</th>
              <th className="py-2 pr-3 font-heading text-xs uppercase tracking-wide text-ink/60">
                Anchor Mentor
              </th>
              <th className="py-2 pr-3 font-heading text-xs uppercase tracking-wide text-ink/60">
                Co-Mentor
              </th>
              <th className="py-2 font-heading text-xs uppercase tracking-wide text-ink/60">Jml</th>
            </tr>
          </thead>
          <tbody>
            {meta.groups.map((g) => (
              <tr key={g.code} className="border-b border-ink/10 align-top">
                <td className={cn("py-3 pr-3 font-heading font-bold", meta.accent)}>{g.code}</td>
                <td className="py-3 pr-3 text-ink/80">{g.track}</td>
                <td className="py-3 pr-3 text-ink/80">
                  {g.anchor.name}
                  <span className="text-ink/50">
                    {" "}
                    — {g.anchor.org ? `${g.anchor.org}, ` : ""}
                    {g.anchor.role}
                  </span>
                </td>
                <td className="py-3 pr-3 text-ink/80">
                  <CoMentorLabel coMentor={g.coMentor} />
                </td>
                <td className="py-3 text-ink/80">{g.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: cards (hidden in print — the table above prints instead) */}
      <ul className="space-y-3 md:hidden print:!hidden">
        {meta.groups.map((g) => (
          <li
            key={g.code}
            className={cn("rounded-xl border-[1.5px] border-l-[4px] border-ink p-4", meta.border)}
          >
            <div className="mb-2 flex items-center justify-between">
              <span className={cn("font-heading text-sm font-bold", meta.accent)}>{g.code}</span>
              <span className="text-xs text-ink/50">{g.count} mentee</span>
            </div>
            <p className="mb-2 text-sm font-semibold text-ink">{g.track}</p>
            <p className="text-xs text-ink/60">
              <span className="font-medium text-ink/80">Anchor:</span> {g.anchor.name}
              {g.anchor.org ? `, ${g.anchor.org}` : ""} — {g.anchor.role}
            </p>
            <div className="mt-1 text-xs text-ink/60">
              <span className="font-medium text-ink/80">Co-Mentor:</span>{" "}
              {g.coMentor.map((m, i) => (
                <span key={i} className="block">
                  {m.name}
                  {m.org ? `, ${m.org}` : ""} — {m.role}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
