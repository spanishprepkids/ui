const benefits = [
  {
    icon: "🎯",
    title: "1‑on‑1 Attention",
    description:
      "Every class is tailored to your child's pace, interests, and learning style. No shared attention, no distractions.",
  },
  {
    icon: "🎮",
    title: "Fun & Interactive",
    description:
      "Games, songs, stories, and hands‑on activities keep your child engaged and excited to learn more.",
  },
  {
    icon: "📅",
    title: "Flexible Scheduling",
    description:
      "Choose class times that work for your family. Morning, afternoon, or evening — we adapt to you.",
  },
  {
    icon: "🗣️",
    title: "Native‑Speaking Tutor",
    description:
      "Learn from a certified, native Spanish speaker with 8+ years of experience teaching children.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Why Parents Choose Us
          </h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            We make learning Spanish easy, fun, and stress‑free — for kids{" "}
            <em>and</em> parents.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-warm-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-warm-200/60"
            >
              <span className="text-5xl block mb-5">{b.icon}</span>
              <h3 className="text-lg font-bold text-foreground mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
