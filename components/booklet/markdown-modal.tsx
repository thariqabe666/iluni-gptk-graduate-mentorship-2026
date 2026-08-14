"use client";

import { useEffect, useState } from "react";
import { X, Check, Copy, Download, FileText } from "lucide-react";

interface MarkdownModalProps {
  isOpen: boolean;
  onClose: () => void;
  markdown: string;
}

export function MarkdownModal({ isOpen, onClose, markdown }: MarkdownModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleDownload = () => {
    const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "booklet-graduate-mentorship-2026.md";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const wordCount = markdown.split(/\s+/).filter(Boolean).length;
  const lineCount = markdown.split("\n").length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-ink/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="markdown-modal-title"
    >
      <div
        className="relative flex flex-col w-full max-w-4xl max-h-[90vh] rounded-2xl border-[1.5px] border-ink bg-cream text-ink shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-ink/15 px-5 py-4 bg-cream">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg border-[1.5px] border-ink bg-ink text-cream">
              <FileText size={18} className="text-brand-red" />
            </div>
            <div>
              <h3 id="markdown-modal-title" className="font-heading text-base font-bold uppercase tracking-tight text-ink">
                Markdown Booklet Program
              </h3>
              <p className="text-xs text-ink/60">
                {lineCount} baris · {wordCount.toLocaleString()} kata · Siap untuk AI / ChatGPT / Claude / catatan
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center gap-1.5 rounded-lg border-[1.5px] border-ink bg-ink px-3 py-1.5 text-xs font-semibold text-cream transition-transform active:scale-95 hover:bg-ink/85"
            >
              {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
              {copied ? "Disalin!" : "Salin Semua"}
            </button>
            <button
              type="button"
              onClick={handleDownload}
              className="hidden sm:flex items-center gap-1.5 rounded-lg border-[1.5px] border-ink/20 bg-cream px-3 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-ink"
              title="Unduh file .md"
            >
              <Download size={14} />
              Unduh .md
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex size-8 items-center justify-center rounded-lg border border-ink/15 text-ink/60 transition-colors hover:border-ink hover:text-ink"
              aria-label="Tutup"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Content / Code Area */}
        <div className="relative flex-1 overflow-auto bg-ink/5 p-4 sm:p-6 font-mono text-xs text-ink/90 leading-relaxed select-text">
          <pre className="whitespace-pre-wrap break-words">{markdown}</pre>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink/15 bg-cream px-5 py-3 text-xs text-ink/60">
          <span>Format: GitHub Flavored Markdown (.md)</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownload}
              className="sm:hidden flex items-center gap-1.5 rounded-lg border border-ink/20 px-2.5 py-1 text-xs font-medium text-ink"
            >
              <Download size={13} />
              Unduh .md
            </button>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-ink/20 px-3 py-1 text-xs font-medium text-ink transition-colors hover:border-ink"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
