"use client";

import Link from "next/link";
import { Users, Send, Cog } from "lucide-react";
import { useAudience } from "@/components/audience-context";
import { industries, industryFocusAreas, pairingScheme, event } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  FourPointStar,
  Burst,
  GearStar,
  DropletShape,
  Pinwheel,
  FanArches,
} from "@/components/shapes";

const trackShapeMap: Record<string, typeof DropletShape> = {
  droplet: DropletShape,
  flower: Pinwheel,
  diamond: FourPointStar,
  gear: GearStar,
  burst: Burst,
};

export function IndustriesSection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";

  return (
    <section className="bg-cream py-20 sm:py-28 scroll-mt-16 border-b border-ink/10">
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
            Struktur & Jalur Program
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-ink leading-[0.98]">
              Dua Jalur & 5 Bidang Industri
            </h2>
          </div>
          <p className="text-ink/60 text-sm max-w-md">
            Mentee dikelompokkan berdasarkan tahap karier dan minat industri agar diskusi berjalan tajam dan relevan.
          </p>
        </div>

        {/* 1. TOP BENTO ROW: 2 JALUR MENTEE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {industries.map((item, idx) => (
            <div
              key={item.label}
              className="rounded-3xl border-2 border-ink bg-cream p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span
                    className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md transition-colors duration-300",
                      idx === 0 ? "bg-brand-blue" : "bg-brand-red"
                    )}
                  >
                    {idx === 0 ? <Send size={22} /> : <Cog size={22} />}
                  </span>
                  <span className="px-3.5 py-1 rounded-full bg-ink text-cream font-heading text-xs font-bold uppercase">
                    {item.count}
                  </span>
                </div>

                <h3 className="font-heading font-black uppercase text-xl sm:text-2xl text-ink mb-2">
                  {item.label}
                </h3>
                <p className="text-ink/75 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t-2 border-ink/10 flex items-center justify-between text-xs text-ink/50 font-heading">
                <span>Jalur 0{idx + 1}</span>
                <span className="font-bold uppercase">DTK UI 2020–2022</span>
              </div>
            </div>
          ))}
        </div>

        {/* 2. 5 INDUSTRY TRACKS BENTO CARD (From Poster 5) */}
        <div className="rounded-3xl border-2 border-ink bg-ink text-cream p-6 sm:p-9 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-8 relative overflow-hidden">
          <FanArches className="pointer-events-none absolute -right-8 -bottom-8 w-48 h-48 opacity-10 text-cream" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-cream/20">
            <div>
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-brand-red">
                5 Track Pilihan
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-cream mt-1">
                Mentor Industry Backgrounds
              </h3>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-cream text-ink font-heading text-xs font-bold uppercase tracking-wider w-fit">
              {event.stats.groupsCount} Kelompok Bimbingan
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industryFocusAreas.map((area, idx) => {
              const ShapeComponent = trackShapeMap[area.shape] || FourPointStar;
              return (
                <div
                  key={area.name}
                  className="rounded-2xl border border-cream/20 bg-cream/5 p-4 sm:p-5 flex flex-col justify-between hover:bg-cream/10 transition-colors"
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="w-8 h-8 rounded-xl bg-brand-red flex items-center justify-center shrink-0 text-white shadow-sm mt-0.5">
                      <ShapeComponent className="w-4 h-4" />
                    </span>
                    <div>
                      <h4 className="font-heading font-bold text-sm sm:text-base text-cream uppercase leading-snug">
                        {area.name}
                      </h4>
                      <p className="text-xs text-cream/60 mt-1 leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] text-cream/40 font-heading self-end uppercase mt-2">
                    Track 0{idx + 1}
                  </span>
                </div>
              );
            })}

            {/* Booklet Link Card in the 6th slot */}
            <div className="rounded-2xl border-2 border-brand-blue bg-brand-blue/30 p-5 flex flex-col justify-between">
              <div>
                <span className="font-heading text-xs font-bold uppercase tracking-wide text-white/80">
                  Daftar Lengkap
                </span>
                <p className="font-heading font-bold uppercase text-white text-base mt-1">
                  Peta Kelompok & Profil Mentor
                </p>
                <p className="text-xs text-white/70 mt-1">
                  Lihat rincian nama mentor, jabatan, dan alokasi mentee di Booklet Program.
                </p>
              </div>
              <Link
                href="/booklet#kelompok"
                className="inline-flex items-center text-xs font-heading font-bold uppercase text-white underline underline-offset-4 mt-3 hover:text-white/80"
              >
                Buka Peta Kelompok →
              </Link>
            </div>
          </div>
        </div>

        {/* 3. PAIRING SCHEME CALLOUT BENTO */}
        <div className="rounded-3xl border-2 border-ink bg-cream p-6 sm:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <span
              className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 text-white shadow-md transition-colors duration-300",
                accentBg
              )}
            >
              <Users size={28} />
            </span>
            <div>
              <span className="block font-heading text-xs font-bold uppercase tracking-wider text-ink/60">
                Skema Pendampingan
              </span>
              <h4 className="font-heading text-lg sm:text-xl font-black uppercase text-ink">
                {pairingScheme.ratio}
              </h4>
              <p className="text-xs sm:text-sm text-ink/75 max-w-xl mt-1">
                {pairingScheme.note}
              </p>
            </div>
          </div>

          <Link
            href="/booklet#dua-jalur"
            className="shrink-0 px-6 py-3 rounded-2xl border-2 border-ink bg-ink text-cream font-heading text-xs font-bold uppercase tracking-wider hover:bg-ink/80 transition-colors"
          >
            Lihat Detail Jalur di Booklet →
          </Link>
        </div>
      </div>
    </section>
  );
}
