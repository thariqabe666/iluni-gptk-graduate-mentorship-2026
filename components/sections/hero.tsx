"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAudience } from "@/components/audience-context";
import { event, audienceCopy } from "@/lib/data";
import type { Audience } from "@/lib/data";
import { cn } from "@/lib/utils";

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
      {/* Decorative faceted polygon shapes */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Top-left angular shape */}
        <polygon
          points="0,0 380,0 220,180 0,260"
          fill={isMentee ? "#f81919" : "#004aad"}
          opacity="0.08"
        />
        {/* Bottom-right angular shape */}
        <polygon
          points="100%,100% 60%,100% 75%,65% 100%,72%"
          fill={isMentee ? "#f81919" : "#004aad"}
          opacity="0.06"
        />
        {/* Top-right small accent */}
        <polygon
          points="100%,0 100%,220 78%,120 90%,0"
          fill="#f6f5ec"
          opacity="0.04"
        />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-32 pt-36">
        <div className="max-w-3xl">
          {/* Org badge */}
          <Badge
            variant="outline"
            className="mb-6 border-cream/30 text-cream/80 rounded-full text-xs tracking-wide"
          >
            {event.org}
          </Badge>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-4">
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
            "{event.tagline}"
          </p>

          {/* Audience description — swaps by toggle */}
          <p className="text-base sm:text-lg text-cream/80 leading-relaxed mb-10 max-w-2xl transition-all duration-300">
            {copy.heroDescription}
          </p>

          {/* Price note */}
          <p className="text-sm text-cream/50 mb-8">✦ {event.price}</p>

          {/* Audience toggle */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <span className="text-cream/60 text-sm">Saya mendaftar sebagai:</span>
            <Tabs
              value={audience}
              onValueChange={(v) => setAudience(v as Audience)}
            >
              <TabsList className="h-10 rounded-full bg-cream/10 p-1">
                <TabsTrigger
                  value="mentee"
                  className={cn(
                    "rounded-full px-5 h-8 text-sm font-medium transition-all duration-300",
                    audience === "mentee"
                      ? "bg-brand-red text-white shadow data-[state=active]:bg-brand-red data-[state=active]:text-white"
                      : "text-cream/70"
                  )}
                >
                  Mentee
                </TabsTrigger>
                <TabsTrigger
                  value="mentor"
                  className={cn(
                    "rounded-full px-5 h-8 text-sm font-medium transition-all duration-300",
                    audience === "mentor"
                      ? "bg-brand-blue text-white shadow data-[state=active]:bg-brand-blue data-[state=active]:text-white"
                      : "text-cream/70"
                  )}
                >
                  Mentor
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={event.registerLinks[audience]}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full text-white font-semibold px-8 transition-colors duration-300",
                accentBg
              )}
            >
              Daftar sebagai {isMentee ? "Mentee" : "Mentor"} →
            </a>
            <a
              href="#tentang"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-cream/30 text-cream bg-transparent hover:bg-cream/10 font-semibold px-8"
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
