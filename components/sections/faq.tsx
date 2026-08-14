"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { useAudience } from "@/components/audience-context";
import { faqs, faqCategories, type FaqCategory } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FourPointStar, Burst } from "@/components/shapes";

type Filter = FaqCategory | "all";

const categoryBorder: Record<FaqCategory, string> = {
  general: "border-l-cream/40",
  mentor: "border-l-brand-blue",
  mentee: "border-l-brand-red",
};

export function FaqSection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";
  const [filter, setFilter] = useState<Filter>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";

  const visible = useMemo(
    () =>
      faqs
        .map((faq, i) => ({ faq, i }))
        .filter(({ faq }) => filter === "all" || faq.category === filter),
    [filter]
  );

  const selectFilter = (next: Filter) => {
    setFilter(next);
    setOpenIndex(null);
  };

  return (
    <section
      id="faq"
      className="bg-ink py-20 sm:py-28 scroll-mt-16 overflow-hidden text-cream border-b border-cream/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-3">
          <FourPointStar className={cn("w-4 h-4 transition-colors duration-300", accentText)} />
          <p
            className={cn(
              "font-heading text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300",
              accentText
            )}
          >
            Tanya Jawab
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-cream leading-[0.98] mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-cream/70 text-sm sm:text-base mb-10 max-w-2xl">
          Semua yang perlu kamu ketahui tentang program Graduate Mentorship 2026 — dari kriteria, peran, hingga teknis pelaksanaan bimbingan.
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {faqCategories.map((cat) => {
            const active = filter === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => selectFilter(cat.value)}
                aria-pressed={active}
                className={cn(
                  "rounded-xl border-2 px-4 py-2 font-heading text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer",
                  active
                    ? cn("border-white text-white shadow-md", accentBg)
                    : "border-cream/20 bg-cream/5 text-cream/70 hover:text-cream hover:border-cream/50"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <p className="text-cream/40 text-xs mb-8 font-heading">
          Menampilkan {visible.length} pertanyaan
        </p>

        {/* Accordion Cards */}
        <div className="space-y-3.5">
          {visible.map(({ faq, i }) => {
            const open = openIndex === i;
            return (
              <div
                key={i}
                className={cn(
                  "rounded-2xl border-2 border-cream/20 border-l-[6px] bg-cream/5 hover:bg-cream/10 transition-colors overflow-hidden",
                  categoryBorder[faq.category]
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-start justify-between gap-4 text-left px-5 sm:px-6 py-4 sm:py-5 cursor-pointer"
                >
                  <span className="font-heading font-bold text-cream text-base sm:text-lg leading-snug">
                    {faq.q}
                  </span>
                  <Plus
                    size={20}
                    className={cn(
                      "shrink-0 mt-1 transition-transform duration-300",
                      accentText,
                      open && "rotate-45"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-cream/80 text-sm leading-relaxed border-t border-cream/10">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 pt-6 border-t border-cream/10 text-xs text-cream/50 font-heading">
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-cream/40" />
            Umum
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-brand-blue" />
            Mentor Track
          </span>
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-sm bg-brand-red" />
            Mentee Track
          </span>
        </div>
      </div>
    </section>
  );
}
