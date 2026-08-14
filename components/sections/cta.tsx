"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useAudience } from "@/components/audience-context";
import { event } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Pinwheel, FourPointStar } from "@/components/shapes";

export function CTASection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";

  return (
    <section
      id="daftar"
      className={cn(
        "relative py-24 sm:py-32 overflow-hidden transition-colors duration-300",
        accentBg
      )}
    >
      {/* Brand shape motifs */}
      <Pinwheel className="pointer-events-none absolute right-0 bottom-0 w-64 h-64 opacity-15 text-white" />
      <FourPointStar className="pointer-events-none absolute left-0 top-0 w-40 h-40 opacity-10 text-black" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <p className="font-heading text-white/70 text-xs font-semibold uppercase tracking-[0.14em] mb-4">
          Registrasi Ditutup
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight mb-6 max-w-2xl mx-auto">
          Program Sedang Berjalan Menuju Grand Launch
        </h2>
        <p className="text-white/80 text-base mb-10 max-w-xl mx-auto">
          Pendaftaran mentor dan mentee sudah ditutup. Mentor & mentee terpilih diumumkan 18 Agustus,
          Grand Launch & Onboarding berlangsung 22 Agustus 2026. Info lengkap ada di Booklet Program.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/booklet"
            className={cn(
              buttonVariants({ size: "lg" }),
              "rounded-xl border-[1.5px] border-ink bg-white font-heading text-ink font-bold px-10 hover:bg-white/90"
            )}
          >
            Baca Booklet Lengkap →
          </Link>
          <Link
            href="/booklet#linimasa"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "rounded-xl border-[1.5px] border-white font-heading text-white bg-transparent hover:bg-white/10 font-bold px-8"
            )}
          >
            Lihat Linimasa
          </Link>
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
