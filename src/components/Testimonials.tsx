const testimonials = [
  {
    quote:
      "Emma knew like five words when we started. Maybe six months later she was actually talking to her abuela on FaceTime, still mixing English in but trying. She asks when class is now which I did not expect. Alejandra is pretty gentle with her. Emma thinks they are just playing.",
    name: "Sarah M.",
    detail: "Mom of Emma, 7",
    stars: 5,
  },
  {
    quote:
      "Lucas hid the first time. He is 5. The 25 min class is about as long as he will sit and it works. He reminds me now, which is annoying in a good way. Classes are fun, he gets to talk a lot.",
    name: "David R.",
    detail: "Dad of Lucas, 5",
    stars: 5,
  },
  {
    quote:
      "Third tutor we tried. Sofia is 10 and checked out of the other two pretty fast. This one stuck. More talking, less busywork. She asked for an extra class last month. I said yes.",
    name: "Jennifer L.",
    detail: "Mom of Sofia, 10",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            From parents
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-background rounded-2xl p-8 shadow-sm border border-border"
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
