"use client";

import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useAudience } from "@/components/audience-context";
import { event } from "@/lib/data";
import { cn } from "@/lib/utils";

export function CTASection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";
  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";

  return (
    <section
      id="daftar"
      className={cn(
        "relative py-24 sm:py-32 overflow-hidden transition-colors duration-300",
        accentBg
      )}
    >
      {/* Concentric arc motif */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 w-64 h-64 opacity-20"
        viewBox="0 0 200 200"
      >
        {[55, 75, 95].map((r) => (
          <path
            key={r}
            d={`M ${100 - r},100 A ${r},${r} 0 0,1 ${100 + r},100`}
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
        ))}
      </svg>

      {/* Left polygon shape */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 w-48 h-48 opacity-10"
        viewBox="0 0 200 200"
      >
        <polygon points="0,0 180,0 100,200 0,200" fill="black" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-white/70 text-xs font-semibold tracking-widest uppercase mb-4">
          {isMentee ? "Mulai Sekarang" : "Bergabung Sebagai Mentor"}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6 max-w-2xl mx-auto">
          {isMentee
            ? "Siap Memulai Perjalanan Kariermu?"
            : "Siap Membentuk Generasi Berikutnya?"}
        </h2>
        <p className="text-white/80 text-base mb-10 max-w-xl mx-auto">
          {isMentee
            ? "Pendaftaran dibuka 15 Jul – 7 Agu 2026. Gratis, tidak ada syarat khusus selain semangat belajar."
            : "Pendaftaran mentor dibuka 15 Jul – 7 Agu 2026. Fleksibel, hanya 2 bulan, dampak nyata."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={event.registerLinks[audience]}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-full bg-white text-ink font-bold px-10 hover:bg-white/90"
            )}
          >
            Daftar sebagai {isMentee ? "Mentee" : "Mentor"} →
          </a>
          <a
            href={isMentee ? event.registerLinks.mentor : event.registerLinks.mentee}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-full border-white/40 text-white bg-transparent hover:bg-white/10 font-semibold px-8"
            )}
          >
            Daftar sebagai {isMentee ? "Mentor" : "Mentee"}
          </a>
        </div>

        {/* Contact persons */}
        <div className="border-t border-white/20 pt-10">
          <p className="text-white/60 text-sm mb-5 font-medium">Butuh informasi lebih lanjut?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {event.contacts.map((c) => (
              <a
                key={c.name}
                href={`tel:${c.phone}`}
                className="flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm"
              >
                <Phone size={14} />
                <span className="font-medium">{c.name}</span>
                <span className="text-white/50">·</span>
                <span>{c.phone}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
