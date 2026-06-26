const testimonials = [
  {
    quote:
      "Emma knew maybe five words in Spanish when we started. Six months later she's chatting with her abuela on FaceTime — and she actually asks to practice. Teacher Alejandra has such a gentle way with kids. Emma thinks she's just playing games every week.",
    name: "Sarah M.",
    detail: "Mom of Emma, age 7",
    stars: 5,
  },
  {
    quote:
      "Lucas used to hide when it was lesson time. Now he asks every morning if today is time for Spanish class. Her classes are very fun and interactive that improves his creativity — Alejandra turned something he dreaded into the best part of his week.",
    name: "David R.",
    detail: "Dad of Lucas, age 5",
    stars: 5,
  },
  {
    quote:
      "We tried two other tutors before we found Alejandra. Sofia was bored and resistant. With Alejandra, it clicked right away — songs, stories, no pressure. Now, Sofia asks for extra classes.",
    name: "Jennifer L.",
    detail: "Mom of Sofia, age 10",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-surface-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            What Parents Are Saying
          </h2>
          <p className="mt-3 text-base text-foreground/65">
            Hear from parents who watched their children grow more confident in
            Spanish, one lesson at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-surface rounded-2xl p-8 shadow-sm border border-border"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-secondary text-lg">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-base text-foreground/75 leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-sm text-foreground/50">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
