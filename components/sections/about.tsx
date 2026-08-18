"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { useAudience } from "@/components/audience-context";
import { audienceCopy } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FourPointStar, Burst, FanArches, Heart } from "@/components/shapes";

export function AboutSection() {
  const { audience } = useAudience();
  const copy = audienceCopy[audience];
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";

  return (
    <section id="tentang" className="bg-cream py-20 sm:py-28 scroll-mt-16 border-b border-ink/10">
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
            Tentang Program
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Large Bento Card: Mission & Photo (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Mission Statement Card */}
            <div className="rounded-3xl border-2 border-ink bg-cream p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between flex-1">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-ink leading-[0.98] mb-6">
                  {isMentee ? (
                    <>
                      Your Journey,
                      <br />
                      <span className="text-brand-red">Engineered.</span>
                    </>
                  ) : (
                    <>
                      Share Your Legacy,
                      <br />
                      <span className="text-brand-blue">Shape The Future.</span>
                    </>
                  )}
                </h2>

                <p className="text-ink/80 text-base sm:text-lg leading-relaxed mb-6">
                  {isMentee
                    ? "ILUNI GPTK Graduate Mentorship 2026 adalah program mentoring resmi yang menghubungkan alumni muda DTK UI Batch 2020–2022 dengan para profesional terkemuka di industri. Selama 3 bulan, kamu dibimbing secara personal, menyusun blueprint karier nyata, dan memperluas jejaring profesional — 100% gratis!"
                    : "ILUNI GPTK Graduate Mentorship 2026 mengundang para profesional alumni DTK UI untuk berbagi pengalaman, membimbing generasi penerus, dan memperkuat relasi lintas angkatan. Dalam format 3 bulan yang fleksibel, Anda berkontribusi nyata pada masa depan almamater sekaligus mengasah coaching leadership."}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t-2 border-ink/10">
                <span className="px-3 py-1 rounded-xl bg-ink text-cream font-heading text-xs font-bold uppercase">
                  ILUNI GPTK FTUI
                </span>
                <span className="text-xs text-ink/60 font-medium">
                  Departemen Teknik Kimia · Universitas Indonesia
                </span>
              </div>
            </div>

            {/* Event Gathering Photo Card */}
            <div className="rounded-3xl border-2 border-ink bg-ink overflow-hidden relative min-h-[240px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group">
              <Image
                src="/photos/auditorium-gathering.jpeg"
                alt="ILUNI GPTK Mentorship Gathering"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="relative z-10 p-6 flex flex-col justify-end h-full">
                <span className="inline-block px-3 py-1 rounded-lg bg-brand-red text-white font-heading text-[10px] font-bold uppercase tracking-wider mb-2 w-fit">
                  Alumni & Fresh Graduate Gathering
                </span>
                <p className="font-heading text-lg font-bold text-white uppercase leading-snug">
                  Kolaborasi Sinergis Lintas Generasi DTK UI
                </p>
                <p className="text-white/70 text-xs mt-1">
                  106 Mentees · 42 Mentors · 20 Kelompok Bimbingan
                </p>
              </div>
            </div>
          </div>

          {/* Right Bento Column: Objectives & Special Callout (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Objectives List Card */}
            <div className="rounded-3xl border-2 border-ink bg-cream p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex-1">
              <div className="flex items-center justify-between gap-2 mb-6">
                <h3 className="font-heading text-lg sm:text-xl font-bold uppercase tracking-tight text-ink">
                  Tujuan Utama Program
                </h3>
                <Burst className={cn("w-6 h-6 transition-colors duration-300", accentText)} />
              </div>

              <ul className="space-y-4">
                {copy.objectives.map((obj, i) => (
                  <li
                    key={i}
                    className="flex gap-3.5 p-4 rounded-2xl border-2 border-ink bg-white/70 shadow-sm"
                  >
                    <span
                      className={cn(
                        "flex items-center justify-center w-7 h-7 rounded-xl shrink-0 transition-colors duration-300 text-white",
                        accentBg
                      )}
                    >
                      <CheckCircle2 size={16} />
                    </span>
                    <span className="text-ink/90 text-xs sm:text-sm leading-relaxed font-medium">
                      {obj}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Special Invitation / Value Card */}
            <div
              className={cn(
                "rounded-3xl border-2 border-ink p-6 text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden transition-colors duration-300",
                accentBg
              )}
            >
              <FanArches className="pointer-events-none absolute -right-6 -bottom-6 w-32 h-32 opacity-20 text-white" />
              <div className="relative z-10 flex items-start gap-4">
                <Heart className="w-9 h-9 text-white shrink-0" />
                <div>
                  <h4 className="font-heading font-bold uppercase text-base mb-1">
                    {isMentee ? "100% Free & Exclusive" : "A Special Invitation"}
                  </h4>
                  <p className="text-white/85 text-xs sm:text-sm leading-relaxed">
                    {isMentee
                      ? "Tidak dipungut biaya sepeserpun. Kesempatan emas untuk berdiskusi langsung dengan para leader industri."
                      : "Untuk seluruh alumni GPTK FTUI dengan 5+ tahun pengalaman kerja untuk saling terhubung dan memberdayakan generasi baru."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
