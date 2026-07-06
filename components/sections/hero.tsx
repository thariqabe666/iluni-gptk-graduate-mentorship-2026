"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonVariants } from "@/components/ui/button";
import { useAudience } from "@/components/audience-context";
import { event, audienceCopy } from "@/lib/data";
import type { Audience } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Burst, GearStar, FourPointStar } from "@/components/shapes";

export function HeroSection() {
  const { audience, setAudience } = useAudience();
  const copy = audienceCopy[audience];
  const isMentee = audience === "mentee";

  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";
  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center bg-ink text-cream overflow-hidden"
    >
      {/* Decorative brand shape accents */}
      <GearStar
        className={cn(
          "pointer-events-none absolute -right-16 -top-16 w-80 h-80 opacity-[0.07] transition-colors duration-300",
          accentText
        )}
      />
      <Burst
        className="pointer-events-none absolute -left-20 bottom-0 w-72 h-72 opacity-[0.05] text-cream"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 pt-36">
        <div className="max-w-3xl">
          {/* Org badge */}
          <span className="inline-block mb-6 px-4 py-1.5 rounded-xl bg-cream text-ink border-2 border-ink shadow-hard-sm text-xs font-bold tracking-wide">
            {event.org}
          </span>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tighter mb-4">
            Graduate{" "}
            <span
              className={cn("transition-colors duration-300", accentText)}
            >
              Mentorship
            </span>
            <br />
            2026
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-cream/70 mb-6 font-medium italic">
            &ldquo;{event.tagline}&rdquo;
          </p>

          {/* Audience description — swaps by toggle */}
          <p className="text-base sm:text-lg text-cream/80 leading-relaxed mb-10 max-w-2xl transition-all duration-300">
            {copy.heroDescription}
          </p>

          {/* Price note */}
          <p className="flex items-center gap-2 text-sm text-cream/50 mb-8">
            <FourPointStar className="w-3 h-3 text-cream/50 shrink-0" />
            {event.price}
          </p>

          {/* Audience toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <span className="text-cream/60 text-sm">Saya mendaftar sebagai:</span>
            <Tabs
              value={audience}
              onValueChange={(v) => setAudience(v as Audience)}
            >
              <TabsList className="h-10 rounded-xl bg-ink border-2 border-cream p-1">
                <TabsTrigger
                  value="mentee"
                  className={cn(
                    "rounded-lg px-5 h-8 text-sm font-semibold transition-all duration-300",
                    audience === "mentee"
                      ? "bg-brand-red text-white data-[state=active]:bg-brand-red data-[state=active]:text-white"
                      : "text-cream/70"
                  )}
                >
                  Mentee
                </TabsTrigger>
                <TabsTrigger
                  value="mentor"
                  className={cn(
                    "rounded-lg px-5 h-8 text-sm font-semibold transition-all duration-300",
                    audience === "mentor"
                      ? "bg-brand-blue text-white data-[state=active]:bg-brand-blue data-[state=active]:text-white"
                      : "text-cream/70"
                  )}
                >
                  Mentor
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={event.registerLinks[audience]}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-xl border-2 border-ink text-white font-bold px-8 shadow-hard-cream transition-colors duration-300",
                accentBg
              )}
            >
              Daftar sebagai {isMentee ? "Mentee" : "Mentor"} →
            </a>
            <a
              href="#tentang"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-xl border-2 border-cream text-cream bg-transparent hover:bg-cream/10 font-bold px-8"
              )}
            >
              Pelajari Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
