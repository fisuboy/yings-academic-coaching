"use client";

import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

type PrivacyInfoModalProps = {
  open: boolean;
  title: string;
  children: ReactNode;
  closeLabel: string;
  onClose: () => void;
};

export function PrivacyInfoModal({
  open,
  title,
  children,
  closeLabel,
  onClose
}: PrivacyInfoModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/45 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-info-modal-title"
      onClick={onClose}
    >
      <div
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-navy/10 bg-white p-6 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 id="privacy-info-modal-title" className="text-2xl font-semibold text-navy">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy transition-colors hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/15"
            aria-label={closeLabel}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5 space-y-5 text-sm leading-relaxed text-body sm:text-base">{children}</div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#b95e3e] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/30"
          >
            {closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
