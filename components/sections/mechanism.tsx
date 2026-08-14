"use client";

import { useAudience } from "@/components/audience-context";
import { mechanism, mentoringTopics } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FourPointStar, Burst, GearStar } from "@/components/shapes";

export function MechanismSection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBorder = isMentee ? "border-l-brand-red" : "border-l-brand-blue";

  return (
    <section id="mekanisme" className="bg-ink py-20 sm:py-28 scroll-mt-16 text-cream relative overflow-hidden border-b border-cream/10">
      {/* Background shape */}
      <GearStar className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 opacity-[0.04] text-cream" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-3">
          <FourPointStar className={cn("w-4 h-4 transition-colors duration-300", accentText)} />
          <p
            className={cn(
              "font-heading text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300",
              accentText
            )}
          >
            Mekanisme Pelaksanaan
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-cream leading-[0.98]">
              Bagaimana Mentoring Berjalan?
            </h2>
          </div>
          <p className="text-cream/60 text-sm max-w-md">
            {mechanism.note}
          </p>
        </div>

        {/* 1. TOP 4 HEADLINE STAT BENTO TILES */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-14">
          {mechanism.stats.map((stat, idx) => (
            <div
              key={stat.value}
              className="rounded-3xl border-2 border-cream/20 bg-cream/5 p-5 sm:p-6 flex flex-col justify-between hover:border-cream/40 transition-colors shadow-md"
            >
              <div>
                <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-cream/40 block mb-2">
                  {stat.sub}
                </span>
                <p
                  className={cn(
                    "font-heading text-2xl sm:text-3xl font-black uppercase leading-tight mb-1 transition-colors duration-300",
                    idx === 0 || idx === 2 ? "text-brand-red" : "text-brand-blue"
                  )}
                >
                  {stat.value}
                </p>
              </div>
              <p className="text-xs text-cream/70 font-medium mt-3 pt-3 border-t border-cream/10">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 2. 8 MENTORING TOPICS BENTO GRID */}
        <div className="rounded-3xl border-2 border-cream/20 bg-cream/5 p-6 sm:p-9 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-cream/15">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-brand-blue">
                Silabus Bimbingan
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-cream mt-1">
                8 Materi & Topik Utama
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-cream/50 font-heading">
              <Burst className="w-4 h-4 text-brand-red" />
              <span>Fleksibel Sesuai Kebutuhan Mentee</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {mentoringTopics.map((topic, i) => (
              <div
                key={topic.title}
                className={cn(
                  "rounded-2xl border border-cream/20 border-l-4 bg-ink/70 p-5 flex flex-col justify-between hover:bg-ink transition-colors",
                  accentBorder
                )}
              >
                <div>
                  <span className="text-[10px] font-heading font-bold text-cream/40 uppercase block mb-1.5">
                    Modul 0{i + 1}
                  </span>
                  <h4 className="font-heading font-bold text-cream text-base uppercase tracking-wide leading-snug mb-2">
                    {topic.title}
                  </h4>
                  <p className="text-cream/70 text-xs leading-relaxed">
                    {topic.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
