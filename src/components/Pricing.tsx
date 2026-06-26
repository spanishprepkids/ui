"use client";

import { useState } from "react";

type Package = {
  classes: number;
  total: number;
  perClass: number;
  recommended?: boolean;
};

type AgeGroup = {
  label: string;
  shortLabel: string;
  duration: string;
  oneOnOne: Package[];
  group: Package[];
};

const ageGroups: AgeGroup[] = [
  {
    label: "Ages 4–6",
    shortLabel: "4–6",
    duration: "25 minutes",
    oneOnOne: [
      { classes: 4, total: 56, perClass: 14 },
      { classes: 8, total: 96, perClass: 12, recommended: true },
      { classes: 12, total: 120, perClass: 10 },
    ],
    group: [
      { classes: 4, total: 44, perClass: 11 },
      { classes: 8, total: 72, perClass: 9, recommended: true },
    ],
  },
  {
    label: "Ages 7–9",
    shortLabel: "7–9",
    duration: "45 minutes",
    oneOnOne: [
      { classes: 4, total: 80, perClass: 20 },
      { classes: 8, total: 144, perClass: 18, recommended: true },
      { classes: 12, total: 192, perClass: 16 },
    ],
    group: [
      { classes: 4, total: 60, perClass: 15 },
      { classes: 8, total: 104, perClass: 13, recommended: true },
    ],
  },
  {
    label: "Ages 10–12",
    shortLabel: "10–12",
    duration: "60 minutes",
    oneOnOne: [
      { classes: 4, total: 88, perClass: 22 },
      { classes: 8, total: 160, perClass: 20, recommended: true },
      { classes: 12, total: 216, perClass: 18 },
    ],
    group: [
      { classes: 4, total: 72, perClass: 18 },
      { classes: 8, total: 128, perClass: 16, recommended: true },
    ],
  },
];

const included = [
  "All learning materials included",
  "Flexible scheduling, no contracts",
  "Progress updates for parents",
];

function PackageOption({ pkg }: { pkg: Package }) {
  return (
    <div
      className={`rounded-xl px-5 py-6 text-center ${
        pkg.recommended
          ? "bg-background border border-primary/30 shadow-sm ring-1 ring-primary/10"
          : "bg-background/60 border border-border"
      }`}
    >
      {pkg.recommended && (
        <p className="text-xs font-medium text-primary uppercase tracking-wide mb-3">
          Recommended
        </p>
      )}
      {!pkg.recommended && <div className="h-[18px] mb-3" aria-hidden />}
      <p className="text-sm text-foreground/60">
        {pkg.classes} {pkg.classes === 1 ? "class" : "classes"}
      </p>
      <p className="mt-2 text-3xl font-semibold text-foreground tracking-tight">
        ${pkg.total}
      </p>
      <p className="mt-1 text-sm text-foreground/50">
        ${pkg.perClass} per class
      </p>
    </div>
  );
}

export default function Pricing() {
  const [activeAgeIndex, setActiveAgeIndex] = useState(1);
  const [format, setFormat] = useState<"oneOnOne" | "group">("oneOnOne");

  const activeGroup = ageGroups[activeAgeIndex];
  const packages =
    format === "oneOnOne" ? activeGroup.oneOnOne : activeGroup.group;

  return (
    <section id="pricing" className="py-20 bg-surface">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 text-base text-foreground/65 max-w-xl mx-auto">
            Choose the age group and format that fits your child. All packages
            include materials — no hidden fees or long-term contracts.
          </p>
        </div>

        {/* Age tabs */}
        <div
          role="tablist"
          aria-label="Age groups"
          className="flex justify-center gap-1 p-1 bg-surface-muted rounded-xl max-w-md mx-auto"
        >
          {ageGroups.map((group, index) => (
            <button
              key={group.label}
              role="tab"
              aria-selected={activeAgeIndex === index}
              aria-controls="pricing-panel"
              id={`age-tab-${index}`}
              onClick={() => setActiveAgeIndex(index)}
              className={`flex-1 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                activeAgeIndex === index
                  ? "bg-background text-foreground shadow-sm"
                  : "text-foreground/55 hover:text-foreground/80"
              }`}
            >
              <span className="hidden sm:inline">{group.label}</span>
              <span className="sm:hidden">{group.shortLabel}</span>
            </button>
          ))}
        </div>

        <div
          id="pricing-panel"
          role="tabpanel"
          aria-labelledby={`age-tab-${activeAgeIndex}`}
          className="mt-8"
        >
          <p className="text-center text-sm text-foreground/55 mb-6">
            {activeGroup.duration} per session
          </p>

          {/* Format toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex gap-1 p-1 bg-surface-muted rounded-xl">
              <button
                onClick={() => setFormat("oneOnOne")}
                aria-pressed={format === "oneOnOne"}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  format === "oneOnOne"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-foreground/55 hover:text-foreground/80"
                }`}
              >
                1-on-1
              </button>
              <button
                onClick={() => setFormat("group")}
                aria-pressed={format === "group"}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  format === "group"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-foreground/55 hover:text-foreground/80"
                }`}
              >
                Small Group
              </button>
            </div>
          </div>

          {/* Package options */}
          <div
            className={`grid gap-4 ${
              packages.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2 max-w-lg mx-auto"
            }`}
          >
            {packages.map((pkg) => (
              <PackageOption key={pkg.classes} pkg={pkg} />
            ))}
          </div>

          {/* What's included */}
          <ul className="mt-8 flex flex-col sm:flex-row sm:flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground/55">
            {included.map((item) => (
              <li key={item} className="flex items-center justify-center gap-2">
                <span className="text-success shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* Single CTA */}
          <div className="mt-10 text-center">
            <a
              href="#book"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-on-primary font-semibold px-8 py-3.5 rounded-xl text-base transition-colors shadow-sm"
            >
              Book a Free Trial Class
            </a>
            <p className="mt-3 text-sm text-foreground/50">
              Try a class first — no credit card required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
