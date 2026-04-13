const steps = [
  {
    number: "1",
    title: "Book a Free Trial",
    description:
      "Pick a time that works and sign up for a free 25‑minute trial class. It only takes a minute.",
    icon: "📋",
  },
  {
    number: "2",
    title: "Meet Your Tutor",
    description:
      "Your child will meet their tutor and enjoy a fun, zero‑pressure introductory lesson.",
    icon: "👋",
  },
  {
    number: "3",
    title: "Start Learning!",
    description:
      "Choose a plan and begin weekly classes. Watch your child's confidence grow with every session.",
    icon: "🚀",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-warm-100/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            Getting started is simple — three easy steps and your child is on
            their way to bilingualism.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-2xl font-extrabold mb-5">
                {step.number}
              </div>
              <span className="block text-4xl mb-3">{step.icon}</span>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-foreground/60 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
