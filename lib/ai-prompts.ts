export type AIProvider = "chatgpt" | "claude" | "gemini" | "perplexity";

export interface AIProviderConfig {
  id: AIProvider;
  name: string;
  brandColor: string;
  shortDesc: string;
  getUrl: (shortPrompt: string, pageUrl?: string) => string;
}

/**
 * Creates a comprehensive, structured prompt containing the full booklet markdown
 * to be copied into the user's clipboard for pasting into any LLM.
 */
export function generateAIBookletPrompt(markdown: string, pageUrl?: string): string {
  const urlContext = pageUrl ? `Tautan Dokumen Web: ${pageUrl}\n\n` : "";
  return `Berikut adalah isi lengkap Booklet Panduan Program Graduate Mentorship 2026 ILUNI GPTK FTUI:

${urlContext}${markdown}

---
Tolong jelaskan dan berikan ringkasan komprehensif mengenai program ini dalam Bahasa Indonesia yang jelas dan terstruktur:
1. **Ringkasan Program & Tujuan:** Apa tujuan program ini bagi Mentee (Fresh Graduate / Early Career) dan Mentor (Alumni Senior)?
2. **2 Jalur Peserta:** Apa perbedaan jalur "Entering the Industry" vs "Growing in the Industry", serta aturan penempatannya?
3. **Kurikulum & Kegiatan:** Jelaskan 3 pilar kurikulum dan 4 lapis kegiatan (Kuliah Umum, Group Mentoring, Sesi Tematik, Informal Meetup).
4. **Linimasa & Kehadiran:** Kapan program berlangsung dan bagaimana kewajiban kehadiran peserta?
5. **Final Project & Sertifikat:** Apa itu tugas mandiri Insight Brief (panjang, 5 bagian, kerahasiaan) dan apa kriteria sertifikat kelulusannya?`;
}

/**
 * Creates a concise query for AI tools that support URL parameters (ChatGPT, Claude, Perplexity).
 */
export function generateShortAIQuery(pageUrl?: string): string {
  const targetUrl =
    pageUrl || (typeof window !== "undefined" ? window.location.href.split("#")[0] : "");
  return `Tolong jelaskan dan rangkum isi Program Graduate Mentorship 2026 ILUNI GPTK FTUI dari website resmi ini: ${targetUrl}. Jelaskan 2 jalur peserta, 3 pilar, 4 lapis kegiatan, linimasa, dan tugas akhir Insight Brief.`;
}

export const AI_PROVIDERS: AIProviderConfig[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    brandColor: "text-[#10a37f]",
    shortDesc: "OpenAI ChatGPT",
    getUrl: (prompt) => `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`,
  },
  {
    id: "claude",
    name: "Claude",
    brandColor: "text-[#d97706]",
    shortDesc: "Anthropic Claude",
    getUrl: (prompt) => `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
  },
  {
    id: "gemini",
    name: "Gemini",
    brandColor: "text-[#2563eb]",
    shortDesc: "Google Gemini",
    getUrl: () => `https://gemini.google.com/app`,
  },
  {
    id: "perplexity",
    name: "Perplexity",
    brandColor: "text-[#06b6d4]",
    shortDesc: "Perplexity AI",
    getUrl: (prompt) => `https://www.perplexity.ai/search?q=${encodeURIComponent(prompt)}`,
  },
];
