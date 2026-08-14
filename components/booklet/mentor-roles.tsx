import { SectionHeading } from "./section-heading";
import { mentorRoles } from "@/lib/booklet-data";

export function MentorRolesSection() {
  return (
    <section id="anchor-co-mentor" className="scroll-mt-24 py-10">
      <SectionHeading id="anchor-co-mentor" eyebrow="Bagian 5" title="Anchor Mentor & Co-Mentor" />
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border-[1.5px] border-ink p-5">
          <p className="mb-2 font-heading text-sm font-bold uppercase text-ink">
            {mentorRoles.anchor.title}
          </p>
          <p className="text-sm leading-relaxed text-ink/70">{mentorRoles.anchor.desc}</p>
        </div>
        <div className="rounded-xl border-[1.5px] border-ink p-5">
          <p className="mb-2 font-heading text-sm font-bold uppercase text-ink">
            {mentorRoles.coMentor.title}
          </p>
          <p className="text-sm leading-relaxed text-ink/70">{mentorRoles.coMentor.desc}</p>
        </div>
      </div>
      <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">{mentorRoles.rationale}</p>
      <div className="rounded-xl bg-ink p-5 text-cream">
        <p className="text-sm leading-relaxed">{mentorRoles.composition}</p>
      </div>
    </section>
  );
}
