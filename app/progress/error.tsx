"use client";

import Link from "next/link";

// Hanya muncul kalau data progress gagal dimuat dan belum ada versi cache yang bisa disajikan.
export default function ProgressError({
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <div className="min-h-screen bg-cream px-4 py-16 text-ink">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
          Graduate Mentorship 2026
        </p>
        <h1 className="font-heading text-3xl font-bold uppercase tracking-tight">Progress Mentorship</h1>
        <p className="mt-4 text-ink/70">Data progress sedang tidak bisa dimuat. Coba lagi sebentar.</p>
        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="rounded-lg border-[1.5px] border-ink px-3 py-1.5 text-sm font-medium hover:bg-ink hover:text-cream"
          >
            Muat ulang
          </button>
          <Link href="/" className="rounded-lg px-3 py-1.5 text-sm font-medium text-ink/70 hover:text-ink">
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
