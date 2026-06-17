const testimonials = [
  {
    quote:
      "Emma knew maybe five words in Spanish when we started. Six months later she's chatting with her abuela on FaceTime — and she actually asks to practice. Alejandra Gomez has such a gentle way with kids. Emma thinks she's just playing games every week.",
    name: "Sarah M.",
    detail: "Mom of Emma, age 7",
    stars: 5,
  },
  {
    quote:
      "Lucas used to hide when it was lesson time. Now he asks every morning if today is an Alejandra day. She remembers his dinosaur phase and his favorite colors — little things that make him feel seen. Alejandra Gomez turned something he dreaded into the best part of his week.",
    name: "David R.",
    detail: "Dad of Lucas, age 5",
    stars: 5,
  },
  {
    quote:
      "We tried two other tutors before we found Alejandra Gomez. Sofia was bored and resistant. With Alejandra, it clicked right away — songs, stories, no pressure. Now Sofia asks for extra classes. I didn't think that was possible.",
    name: "Jennifer L.",
    detail: "Mom of Sofia, age 10",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-warm-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            What Parents Are Saying
          </h2>
          <p className="mt-4 text-lg text-foreground/60">
            Don&apos;t just take our word for it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-warm-200/60"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-primary text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-foreground/50">{t.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
