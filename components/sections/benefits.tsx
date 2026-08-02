"use client";

import { CircleCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/icon";
import { useAudience } from "@/components/audience-context";
import { audienceCopy } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FourPointStar, Burst, Quatrefoil } from "@/components/shapes";

/** Brand shapes standing in for weak generic-icon matches. */
const shapeOverrides: Record<string, typeof FourPointStar> = {
  Sparkles: FourPointStar,
  Asterisk: Burst,
  Bookmark: Quatrefoil,
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
      className="bg-ink py-20 sm:py-28 scroll-mt-16 relative overflow-hidden"
    >
      {/* Brand shape accent */}
      <Quatrefoil
        className={cn(
          "pointer-events-none absolute right-0 top-1/4 w-80 h-80 opacity-[0.06] transition-colors duration-300",
          accentText
        )}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <CircleCheck className={cn("transition-colors duration-300", accentText)} size={20} />
          <p
            className={cn(
              "font-heading text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-300",
              accentText
            )}
          >
            Manfaat
          </p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-cream leading-[1.02] mb-12 transition-all duration-300">
          {copy.benefitsHeading}
        </h2>

        {/* Benefit cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {copy.benefits.map((benefit, i) => {
            const ShapeIcon = shapeOverrides[benefit.icon];
            return (
              <Card
                key={i}
                className="bg-ink border-[1.5px] border-cream transition-colors duration-300 rounded-2xl"
              >
                <CardContent className="p-6">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300",
                      accentBg
                    )}
                  >
                    {ShapeIcon ? (
                      <ShapeIcon className="text-white w-5 h-5" />
                    ) : (
                      <Icon name={benefit.icon} className="text-white" size={20} />
                    )}
                  </div>
                  <h3 className="font-heading font-bold uppercase text-cream text-base leading-snug mb-1">
                    {benefit.title}
                  </h3>
                  {benefit.desc && (
                    <p className="text-cream/60 text-sm">{benefit.desc}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}

          {/* "Free for all" card */}
          <Card
            className={cn(
              "sm:col-span-2 lg:col-span-1 border-[1.5px] border-ink text-cream rounded-2xl transition-colors duration-300",
              accentBg
            )}
          >
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <p className="font-heading text-2xl font-bold uppercase leading-snug mb-4">
                100%{" "}
                <span className="font-normal text-white/80">Gratis</span>
              </p>
              <p className="text-white/80 text-sm">
                Program ini sepenuhnya gratis untuk mentor maupun mentee — tidak ada biaya pendaftaran.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
