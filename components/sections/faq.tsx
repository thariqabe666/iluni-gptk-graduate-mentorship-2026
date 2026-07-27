"use client";

import { useMemo, useState } from "react";
import { Plus } from "lucide-react";
import { useAudience } from "@/components/audience-context";
import { faqs, faqCategories, type FaqCategory } from "@/lib/data";
import { cn } from "@/lib/utils";

type Filter = FaqCategory | "all";

/** Left border colour that encodes which track a question belongs to. */
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
      className="bg-ink py-20 sm:py-28 scroll-mt-16 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <p
          className={cn(
            "text-xs font-semibold tracking-widest uppercase mb-4 transition-colors duration-300",
            accentText
          )}
        >
          FAQ
        </p>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-cream leading-tight mb-4">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="text-cream/60 text-base mb-10 max-w-2xl">
          Semua yang perlu kamu tahu tentang Graduate Mentorship 2026 — dari cara
          daftar sebagai mentor atau mentee, sampai teknis pelaksanaan
          mentoring-nya.
        </p>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-4">
          {faqCategories.map((cat) => {
            const active = filter === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => selectFilter(cat.value)}
                aria-pressed={active}
                className={cn(
                  "rounded-xl border-2 px-4 py-1.5 text-xs font-bold transition-colors duration-200",
                  active
                    ? cn("border-ink text-white shadow-hard-cream-sm", accentBg)
                    : "border-cream/40 text-cream/70 hover:text-cream hover:border-cream"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
        <p className="text-cream/40 text-xs mb-8">
          {visible.length} pertanyaan
        </p>

        {/* Accordion */}
        <ul className="space-y-3">
          {visible.map(({ faq, i }) => {
            const open = openIndex === i;
            return (
              <li
                key={i}
                className={cn(
                  "rounded-xl border-2 border-cream/30 border-l-8 bg-ink overflow-hidden",
                  categoryBorder[faq.category]
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="w-full flex items-start gap-4 text-left px-5 py-4 cursor-pointer"
                >
                  <span className="flex-1 font-semibold text-cream text-sm sm:text-base leading-snug">
                    {faq.q}
                  </span>
                  <Plus
                    size={20}
                    className={cn(
                      "shrink-0 mt-0.5 transition-transform duration-200",
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
                    <div className="px-5 pb-5 text-cream/70 text-sm leading-relaxed">
                      <p>{faq.a}</p>
                      {faq.links && (
                        <ul className="mt-3 space-y-1">
                          {faq.links.map((link) => (
                            <li key={link.href}>
                              <a
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                  "font-semibold underline underline-offset-4 transition-colors duration-300",
                                  accentText
                                )}
                              >
                                {link.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-xs text-cream/40">
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
