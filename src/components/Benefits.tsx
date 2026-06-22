import {
  LuCalendarClock,
  LuLanguages,
  LuUser,
  LuUsers,
} from "react-icons/lu";

const benefits = [
  {
    icon: LuUser,
    title: "1‑on‑1 Attention",
    description:
      "Every class is tailored to your child's pace, interests, and learning style. No shared attention, no distractions.",
    iconBg: "bg-gradient-to-br from-accent/30 to-accent/10",
    iconColor: "text-accent-dark",
    ring: "ring-accent/25",
  },
  {
    icon: LuUsers,
    title: "Small Groups",
    description:
      "Fun & interactive games, conversation topics where your child feels confident sharing ideas by interacting with other kids of their age.",
    iconBg: "bg-gradient-to-br from-secondary/40 to-secondary/15",
    iconColor: "text-secondary-dark",
    ring: "ring-secondary/30",
  },
  {
    icon: LuCalendarClock,
    title: "Flexible Scheduling",
    description:
      "Choose class times that work for your family. Morning, afternoon, or evening — we adapt to you. Classes from 8am to 9pm Monday to Friday. Feel free to choose your class anytime!",
    iconBg: "bg-gradient-to-br from-success/30 to-success/10",
    iconColor: "text-primary-dark",
    ring: "ring-success/25",
  },
  {
    icon: LuLanguages,
    title: "Native‑Speaking Tutor",
    description:
      "Learn from a certified, native Spanish speaker with 8+ years of experience teaching children.",
    iconBg: "bg-gradient-to-br from-primary/25 to-primary/10",
    iconColor: "text-primary-dark",
    ring: "ring-primary/20",
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
            Personalized 1-on-1 lessons and small groups that feel natural for
            kids and reassuring for parents.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="bg-background rounded-2xl p-8 text-center hover:shadow-md transition-shadow border border-border"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${b.iconBg} ${b.iconColor} ring-2 ${b.ring} mb-5 shadow-sm`}
              >
                <b.icon className="w-8 h-8" strokeWidth={2.25} />
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
