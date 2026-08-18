import { MessageCircle } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { closing, bookletChangeNotice } from "@/lib/booklet-data";
import { event } from "@/lib/data";

function getWhatsAppUrl(phone: string, name: string) {
  const cleanPhone = phone.replace(/^0/, "62").replace(/\D/g, "");
  const message = `Halo Kak ${name}, saya ingin bertanya mengenai program Graduate Mentorship 2026 ILUNI GPTK FTUI.`;
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

export function ClosingSection() {
  return (
    <section id="penutup" className="scroll-mt-24 py-10">
      <SectionHeading id="penutup" eyebrow="Bagian 14" title="Penutup" />

      <div className="mb-8 rounded-xl border-[1.5px] border-ink bg-cream p-6 sm:p-7">
        <p className="mb-2 font-heading text-sm font-bold uppercase tracking-wide text-ink">
          Pertanyaan & Informasi Lebih Lanjut
        </p>
        <p className="mb-6 text-sm leading-relaxed text-ink/75">
          Bila ada pertanyaan atau membutuhkan informasi lebih lanjut mengenai Graduate Mentorship 2026, silakan hubungi narahubung panitia melalui WhatsApp berikut:
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {event.contacts.map((c) => (
            <a
              key={c.name}
              href={getWhatsAppUrl(c.phone, c.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-lg border border-ink/20 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-ink hover:shadow-sm"
            >
              <div className="mb-2 flex items-center justify-between">
                <span className="font-heading text-xs font-bold uppercase tracking-wider text-ink/60 group-hover:text-ink">
                  Panitia
                </span>
                <MessageCircle
                  size={16}
                  className="text-brand-blue transition-transform group-hover:scale-110"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-ink transition-colors group-hover:text-brand-red">
                  {c.name}
                </p>
                <p className="mt-0.5 text-xs text-ink/60">{c.phone}</p>
              </div>
              <span className="mt-3 inline-flex items-center text-[11px] font-semibold text-brand-blue group-hover:underline">
                Chat via WhatsApp →
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="mb-6 rounded-xl border border-ink/10 bg-ink/[0.02] p-4 text-xs leading-relaxed text-ink/60">
        <p>* {bookletChangeNotice}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {closing.hashtags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border-[1.5px] border-ink/20 px-3 py-1 text-xs font-medium text-ink/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
