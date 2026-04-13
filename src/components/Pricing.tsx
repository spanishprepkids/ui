const plans = [
  {
    name: "Single Class",
    price: 25,
    per: "/ class",
    description: "Perfect for trying us out",
    features: [
      "1 × 25‑minute class",
      "Personalized lesson plan",
      "Class materials included",
    ],
    popular: false,
  },
  {
    name: "4‑Class Pack",
    price: 22,
    per: "/ class",
    total: 88,
    description: "Most flexible",
    features: [
      "4 × 25‑minute classes",
      "Personalized lesson plan",
      "Class materials included",
      "Progress report",
    ],
    popular: true,
  },
  {
    name: "8‑Class Pack",
    price: 19,
    per: "/ class",
    total: 152,
    description: "Best value",
    features: [
      "8 × 25‑minute classes",
      "Personalized lesson plan",
      "Class materials included",
      "Monthly progress report",
      "Priority scheduling",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-foreground/60 max-w-2xl mx-auto">
            No hidden fees, no contracts. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border-2 relative ${
                plan.popular
                  ? "border-primary bg-primary/5 shadow-xl shadow-primary/10"
                  : "border-warm-200 bg-warm-50"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
              <p className="text-sm text-foreground/50 mt-1">
                {plan.description}
              </p>
              <div className="mt-6 mb-6">
                <span className="text-4xl font-extrabold text-foreground">
                  ${plan.price}
                </span>
                <span className="text-foreground/50 ml-1">{plan.per}</span>
                {plan.total && (
                  <p className="text-sm text-foreground/40 mt-1">
                    ${plan.total} total
                  </p>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-foreground/70"
                  >
                    <span className="text-secondary mt-0.5">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`block text-center font-bold py-3 rounded-full transition-colors ${
                  plan.popular
                    ? "bg-primary hover:bg-primary-dark text-white"
                    : "bg-foreground/10 hover:bg-foreground/20 text-foreground"
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-foreground/50 text-sm">
          🎁 First class is always <strong>free</strong> — no credit card
          required.
        </p>
      </div>
    </section>
  );
}
