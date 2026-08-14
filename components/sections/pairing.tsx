"use client";

import Link from "next/link";
import { Users, ShieldCheck, Sparkles } from "lucide-react";
import { useAudience } from "@/components/audience-context";
import { pairingScheme, event } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FourPointStar, Burst, FanArches } from "@/components/shapes";

export function PairingSection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";

  return (
    <section className="bg-ink py-20 sm:py-28 text-cream relative overflow-hidden border-b border-cream/10">
      {/* Background shape */}
      <Burst className="pointer-events-none absolute -left-12 -bottom-12 w-64 h-64 opacity-[0.04] text-cream" />

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
            Skema Pengelompokan
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-cream leading-[0.98]">
              Bagaimana Kelompok Bekerja?
            </h2>
          </div>
          <p className="text-cream/60 text-sm max-w-md">
            Arsitektur kelompok dirancang khusus agar interaksi berjalan intensif dan mendalam.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Card: Anchor + Co-Mentor Scheme (8 cols) */}
          <div className="lg:col-span-8 rounded-3xl border-2 border-cream/20 bg-cream/5 p-6 sm:p-9 flex flex-col justify-between relative overflow-hidden shadow-xl">
            <FanArches className="pointer-events-none absolute -right-6 -bottom-6 w-36 h-36 opacity-10 text-cream" />

            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md transition-colors duration-300",
                    accentBg
                  )}
                >
                  <Users size={24} />
                </span>
                <div>
                  <span className="font-heading text-xs font-bold uppercase tracking-wider text-cream/50">
                    Dual Mentor Architecture
                  </span>
                  <h3 className="font-heading text-xl sm:text-2xl font-black uppercase text-cream">
                    {pairingScheme.ratio}
                  </h3>
                </div>
              </div>

              <p className="text-cream/80 text-sm sm:text-base leading-relaxed mb-6">
                {pairingScheme.note}
              </p>

              {/* 2 Roles breakdown */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-cream/15">
                <div className="p-4 rounded-2xl bg-ink/60 border border-cream/15">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck size={16} className="text-brand-red" />
                    <span className="font-heading font-bold text-sm uppercase text-cream">
                      Anchor Mentor
                    </span>
                  </div>
                  <p className="text-xs text-cream/60 leading-relaxed">
                    Penanggung jawab utama yang mendampingi kelompok dari awal hingga akhir, memfasilitasi diskusi & penyusunan IDP.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-ink/60 border border-cream/15">
                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles size={16} className="text-brand-blue" />
                    <span className="font-heading font-bold text-sm uppercase text-cream">
                      Co-Mentor
                    </span>
                  </div>
                  <p className="text-xs text-cream/60 leading-relaxed">
                    Partner pendamping untuk memperdalam silaturahmi, memperkuat bimbingan, serta sesi pendalaman teknis spesifik.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-cream/10 flex items-center justify-between">
              <span className="text-xs text-cream/50 font-heading">
                Total: {event.stats.groupsCount} Kelompok Terdistribusi
              </span>
              <Link
                href="/booklet#kelompok"
                className="text-xs font-heading font-bold uppercase text-cream underline underline-offset-4 hover:text-cream/80"
              >
                Lihat Peta 20 Kelompok di Booklet →
              </Link>
            </div>
          </div>

          {/* Side Card: Summary Numbers (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="rounded-3xl border-2 border-brand-blue bg-brand-blue text-white p-6 sm:p-7 flex flex-col justify-between shadow-xl flex-1">
              <div>
                <span className="px-3 py-1 rounded-lg bg-black/20 font-heading text-[10px] font-bold uppercase tracking-wider mb-4 inline-block">
                  Rasio Ideal
                </span>
                <p className="font-heading text-4xl sm:text-5xl font-black mb-2 leading-none">
                  1 : 5
                </p>
                <p className="font-heading text-sm font-bold uppercase tracking-wide text-white/90">
                  Rata-rata Mentee per Mentor
                </p>
                <p className="text-xs text-white/80 mt-2 leading-relaxed">
                  Menjamin perhatian personal dan waktu bimbingan yang optimal bagi setiap mentee.
                </p>
              </div>
              <FourPointStar className="w-8 h-8 text-brand-red self-end mt-4" />
            </div>

            <div className="rounded-3xl border-2 border-brand-red bg-brand-red text-white p-6 sm:p-7 flex flex-col justify-between shadow-xl flex-1">
              <div>
                <span className="px-3 py-1 rounded-lg bg-black/20 font-heading text-[10px] font-bold uppercase tracking-wider mb-4 inline-block">
                  Jalur & Minat
                </span>
                <p className="font-heading text-4xl sm:text-5xl font-black mb-2 leading-none">
                  100%
                </p>
                <p className="font-heading text-sm font-bold uppercase tracking-wide text-white/90">
                  Relevansi Berbasis Minat
                </p>
                <p className="text-xs text-white/80 mt-2 leading-relaxed">
                  Bukan diundi acak, melainkan dipasangkan berdasarkan aspirasi dan latar belakang profesional.
                </p>
              </div>
              <Burst className="w-8 h-8 text-white self-end mt-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
