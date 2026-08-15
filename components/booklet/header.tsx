import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";
import { BOOKLET_VERSION, bookletTruthNote } from "@/lib/booklet-data";
import { event } from "@/lib/data";

export function BookletHeader() {
  return (
    <header className="no-print border-b border-ink bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4">
        <Link href="/" className="flex items-center gap-2.5 min-w-0">
          <Logo className="border-ink shrink-0" iconClassName="text-brand-red" size={30} />
          <span className="truncate font-heading text-xs font-bold uppercase tracking-[0.08em] text-ink">
            {event.org}
          </span>
        </Link>
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1.5 rounded-lg border border-ink/15 px-2.5 py-1.5 text-xs sm:text-sm font-medium text-ink/75 transition-colors hover:border-ink hover:bg-ink hover:text-cream"
        >
          <ArrowLeft size={14} />
          <span className="hidden sm:inline">Kembali ke </span>Beranda
        </Link>
      </div>
      <div className="bg-ink text-cream">
        <div className="mx-auto flex max-w-6xl flex-col sm:flex-row sm:items-center gap-x-3 gap-y-0.5 px-4 py-2 sm:px-6 sm:py-2.5 text-xs">
          <span className="font-heading font-bold uppercase tracking-[0.08em] text-brand-red shrink-0">
            {BOOKLET_VERSION.label} · {BOOKLET_VERSION.revision}
          </span>
          <span className="hidden text-cream/40 sm:inline">·</span>
          <span className="text-cream/70 text-[11px] sm:text-xs leading-relaxed">{bookletTruthNote}</span>
        </div>
      </div>
    </header>
  );
}

