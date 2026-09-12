const classes = [
  {
    title: "Online Spanish for ages 4 to 6",
    duration: "25 minute classes",
    detail:
      "Short on purpose. Songs, games, first words, and talking out loud before they get restless. One-on-one or a small group.",
  },
  {
    title: "Online Spanish for ages 7 to 9",
    duration: "30 to 35 minute classes",
    detail:
      "A bit longer than the little-kid class. More conversation, some reading, still a lot of speaking. One-on-one or a small group.",
  },
  {
    title: "Online Spanish for ages 10 to 12",
    duration: "45 minute classes",
    detail:
      "Enough time for conversation, reading, and writing without turning into a long sit. One-on-one or a small group.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            The classes
          </h2>
          <p className="mt-3 text-base text-foreground/65 leading-relaxed">
            We offer three classes, split by age so the length and pace fit.
            Beginners, kids who understand more than they say, and kids who
            already speak some Spanish all go into the class for their age. We
            adjust the lesson from there.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {classes.map((item) => (
            <a
              key={item.title}
              href="#pricing"
              className="bg-background rounded-2xl p-7 border border-border hover:border-primary/40 transition-colors"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-primary mb-3">
                {item.duration}
              </p>
              <p className="text-sm text-foreground/65 leading-relaxed">
                {item.detail}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
