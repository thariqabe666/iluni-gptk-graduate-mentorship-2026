"use client";

import { CircleCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/icon";
import { useAudience } from "@/components/audience-context";
import { audienceCopy } from "@/lib/data";
import { cn } from "@/lib/utils";

export function BenefitsSection() {
  const { audience } = useAudience();
  const copy = audienceCopy[audience];
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";
  const accentBorder = isMentee ? "border-brand-red/20" : "border-brand-blue/20";
  const accentIconBg = isMentee ? "bg-brand-red/10" : "bg-brand-blue/10";

  return (
    <section
      id="manfaat"
      className="bg-ink py-20 sm:py-28 scroll-mt-16 relative overflow-hidden"
    >
      {/* Organic blob accent */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 w-80 h-80 opacity-5"
        viewBox="0 0 320 320"
      >
        <path
          d="M160,30 C220,20 290,60 305,130 C320,200 280,270 210,295 C140,320 70,290 40,220 C10,150 30,60 100,35 C120,28 140,32 160,30Z"
          fill={isMentee ? "#f81919" : "#004aad"}
        />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-3">
          <CircleCheck className={cn("transition-colors duration-300", accentText)} size={20} />
          <p
            className={cn(
              "text-xs font-semibold tracking-widest uppercase transition-colors duration-300",
              accentText
            )}
          >
            Manfaat
          </p>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-cream leading-tight mb-12 transition-all duration-300">
          {copy.benefitsHeading}
        </h2>

        {/* Benefit cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {copy.benefits.map((benefit, i) => (
            <Card
              key={i}
              className={cn(
                "bg-cream/5 border transition-colors duration-300 rounded-2xl",
                accentBorder
              )}
            >
              <CardContent className="p-6">
                <div
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300",
                    accentIconBg
                  )}
                >
                  <Icon
                    name={benefit.icon}
                    className={cn("transition-colors duration-300", accentText)}
                    size={20}
                  />
                </div>
                <h3 className="font-bold text-cream text-base mb-1">{benefit.title}</h3>
                {benefit.desc && (
                  <p className="text-cream/60 text-sm">{benefit.desc}</p>
                )}
              </CardContent>
            </Card>
          ))}

          {/* "Free for all" card */}
          <Card
            className={cn(
              "sm:col-span-2 lg:col-span-1 border-0 text-cream rounded-2xl transition-colors duration-300",
              accentBg
            )}
          >
            <CardContent className="p-6 flex flex-col justify-between h-full">
              <p className="text-2xl font-bold leading-snug mb-4">
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
