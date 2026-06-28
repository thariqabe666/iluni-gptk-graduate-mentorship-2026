"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/icon";
import { useAudience } from "@/components/audience-context";
import { industries } from "@/lib/data";
import { cn } from "@/lib/utils";

export function IndustriesSection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentIconBg = isMentee ? "bg-brand-red/10" : "bg-brand-blue/10";
  const accentBorder = isMentee ? "border-brand-red/15" : "border-brand-blue/15";

  return (
    <section className="bg-cream py-20 sm:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p
          className={cn(
            "text-xs font-semibold tracking-widest uppercase mb-4 transition-colors duration-300",
            accentText
          )}
        >
          Kategori Industri Mentor
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-ink leading-tight mb-4">
          5 Bidang Industri
        </h2>
        <p className="text-ink/60 text-base mb-12 max-w-xl">
          Para mentor berasal dari lima bidang industri utama yang relevan bagi lulusan teknik kimia DTK UI.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industries.map((industry, i) => (
            <Card
              key={i}
              className={cn(
                "border rounded-2xl hover:shadow-md transition-all duration-200",
                accentBorder
              )}
            >
              <CardContent className="p-5 flex items-center gap-4">
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300",
                    accentIconBg
                  )}
                >
                  <Icon
                    name={industry.icon}
                    className={cn("transition-colors duration-300", accentText)}
                    size={22}
                  />
                </div>
                <span className="font-medium text-ink text-sm leading-snug">
                  {industry.label}
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
