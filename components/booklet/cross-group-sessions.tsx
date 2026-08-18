"use client";

import { useEffect } from "react";
import { Info } from "lucide-react";
import { SectionHeading } from "./section-heading";
import {
  thematicSessions,
  thematicSessionsNote,
  thematicMoreTopicsNote,
  thematicHowTo,
  thematicQuotaNote,
  thematicOptionalNote,
} from "@/lib/booklet-data";

const LEGACY_HASHES = ["#lintas-kelompok", "#sesi-lintas-kelompok"];

export function CrossGroupSessionsSection() {
  // Redirect old "sesi lintas kelompok" links to the renamed section.
  useEffect(() => {
    if (LEGACY_HASHES.includes(window.location.hash)) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#sesi-tematik`);
      document.getElementById("sesi-tematik")?.scrollIntoView();
    }
  }, []);

  return (
    <section id="sesi-tematik" className="scroll-mt-24 py-10">
      <SectionHeading id="sesi-tematik" eyebrow="Bagian 7" title="Sesi Tematik Terbuka" />

      <div className="mb-4 grid gap-3 sm:grid-cols-2">
        {thematicSessions.map((s) => (
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
      <p className="mb-2 text-sm italic text-ink/60">{thematicSessionsNote}</p>
      <p className="mb-8 text-sm italic text-ink/60">{thematicMoreTopicsNote}</p>

      <p className="mb-4 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
        Cara Mendaftar
      </p>
      <ol className="mb-6 space-y-3">
        {thematicHowTo.map((step, i) => (
          <li key={step.title} className="flex gap-4 rounded-xl border-[1.5px] border-ink p-5">
            <span className="shrink-0 font-heading text-2xl font-bold text-brand-red">{i + 1}</span>
            <div>
              <p className="mb-1 font-heading text-sm font-bold text-ink">{step.title}</p>
              <p className="text-sm leading-relaxed text-ink/70">{step.desc}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="flex items-start gap-2.5 rounded-xl border border-ink/15 bg-ink/[0.03] p-3.5 text-xs sm:text-sm leading-relaxed text-ink/70">
        <Info size={16} className="mt-0.5 shrink-0 text-brand-blue" />
        <div className="space-y-2">
          <p>{thematicQuotaNote}</p>
          <p>{thematicOptionalNote}</p>
        </div>
      </div>
    </section>
  );
}
