"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQItem } from "@/types/content";
import { cn } from "@/lib/cn";

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-navy/10 bg-surface shadow-card"
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-navy transition-colors hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-navy/25"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                {item.question}
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-navy transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-all duration-200",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-muted">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
