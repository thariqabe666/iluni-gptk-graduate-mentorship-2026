"use client";

import { FolderOpen, ArrowUpRight, FileText, Presentation, Video, Users2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useAudience } from "@/components/audience-context";
import { filePlatform } from "@/lib/data";
import { cn } from "@/lib/utils";
import { FourPointStar, Burst } from "@/components/shapes";

const contentIcons = [FileText, Presentation, Video, Users2];

export function FilePlatformSection() {
  const { audience } = useAudience();
  const isMentee = audience === "mentee";

  const accentText = isMentee ? "text-brand-red" : "text-brand-blue";
  const accentBg = isMentee ? "bg-brand-red" : "bg-brand-blue";

  return (
    <section
      id="berkas"
      className="bg-cream py-20 sm:py-28 scroll-mt-16 border-b border-ink/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-3">
          <FourPointStar className={cn("w-4 h-4 transition-colors duration-300", accentText)} />
          <p
            className={cn(
              "font-heading text-xs font-bold uppercase tracking-[0.14em] transition-colors duration-300",
              accentText
            )}
          >
            {filePlatform.eyebrow}
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-ink leading-[0.98] mb-4">
          {filePlatform.title}
        </h2>
        <p className="text-ink/70 text-sm sm:text-base max-w-2xl mb-10">{filePlatform.desc}</p>

        {/* Bento Card */}
        <div className="rounded-3xl border-2 border-ink bg-ink p-6 sm:p-10 text-cream shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
          <Burst className="pointer-events-none absolute -right-16 -bottom-16 w-64 h-64 opacity-10 text-white" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            {/* Left: contents grid */}
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              {filePlatform.contents.map((item, i) => {
                const ItemIcon = contentIcons[i];
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-cream/20 bg-cream/5 p-4 flex items-start gap-3"
                  >
                    <span
                      className={cn(
                        "w-9 h-9 rounded-xl flex items-center justify-center shrink-0 text-white",
                        accentBg
                      )}
                    >
                      <ItemIcon size={16} />
                    </span>
                    <div>
                      <p className="font-heading font-bold text-sm uppercase text-cream leading-tight">
                        {item.title}
                      </p>
                      <p className="text-cream/70 text-xs mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right: CTA */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-center gap-3 lg:border-l lg:border-cream/15 lg:pl-8">
              <FolderOpen className={cn("w-10 h-10", accentText)} />
              <p className="text-cream/80 text-xs sm:text-sm text-left lg:text-center">
                Satu folder untuk seluruh mentor dan mentee — tidak perlu berpindah platform.
              </p>
              <a
                href={filePlatform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "rounded-2xl border-2 border-white/20 font-heading text-white font-bold text-sm px-7 h-12 shadow-lg transition-all duration-200 hover:scale-[1.02] w-full lg:w-auto justify-center",
                  accentBg
                )}
              >
                {filePlatform.cta}
                <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
