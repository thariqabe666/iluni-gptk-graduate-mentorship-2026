import { SectionHeading } from "./section-heading";
import { mentorRoles } from "@/lib/booklet-data";

export function MentorRolesSection() {
  return (
    <section id="anchor-co-mentor" className="scroll-mt-24 py-10">
      <SectionHeading id="anchor-co-mentor" eyebrow="Bagian 5" title="Anchor Mentor & Co-Mentor" />

      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-ink/70">
        <span className="font-semibold text-ink">{mentorRoles.teamStatement.lead}</span>{" "}
        {mentorRoles.teamStatement.body}
      </p>

      <div className="mb-6 overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b-2 border-ink">
              <th className="py-2 pr-3 font-heading text-xs uppercase tracking-wide text-ink/60">
                Peran
              </th>
              <th className="py-2 pr-3 font-heading text-xs uppercase tracking-wide text-ink/60">
                Komitmen sesi
              </th>
              <th className="py-2 font-heading text-xs uppercase tracking-wide text-ink/60">
                Yang membedakan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-ink/10 align-top">
              <td className="py-3 pr-3 font-heading font-bold text-ink">{mentorRoles.anchor.title}</td>
              <td className="py-3 pr-3 text-ink/80">{mentorRoles.anchor.commitment}</td>
              <td className="py-3 text-ink/70">Mengisi formulir penilaian & PJ kelompok bagi panitia</td>
            </tr>
            <tr className="align-top">
              <td className="py-3 pr-3 font-heading font-bold text-ink">{mentorRoles.coMentor.title}</td>
              <td className="py-3 pr-3 text-ink/80">{mentorRoles.coMentor.commitment}</td>
              <td className="py-3 text-ink/70">Tidak mengisi formulir penilaian akhir</td>
            </tr>
          </tbody>
        </table>
      </div>

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

      <p className="mb-4 max-w-2xl text-sm leading-relaxed text-ink/70">{mentorRoles.diversityNote}</p>

      <div className="rounded-xl bg-ink p-5 text-cream">
        <p className="text-sm leading-relaxed">{mentorRoles.composition}</p>
      </div>
    </section>
  );
}
