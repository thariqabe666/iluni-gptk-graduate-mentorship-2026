"use client";

import { BookletHeader } from "./header";
import { TocDesktop, TocMobile } from "./toc";
import { OpeningSection } from "./opening";
import { TracksSection } from "./tracks";
import { PillarsSection } from "./pillars";
import { ActivityLayersSection } from "./activity-layers";
import { MentorRolesSection } from "./mentor-roles";
import { GroupsSection } from "./groups";
import { CrossGroupSessionsSection } from "./cross-group-sessions";
import { BookletTimelineSection } from "./timeline";
import { InsightBriefSection } from "./insight-brief";
import { AssessmentSection } from "./assessment";
import { PlatformSection } from "./platform";
import { BookletFaqSection } from "./faq";
import { ClosingSection } from "./closing";
import { FooterSection } from "@/components/sections/footer";
import { AudienceContext } from "@/components/audience-context";

export function BookletPage() {
  return (
    // FooterSection reads audience for its accent color; a booklet reader has no
    // mentee/mentor identity, so it's pinned to a neutral default.
    <AudienceContext.Provider value={{ audience: "mentee", setAudience: () => {} }}>
      <div className="booklet-page min-h-screen bg-cream">
        <BookletHeader />
        <TocMobile />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex gap-10">
            <TocDesktop />
            <main className="min-w-0 flex-1 divide-y divide-ink/10 py-6">
              <OpeningSection />
              <TracksSection />
              <PillarsSection />
              <ActivityLayersSection />
              <MentorRolesSection />
              <GroupsSection />
              <CrossGroupSessionsSection />
              <BookletTimelineSection />
              <InsightBriefSection />
              <AssessmentSection />
              <PlatformSection />
              <BookletFaqSection />
              <ClosingSection />
            </main>
          </div>
        </div>
        <FooterSection />
      </div>
    </AudienceContext.Provider>
  );
}

