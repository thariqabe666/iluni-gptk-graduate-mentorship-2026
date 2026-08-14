"use client";

import { CheckCircle2 } from "lucide-react";
import { useAudience } from "@/components/audience-context";
import { audienceCopy } from "@/lib/data";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const { audience } = useAudience();
  const copy = audienceCopy[audience];
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";

  return (
    <section id="tentang" className="bg-cream py-20 sm:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left: Mission */}
          <div>
            <p
              className={cn(
                "font-heading text-xs font-semibold uppercase tracking-[0.14em] mb-4 transition-colors duration-300",
                accentText
              )}
            >
              Tentang Program
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-ink leading-[1.02] mb-6">
              {isMentee
                ? "Your Journey,\nEngineered."
                : "Share Your Legacy,\nShape the Future."}
            </h2>
            <p className="text-ink/70 text-base leading-relaxed">
              {isMentee
                ? "ILUNI GPTK Graduate Mentorship 2026 adalah program mentorship resmi yang menghubungkan alumni DTK UI Batch 2020–2022 dengan para profesional berpengalaman di industri. Selama 3 bulan, kamu akan mendapat bimbingan personal, wawasan karier, dan jejaring yang relevan — semuanya gratis!"
                : "ILUNI GPTK Graduate Mentorship 2026 mengundang profesional alumni DTK UI untuk berbagi pengalaman dan membimbing generasi penerus. Dalam 3 bulan yang fleksibel, Anda berkontribusi nyata pada masa depan komunitas sekaligus mengasah kemampuan kepemimpinan Anda."}
            </p>
          </div>

          {/* Right: Objectives */}
          <div>
            <p
              className={cn(
                "font-heading text-xs font-semibold uppercase tracking-[0.14em] mb-4 transition-colors duration-300",
                accentText
              )}
            >
              Tujuan Program
            </p>
            <ul className="space-y-4">
              {copy.objectives.map((obj, i) => (
                <li
                  key={i}
                  className="flex gap-3 p-4 rounded-xl border-[1.5px] border-ink bg-cream"
                >
                  <span
                    className={cn(
                      "flex items-center justify-center w-6 h-6 rounded-full shrink-0 transition-colors duration-300",
                      accentBg
                    )}
                  >
                    <CheckCircle2 className="text-white" size={14} />
                  </span>
                  <span className="text-ink/80 text-sm leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
