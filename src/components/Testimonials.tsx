const testimonials = [
  {
    quote:
      "My daughter went from knowing zero Spanish to having full conversations in just 6 months. María is incredible with kids!",
    name: "Sarah M.",
    detail: "Mom of Emma, age 7",
    stars: 5,
  },
  {
    quote:
      "The classes are the highlight of my son's week. He runs to the computer every Tuesday and Thursday!",
    name: "David R.",
    detail: "Dad of Lucas, age 5",
    stars: 5,
  },
  {
    quote:
      "We've tried other tutors, but nobody compares. María makes learning feel like play. Sofia asks for extra classes!",
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
