"use client";

import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonVariants } from "@/components/ui/button";
import { useAudience } from "@/components/audience-context";
import { event, audienceCopy } from "@/lib/data";
import type { Audience } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  Burst,
  GearStar,
  FourPointStar,
  InfinityMark,
  IluniRoofLogo,
} from "@/components/shapes";
import { Logo } from "@/components/logo";

export function HeroSection() {
  const { audience, setAudience } = useAudience();
  const copy = audienceCopy[audience];
  const isMentee = audience === "mentee";

  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";
  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBorder = isMentee ? "border-brand-red" : "border-brand-blue";

  return (
    <section
      id="hero"
      className="relative bg-ink text-cream pt-24 pb-16 sm:pt-28 sm:pb-24 overflow-hidden"
    >
      {/* Background ambient shape marks */}
      <GearStar className="pointer-events-none absolute -right-24 -top-24 w-96 h-96 opacity-[0.06] text-brand-blue animate-spin [animation-duration:60s]" />
      <Burst className="pointer-events-none absolute -left-20 bottom-12 w-80 h-80 opacity-[0.05] text-brand-red" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* 1. TOP BRAND HEADER BENTO CARD (Cream bar mirroring Poster 1 & Poster 3) */}
        <div className="rounded-3xl border-2 border-ink bg-cream text-ink p-4 sm:p-5 mb-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo + Event Name */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Logo
              className="border-ink bg-ink text-cream"
              iconClassName="text-cream"
              size={44}
            />
            <div className="leading-tight">
              <span className="block font-heading text-[11px] font-bold uppercase tracking-[0.14em] text-ink/70">
                {event.org}
              </span>
              <span className="block font-heading text-base sm:text-lg font-black uppercase tracking-tight text-ink">
                GRADUATE MENTORSHIP 2026
              </span>
            </div>
          </div>

          {/* Center: Slogan Quote */}
          <div className="hidden lg:flex items-center gap-3 border-x-2 border-ink/15 px-6 py-1">
            <p className="font-heading text-sm font-bold uppercase tracking-wide text-ink text-center">
              &ldquo;Connecting <span className="text-brand-blue">AMBITION</span> with Leadership <span className="text-brand-red">EXCELLENCE</span>&rdquo;
            </p>
          </div>

          {/* Right: ILUNI House Logo + Track Badge */}
          <div className="flex items-center justify-between md:justify-end gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2.5 bg-white border-2 border-ink/20 rounded-2xl px-3.5 py-1.5 shadow-sm">
              <Image
                src="/logo-iluni.png"
                alt="ILUNI GPTK FTUI Logo"
                width={52}
                height={34}
                className="object-contain h-8 w-auto"
                priority
              />
              <div className="text-[10px] font-heading font-black uppercase leading-tight text-ink hidden sm:block">
                <span>ILUNI</span>
                <span className="block text-[8px] font-bold text-ink/60">GPTK FTUI</span>
              </div>
            </div>

            <span
              className={cn(
                "px-3.5 py-1.5 rounded-xl font-heading text-xs font-bold uppercase tracking-wider text-white transition-colors duration-300",
                accentBg
              )}
            >
              {isMentee ? "Mentee Track" : "Mentor Track"}
            </span>
          </div>
        </div>

        {/* 2. MAIN BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
          {/* Left Main Banner Card (7 cols on lg) */}
          <div className="lg:col-span-7 rounded-3xl border-2 border-cream/20 bg-ink/80 backdrop-blur p-6 sm:p-9 flex flex-col justify-between relative overflow-hidden shadow-xl">
            {/* Subtle background glow */}
            <div
              className={cn(
                "absolute -top-32 -left-32 w-64 h-64 rounded-full blur-[100px] opacity-20 pointer-events-none transition-colors duration-500",
                accentBg
              )}
            />

            <div>
              {/* Audience pill switcher */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="text-cream/60 font-heading text-xs uppercase tracking-wider">
                  Saya mendaftar sebagai:
                </span>
                <Tabs
                  value={audience}
                  onValueChange={(v) => setAudience(v as Audience)}
                >
                  <TabsList className="h-9 rounded-xl bg-ink border-2 border-cream/40 p-1">
                    <TabsTrigger
                      value="mentee"
                      className={cn(
                        "rounded-lg px-4 h-7 font-heading text-xs font-bold uppercase tracking-[0.06em] transition-all duration-300",
                        audience === "mentee"
                          ? "bg-brand-red text-white data-active:bg-brand-red data-active:text-white"
                          : "text-cream/70 hover:text-cream"
                      )}
                    >
                      Mentee Track
                    </TabsTrigger>
                    <TabsTrigger
                      value="mentor"
                      className={cn(
                        "rounded-lg px-4 h-7 font-heading text-xs font-bold uppercase tracking-[0.06em] transition-all duration-300",
                        audience === "mentor"
                          ? "bg-brand-blue text-white data-active:bg-brand-blue data-active:text-white"
                          : "text-cream/70 hover:text-cream"
                      )}
                    >
                      Mentor Track
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-bold uppercase leading-[0.96] tracking-tight mb-4 text-cream">
                Graduate{" "}
                <span className={cn("transition-colors duration-300", accentText)}>
                  Mentorship
                </span>
                <br />
                2026
              </h1>

              {/* Tagline */}
              <p className="text-base sm:text-lg text-cream/70 mb-5 font-medium italic">
                &ldquo;{event.tagline}&rdquo;
              </p>

              {/* Audience-specific description */}
              <p className="text-sm sm:text-base text-cream/85 leading-relaxed mb-8 max-w-xl">
                {copy.heroDescription}
              </p>
            </div>

            {/* Bottom Actions & Status */}
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-cream/60 mb-6 bg-cream/5 border border-cream/10 rounded-2xl px-4 py-2.5 w-fit">
                <FourPointStar className={cn("w-3.5 h-3.5 shrink-0", accentText)} />
                <span>
                  Registrasi ditutup · {event.price} · Grand Launch 22 Agustus 2026
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  href="/booklet"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "rounded-2xl border-2 border-white/20 font-heading text-white font-bold text-sm px-8 h-12 shadow-lg transition-all duration-200 hover:scale-[1.02]",
                    accentBg
                  )}
                >
                  Lihat Booklet Lengkap →
                </Link>
                <a
                  href="#tentang"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "rounded-2xl border-2 border-cream/40 font-heading text-cream bg-transparent hover:bg-cream/10 font-bold text-sm px-7 h-12"
                  )}
                >
                  Pelajari Program
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Bento Cards (5 cols on lg) */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-5">
            {/* Big Stat Bento Card (Electric Royal Blue - Mirroring Poster 1) */}
            <div className="rounded-3xl border-2 border-brand-blue bg-brand-blue text-white p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <FourPointStar className="pointer-events-none absolute -right-6 -bottom-6 w-36 h-36 opacity-15 text-white" />

              <div>
                <div className="flex items-center justify-between gap-4 mb-2">
                  <span className="font-heading text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-none">
                    {event.stats.mentorsJoined}
                  </span>
                  <Burst className="w-12 h-12 text-brand-red shrink-0" />
                </div>
                <h2 className="font-heading text-xl sm:text-2xl font-bold uppercase tracking-tight mb-2">
                  Mentors Have Joined
                </h2>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed mb-4">
                  Coming from top companies across energy, FMCG, and global consulting industries.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/20">
                {["bp", "Shell", "Pertamina", "ExxonMobil", "Unilever", "Deloitte"].map((name) => (
                  <span
                    key={name}
                    className="px-2.5 py-0.5 rounded-lg bg-white/15 text-[11px] font-heading font-semibold"
                  >
                    {name}
                  </span>
                ))}
                <span className="px-2 py-0.5 text-[11px] text-white/70 italic">
                  +30 more
                </span>
              </div>
            </div>

            {/* Community Gathering Photo Bento Card */}
            <div className="rounded-3xl border-2 border-cream/20 bg-ink/90 overflow-hidden relative group min-h-[200px] flex flex-col justify-end p-5">
              <Image
                src="/photos/hallway-group.jpeg"
                alt="ILUNI GPTK Graduate Mentorship 2026 Community"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-75"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

              <div className="relative z-10 flex items-end justify-between gap-3">
                <div>
                  <span className="inline-block px-2.5 py-1 rounded-lg bg-cream text-ink font-heading text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    DTK UI Community
                  </span>
                  <p className="font-heading text-sm font-bold uppercase text-white leading-tight">
                    Connecting Ambition with Mentorship
                  </p>
                  <p className="text-white/70 text-xs">
                    {event.stats.menteesEnrolled} Mentees · {event.stats.groupsCount} Kelompok
                  </p>
                </div>
                <FourPointStar className="w-6 h-6 text-brand-red shrink-0" />
              </div>
            </div>
          </div>
        </div>

        {/* 3. THREE-TILE STAT BENTO ROW (Directly from Poster 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Card 1: 5 Industry Tracks + Asterisk */}
          <div className="rounded-3xl border-2 border-brand-blue bg-brand-blue text-white p-5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <span className="font-heading text-4xl sm:text-5xl font-black leading-none">
                {event.stats.industryTracks}
              </span>
              <div className="leading-tight">
                <span className="block font-heading text-sm font-bold uppercase">
                  Industry
                </span>
                <span className="block font-heading text-sm font-bold uppercase text-white/80">
                  Tracks
                </span>
              </div>
            </div>
            <Burst className="w-10 h-10 text-brand-red shrink-0" />
          </div>

          {/* Card 2: 3 Months of Mentoring + Gear/Sun */}
          <div className="rounded-3xl border-2 border-cream bg-cream text-ink p-5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <span className="font-heading text-4xl sm:text-5xl font-black leading-none text-ink">
                {event.stats.durationMonths}
              </span>
              <div className="leading-tight">
                <span className="block font-heading text-sm font-bold uppercase text-ink">
                  Months of
                </span>
                <span className="block font-heading text-sm font-bold uppercase text-ink/70">
                  Mentoring
                </span>
              </div>
            </div>
            <GearStar className="w-10 h-10 text-brand-red shrink-0" />
          </div>

          {/* Card 3: Limitless Opportunities + Infinity */}
          <div className="rounded-3xl border-2 border-brand-red bg-brand-red text-white p-5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <InfinityMark className="w-12 h-7 text-white shrink-0" />
              <div className="leading-tight">
                <span className="block font-heading text-sm font-bold uppercase">
                  Limitless
                </span>
                <span className="block font-heading text-sm font-bold uppercase text-white/90">
                  Opportunities
                </span>
              </div>
            </div>
            <FourPointStar className="w-7 h-7 text-white shrink-0" />
          </div>
        </div>
      </div>
    </section>
  );
}
