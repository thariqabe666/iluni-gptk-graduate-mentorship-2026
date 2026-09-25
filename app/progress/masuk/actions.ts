"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PROGRESS_GATE_COOKIE, PROGRESS_PASSWORD } from "@/lib/progress-gate";

export async function masuk(formData: FormData) {
  if (formData.get("password") !== PROGRESS_PASSWORD) {
    redirect("/progress/masuk?salah=1");
  }
  const cookieStore = await cookies();
  cookieStore.set(PROGRESS_GATE_COOKIE, PROGRESS_PASSWORD, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  redirect("/progress");
}
