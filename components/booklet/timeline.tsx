import { SectionHeading } from "./section-heading";
import { bookletTimeline, bookletTimelineNote } from "@/lib/booklet-data";
import { cn } from "@/lib/utils";

export function BookletTimelineSection() {
  return (
    <section id="linimasa" className="scroll-mt-24 py-10">
      <SectionHeading id="linimasa" eyebrow="Bagian 9" title="Linimasa" />
      <div className="relative border-l-2 border-ink pl-6">
        {bookletTimeline.map((item, i) => (
          <div key={i} className="relative pb-7 last:pb-0">
            <div
              className={cn(
                "absolute -left-[31px] top-1 h-3 w-3 rounded-full border-2 border-ink",
                item.highlight ? "bg-brand-red" : "bg-cream"
              )}
            />
            <p className="font-heading text-xs font-bold uppercase tracking-wide text-brand-red">
              {item.date}
            </p>
            <p
              className={cn(
                "mt-0.5 text-sm text-ink",
                item.highlight && "font-heading font-bold uppercase"
              )}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-2xl text-sm italic text-ink/60">{bookletTimelineNote}</p>
    </section>
  );
}
