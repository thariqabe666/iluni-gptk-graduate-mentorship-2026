import { Info } from "lucide-react";
import { bookletIntro, bookletStats, bookletChangeNotice } from "@/lib/booklet-data";
import { CopyPageButton } from "./copy-page-button";
import { cn } from "@/lib/utils";

export function OpeningSection() {
  return (
    <section id="pembuka" className="scroll-mt-24 py-4 sm:py-6">
      <div className="mb-4 flex flex-col gap-3.5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
            {bookletIntro.eyebrow}
          </p>
          <h1 className="text-3xl font-bold uppercase leading-[1.02] tracking-tight text-ink sm:text-4xl md:text-5xl">
            {bookletIntro.title}
          </h1>
        </div>
        <CopyPageButton className="self-start sm:self-auto" />
      </div>

      <p className="mb-1 text-base sm:text-lg font-medium italic text-ink/75">
        &ldquo;{bookletIntro.tagline}&rdquo;
      </p>
      <p className="mb-6 sm:mb-8 text-xs sm:text-sm text-ink/50">{bookletIntro.org}</p>

      {/* Responsive stats cards: 2 cols on mobile with 5th card spanning full width, 3 cols on sm, 5 cols on lg */}
      <div className="mb-8 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
        {bookletStats.map((s, index) => (
          <div
            key={s.label}
            className={cn(
              "rounded-xl border-[1.5px] border-ink bg-ink p-3.5 sm:p-4 text-cream flex flex-col justify-between shadow-xs",
              index === 4 ? "col-span-2 sm:col-span-1" : ""
            )}
          >
            <p className="font-heading text-2xl sm:text-3xl font-bold text-brand-red">{s.value}</p>
            <p className="mt-1 text-[10px] sm:text-[11px] uppercase leading-tight tracking-wide text-cream/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <p className="max-w-3xl text-sm sm:text-base leading-relaxed text-ink/80">
        {bookletIntro.positioning}
      </p>

      <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-ink/15 bg-ink/[0.03] p-3.5 text-xs sm:text-sm leading-relaxed text-ink/70">
        <Info size={16} className="mt-0.5 shrink-0 text-brand-blue" />
        <span>
          <strong className="font-semibold text-ink">Catatan:</strong> {bookletChangeNotice}
        </span>
      </div>
    </section>
  );
}

