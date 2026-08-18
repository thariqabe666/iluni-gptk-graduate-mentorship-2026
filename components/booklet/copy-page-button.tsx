"use client";

import { useState, useRef, useEffect } from "react";
import {
  Copy,
  Check,
  ChevronDown,
  Link2,
  FileCode,
  Eye,
  Sparkles,
  ExternalLink,
  Bot,
  X,
} from "lucide-react";
import { generateBookletMarkdown } from "@/lib/booklet-markdown";
import {
  AI_PROVIDERS,
  AIProvider,
  generateAIBookletPrompt,
  generateShortAIQuery,
} from "@/lib/ai-prompts";
import {
  ChatGPTIcon,
  ClaudeIcon,
  GeminiIcon,
  PerplexityIcon,
} from "./ai-icons";
import { MarkdownModal } from "./markdown-modal";
import { cn } from "@/lib/utils";

interface ToastState {
  show: boolean;
  providerName: string;
}

export function CopyPageButton({ className }: { className?: string }) {
  const [copiedType, setCopiedType] = useState<"markdown" | "link" | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [toast, setToast] = useState<ToastState | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toastTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  // Clean up toast timeout on unmount
  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    };
  }, []);

  const triggerToast = (providerName: string) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast({ show: true, providerName });
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 4500);
  };

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

  const handleAskAI = async (providerId: AIProvider) => {
    const md = generateBookletMarkdown();
    const currentUrl = typeof window !== "undefined" ? window.location.href.split("#")[0] : "";
    const fullPrompt = generateAIBookletPrompt(md, currentUrl);
    const shortQuery = generateShortAIQuery(currentUrl);

    const provider = AI_PROVIDERS.find((p) => p.id === providerId);
    if (!provider) return;

    // 1. Copy full prompt & booklet context to clipboard
    try {
      await navigator.clipboard.writeText(fullPrompt);
    } catch {
      // Fallback if clipboard fails
    }

    // 2. Open Chatbot URL in a new tab
    const targetUrl = provider.getUrl(shortQuery, currentUrl);
    window.open(targetUrl, "_blank", "noopener,noreferrer");

    // 3. Show feedback toast & close menu
    setMenuOpen(false);
    triggerToast(provider.name);
  };

  const openModal = () => {
    setMenuOpen(false);
    setModalOpen(true);
  };

  const renderAIIcon = (providerId: AIProvider) => {
    switch (providerId) {
      case "chatgpt":
        return <ChatGPTIcon className="size-4 shrink-0 text-[#10a37f]" />;
      case "claude":
        return <ClaudeIcon className="size-4 shrink-0 text-[#d97706]" />;
      case "gemini":
        return <GeminiIcon className="size-4 shrink-0 text-[#2563eb]" />;
      case "perplexity":
        return <PerplexityIcon className="size-4 shrink-0 text-[#06b6d4]" />;
      default:
        return <Bot className="size-4 shrink-0" />;
    }
  };

  return (
    <>
      <div ref={menuRef} className={cn("relative inline-flex shrink-0 no-print", className)}>
        {/* Split Button Container */}
        <div className="inline-flex items-stretch rounded-lg border-[1.5px] border-ink bg-cream shadow-xs transition-all hover:border-ink hover:shadow-sm">
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
            aria-label="Pilihan salin dan tanya AI lainnya"
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
          <div className="absolute left-0 sm:left-auto sm:right-0 top-full z-40 mt-1.5 w-72 max-w-[calc(100vw-2rem)] rounded-xl border-[1.5px] border-ink bg-cream p-1.5 shadow-xl animate-in fade-in zoom-in-95 duration-150">
            {/* Section 1: Quick Copy */}
            <div className="px-2.5 pt-1.5 pb-1 text-[10px] font-heading font-semibold uppercase tracking-wider text-ink/40">
              Salin Dokumen
            </div>

            <button
              type="button"
              onClick={copyMarkdown}
              className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-xs font-medium text-ink transition-colors hover:bg-ink hover:text-cream group"
            >
              <FileCode size={14} className="text-brand-red shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold leading-none">Salin sebagai Markdown</p>
                <p className="text-[10px] text-ink/50 group-hover:text-cream/70 mt-0.5">
                  Format teks lengkap untuk LLM / catatan
                </p>
              </div>
            </button>

            <button
              type="button"
              onClick={copyLink}
              className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-xs font-medium text-ink transition-colors hover:bg-ink hover:text-cream group"
            >
              <Link2 size={14} className="text-brand-blue shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold leading-none">Salin Tautan Halaman</p>
                <p className="text-[10px] text-ink/50 group-hover:text-cream/70 mt-0.5">
                  URL langsung ke booklet
                </p>
              </div>
            </button>

            {/* Section 2: Ask AI Chatbots */}
            <div className="my-1 border-t border-ink/10" />
            <div className="flex items-center justify-between px-2.5 pt-1 pb-1 text-[10px] font-heading font-semibold uppercase tracking-wider text-ink/40">
              <span className="flex items-center gap-1">
                <Sparkles size={11} className="text-brand-red" />
                Tanya ke Chatbot AI
              </span>
              <span className="text-[9px] lowercase font-normal text-ink/40">Auto-copy prompt</span>
            </div>

            <div className="grid grid-cols-1 gap-0.5">
              {AI_PROVIDERS.map((provider) => (
                <button
                  key={provider.id}
                  type="button"
                  onClick={() => handleAskAI(provider.id)}
                  className="flex w-full items-center justify-between rounded-lg px-2.5 py-1.5 text-left text-xs font-medium text-ink transition-colors hover:bg-ink hover:text-cream group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {renderAIIcon(provider.id)}
                    <span className="font-semibold leading-none">{provider.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-ink/40 group-hover:text-cream/70">
                    <span>Buka</span>
                    <ExternalLink size={10} className="shrink-0" />
                  </div>
                </button>
              ))}
            </div>

            {/* Section 3: Preview & Download */}
            <div className="my-1 border-t border-ink/10" />
            <button
              type="button"
              onClick={openModal}
              className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-1.5 text-left text-xs font-medium text-ink transition-colors hover:bg-ink hover:text-cream group"
            >
              <Eye size={14} className="text-ink/70 shrink-0 group-hover:text-cream" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold leading-none">Lihat / Unduh Dokumen</p>
                <p className="text-[10px] text-ink/50 group-hover:text-cream/70 mt-0.5">
                  Preview dokumen & unduh .md
                </p>
              </div>
            </button>
          </div>
        )}
      </div>

      {/* Floating Toast Notification */}
      {toast && (
        <aside
          aria-live="polite"
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex max-w-[92vw] sm:max-w-md items-center gap-3 rounded-full border-[1.5px] border-cream/20 bg-ink px-4 py-2.5 text-cream shadow-2xl animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
            <Check size={14} />
          </span>
          <p className="text-xs font-medium leading-snug">
            Prompt & Booklet tersalin! Tekan <kbd className="rounded bg-cream/15 px-1 py-0.5 font-mono text-[10px] font-semibold text-cream">Ctrl+V</kbd> di <span className="font-semibold text-brand-yellow">{toast.providerName}</span>.
          </p>
          <button
            type="button"
            onClick={() => setToast(null)}
            aria-label="Tutup notifikasi"
            className="ml-auto rounded-full p-1 text-cream/50 transition-colors hover:bg-cream/10 hover:text-cream"
          >
            <X size={13} />
          </button>
        </aside>
      )}

      {/* Markdown Preview & Download Modal */}
      <MarkdownModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        markdown={generateBookletMarkdown()}
      />
    </>
  );
}
