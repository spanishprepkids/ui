type Package = {
  classes: number;
  total: number;
  perClass: number;
  badge?: "popular" | "best-value";
};

type AgeGroup = {
  label: string;
  duration: string;
  oneOnOne: Package[];
  group: Package[];
};

const ageGroups: AgeGroup[] = [
  {
    label: "Ages 4–6",
    duration: "25 minutes",
    oneOnOne: [
      { classes: 4, total: 56, perClass: 14 },
      { classes: 8, total: 96, perClass: 12, badge: "popular" },
      { classes: 12, total: 120, perClass: 10, badge: "best-value" },
    ],
    group: [
      { classes: 4, total: 44, perClass: 11 },
      { classes: 8, total: 72, perClass: 9, badge: "popular" },
    ],
  },
  {
    label: "Ages 7–9",
    duration: "45 minutes",
    oneOnOne: [
      { classes: 4, total: 80, perClass: 20 },
      { classes: 8, total: 144, perClass: 18, badge: "popular" },
      { classes: 12, total: 192, perClass: 16, badge: "best-value" },
    ],
    group: [
      { classes: 4, total: 60, perClass: 15 },
      { classes: 8, total: 104, perClass: 13, badge: "popular" },
    ],
  },
  {
    label: "Ages 10–12",
    duration: "60 minutes",
    oneOnOne: [
      { classes: 4, total: 88, perClass: 22 },
      { classes: 8, total: 160, perClass: 20, badge: "popular" },
      { classes: 12, total: 216, perClass: 18, badge: "best-value" },
    ],
    group: [
      { classes: 4, total: 72, perClass: 18 },
      { classes: 8, total: 128, perClass: 16, badge: "popular" },
    ],
  },
];

function PackageCard({ pkg }: { pkg: Package }) {
  const isHighlighted = pkg.badge === "popular";

  return (
    <div
      className={`rounded-2xl p-6 border-2 relative ${
        isHighlighted
          ? "border-accent bg-accent/5 shadow-md"
          : "border-border bg-background"
      }`}
    >
      {pkg.badge === "popular" && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-xl whitespace-nowrap">
          ⭐ Most Popular
        </span>
      )}
      {pkg.badge === "best-value" && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-xl whitespace-nowrap">
          Best Value
        </span>
      )}
      <p className="text-base font-semibold text-foreground">
        {pkg.classes} Classes
      </p>
      <div className="mt-3">
        <span className="text-2xl font-semibold text-foreground">
          ${pkg.total}
        </span>
        <span className="text-sm text-foreground/50 ml-1">total</span>
      </div>
      <p className="text-sm text-foreground/60 mt-1">
        ${pkg.perClass}/class
      </p>
      <a
        href="#book"
        className={`mt-5 block text-center font-semibold text-sm py-2.5 rounded-xl transition-colors ${
          isHighlighted
            ? "bg-primary hover:bg-primary-dark text-on-primary"
            : "bg-primary/10 hover:bg-primary/15 text-foreground"
        }`}
      >
        Get Started
      </a>
    </div>
  );
}

function PackageGroup({
  title,
  packages,
}: {
  title: string;
  packages: Package[];
}) {
  return (
    <div>
      <h4 className="text-base font-semibold text-foreground mb-4">{title}</h4>
      <div
        className={`grid gap-4 ${
          packages.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"
        }`}
      >
        {packages.map((pkg) => (
          <PackageCard key={`${title}-${pkg.classes}`} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-base text-foreground/65 max-w-2xl mx-auto">
            Clear pricing with materials included — no hidden fees, no
            contracts, and no pressure to commit before you&apos;re ready.
          </p>
        </div>

        <div className="space-y-14">
          {ageGroups.map((group) => (
            <div key={group.label}>
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  {group.label}{" "}
                  <span className="text-foreground/50 font-normal text-lg">
                    ({group.duration})
                  </span>
                </h3>
              </div>

              <div className="grid lg:grid-cols-2 gap-10">
                <PackageGroup title="1-on-1 Packages" packages={group.oneOnOne} />
                <PackageGroup title="Group Packages" packages={group.group} />
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-foreground/50 text-sm">
          First class is always <strong className="font-semibold">free</strong>{" "}
          — no credit card required.
        </p>
      </div>
    </section>
  );
}
