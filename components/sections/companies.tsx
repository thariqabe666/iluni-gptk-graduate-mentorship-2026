"use client";

import { useAudience } from "@/components/audience-context";
import { companies, event } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FourPointStar, Burst, GearStar } from "@/components/shapes";

const badgeVariants = {
  blue: "bg-brand-blue text-white border-brand-blue hover:brightness-110",
  red: "bg-brand-red text-white border-brand-red hover:brightness-110",
  black: "bg-ink text-white border-ink hover:bg-ink/90",
};

export function CompaniesSection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";
  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";

  return (
    <section className="bg-cream py-14 sm:py-20 border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Bento Container */}
        <div className="rounded-3xl border-2 border-ink bg-cream p-6 sm:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          {/* Subtle background decorative shapes */}
          <Burst className="pointer-events-none absolute -right-10 -bottom-10 w-48 h-48 opacity-[0.04] text-ink" />
          <GearStar className="pointer-events-none absolute -left-10 -top-10 w-40 h-40 opacity-[0.04] text-ink" />

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b-2 border-ink/10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <FourPointStar className={cn("w-4 h-4 transition-colors duration-300", accentText)} />
                <span className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-ink/70">
                  Mentor Industry Network
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-ink">
                Our mentors come from top companies including:
              </h2>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-ink text-cream font-heading text-xs font-bold uppercase tracking-wider">
                {event.stats.mentorsJoined}+ Mentors
              </span>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-blue text-white font-heading text-xs font-bold uppercase tracking-wider">
                {event.stats.groupsCount} Kelompok
              </span>
            </div>
          </div>

          {/* Company Pill Badges Grid - Mirroring Poster 1 */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3.5 items-center justify-start">
            {companies.map((company) => (
              <span
                key={company.name}
                className={cn(
                  "inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-heading font-bold text-sm sm:text-base tracking-wide border transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-default select-none",
                  badgeVariants[company.variant]
                )}
              >
                {company.name}
              </span>
            ))}
            <span className="inline-flex items-center px-4 py-2.5 font-heading text-sm text-ink/60 font-medium italic">
              ...and many more.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
