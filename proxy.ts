import { NextResponse, type NextRequest } from "next/server";
import { PROGRESS_GATE_COOKIE, PROGRESS_PASSWORD } from "@/lib/progress-gate";

// Sementara: /progress hanya bisa dibuka setelah memasukkan password di /progress/masuk.
export function proxy(request: NextRequest) {
  if (request.cookies.get(PROGRESS_GATE_COOKIE)?.value === PROGRESS_PASSWORD) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/progress/masuk", request.url));
}

export const config = {
  matcher: "/progress",
};
