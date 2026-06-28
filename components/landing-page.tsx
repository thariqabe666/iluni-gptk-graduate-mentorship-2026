"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AudienceContext } from "@/components/audience-context";
import { Navbar } from "@/components/sections/navbar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { BenefitsSection } from "@/components/sections/benefits";
import { IndustriesSection } from "@/components/sections/industries";
import { PairingSection } from "@/components/sections/pairing";
import { TimelineSection } from "@/components/sections/timeline";
import { CTASection } from "@/components/sections/cta";
import { FooterSection } from "@/components/sections/footer";
import type { Audience } from "@/lib/data";

export function LandingPage() {
  const searchParams = useSearchParams();
  const [audience, setAudience] = useState<Audience>(() => {
    const param = searchParams.get("as");
    return param === "mentor" || param === "mentee" ? param : "mentee";
  });

  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <IndustriesSection />
        <PairingSection />
        <TimelineSection />
        <CTASection />
      </main>
      <FooterSection />
    </AudienceContext.Provider>
  );
}
