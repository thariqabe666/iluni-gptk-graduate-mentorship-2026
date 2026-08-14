import { bookletIntro, bookletStats } from "@/lib/booklet-data";

export function OpeningSection() {
  return (
    <section id="pembuka" className="scroll-mt-24 py-4">
      <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
        {bookletIntro.eyebrow}
      </p>
      <h1 className="mb-3 text-3xl font-bold uppercase leading-[0.98] tracking-tight text-ink sm:text-4xl md:text-5xl">
        {bookletIntro.title}
      </h1>
      <p className="mb-1 text-lg font-medium italic text-ink/70">
        &ldquo;{bookletIntro.tagline}&rdquo;
      </p>
      <p className="mb-8 text-sm text-ink/50">{bookletIntro.org}</p>

      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {bookletStats.map((s) => (
          <div key={s.label} className="rounded-xl border-[1.5px] border-ink bg-ink p-4 text-cream">
            <p className="font-heading text-2xl font-bold text-brand-red sm:text-3xl">{s.value}</p>
            <p className="mt-1 text-[11px] uppercase leading-snug tracking-wide text-cream/60">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <p className="max-w-3xl text-base leading-relaxed text-ink/80">
        {bookletIntro.positioning}
      </p>
    </section>
  );
}
