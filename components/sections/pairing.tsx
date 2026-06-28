"use client";

import { Users } from "lucide-react";
import { useAudience } from "@/components/audience-context";
import { pairingScheme } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PairingSection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBg = isMentee ? "bg-brand-red/8" : "bg-brand-blue/8";
  const accentBorder = isMentee ? "border-brand-red/20" : "border-brand-blue/20";

  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <p
            className={cn(
              "text-xs font-semibold tracking-widest uppercase mb-4 transition-colors duration-300",
              accentText
            )}
          >
            Skema Program
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-cream leading-tight mb-8">
            Bagaimana Pengelompokan Bekerja?
          </h2>

          <div
            className={cn(
              "rounded-2xl border p-6 sm:p-8 transition-colors duration-300",
              accentBg,
              accentBorder
            )}
          >
            <div className="flex items-center gap-3 mb-5">
              <Users
                className={cn("transition-colors duration-300", accentText)}
                size={28}
              />
              <span
                className={cn(
                  "text-2xl font-bold transition-colors duration-300",
                  accentText
                )}
              >
                {pairingScheme.ratio}
              </span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              {pairingScheme.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
