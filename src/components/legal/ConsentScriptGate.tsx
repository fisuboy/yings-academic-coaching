"use client";

import { ReactNode, useMemo } from "react";
import { canLoadCategory, ConsentCategory, readStoredConsent } from "@/lib/consent";

type ConsentScriptGateProps = {
  category: ConsentCategory;
  children: ReactNode;
  fallback?: ReactNode;
};

// Reusable wrapper for future third-party integrations.
// Example: analytics scripts, embeds, or widgets that should load only after consent.
export function ConsentScriptGate({ category, children, fallback = null }: ConsentScriptGateProps) {
  const consent = useMemo(() => readStoredConsent(), []);
  const allowed = canLoadCategory(consent, category);
  return <>{allowed ? children : fallback}</>;
}

