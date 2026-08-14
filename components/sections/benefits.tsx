"use client";

import { useAudience } from "@/components/audience-context";
import { audienceCopy } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  FourPointStar,
  Burst,
  Quatrefoil,
  Pinwheel,
  TriangleArrow,
  GearStar,
} from "@/components/shapes";

const shapeMap: Record<string, typeof FourPointStar> = {
  FourPointStar,
  Burst,
  Quatrefoil,
  Pinwheel,
  TriangleArrow,
  GearStar,
};

export function BenefitsSection() {
  const { audience } = useAudience();
  const copy = audienceCopy[audience];
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";

  return (
    <section
      id="manfaat"
      className="bg-ink py-20 sm:py-28 scroll-mt-16 relative overflow-hidden border-b border-cream/10"
    >
      {/* Decorative background shape */}
      <GearStar
        className={cn(
          "pointer-events-none absolute -right-20 top-1/4 w-96 h-96 opacity-[0.05] transition-colors duration-300",
          accentText
        )}
      />

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
            Manfaat & Nilai Tambah
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-cream leading-[0.98]">
              {copy.benefitsHeading}
            </h2>
          </div>
          <span
            className={cn(
              "inline-block px-4 py-1.5 rounded-full font-heading text-xs font-bold uppercase tracking-wider text-white w-fit transition-colors duration-300",
              accentBg
            )}
          >
            {isMentee ? "Mentee Exclusive" : "Mentor Rewards"}
          </span>
        </div>

        {/* Benefits Bento Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {copy.benefits.map((benefit, i) => {
            const ShapeComponent = shapeMap[benefit.shape] || FourPointStar;
            return (
              <div
                key={i}
                className="rounded-3xl border-2 border-cream/20 bg-cream/5 hover:bg-cream/10 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-cream/40 shadow-lg group"
              >
                <div>
                  {/* Shape Icon Badge */}
                  <div
                    className={cn(
                      "w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-md",
                      accentBg
                    )}
                  >
                    <ShapeComponent className="text-white w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold uppercase text-cream text-lg sm:text-xl leading-snug mb-2">
                    {benefit.title}
                  </h3>

                  {benefit.desc && (
                    <p className="text-cream/70 text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  )}
                </div>

                <div className="pt-5 mt-5 border-t border-cream/10 flex items-center justify-between text-xs text-cream/40">
                  <span>Benefit 0{i + 1}</span>
                  <ShapeComponent className={cn("w-3.5 h-3.5 opacity-40", accentText)} />
                </div>
              </div>
            );
          })}

          {/* "100% GRATIS" Bento Highlight Card */}
          <div
            className={cn(
              "sm:col-span-2 lg:col-span-1 rounded-3xl border-2 border-white/20 p-7 flex flex-col justify-between text-white shadow-xl relative overflow-hidden transition-colors duration-300",
              accentBg
            )}
          >
            <Burst className="pointer-events-none absolute -right-8 -bottom-8 w-44 h-44 opacity-20 text-white" />

            <div>
              <span className="inline-block px-3 py-1 rounded-lg bg-black/25 font-heading text-[11px] font-bold uppercase tracking-wider mb-4">
                Komitmen ILUNI GPTK
              </span>
              <p className="font-heading text-4xl sm:text-5xl font-black uppercase leading-none tracking-tight mb-2">
                100% <span className="text-white/80 font-bold text-3xl">GRATIS</span>
              </p>
              <p className="font-heading text-sm font-bold uppercase tracking-wide text-white/90 mb-3">
                101% Free for All Participants
              </p>
            </div>

            <p className="text-white/85 text-xs sm:text-sm leading-relaxed border-t border-white/20 pt-4">
              Program ini sepenuhnya gratis untuk mentor maupun mentee tanpa biaya pendaftaran apapun.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
