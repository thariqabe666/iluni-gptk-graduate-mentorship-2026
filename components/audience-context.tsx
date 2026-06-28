"use client";

import { createContext, useContext } from "react";
import type { Audience } from "@/lib/data";

interface AudienceContextValue {
  audience: Audience;
  setAudience: (a: Audience) => void;
}

export const AudienceContext = createContext<AudienceContextValue>({
  audience: "mentee",
  setAudience: () => {},
});

export function useAudience() {
  return useContext(AudienceContext);
}
