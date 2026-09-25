import type { Metadata } from "next";
import Link from "next/link";
import { masuk } from "./actions";

export const metadata: Metadata = {
  title: "Masuk — Progress Mentorship",
  robots: { index: false, follow: false },
};

export default async function MasukPage({
  searchParams,
}: {
  searchParams: Promise<{ salah?: string }>;
}) {
  const { salah } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4 text-ink">
      <form
        action={masuk}
        className="w-full max-w-sm rounded-xl border-[1.5px] border-ink/15 bg-white p-6"
      >
        <p className="mb-2 font-heading text-xs font-semibold uppercase tracking-[0.14em] text-brand-red">
          Graduate Mentorship 2026
        </p>
        <h1 className="font-heading text-2xl font-bold uppercase tracking-tight">Progress Mentorship</h1>
        <p className="mt-2 text-sm text-ink/60">Halaman ini masih direview panitia. Masukkan password.</p>

        <label htmlFor="password" className="mt-5 block text-sm font-medium">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          inputMode="numeric"
          autoComplete="off"
          autoFocus
          required
          aria-invalid={salah ? true : undefined}
          aria-describedby={salah ? "password-error" : undefined}
          className="mt-1.5 w-full rounded-lg border-[1.5px] border-ink/20 bg-cream/40 px-3 py-2 text-base outline-none focus:border-brand-blue"
        />
        {salah && (
          <p id="password-error" className="mt-2 text-sm text-brand-red">
            Password salah, coba lagi.
          </p>
        )}

        <button
          type="submit"
          className="mt-5 w-full rounded-lg bg-ink px-3 py-2 text-sm font-medium text-cream transition-opacity hover:opacity-90"
        >
          Masuk
        </button>
        <Link href="/" className="mt-3 block text-center text-sm text-ink/60 hover:text-ink">
          Kembali ke Beranda
        </Link>
      </form>
    </div>
  );
}
