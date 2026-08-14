"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonVariants } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { useAudience } from "@/components/audience-context";
import { event } from "@/lib/data";
import type { Audience } from "@/lib/data";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#tentang", label: "Tentang" },
  { href: "#manfaat", label: "Manfaat" },
  { href: "#peran", label: "Kriteria" },
  { href: "#mekanisme", label: "Mekanisme" },
  { href: "#timeline", label: "Timeline" },
  { href: "#faq", label: "FAQ" },
  { href: "/booklet", label: "Booklet" },
];

export function Navbar() {
  const { audience, setAudience } = useAudience();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isMentee = audience === "mentee";
  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";
  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBorder = isMentee ? "border-brand-red" : "border-brand-blue";

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 border-b-2 border-ink transition-all duration-300",
        scrolled ? "bg-cream/95 backdrop-blur-md shadow-md" : "bg-cream"
      )}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo + Wordmark */}
        <Link href="#" className="flex items-center gap-2.5 shrink-0 group">
          <Logo
            className={cn("border-ink bg-ink text-cream transition-colors duration-300", accentBorder)}
            iconClassName={cn("transition-colors duration-300", accentText)}
            size={36}
          />
          <span className="font-heading font-black text-ink leading-tight hidden sm:block text-sm">
            <span className="block uppercase tracking-[0.1em] text-[11px] text-ink/70">{event.org}</span>
            <span className="block uppercase tracking-tight text-xs text-ink font-bold">
              {event.name}
            </span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-5">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-xs font-heading font-bold uppercase tracking-wider text-ink/70 hover:text-ink transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Audience Toggle + Booklet CTA */}
        <div className="flex items-center gap-3">
          <Tabs
            value={audience}
            onValueChange={(v) => setAudience(v as Audience)}
          >
            <TabsList className="h-8 rounded-xl bg-cream border-2 border-ink p-0.5 shadow-sm">
              <TabsTrigger
                value="mentee"
                className={cn(
                  "rounded-lg font-heading text-[11px] px-3 h-6 font-bold uppercase tracking-[0.05em] transition-all duration-300",
                  audience === "mentee"
                    ? "bg-brand-red text-white data-active:bg-brand-red data-active:text-white"
                    : "text-ink/70 hover:text-ink"
                )}
              >
                Mentee
              </TabsTrigger>
              <TabsTrigger
                value="mentor"
                className={cn(
                  "rounded-lg font-heading text-[11px] px-3 h-6 font-bold uppercase tracking-[0.05em] transition-all duration-300",
                  audience === "mentor"
                    ? "bg-brand-blue text-white data-active:bg-brand-blue data-active:text-white"
                    : "text-ink/70 hover:text-ink"
                )}
              >
                Mentor
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <Link
            href="/booklet"
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-xl border-2 border-ink font-heading text-white text-xs font-black uppercase tracking-wider transition-colors duration-300 hidden sm:inline-flex shadow-sm hover:scale-[1.02]",
              accentBg
            )}
          >
            Booklet
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-1.5 rounded-lg border border-ink/20 text-ink"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-cream border-t-2 border-ink px-4 py-4 flex flex-col gap-3 shadow-lg">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-heading font-bold uppercase tracking-wider text-ink/80 py-1.5 border-b border-ink/10"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/booklet"
            onClick={() => setMobileOpen(false)}
            className={cn(
              buttonVariants({ size: "sm" }),
              "rounded-xl border-2 border-ink font-heading text-white text-xs font-bold uppercase mt-2 transition-colors duration-300 justify-center",
              accentBg
            )}
          >
            Buka Booklet Program →
          </Link>
        </div>
      )}
    </header>
  );
}
