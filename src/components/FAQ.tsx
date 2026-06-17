"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What ages do you teach?",
    a: "I work with children ages 4 to 12. Lessons are adapted to each child's developmental stage and learning needs.",
  },
  {
    q: "What platform do you use for classes?",
    a: "Classes are held via Zoom. All you need is a computer or tablet with a camera and a stable internet connection.",
  },
  {
    q: "How long is each class?",
    a: "Each class is 25 minutes long — the ideal attention‑span window for young learners.",
  },
  {
    q: "What if we need to cancel a class?",
    a: "You can reschedule or cancel a class with at least 24 hours' notice at no charge.",
  },
  {
    q: "Does my child need to know any Spanish?",
    a: "Not at all! I teach complete beginners through advanced students. We'll start right where your child is.",
  },
  {
    q: "How do I book a free trial?",
    a: "Simply click the 'Book a Free Trial' button anywhere on this page, choose a time that works, and you're all set!",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-surface-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-surface rounded-xl border border-border overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-base text-foreground">{faq.q}</span>
                <span
                  className={`text-primary text-xl transition-transform ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-foreground/65 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
