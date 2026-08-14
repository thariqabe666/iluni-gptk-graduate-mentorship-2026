"use client";

import { useState } from "react";
import { Link2, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  id,
  eyebrow,
  title,
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — link is still shareable manually.
    }
  };

  return (
    <div className={cn("mb-6 flex items-start justify-between gap-4", className)}>
      <div>
        <p className="font-heading text-xs font-semibold uppercase tracking-[0.14em] text-brand-red mb-3">
          {eyebrow}
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-ink leading-[1.05]">
          {title}
        </h2>
      </div>
      <button
        type="button"
        onClick={copyLink}
        aria-label="Salin tautan bagian ini"
        className="no-print shrink-0 mt-1 flex items-center gap-1.5 rounded-lg border-[1.5px] border-ink/20 px-2.5 py-1.5 text-xs font-medium text-ink/50 transition-colors hover:border-ink hover:text-ink"
      >
        {copied ? <Check size={13} /> : <Link2 size={13} />}
        <span className="hidden sm:inline">{copied ? "Disalin" : "Salin tautan"}</span>
      </button>
    </div>
  );
}
