import {
  LuCalendar,
  LuGamepad2,
  LuMessageCircle,
  LuTarget,
} from "react-icons/lu";

const benefits = [
  {
    icon: LuTarget,
    title: "1‑on‑1 Attention",
    description:
      "Every class is tailored to your child's pace, interests, and learning style. No shared attention, no distractions.",
  },
  {
    icon: LuGamepad2,
    title: "Fun & Interactive",
    description:
      "Games, songs, stories, and hands‑on activities keep your child engaged and excited to learn more.",
  },
  {
    icon: LuCalendar,
    title: "Flexible Scheduling",
    description:
      "Choose class times that work for your family. Morning, afternoon, or evening — we adapt to you.",
  },
  {
    icon: LuMessageCircle,
    title: "Native‑Speaking Tutor",
    description:
      "Learn from a certified, native Spanish speaker with 8+ years of experience teaching children.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Why Parents Choose Us
          </h2>
          <p className="mt-3 text-base text-foreground/65 max-w-2xl mx-auto">
            We make learning Spanish easy, fun, and stress‑free — for kids{" "}
            <em>and</em> parents.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-background rounded-2xl p-8 text-center hover:shadow-md transition-shadow border border-border"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                <b.icon className="w-7 h-7" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {b.title}
              </h3>
              <p className="text-sm text-foreground/65 leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
