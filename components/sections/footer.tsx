"use client";

import { Phone } from "lucide-react";
import { Logo } from "@/components/logo";
import { useAudience } from "@/components/audience-context";
import { event } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FooterSection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBorder = isMentee ? "border-brand-red" : "border-brand-blue";

  return (
    <footer className="bg-ink py-12 sm:py-16">
      {/* Decorative top-right polygon */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between gap-8 mb-10">
          {/* Logo + org */}
          <div className="flex items-center gap-3">
            <Logo
              className={cn(
                "border-cream/30 transition-colors duration-300",
                accentBorder
              )}
              iconClassName={cn("transition-colors duration-300", accentText)}
              size={40}
            />
            <div>
              <p className="font-heading text-cream font-bold uppercase tracking-[0.08em] text-xs">
                {event.org}
              </p>
              <p className="text-cream/50 text-xs">{event.name}</p>
            </div>
          </div>

          {/* Contact persons */}
          <div>
            <p className="font-heading text-cream/50 text-xs uppercase tracking-[0.14em] font-semibold mb-3">
              Narahubung
            </p>
            <ul className="space-y-2">
              {event.contacts.map((c) => (
                <li key={c.name}>
                  <a
                    href={`tel:${c.phone}`}
                    className="flex items-center gap-2 text-cream/70 hover:text-cream transition-colors text-sm"
                  >
                    <Phone
                      size={13}
                      className={cn("transition-colors duration-300", accentText)}
                    />
                    <span className="font-medium">{c.name}</span>
                    <span className="text-cream/40">·</span>
                    <span className="text-cream/60">{c.phone}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-cream/30 text-xs">
            © 2026 {event.org}. All rights reserved.
          </p>
          <p className="text-cream/30 text-xs">
            Program ini sepenuhnya gratis untuk seluruh peserta.
          </p>
        </div>
      </div>
    </footer>
  );
}
