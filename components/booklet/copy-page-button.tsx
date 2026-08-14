"use client";

import { useState, useRef, useEffect } from "react";
import { Copy, Check, ChevronDown, Link2, FileCode, Eye } from "lucide-react";
import { generateBookletMarkdown } from "@/lib/booklet-markdown";
import { MarkdownModal } from "./markdown-modal";
import { cn } from "@/lib/utils";

export function CopyPageButton({ className }: { className?: string }) {
  const [copiedType, setCopiedType] = useState<"markdown" | "link" | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const copyMarkdown = async () => {
    const md = generateBookletMarkdown();
    try {
      await navigator.clipboard.writeText(md);
      setCopiedType("markdown");
      setMenuOpen(false);
      setTimeout(() => setCopiedType(null), 2000);
    } catch {
      // If clipboard API fails, open the modal so user can copy manually
      setModalOpen(true);
      setMenuOpen(false);
    }
  };

  const copyLink = async () => {
    const url = typeof window !== "undefined" ? window.location.href.split("#")[0] : "";
    try {
      await navigator.clipboard.writeText(url);
      setCopiedType("link");
      setMenuOpen(false);
      setTimeout(() => setCopiedType(null), 2000);
    } catch {
      // Insecure context fallback
    }
  };

  const openModal = () => {
    setMenuOpen(false);
    setModalOpen(true);
  };

  return (
    <>
      <div ref={menuRef} className={cn("relative inline-flex shrink-0 no-print", className)}>
        {/* Split Button Container */}
        <div className="inline-flex items-stretch rounded-lg border-[1.5px] border-ink bg-cream shadow-sm transition-all hover:border-ink hover:shadow">
          {/* Main Action: Copy Markdown */}
          <button
            type="button"
            onClick={copyMarkdown}
            aria-label="Salin seluruh isi halaman sebagai Markdown"
            className="flex items-center gap-2 px-3 py-1.5 font-heading text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:bg-ink hover:text-cream active:scale-[0.98] rounded-l-[6px]"
          >
            {copiedType === "markdown" ? (
              <>
                <Check size={14} className="text-green-600 animate-in zoom-in" />
                <span className="text-green-700">Tersalin</span>
              </>
            ) : copiedType === "link" ? (
              <>
                <Check size={14} className="text-green-600 animate-in zoom-in" />
                <span className="text-green-700">Link Tersalin</span>
              </>
            ) : (
              <>
                <Copy size={14} className="text-brand-red" />
                <span>Copy page</span>
              </>
            )}
          </button>

          {/* Divider */}
          <div className="w-[1.5px] bg-ink/20 self-stretch" />

          {/* Dropdown Trigger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-haspopup="true"
            aria-label="Pilihan salin lainnya"
            className={cn(
              "flex items-center justify-center px-2 text-ink/70 transition-colors hover:bg-ink hover:text-cream rounded-r-[6px]",
              menuOpen && "bg-ink text-cream"
            )}
          >
            <ChevronDown
              size={14}
              className={cn("transition-transform duration-150", menuOpen && "rotate-180")}
            />
          </button>
        </div>

        {/* Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 top-full z-40 mt-1.5 w-60 rounded-xl border-[1.5px] border-ink bg-cream p-1.5 shadow-xl animate-in fade-in zoom-in-95 duration-150">
            <div className="px-2.5 py-1 text-[10px] font-heading font-semibold uppercase tracking-wider text-ink/40">
              Opsi Ekspor Halaman
            </div>

            <button
              type="button"
              onClick={copyMarkdown}
              className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              <FileCode size={15} className="text-brand-red shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold leading-none">Salin sebagai Markdown</p>
                <p className="text-[10px] text-ink/50 group-hover:text-cream/70 mt-0.5">
                  Format lengkap untuk LLM / catatan
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={copyLink}
              className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              <Link2 size={15} className="text-brand-blue shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold leading-none">Salin Tautan Halaman</p>
                <p className="text-[10px] text-ink/50 group-hover:text-cream/70 mt-0.5">
                  URL langsung ke booklet
                </p>
              </div>
            </button>

            <div className="my-1 border-t border-ink/10" />

            <button
              type="button"
              onClick={openModal}
              className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-xs font-medium text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              <Eye size={15} className="text-ink/70 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold leading-none">Lihat / Unduh Markdown</p>
                <p className="text-[10px] text-ink/50 group-hover:text-cream/70 mt-0.5">
                  Preview dokumen & unduh .md
                </p>
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Markdown Preview & Download Modal */}
      <MarkdownModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        markdown={generateBookletMarkdown()}
      />
    </>
  );
}
