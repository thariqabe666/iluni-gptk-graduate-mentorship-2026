"use client";

import { UserCheck, ListChecks } from "lucide-react";
import { useAudience } from "@/components/audience-context";
import { audienceCopy } from "@/lib/data";
import { cn } from "@/lib/utils";

export function RolesSection() {
  const { audience } = useAudience();
  const copy = audienceCopy[audience];
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";

  const columns = [
    {
      icon: UserCheck,
      heading: isMentee ? "Kriteria Mentee" : "Kriteria Mentor",
      items: copy.eligibility,
    },
    {
      icon: ListChecks,
      heading: isMentee ? "Peran Mentee" : "Peran Mentor",
      items: copy.responsibilities,
    },
  ];

  return (
    <section id="peran" className="bg-cream py-20 sm:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p
          className={cn(
            "text-xs font-semibold tracking-widest uppercase mb-4 transition-colors duration-300",
            accentText
          )}
        >
          Kriteria & Peran
        </p>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-ink leading-tight mb-4">
          {isMentee ? "Siapa yang Bisa Ikut?" : "Siapa yang Bisa Membimbing?"}
        </h2>
        <p className="text-ink/60 text-base mb-12 max-w-2xl">
          Gunakan toggle Mentee/Mentor di atas untuk melihat kriteria dan peran track lainnya.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {columns.map((col) => (
            <div
              key={col.heading}
              className="rounded-2xl border-2 border-ink bg-cream p-6 sm:p-8 shadow-hard-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <span
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300",
                    accentBg
                  )}
                >
                  <col.icon className="text-white" size={20} />
                </span>
                <h3 className="font-bold text-ink text-lg">{col.heading}</h3>
              </div>
              <ul className="space-y-3">
                {col.items.map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink/80">
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
          ))}
        </div>
      </div>
    </section>
  );
}
