"use client";

import { MapPin } from "lucide-react";
import { useAudience } from "@/components/audience-context";
import { timeline } from "@/lib/data";
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
            "text-xs font-semibold tracking-widest uppercase mb-4 transition-colors duration-300",
            accentText
          )}
        >
          Timeline
        </p>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-ink leading-tight mb-12">
          Jadwal Program
        </h2>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:block overflow-x-auto pb-2">
          <div className="flex items-start min-w-max px-1">
            {timeline.map((item, i) => (
              <div key={i} className="flex items-start">
                {/* Connector segment (skip before first item) */}
                {i !== 0 && (
                  <div className="h-[3px] w-8 lg:w-12 mt-[18px] shrink-0 bg-ink" />
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
                  <p className="text-ink font-semibold text-xs leading-snug mb-1">
                    {item.phase}
                  </p>
                  {/* Date */}
                  <p
                    className={cn(
                      "text-[10px] font-medium mb-1 transition-colors duration-300",
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
            <div className="absolute left-[13px] top-0 bottom-0 w-[3px] bg-ink" />
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
                  <div className="bg-cream rounded-xl p-4 border-2 border-ink shadow-hard-sm">
                    <p className="font-bold text-ink text-sm mb-0.5">{item.phase}</p>
                    <p
                      className={cn(
                        "text-xs font-medium mb-1 transition-colors duration-300",
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
      </div>
    </section>
  );
}
