import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/logo";
import { event } from "@/lib/data";
import {
  getProgress,
  summarize,
  TOTAL_CORE_SESSIONS,
  type GroupProgress,
  type Jalur,
} from "@/lib/progress";

// ISR: halaman dirender ulang paling cepat tiap 10 menit dari CSV publik tab "Ringkasan".
// Kalau fetch gagal saat revalidasi, Next tetap menyajikan versi terakhir yang berhasil.
export const revalidate = 600;

export const metadata: Metadata = {
  title: "Progress Mentorship — Graduate Mentorship 2026 | ILUNI GPTK FTUI",
  description:
    "Perkembangan sesi 20 kelompok mentoring Graduate Mentorship 2026, diperbarui otomatis dari laporan sesi kelompok.",
  openGraph: {
    title: "Progress Mentorship — Graduate Mentorship 2026",
    description: "Perkembangan sesi 20 kelompok mentoring, diperbarui otomatis.",
    type: "website",
  },
};

// Ramp sekuensial satu hue (brand blue): tahap 0 = belum mulai → 4 = tuntas.
const STAGE_FILL = ["#D9D7CB", "#BBCDEA", "#80A3DA", "#3B71C3", "#004AAD"];
const STAGE_LABEL = ["Belum mulai", "Sesi 1", "Sesi 2", "Sesi 3", "Sesi 4 (tuntas)"];

const BULAN = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
function tgl(iso: string | null) {
  if (!iso) return "";
  const [, m, d] = iso.split("-").map(Number);
  return `${d} ${BULAN[m - 1]}`;
}
function wib(date: Date) {
  return new Intl.DateTimeFormat("id-ID", {
    timeZone: "Asia/Jakarta",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export default async function ProgressPage() {
  const { groups, fetchedAt } = await getProgress();
  const s = summarize(groups);
  const byJalur = (j: Jalur) => groups.filter((g) => g.jalur === j);

  return (
    <div className="min-h-screen bg-cream text-ink">
      <ProgressHeader />

      <main className="mx-auto max-w-5xl space-y-12 px-4 py-8 sm:px-6 sm:py-12">
        {/* Judul */}
        <section>
          <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
            Graduate Mentorship 2026
          </p>
          <h1 className="font-heading text-3xl font-bold uppercase leading-[1.05] tracking-tight sm:text-4xl">
            Progress Mentorship
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70 sm:text-base">
            Rekap sesi kelompok dari laporan yang dikirim tiap kelompok setelah sesi selesai. Target
            program: minimal {TOTAL_CORE_SESSIONS} sesi per kelompok hingga 20 November 2026.
          </p>
          <p className="mt-2 text-xs text-ink/50">Diperbarui {wib(fetchedAt)} WIB</p>
        </section>

        {/* Angka ringkas */}
        <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Stat label="Kelompok sudah mulai" value={`${s.started}`} suffix={`/ ${s.totalGroups}`} />
          <Stat
            label="Sesi dilaporkan"
            value={`${s.totalSessions}`}
            suffix={`/ ${s.totalGroups * TOTAL_CORE_SESSIONS} target`}
          />
          <Stat
            label="Rata-rata kehadiran"
            value={s.avgAttendance === null ? "–" : `${s.avgAttendance}%`}
          />
          <Stat label="Mentee" value={`${s.totalMentee}`} suffix={`di ${s.totalGroups} kelompok`} />
        </section>

        {/* Tahap kelompok */}
        <section>
          <Heading eyebrow="Sebaran" title="Tahap kelompok" note="Sesi inti tertinggi yang sudah dilaporkan" />
          <div
            className="flex h-10 w-full gap-[2px] overflow-hidden rounded-lg"
            role="img"
            aria-label={s.stageCounts.map((n, i) => `${STAGE_LABEL[i]}: ${n}`).join(", ")}
          >
            {s.stageCounts.map((n, stage) =>
              n === 0 ? null : (
                <div
                  key={stage}
                  title={`${STAGE_LABEL[stage]}: ${n} kelompok`}
                  className="flex items-center justify-center font-heading text-xs font-bold transition-opacity hover:opacity-85"
                  style={{
                    width: `${(n / s.totalGroups) * 100}%`,
                    background: STAGE_FILL[stage],
                    color: stage >= 3 ? "#fff" : "#000",
                  }}
                >
                  {n}
                </div>
              ),
            )}
          </div>
          <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {s.stageCounts.map((n, stage) => (
              <li key={stage} className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-sm" style={{ background: STAGE_FILL[stage] }} />
                <span className="text-ink/75">{STAGE_LABEL[stage]}</span>
                <span className="font-semibold tabular-nums">{n}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Per kelompok */}
        {(["Growing", "Entering"] as Jalur[]).map((j) => (
          <section key={j}>
            <Heading
              eyebrow={j === "Growing" ? "Jalur G" : "Jalur E"}
              title={`Jalur ${j}`}
              note={
                j === "Growing"
                  ? "Untuk alumni yang sudah bekerja"
                  : "Untuk alumni yang sedang menuju dunia kerja"
              }
            />
            <div className="overflow-hidden rounded-xl border-[1.5px] border-ink/15 bg-white">
              <div className="hidden grid-cols-[3.5rem_1fr_repeat(4,4.75rem)_4.5rem] items-center gap-2 border-b border-ink/10 px-4 py-2.5 font-heading text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/50 sm:grid">
                <span>Kode</span>
                <span>Track</span>
                {[1, 2, 3, 4].map((n) => (
                  <span key={n} className="text-center">
                    Sesi {n}
                  </span>
                ))}
                <span className="text-right">Hadir</span>
              </div>
              {byJalur(j).map((g) => (
                <GroupRow key={g.kode} g={g} />
              ))}
            </div>
          </section>
        ))}

        {/* Pilar */}
        <section>
          <Heading
            eyebrow="Kurikulum"
            title="Pilar yang dibahas"
            note="Jumlah sesi yang menyentuh tiap pilar. Satu sesi bisa menyentuh lebih dari satu pilar."
          />
          <PillarBars
            items={[
              { label: "Read the Map", sub: "industri & ekosistem", n: s.pilar.readTheMap },
              { label: "Steer the Ship", sub: "kepemimpinan & profesionalisme", n: s.pilar.steerTheShip },
              { label: "Know Your Compass", sub: "pengembangan diri", n: s.pilar.knowYourCompass },
            ]}
          />
        </section>

        <p className="border-t border-ink/10 pt-6 text-xs leading-relaxed text-ink/55">
          Sumber: formulir Laporan Sesi Kelompok. Kelompok yang belum tercatat bisa jadi sudah
          bertemu tetapi belum mengirim laporan. Jangan lupa isi formulir setelah tiap sesi, ya.
        </p>
      </main>
    </div>
  );
}

function ProgressHeader() {
  return (
    <header className="border-b border-ink bg-cream">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <Logo className="shrink-0 border-ink" iconClassName="text-brand-red" size={30} />
          <span className="truncate font-heading text-xs font-bold uppercase tracking-[0.08em] text-ink">
            {event.org}
          </span>
        </Link>
        <Link
          href="/"
          className="flex shrink-0 items-center gap-1.5 rounded-lg border border-ink/15 px-2.5 py-1.5 text-xs font-medium text-ink/75 transition-colors hover:border-ink hover:bg-ink hover:text-cream sm:text-sm"
        >
          <ArrowLeft size={14} />
          <span className="hidden sm:inline">Kembali ke </span>Beranda
        </Link>
      </div>
    </header>
  );
}

function Heading({ eyebrow, title, note }: { eyebrow: string; title: string; note?: string }) {
  return (
    <div className="mb-5">
      <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
        {eyebrow}
      </p>
      <h2 className="font-heading text-xl font-bold uppercase leading-[1.05] tracking-tight sm:text-2xl">
        {title}
      </h2>
      {note && <p className="mt-1.5 text-sm text-ink/60">{note}</p>}
    </div>
  );
}

function Stat({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="rounded-xl border-[1.5px] border-ink/15 bg-white p-4">
      <p className="text-xs text-ink/60">{label}</p>
      <p className="mt-1 flex flex-wrap items-baseline gap-x-1 font-heading text-3xl font-bold tabular-nums tracking-tight">
        {value}
        {suffix && (
          <span className="whitespace-nowrap font-sans text-sm font-medium leading-tight text-ink/50">
            {suffix}
          </span>
        )}
      </p>
    </div>
  );
}

function SessionCell({ n, date }: { n: number; date: string | null }) {
  const done = date !== null;
  return (
    <div
      title={done ? `Sesi ${n}: ${tgl(date)}` : `Sesi ${n}: belum dilaporkan`}
      className={
        done
          ? "flex h-9 items-center justify-center rounded-md bg-brand-blue text-xs font-medium text-white"
          : "flex h-9 items-center justify-center rounded-md border-[1.5px] border-dashed border-ink/15 text-xs text-ink/40"
      }
    >
      <span className="mr-1 opacity-75 sm:hidden">S{n}</span>
      {done ? tgl(date) : "–"}
      <span className="sr-only">{done ? "" : "belum dilaporkan"}</span>
    </div>
  );
}

function GroupRow({ g }: { g: GroupProgress }) {
  return (
    <div className="grid grid-cols-[3rem_1fr] gap-x-2 gap-y-2 border-b border-ink/10 px-4 py-3 last:border-b-0 sm:grid-cols-[3.5rem_1fr_repeat(4,4.75rem)_4.5rem] sm:items-center">
      <span className="font-heading font-bold tabular-nums">{g.kode}</span>
      <span className="text-sm leading-snug">
        {g.track}
        {g.sesiTambahan > 0 && (
          <span className="ml-2 whitespace-nowrap rounded bg-brand-blue/10 px-1.5 py-0.5 text-[11px] font-medium text-brand-blue">
            +{g.sesiTambahan} sesi tambahan
          </span>
        )}
      </span>
      <div className="col-span-2 grid grid-cols-4 gap-2 sm:contents">
        {g.sesi.map((d, i) => (
          <SessionCell key={i} n={i + 1} date={d} />
        ))}
      </div>
      <span
        className={`col-span-2 text-sm tabular-nums sm:col-span-1 sm:text-right ${
          g.kehadiran === null ? "text-ink/40" : "text-ink"
        }`}
      >
        <span className="text-ink/50 sm:hidden">Kehadiran rata-rata: </span>
        {g.kehadiran === null ? "–" : `${g.kehadiran}%`}
      </span>
    </div>
  );
}

function PillarBars({ items }: { items: { label: string; sub: string; n: number }[] }) {
  const max = Math.max(1, ...items.map((i) => i.n));
  return (
    <div className="space-y-3">
      {items.map((it) => (
        <div
          key={it.label}
          className="grid grid-cols-[9.5rem_1fr_2.5rem] items-center gap-3 sm:grid-cols-[14rem_1fr_3rem]"
        >
          <div className="text-sm leading-tight">
            <p className="font-heading font-semibold">{it.label}</p>
            <p className="text-xs text-ink/55">{it.sub}</p>
          </div>
          <div className="h-3 rounded-full bg-ink/[0.07]" title={`${it.label}: ${it.n} sesi`}>
            <div className="h-3 rounded-full bg-brand-blue" style={{ width: `${(it.n / max) * 100}%` }} />
          </div>
          <span className="text-right text-sm font-semibold tabular-nums">{it.n}</span>
        </div>
      ))}
    </div>
  );
}
