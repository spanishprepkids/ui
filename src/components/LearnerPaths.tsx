const paths = [
  {
    title: "Starting from zero",
    quote: "I want a useful lifelong skill, not another passive app.",
    body: "Short live classes built around speaking, with a parent note after every session so progress is visible at home.",
  },
  {
    title: "Understands, rarely speaks",
    quote: "My child understands family, but will not answer in Spanish.",
    body: "A familiar teacher who stays week to week, so speaking feels safer than performing for a new face each class.",
  },
  {
    title: "Needs steady practice",
    quote: "I need a reliable cadence and a record of what we covered.",
    body: "One or two live classes a week, a clear lesson sequence, and notes you can keep—not a one-off activity.",
  },
];

export default function LearnerPaths() {
  return (
    <section className="py-16 bg-surface border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Which situation sounds like yours?
          </h2>
          <p className="mt-3 text-base text-foreground/65 leading-relaxed">
            Age tells us the class length. These are the reasons parents usually
            book.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {paths.map((path) => (
            <div
              key={path.title}
              className="bg-background rounded-2xl p-7 border border-border"
            >
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {path.title}
              </h3>
              <p className="text-sm font-medium text-foreground/80 leading-relaxed mb-3">
                “{path.quote}”
              </p>
              <p className="text-sm text-foreground/65 leading-relaxed">
                {path.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
