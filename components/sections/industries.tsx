"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Icon } from "@/components/icon";
import { useAudience } from "@/components/audience-context";
import { industries } from "@/lib/data";
import { cn } from "@/lib/utils";

export function IndustriesSection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";

  return (
    <section className="bg-cream py-20 sm:py-28 scroll-mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p
          className={cn(
            "font-heading text-xs font-semibold uppercase tracking-[0.14em] mb-4 transition-colors duration-300",
            accentText
          )}
        >
          Struktur Program
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-ink leading-[1.02] mb-4">
          Dua Jalur Mentee
        </h2>
        <p className="text-ink/60 text-base mb-12 max-w-xl">
          Mentee dibagi ke dua jalur sesuai tahap kariernya — bukan sekadar minat industri — supaya
          pertanyaan yang dibahas di kelompok memang relevan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {industries.map((industry, i) => (
            <Card
              key={i}
              className="border-[1.5px] border-ink rounded-2xl hover:-translate-y-1 transition-transform duration-200"
            >
              <CardContent className="p-5 flex items-center gap-4">
                <div
                  className={cn(
                    "w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300",
                    accentBg
                  )}
                >
                  <Icon name={industry.icon} className="text-white" size={22} />
                </div>
                <div>
                  <span className="font-heading font-bold uppercase text-ink text-sm leading-tight block">
                    {industry.label}
                  </span>
                  <span className="text-ink/50 text-xs">{industry.desc}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <Link
          href="/booklet#dua-jalur"
          className="inline-block mt-6 text-sm font-semibold text-ink underline underline-offset-4 hover:text-ink/70"
        >
          Lihat aturan pembagian jalur di Booklet →
        </Link>
      </div>
    </section>
  );
}
