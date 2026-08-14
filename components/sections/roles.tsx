"use client";

import { UserCheck, ListChecks } from "lucide-react";
import { useAudience } from "@/components/audience-context";
import { audienceCopy } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FourPointStar, Burst } from "@/components/shapes";

export function RolesSection() {
  const { audience } = useAudience();
  const copy = audienceCopy[audience];
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";

  const cards = [
    {
      icon: UserCheck,
      heading: isMentee ? "Kriteria Mentee" : "Kriteria Mentor",
      badge: "Eligibility",
      items: copy.eligibility,
    },
    {
      icon: ListChecks,
      heading: isMentee ? "Peran & Komitmen Mentee" : "Peran & Tanggung Jawab Mentor",
      badge: "Responsibilities",
      items: copy.responsibilities,
    },
  ];

  return (
    <section id="peran" className="bg-cream py-20 sm:py-28 scroll-mt-16 border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-3">
          <FourPointStar className={cn("w-4 h-4 transition-colors duration-300", accentText)} />
          <p
            className={cn(
              "font-heading text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300",
              accentText
            )}
          >
            Kriteria & Peran
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-ink leading-[0.98]">
              {isMentee ? "Siapa yang Bisa Ikut?" : "Siapa yang Bisa Membimbing?"}
            </h2>
          </div>
          <p className="text-ink/60 text-sm max-w-md">
            Pilih track Mentee / Mentor pada navigasi untuk melihat spesifikasi detail masing-masing peran.
          </p>
        </div>

        {/* Bento Grid: 2 Columns */}
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div
              key={card.heading}
              className="rounded-3xl border-2 border-ink bg-cream p-6 sm:p-9 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between"
            >
              <div>
                {/* Header inside card */}
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b-2 border-ink/10">
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 text-white shadow-md transition-colors duration-300",
                        accentBg
                      )}
                    >
                      <card.icon size={22} />
                    </span>
                    <div>
                      <span className="block font-heading text-[10px] font-bold uppercase tracking-wider text-ink/50">
                        {card.badge}
                      </span>
                      <h3 className="font-heading font-black uppercase text-ink text-lg sm:text-xl">
                        {card.heading}
                      </h3>
                    </div>
                  </div>
                  <Burst className={cn("w-6 h-6 shrink-0 opacity-40", accentText)} />
                </div>

                {/* List items */}
                <ul className="space-y-3.5">
                  {card.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm sm:text-base leading-relaxed text-ink/85 p-3 rounded-2xl bg-white/60 border border-ink/10"
                    >
                      <span
                        className={cn(
                          "mt-1.5 w-2 h-2 rounded-full shrink-0 transition-colors duration-300",
                          accentBg
                        )}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t-2 border-ink/10 flex items-center justify-between text-xs text-ink/50 font-heading font-semibold">
                <span>0{idx + 1} / 02</span>
                <span className="uppercase">{isMentee ? "Mentee Track" : "Mentor Track"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
