"use client";

import { useAudience } from "@/components/audience-context";
import { mechanism, mentoringTopics } from "@/lib/data";
import { cn } from "@/lib/utils";

export function MechanismSection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBorder = isMentee ? "border-l-brand-red" : "border-l-brand-blue";

  return (
    <section id="mekanisme" className="bg-ink py-20 sm:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p
          className={cn(
            "font-heading text-xs font-semibold uppercase tracking-[0.14em] mb-4 transition-colors duration-300",
            accentText
          )}
        >
          Mekanisme Pelaksanaan
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-cream leading-tight mb-4">
          Bagaimana Sesi Mentoring Berjalan?
        </h2>
        <p className="text-cream/60 text-base mb-12 max-w-2xl">{mechanism.note}</p>

        {/* Headline numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {mechanism.stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border-[1.5px] border-cream bg-ink p-5"
            >
              <p
                className={cn(
                  "font-heading text-xl sm:text-2xl font-bold uppercase leading-tight mb-1 transition-colors duration-300",
                  accentText
                )}
              >
                {stat.value}
              </p>
              <p className="text-[11px] uppercase tracking-wide text-cream/50 font-medium leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Topics covered */}
        <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-cream mb-6">
          Materi & Topik Mentoring
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {mentoringTopics.map((topic) => (
            <div
              key={topic.title}
              className={cn(
                "rounded-xl border-[1.5px] border-cream/30 border-l-[3px] bg-ink p-5 transition-colors duration-300",
                accentBorder
              )}
            >
              <h4 className="font-heading font-bold text-cream text-sm uppercase tracking-wide mb-1.5">
                {topic.title}
              </h4>
              <p className="text-cream/60 text-sm leading-relaxed">{topic.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
