"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What classes do you offer?",
    a: "Three, by age. Ages 4 to 6 are 25 minutes. Ages 7 to 9 are 30 to 35 minutes. Ages 10 to 12 are 45 minutes. Each one can be one-on-one or a small group.",
  },
  {
    q: "What ages do you teach?",
    a: "Ages 4 to 12, in those three classes. The free class is 25 minutes for everyone, then they join the class for their age.",
  },
  {
    q: "Does my child need to know Spanish already?",
    a: "No. The class is by age, not by level. Kids who are starting from zero, kids who understand more than they say, and kids who already speak some Spanish all go in the class for their age. We change the lesson to match.",
  },
  {
    q: "What happens in the free class?",
    a: "A 25-minute live lesson with Alejandra—not a test and not a sales consultation. She sees what your child understands and what they will say out loud. Afterward you get a progress summary, a recommended plan, and an enrollment link if you want it. There is no pressure to enroll. Book at least 24 hours ahead.",
  },
  {
    q: "Do you offer one-on-one and group classes?",
    a: "Yes. Private lessons are one child with Alejandra. Groups are small, and kids are matched by age and level. Same teacher each week. Families usually do one or two live classes a week. Pricing is on the pricing section.",
  },
  {
    q: "What video platform is used?",
    a: "Google Meet. You need a computer or tablet with a camera and a decent internet connection.",
  },
  {
    q: "Are lessons recorded?",
    a: "Only if you ask. We do not record by default.",
  },
  {
    q: "Can a parent sit in?",
    a: "Classes run on your device over Google Meet, so you can stay in the room.",
  },
  {
    q: "What information is collected about the child?",
    a: "We use their first name, age, and what you tell us about their Spanish so we can plan the first class and send you notes afterward.",
  },
  {
    q: "What safeguards are in place?",
    a: "Live classes on Google Meet, on your family's device. You can stay in the room. We only record if you ask. Your child works with the same teacher each week, and you get written notes after every class.",
  },
  {
    q: "What feedback do parents get?",
    a: "A note after every class covering how the student showed up (how they express themselves and their attitude), their work and participation, and what to practice next. You also get progress reports and a report at the end of the semester.",
  },
  {
    q: "What language is used in class?",
    a: "Spanish as much as possible. English when a child needs it so they do not get overwhelmed or shut down.",
  },
  {
    q: "What if we need to cancel?",
    a: "Reschedule or cancel with at least 3 hours notice and there is no charge.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-surface-muted">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Questions parents usually ask
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
                <span className="font-medium text-base text-foreground pr-4">
                  {faq.q}
                </span>
                <span
                  className={`text-primary text-xl transition-transform shrink-0 ${
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
