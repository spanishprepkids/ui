const steps = [
  {
    number: "1",
    title: "Book a free Spanish assessment",
    description:
      "Pick a time. It is 25 minutes and you do not need a card. Please book at least 24 hours ahead.",
  },
  {
    number: "2",
    title: "Your child meets Alejandra",
    description:
      "She sees what they understand, what they will say out loud, and what feels hard.",
  },
  {
    number: "3",
    title: "You get a plan",
    description:
      "Notes, a recommended age class (4 to 6, 7 to 9, or 10 to 12), one-on-one or group, and a link if you want to enroll.",
  },
];

const afterBooking = [
  {
    when: "Right after you book",
    what: "Confirmation, a short teacher intro, what to expect, and the class link.",
  },
  {
    when: "24 hours before",
    what: "A reminder so it does not sneak up on you.",
  },
  {
    when: "1 hour before",
    what: "Another reminder with the link again.",
  },
  {
    when: "Right after class",
    what: "A progress summary, a recommended plan, and the enrollment link.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            How it works
          </h2>
          <p className="mt-3 text-base text-foreground/65 leading-relaxed">
            The first session is a 25 minute assessment. Alejandra uses it to
            see where your child is, then we place them in the 4 to 6, 7 to 9,
            or 10 to 12 class.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-on-primary text-lg font-semibold mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-foreground/65 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-background p-8">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            What you get after you book
          </h3>
          <ol className="space-y-5">
            {afterBooking.map((item) => (
              <li key={item.when} className="sm:flex sm:gap-6">
                <p className="sm:w-44 shrink-0 text-sm font-medium text-foreground">
                  {item.when}
                </p>
                <p className="text-sm text-foreground/65 leading-relaxed">
                  {item.what}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
