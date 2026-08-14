"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { useAudience } from "@/components/audience-context";
import { timeline, timelineNote } from "@/lib/data";
import { cn } from "@/lib/utils";

export function TimelineSection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";

  return (
    <section
      id="timeline"
      className="bg-cream py-20 sm:py-28 scroll-mt-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p
          className={cn(
            "font-heading text-xs font-semibold uppercase tracking-[0.14em] mb-4 transition-colors duration-300",
            accentText
          )}
        >
          Timeline
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-ink leading-[1.02] mb-12">
          Jadwal Program
        </h2>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:block overflow-x-auto pb-2">
          <div className="flex items-start min-w-max px-1">
            {timeline.map((item, i) => (
              <div key={i} className="flex items-start">
                {/* Connector segment (skip before first item) */}
                {i !== 0 && (
                  <div className="h-[2px] w-8 lg:w-12 mt-[17px] shrink-0 bg-ink" />
                )}
                <div className="flex flex-col items-center text-center w-32 lg:w-36">
                  {/* Dot */}
                  <div
                    className={cn(
                      "w-9 h-9 rounded-full mb-3 border-2 border-ink shrink-0 transition-colors duration-300",
                      accentBg
                    )}
                  />
                  {/* Phase label */}
                  <p className="font-heading text-ink font-bold uppercase text-xs leading-snug mb-1">
                    {item.phase}
                  </p>
                  {/* Date */}
                  <p
                    className={cn(
                      "font-heading text-[10px] font-bold uppercase tracking-[0.04em] mb-1 transition-colors duration-300",
                      accentText
                    )}
                  >
                    {item.date}
                  </p>
                  {/* Note */}
                  {item.note && (
                    <div className="flex items-center gap-0.5 justify-center">
                      {item.note.includes("onsite") || item.note.includes("Offline") ? (
                        <MapPin size={9} className="text-ink/40" />
                      ) : null}
                      <p className="text-[10px] text-ink/50 italic">{item.note}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Left rail */}
            <div className="absolute left-[16px] top-0 bottom-0 w-[2px] bg-ink" />
            <ul className="space-y-6">
              {timeline.map((item, i) => (
                <li key={i} className="relative">
                  {/* Dot */}
                  <div
                    className={cn(
                      "absolute -left-[27px] w-6 h-6 rounded-full border-2 border-ink transition-colors duration-300",
                      accentBg
                    )}
                  />
                  <div className="bg-cream rounded-xl p-4 border-[1.5px] border-ink">
                    <p className="font-heading font-bold uppercase text-ink text-sm mb-0.5">
                      {item.phase}
                    </p>
                    <p
                      className={cn(
                        "font-heading text-xs font-bold uppercase tracking-[0.04em] mb-1 transition-colors duration-300",
                        accentText
                      )}
                    >
                      {item.date}
                    </p>
                    {item.note && (
                      <div className="flex items-center gap-1">
                        {item.note.includes("onsite") || item.note.includes("Offline") ? (
                          <MapPin size={11} className="text-ink/40" />
                        ) : null}
                        <p className="text-[11px] text-ink/50 italic">{item.note}</p>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-ink/50 text-xs italic mt-8 max-w-xl">
          {timelineNote}{" "}
          <Link href="/booklet#linimasa" className="font-semibold not-italic underline underline-offset-4">
            Lihat linimasa lengkap →
          </Link>
        </p>
      </div>
    </section>
  );
}
