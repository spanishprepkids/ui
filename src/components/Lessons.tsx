import { LuUser, LuUsers } from "react-icons/lu";

const skills = [
  "Speaking and conversation",
  "Reading comprehension",
  "Writing",
  "Vocabulary",
  "Pronunciation",
  "Communication skills",
  "Confidence using Spanish",
];

const included = [
  "A clear sequence of lessons, not random topics each week",
  "One or two live classes a week",
  "Printables",
  "Notes for parents after class, plus progress reports",
  "Optional homework if you want it",
  "Speaking practice every session",
  "A report at the end of the semester",
  "Sibling plans if more than one kid wants to join",
];

export default function Lessons() {
  return (
    <section id="lessons" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Lessons designed for your child
          </h2>
          <p className="mt-3 text-base text-foreground/65 leading-relaxed">
            Inside the 4 to 6, 7 to 9, or 10 to 12 class, we work on the skills
            your child needs most. You pick one-on-one or a small group. Class
            times depend on what we have open (8am to 9pm, Monday to Friday, and
            Saturdays 10am to 1pm).
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground"
            >
              {skill}
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <div className="bg-surface rounded-2xl p-8 border border-border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <LuUser className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              One-on-one
            </h3>
            <p className="text-sm text-foreground/65 leading-relaxed">
              Private live lessons with the same teacher each week. We plan
              around your child&apos;s level, what they like, and what you want
              them to get better at.
            </p>
          </div>
          <div className="bg-surface rounded-2xl p-8 border border-border">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
              <LuUsers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Small groups
            </h3>
            <p className="text-sm text-foreground/65 leading-relaxed">
              Kids are grouped with others close in age and Spanish level. Same
              teacher each week, one or two classes a week.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-foreground mb-5">
            What you get
          </h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {included.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-foreground/70 leading-relaxed"
              >
                <span className="text-success shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
