"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowUp } from "lucide-react";
import { Logo } from "@/components/logo";
import { useAudience } from "@/components/audience-context";
import { event } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FooterSection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBorder = isMentee ? "border-brand-red" : "border-brand-blue";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-ink text-cream py-14 sm:py-20 border-t-2 border-cream/15">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12 pb-12 border-b border-cream/15">
          {/* Col 1: Brand & Slogan (6 cols) */}
          <div className="md:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Logo
                  className={cn(
                    "border-cream/40 bg-cream/5 transition-colors duration-300",
                    accentBorder
                  )}
                  iconClassName={cn("transition-colors duration-300", accentText)}
                  size={42}
                />
                <div>
                  <p className="font-heading text-cream font-black uppercase tracking-[0.08em] text-xs">
                    {event.org}
                  </p>
                  <p className="font-heading font-black text-sm text-cream/90 uppercase tracking-tight">
                    {event.name}
                  </p>
                </div>
              </div>

              <p className="text-cream/70 text-sm max-w-sm leading-relaxed mb-6 font-medium italic">
                &ldquo;Connecting AMBITION with Leadership EXCELLENCE&rdquo;
              </p>

              <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-2 w-fit border border-white/20 shadow-md">
                <Image
                  src="/logo-iluni.png"
                  alt="ILUNI GPTK FTUI Logo"
                  width={56}
                  height={36}
                  className="object-contain h-7 w-auto"
                />
                <div className="text-left">
                  <span className="block text-[11px] font-heading font-black text-ink uppercase leading-tight">
                    ILUNI GPTK FTUI
                  </span>
                  <span className="block text-[9px] font-heading text-ink/70 font-semibold uppercase">
                    Departemen Teknik Kimia UI
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-cream/50 mb-4">
              Navigasi Halaman
            </p>
            <ul className="space-y-2.5 text-xs font-heading font-bold uppercase tracking-wider text-cream/70">
              <li>
                <a href="#tentang" className="hover:text-cream transition-colors">
                  Tentang Program
                </a>
              </li>
              <li>
                <a href="#manfaat" className="hover:text-cream transition-colors">
                  Manfaat Mentee & Mentor
                </a>
              </li>
              <li>
                <a href="#peran" className="hover:text-cream transition-colors">
                  Kriteria & Tanggung Jawab
                </a>
              </li>
              <li>
                <a href="#mekanisme" className="hover:text-cream transition-colors">
                  Mekanisme & Silabus
                </a>
              </li>
              <li>
                <a href="#timeline" className="hover:text-cream transition-colors">
                  Linimasa Program
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cream transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <Link href="/booklet" className={cn("transition-colors", accentText)}>
                  Buka Booklet Lengkap →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Narahubung (3 cols) */}
          <div className="md:col-span-3">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-cream/50 mb-4">
              Narahubung (WhatsApp)
            </p>
            <ul className="space-y-3">
              {event.contacts.map((c) => {
                const cleanPhone = c.phone.replace(/^0/, "62").replace(/\D/g, "");
                const message = `Halo Kak ${c.name}, saya ingin bertanya mengenai Graduate Mentorship 2026 ILUNI GPTK FTUI.`;
                const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
                return (
                  <li key={c.name}>
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 text-cream/80 hover:text-cream transition-colors text-xs font-medium"
                    >
                      <Phone size={13} className={accentText} />
                      <span className="font-heading font-bold">{c.name}</span>
                      <span className="text-cream/40">·</span>
                      <span className="text-cream/60">{c.phone}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream/40">
          <p>© 2026 {event.org}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p>Program 100% Gratis untuk seluruh peserta.</p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-cream/60 hover:text-cream transition-colors cursor-pointer font-heading uppercase text-[11px]"
            >
              <span>Ke Atas</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
