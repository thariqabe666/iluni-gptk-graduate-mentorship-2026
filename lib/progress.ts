// Data layer untuk halaman /progress.
// Sumber: tab "Ringkasan" di spreadsheet "GM2026 Progress Publik",
// dipublish ke web sebagai CSV (hanya tab itu yang publik).

export const PROGRESS_CSV_URL =
  process.env.PROGRESS_CSV_URL ??
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vRMgtj0rDxHwlG7SMwWFHDeKDmVlWnI7iUUptshySbCn9-ZJx_C4Le3xRqFYO12S8bo8jFRFrpiXqCf/pub?gid=1117151836&single=true&output=csv";

export const TOTAL_CORE_SESSIONS = 4;

export type Jalur = "Growing" | "Entering";

export type GroupProgress = {
  kode: string;
  jalur: Jalur;
  track: string;
  jmlMentee: number;
  /** Tanggal pelaksanaan (YYYY-MM-DD) per sesi inti 1..4; null = belum dilaporkan */
  sesi: (string | null)[];
  sesiTambahan: number;
  sesiDilaporkan: number;
  /** Sesi inti tertinggi yang sudah dilaporkan (0 = belum mulai) */
  tahap: number;
  /** Rata-rata kehadiran mentee, 0–100; null = belum ada data */
  kehadiran: number | null;
  laporanTerakhir: string | null;
  pilar: { readTheMap: number; steerTheShip: number; knowYourCompass: number };
};

/** Parser CSV kecil (RFC 4180: kutip ganda, koma & newline di dalam kutip). */
export function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else inQuotes = false;
      } else field += ch;
    } else if (ch === '"') inQuotes = true;
    else if (ch === ",") {
      row.push(field);
      field = "";
    } else if (ch === "\n" || ch === "\r") {
      if (ch === "\r" && text[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else field += ch;
  }
  if (field !== "" || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows.filter((r) => r.some((c) => c.trim() !== ""));
}

/** Sel kosong = 0; sel berisi tapi bukan angka → error, supaya data rusak tidak tampil sebagai 0. */
const num = (v: string | undefined, kolom: string, kode: string) => {
  const s = (v ?? "").trim();
  if (s === "") return 0;
  const n = Number(s);
  if (!Number.isFinite(n)) {
    throw new Error(`Kolom "${kolom}" kelompok ${kode} bukan angka: "${s}"`);
  }
  return n;
};
const optNum = (v: string | undefined, kolom: string, kode: string) =>
  (v ?? "").trim() === "" ? null : num(v, kolom, kode);
const JALUR: Jalur[] = ["Growing", "Entering"];
const jalur = (v: string | undefined, kode: string): Jalur => {
  const s = (v ?? "").trim();
  const j = JALUR.find((x) => x.toLowerCase() === s.toLowerCase());
  if (!j) throw new Error(`Kolom "Jalur" kelompok ${kode} tidak dikenal: "${s}"`);
  return j;
};
const optStr = (v: string | undefined) => ((v ?? "").trim() === "" ? null : v!.trim());

/** Petakan baris CSV ke objek pakai nama header, jadi aman kalau urutan kolom berubah. */
export function toGroups(rows: string[][]): GroupProgress[] {
  const [header, ...body] = rows;
  const idx = (name: string) => {
    const i = header.findIndex((h) => h.trim().toLowerCase() === name.toLowerCase());
    if (i === -1) throw new Error(`Kolom "${name}" tidak ada di CSV Ringkasan`);
    return i;
  };
  const c = {
    kode: idx("Kode"),
    jalur: idx("Jalur"),
    track: idx("Track"),
    jml: idx("Jml Mentee"),
    s: [1, 2, 3, 4].map((n) => idx(`Sesi ${n}`)),
    tambahan: idx("Sesi Tambahan"),
    dilaporkan: idx("Sesi Dilaporkan"),
    tahap: idx("Tahap"),
    hadir: idx("Kehadiran %"),
    terakhir: idx("Laporan Terakhir"),
    map: idx("Read the Map"),
    ship: idx("Steer the Ship"),
    compass: idx("Know Your Compass"),
  };
  return body
    .filter((r) => (r[c.kode] ?? "").trim() !== "")
    .map((r) => {
      const kode = r[c.kode].trim();
      return {
        kode,
        jalur: jalur(r[c.jalur], kode),
        track: r[c.track].trim(),
        jmlMentee: num(r[c.jml], "Jml Mentee", kode),
        sesi: c.s.map((i) => optStr(r[i])),
        sesiTambahan: num(r[c.tambahan], "Sesi Tambahan", kode),
        sesiDilaporkan: num(r[c.dilaporkan], "Sesi Dilaporkan", kode),
        tahap: num(r[c.tahap], "Tahap", kode),
        kehadiran: optNum(r[c.hadir], "Kehadiran %", kode),
        laporanTerakhir: optStr(r[c.terakhir]),
        pilar: {
          readTheMap: num(r[c.map], "Read the Map", kode),
          steerTheShip: num(r[c.ship], "Steer the Ship", kode),
          knowYourCompass: num(r[c.compass], "Know Your Compass", kode),
        },
      };
    });
}

export async function getProgress(): Promise<{ groups: GroupProgress[]; fetchedAt: Date }> {
  const res = await fetch(PROGRESS_CSV_URL, { next: { revalidate: 600 } });
  if (!res.ok) throw new Error(`Gagal ambil CSV progress: HTTP ${res.status}`);
  const text = await res.text();
  if (text.trimStart().startsWith("<")) {
    throw new Error("CSV progress mengembalikan HTML — cek apakah tab Ringkasan masih dipublish");
  }
  const groups = toGroups(parseCsv(text));
  // Lempar error (bukan tampilkan halaman kosong) supaya ISR tetap menyajikan versi terakhir yang valid.
  if (groups.length === 0) throw new Error("CSV progress kosong");
  return { groups, fetchedAt: new Date() };
}

export function summarize(groups: GroupProgress[]) {
  const stageCounts = Array.from({ length: TOTAL_CORE_SESSIONS + 1 }, (_, stage) =>
    groups.filter((g) => g.tahap === stage).length,
  );
  const withAttendance = groups.filter((g) => g.kehadiran !== null);
  const avgAttendance = withAttendance.length
    ? Math.round(withAttendance.reduce((s, g) => s + (g.kehadiran ?? 0), 0) / withAttendance.length)
    : null;
  return {
    totalGroups: groups.length,
    started: groups.filter((g) => g.tahap > 0).length,
    totalSessions: groups.reduce((s, g) => s + g.sesiDilaporkan + g.sesiTambahan, 0),
    totalMentee: groups.reduce((s, g) => s + g.jmlMentee, 0),
    avgAttendance,
    stageCounts,
    pilar: {
      readTheMap: groups.reduce((s, g) => s + g.pilar.readTheMap, 0),
      steerTheShip: groups.reduce((s, g) => s + g.pilar.steerTheShip, 0),
      knowYourCompass: groups.reduce((s, g) => s + g.pilar.knowYourCompass, 0),
    },
  };
}
