"use client";

import { Users } from "lucide-react";
import { useAudience } from "@/components/audience-context";
import { pairingScheme } from "@/lib/data";
import { cn } from "@/lib/utils";

export function PairingSection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";

  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <p
            className={cn(
              "font-heading text-xs font-semibold uppercase tracking-[0.14em] mb-4 transition-colors duration-300",
              accentText
            )}
          >
            Skema Program
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-cream leading-[1.02] mb-8">
            Bagaimana Pengelompokan Bekerja?
          </h2>

          <div className="rounded-2xl border-[1.5px] border-cream bg-ink p-6 sm:p-8 transition-colors duration-300">
            <div className="flex items-center gap-3 mb-5">
              <Users
                className={cn("transition-colors duration-300", accentText)}
                size={28}
              />
              <span
                className={cn(
                  "font-heading text-2xl font-bold uppercase transition-colors duration-300",
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
