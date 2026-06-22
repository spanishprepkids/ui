import { LuClipboardList, LuHand, LuRocket, LuUser, LuUsers } from "react-icons/lu";

const steps = [
  {
    number: "1",
    title: "Book a Free Trial",
    description:
      "Pick a time that works and sign up for a free 25‑minute trial class. It only takes a minute.",
    icon: LuClipboardList,
  },
  {
    number: "2",
    title: "Meet Your Tutor",
    description:
      "Your child will meet their tutor and enjoy a fun, zero‑pressure introductory lesson.",
    icon: LuHand,
  },
  {
    number: "3",
    title: "Start Learning!",
    description:
      "Choose a plan and begin weekly classes. Watch your child's confidence grow with every session.",
    icon: LuRocket,
  },
];

const lessonTypes = [
  {
    icon: LuUser,
    title: "1-on-1",
    description:
      "Customized lessons based on each student's interests, learning needs, and goals.",
  },
  {
    icon: LuUsers,
    title: "Group Classes",
    description:
      "Interactive lessons focused on developing communication skills and building confidence with children of a similar age and level.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-surface-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            How It Works
          </h2>
          <p className="mt-3 text-base text-foreground/65 max-w-2xl mx-auto">
            From your first free trial to weekly classes, getting started takes
            just three simple steps — built around your family&apos;s schedule.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-on-primary text-xl font-semibold mb-5">
                {step.number}
              </div>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-foreground/65 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {lessonTypes.map((lesson) => (
            <div
              key={lesson.title}
              className="bg-background rounded-2xl p-8 border border-border"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                <lesson.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {lesson.title}
              </h3>
              <p className="text-sm text-foreground/65 leading-relaxed">
                {lesson.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
