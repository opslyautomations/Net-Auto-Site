"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl border overflow-hidden"
          style={{ borderColor: "#B1D1E7" }}
        >
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-base transition-colors"
            style={{
              backgroundColor: open === i ? "#0A1F3D" : "#ffffff",
              color: open === i ? "#ffffff" : "#0A1F3D",
            }}
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{faq.question}</span>
            <span
              className="ml-4 flex-shrink-0 text-xl transition-transform"
              style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
              aria-hidden="true"
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="px-6 py-4" style={{ backgroundColor: "#F4F6F9" }}>
              <p className="text-base leading-relaxed" style={{ color: "#0A1F3D" }}>
                {faq.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
