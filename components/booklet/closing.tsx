import { SectionHeading } from "./section-heading";
import { closing } from "@/lib/booklet-data";
import { event } from "@/lib/data";

export function ClosingSection() {
  return (
    <section id="penutup" className="scroll-mt-24 py-10">
      <SectionHeading id="penutup" eyebrow="Bagian 13" title="Penutup" />

      <div className="mb-6 rounded-xl border-[1.5px] border-dashed border-ink/30 p-5">
        {closing.archivePdfUrl ? (
          <a
            href={closing.archivePdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-ink underline underline-offset-4"
          >
            {closing.archivePdfLabel}
          </a>
        ) : (
          <p className="text-sm text-ink/50">
            <span className="font-heading font-bold uppercase tracking-wide text-ink/40">TODO:</span>{" "}
            tautan PDF booklet lama ({closing.archivePdfLabel}) belum tersedia — akan ditambahkan
            setelah panitia memberi link.
          </p>
        )}
      </div>

      <div className="mb-6 rounded-xl border-[1.5px] border-ink p-5">
        <p className="mb-3 font-heading text-xs font-bold uppercase tracking-wide text-ink/60">
          Narahubung Panitia
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/80">
          {event.contacts.map((c) => (
            <li key={c.name} className="font-medium">
              {c.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {closing.hashtags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border-[1.5px] border-ink/20 px-3 py-1 text-xs font-medium text-ink/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
