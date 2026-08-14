"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { id: "pembuka", label: "Pembuka" },
  { id: "dua-jalur", label: "Dua Jalur Peserta" },
  { id: "tiga-pilar", label: "Tiga Pilar Kurikulum" },
  { id: "empat-lapis", label: "Empat Lapis Kegiatan" },
  { id: "anchor-co-mentor", label: "Anchor & Co-Mentor" },
  { id: "kelompok", label: "Peta 20 Kelompok" },
  { id: "lintas-kelompok", label: "Sesi Lintas Kelompok" },
  { id: "linimasa", label: "Linimasa" },
  { id: "insight-brief", label: "Final Project: Insight Brief" },
  { id: "penilaian", label: "Penilaian & Sertifikat" },
  { id: "platform", label: "Platform & Peran" },
  { id: "faq", label: "FAQ" },
  { id: "penutup", label: "Penutup" },
];

export function Toc() {
  const [active, setActive] = useState(items[0].id);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Desktop: sticky sidebar */}
      <nav className="no-print hidden lg:block sticky top-28 self-start w-56 shrink-0 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
        <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/40 mb-3">
          Daftar Isi
        </p>
        <ul className="space-y-0.5 border-l-2 border-ink/10">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={cn(
                  "block -ml-0.5 border-l-2 py-1.5 pl-3 text-sm transition-colors",
                  active === item.id
                    ? "border-brand-red font-semibold text-ink"
                    : "border-transparent text-ink/50 hover:text-ink"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile: collapsible bar */}
      <div className="no-print sticky top-16 z-30 -mx-4 border-b border-ink/10 bg-cream px-4 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          className="flex w-full items-center justify-between py-3 font-heading text-xs font-semibold uppercase tracking-[0.1em] text-ink"
        >
          Daftar Isi
          <ChevronDown
            size={16}
            className={cn("transition-transform duration-200", mobileOpen && "rotate-180")}
          />
        </button>
        {mobileOpen && (
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 pb-4">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-sm",
                    active === item.id ? "font-semibold text-brand-red" : "text-ink/60"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
