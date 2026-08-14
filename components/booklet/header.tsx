import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";
import { BOOKLET_VERSION, bookletTruthNote } from "@/lib/booklet-data";
import { event } from "@/lib/data";

export function BookletHeader() {
  return (
    <header className="no-print border-b border-ink bg-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <Logo className="border-ink" iconClassName="text-brand-red" size={32} />
          <span className="hidden font-heading text-xs font-bold uppercase tracking-[0.08em] text-ink sm:inline">
            {event.org}
          </span>
        </Link>
        <Link
          href="/"
          className="flex items-center gap-1.5 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
        >
          <ArrowLeft size={15} />
          Kembali ke Beranda
        </Link>
      </div>
      <div className="bg-ink text-cream">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-x-3 gap-y-1 px-4 py-2.5 text-xs sm:px-6">
          <span className="font-heading font-bold uppercase tracking-[0.08em] text-brand-red">
            {BOOKLET_VERSION.label} · {BOOKLET_VERSION.revision}
          </span>
          <span className="hidden text-cream/40 sm:inline">·</span>
          <span className="text-cream/70">{bookletTruthNote}</span>
        </div>
      </div>
    </header>
  );
}
