"use client";

import Link from "next/link";
import { Phone, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useAudience } from "@/components/audience-context";
import { event } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  Pinwheel,
  FourPointStar,
  Burst,
  FanArches,
  Quatrefoil,
  ShapeCollage,
} from "@/components/shapes";

export function CTASection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";
  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";

  return (
    <section
      id="daftar"
      className="bg-cream py-20 sm:py-28 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Bento CTA Card */}
        <div
          className={cn(
            "rounded-3xl border-2 border-ink p-8 sm:p-12 text-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden transition-colors duration-500",
            accentBg
          )}
        >
          {/* Ambient decorative shapes */}
          <Burst className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 opacity-15 text-white animate-spin [animation-duration:90s]" />
          <FanArches className="pointer-events-none absolute -left-10 -bottom-10 w-48 h-48 opacity-15 text-white" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Copy (8 cols) */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/25 text-white font-heading text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles size={14} />
                <span>Grand Launch & Onboarding · 22 Agustus 2026</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[0.96] mb-4">
                Bersiap Menuju
                <br />
                Grand Launch!
              </h2>

              <p className="text-white/90 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
                Selamat kepada 103 mentee dan 41 mentor terpilih! Panduan teknis, silabus bimbingan, serta jadwal lengkap setiap sesi tersedia di Booklet Program.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/booklet"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-2xl border-2 border-ink bg-white font-heading text-ink font-black uppercase text-sm px-8 h-12 shadow-lg hover:bg-cream transition-all hover:scale-[1.02]"
                  )}
                >
                  <BookOpen size={18} className="mr-2" />
                  Baca Booklet Lengkap →
                </Link>
                <Link
                  href="/booklet#kelompok"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-2xl border-2 border-white font-heading text-white bg-black/20 hover:bg-black/30 font-bold uppercase text-sm px-7 h-12"
                  )}
                >
                  Lihat 20 Kelompok
                </Link>
              </div>
            </div>

            {/* Right Graphic Neo-brutalist Collage (4 cols) */}
            <div className="lg:col-span-4 hidden lg:block">
              <ShapeCollage className="shadow-xl border-2 border-white/30" />
            </div>
          </div>

          {/* Contact Person Cards Grid */}
          <div className="relative z-10 border-t border-white/25 mt-12 pt-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-white/80">
                Narahubung Panitia (WhatsApp)
              </p>
              <span className="text-xs text-white/70">
                Hubungi narahubung jika ada pertanyaan seputar program
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {event.contacts.map((contact) => {
                const cleanPhone = contact.phone.replace(/^0/, "62").replace(/\D/g, "");
                const message = `Halo Kak ${contact.name}, saya ingin bertanya mengenai program Graduate Mentorship 2026 ILUNI GPTK FTUI.`;
                const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

                return (
                  <a
                    key={contact.name}
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-2xl bg-black/25 hover:bg-black/40 border border-white/20 transition-all duration-200 group text-white"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <Phone size={15} />
                      </span>
                      <div>
                        <span className="font-heading font-bold text-sm block leading-tight">
                          {contact.name}
                        </span>
                        <span className="text-xs text-white/70 block mt-0.5">
                          {contact.phone}
                        </span>
                      </div>
                    </div>
                    <ArrowRight size={15} className="text-white/60 group-hover:translate-x-1 group-hover:text-white transition-all" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
