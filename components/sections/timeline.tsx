"use client";

import Link from "next/link";
import { MapPin, CheckCircle2, Clock } from "lucide-react";
import { useAudience } from "@/components/audience-context";
import { timeline, timelineNote } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FourPointStar, GearStar } from "@/components/shapes";

export function TimelineSection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";

  return (
    <section
      id="timeline"
      className="bg-cream py-20 sm:py-28 scroll-mt-16 overflow-hidden border-b border-ink/10"
    >
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
            Linimasa Resmi
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-ink leading-[0.98]">
              Jadwal & Tahapan Program
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-red text-white font-heading text-xs font-bold uppercase tracking-wider w-fit">
            <Clock size={14} /> Grand Launch: 25 Agustus 2026
          </span>
        </div>

        {/* Bento Timeline Container */}
        <div className="rounded-3xl border-2 border-ink bg-cream p-6 sm:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <GearStar className="pointer-events-none absolute -right-16 -top-16 w-60 h-60 opacity-[0.04] text-ink" />

          {/* Desktop Horizontal Milestone Stepper */}
          <div className="hidden lg:grid grid-cols-6 gap-3 relative z-10">
            {timeline.map((item, i) => {
              const isDone = item.status === "completed";
              return (
                <div
                  key={i}
                  className={cn(
                    "rounded-2xl border-2 border-ink p-4 flex flex-col justify-between transition-all duration-200",
                    isDone ? "bg-white/90" : "bg-brand-red/10 border-brand-red"
                  )}
                >
                  <div>
                    {/* Top status indicator */}
                    <div className="flex items-center justify-between gap-1 mb-3">
                      <span className="font-heading text-[10px] font-bold text-ink/50 uppercase">
                        Fase 0{i + 1}
                      </span>
                      {isDone ? (
                        <CheckCircle2 size={15} className="text-brand-blue" />
                      ) : (
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
                      )}
                    </div>

                    <p className="font-heading font-black uppercase text-xs sm:text-sm text-ink leading-snug mb-2">
                      {item.phase}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-ink/10">
                    <p
                      className={cn(
                        "font-heading text-[11px] font-bold uppercase tracking-wide mb-1",
                        isDone ? "text-ink/80" : "text-brand-red"
                      )}
                    >
                      {item.date}
                    </p>
                    {item.note && (
                      <p className="text-[10px] text-ink/50 italic flex items-center gap-1">
                        {item.note.includes("Hybrid") || item.note.includes("Offline") ? (
                          <MapPin size={10} className="shrink-0" />
                        ) : null}
                        <span>{item.note}</span>
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile & Tablet Vertical Stepper */}
          <div className="lg:hidden space-y-4">
            {timeline.map((item, i) => {
              const isDone = item.status === "completed";
              return (
                <div
                  key={i}
                  className={cn(
                    "rounded-2xl border-2 border-ink p-4 flex items-start gap-4",
                    isDone ? "bg-white/90" : "bg-brand-red/10 border-brand-red"
                  )}
                >
                  <span
                    className={cn(
                      "w-8 h-8 rounded-xl flex items-center justify-center font-heading font-bold text-xs shrink-0",
                      isDone ? "bg-brand-blue text-white" : "bg-brand-red text-white"
                    )}
                  >
                    0{i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-heading font-bold uppercase text-ink text-sm">
                        {item.phase}
                      </p>
                      {isDone && <CheckCircle2 size={16} className="text-brand-blue shrink-0" />}
                    </div>
                    <p className="font-heading text-xs font-bold text-brand-red mt-0.5">
                      {item.date}
                    </p>
                    {item.note && (
                      <p className="text-xs text-ink/60 mt-1 italic flex items-center gap-1">
                        <MapPin size={11} className="shrink-0" />
                        <span>{item.note}</span>
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Note & Link */}
          <div className="pt-6 mt-6 border-t-2 border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ink/70">
            <p className="italic max-w-xl">
              {timelineNote}
            </p>
            <Link
              href="/booklet#linimasa"
              className="font-heading font-bold uppercase text-ink underline underline-offset-4 hover:text-brand-red transition-colors shrink-0"
            >
              Lihat Linimasa Lengkap di Booklet →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
