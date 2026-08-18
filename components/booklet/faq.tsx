"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { bookletFaqs } from "@/lib/booklet-data";
import { cn } from "@/lib/utils";

export function BookletFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-24 py-10">
      <SectionHeading id="faq" eyebrow="Bagian 13" title="FAQ" />
      <ul className="space-y-3">
        {bookletFaqs.map((faq, i) => {
          const open = openIndex === i;
          return (
            <li key={i} className="overflow-hidden rounded-xl border-[1.5px] border-ink">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : i)}
                aria-expanded={open}
                className="flex w-full cursor-pointer items-start gap-4 px-5 py-4 text-left"
              >
                <span className="flex-1 text-sm font-semibold leading-snug text-ink sm:text-base">
                  {faq.q}
                </span>
                <Plus
                  size={20}
                  className={cn(
                    "mt-0.5 shrink-0 text-brand-red transition-transform duration-200",
                    open && "rotate-45"
                  )}
                />
              </button>
              <div
                className={cn(
                  "grid transition-[grid-template-rows] duration-300 ease-out print:grid-rows-[1fr]",
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                )}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-ink/70">{faq.a}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
