// Gerbang password sementara untuk /progress selama masih direview panitia.
// Hapus file ini, proxy.ts, dan app/progress/masuk/ kalau halaman sudah boleh publik.

export const PROGRESS_GATE_COOKIE = "gm_progress_akses";
export const PROGRESS_PASSWORD = process.env.PROGRESS_PASSWORD ?? "8888";
