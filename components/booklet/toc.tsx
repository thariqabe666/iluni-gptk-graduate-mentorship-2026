"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowLeft, ChevronRight, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { BOOKLET_VERSION } from "@/lib/booklet-data";

export const tocItems = [
  { id: "pembuka", num: "01", label: "Pembuka" },
  { id: "dua-jalur", num: "02", label: "Dua Jalur Peserta" },
  { id: "tiga-pilar", num: "03", label: "Tiga Pilar Kurikulum" },
  { id: "empat-lapis", num: "04", label: "Empat Lapis Kegiatan" },
  { id: "anchor-co-mentor", num: "05", label: "Anchor & Co-Mentor" },
  { id: "kelompok", num: "06", label: "Peta 20 Kelompok" },
  { id: "lintas-kelompok", num: "07", label: "Sesi Lintas Kelompok" },
  { id: "linimasa", num: "08", label: "Linimasa" },
  { id: "insight-brief", num: "09", label: "Final Project: Insight Brief" },
  { id: "penilaian", num: "10", label: "Penilaian & Sertifikat" },
  { id: "platform", num: "11", label: "Platform & Peran" },
  { id: "faq", num: "12", label: "FAQ" },
  { id: "penutup", num: "13", label: "Penutup" },
];

function useActiveSection() {
  const [active, setActive] = useState(tocItems[0].id);

  useEffect(() => {
    const sections = tocItems
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

  return active;
}

/**
 * Desktop sticky sidebar TOC (hidden on mobile).
 */
export function TocDesktop() {
  const active = useActiveSection();

  return (
    <nav aria-label="Daftar isi booklet" className="no-print hidden lg:block sticky top-28 self-start w-56 shrink-0 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
      <p className="font-heading text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/40 mb-3">
        Daftar Isi
      </p>
      <ul className="space-y-0.5 border-l-2 border-ink/10">
        {tocItems.map((item) => (
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
  );
}

/**
 * Mobile sticky sub-header + slide-out hamburger drawer (hidden on desktop).
 * Matches the clean documentation UX of LangChain Docs.
 */
export function TocMobile() {
  const active = useActiveSection();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const activeItem = tocItems.find((i) => i.id === active) || tocItems[0];

  // Lock body scroll and handle Escape key when drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setDrawerOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [drawerOpen]);

  const handleSelect = (id: string) => {
    setDrawerOpen(false);
    // Smooth scroll to section after closing drawer
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <>
      {/* Sticky Mobile Sub-Navbar */}
      <div className="no-print sticky top-0 z-30 border-b border-ink/15 bg-cream/95 backdrop-blur-md px-4 py-2.5 lg:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          {/* Hamburger trigger button with current section title */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Buka daftar isi"
            className="flex min-w-0 flex-1 items-center gap-2.5 text-left text-ink transition-opacity hover:opacity-80 active:scale-[0.99]"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-[1.5px] border-ink bg-ink text-cream shadow-xs">
              <Menu size={16} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-heading text-[10px] font-bold uppercase tracking-wider text-ink/40 leading-none mb-0.5">
                Daftar Isi
              </p>
              <p className="truncate font-heading text-xs font-bold text-ink leading-tight">
                {activeItem.num}. {activeItem.label}
              </p>
            </div>
          </button>

          {/* Quick indicator / badge */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="shrink-0 rounded-full border border-ink/20 bg-ink/5 px-2.5 py-1 font-heading text-[11px] font-semibold uppercase tracking-wide text-ink/70"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Slide-over Drawer Backdrop */}
      {drawerOpen && (
        <div
          role="presentation"
          onClick={() => setDrawerOpen(false)}
          className="no-print fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden"
        />
      )}

      {/* Slide-over Drawer Panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Navigasi Daftar Isi"
        className={cn(
          "no-print fixed inset-y-0 left-0 z-50 flex w-[85%] max-w-xs flex-col border-r-2 border-ink bg-cream shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-ink/15 px-4 py-3.5">
          <div className="flex items-center gap-2">
            <FileText size={18} className="text-brand-red" />
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-wider text-ink">
                Daftar Isi Booklet
              </p>
              <p className="text-[10px] text-ink/50">
                {BOOKLET_VERSION.label} · {BOOKLET_VERSION.revision}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            aria-label="Tutup menu"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-ink/20 text-ink/70 transition-colors hover:bg-ink hover:text-cream"
          >
            <X size={16} />
          </button>
        </div>

        {/* Drawer Body: Navigation Links */}
        <nav className="flex-1 overflow-y-auto p-3">
          <ul className="space-y-1">
            {tocItems.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelect(item.id);
                    }}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-all",
                      isActive
                        ? "border-[1.5px] border-ink bg-ink font-semibold text-cream shadow-xs"
                        : "text-ink/70 hover:bg-ink/[0.06] hover:text-ink active:bg-ink/10"
                    )}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span
                        className={cn(
                          "font-heading text-xs font-bold tracking-wider shrink-0",
                          isActive ? "text-brand-red" : "text-ink/40"
                        )}
                      >
                        {item.num}
                      </span>
                      <span className="truncate">{item.label}</span>
                    </div>
                    {isActive && (
                      <ChevronRight size={15} className="shrink-0 text-brand-red ml-2" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer Footer */}
        <div className="border-t border-ink/15 p-3">
          <Link
            href="/"
            onClick={() => setDrawerOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-ink/20 bg-white py-2.5 text-xs font-medium text-ink transition-colors hover:border-ink hover:bg-cream"
          >
            <ArrowLeft size={14} />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </>
  );
}

// Default export for backward compatibility if needed
export { TocDesktop as Toc };

