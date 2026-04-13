export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-warm-100 to-warm-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-primary-dark font-semibold text-sm uppercase tracking-wide mb-3">
              Online Spanish Classes for Kids
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              Your Child Will{" "}
              <span className="text-primary">Love</span> Speaking Spanish!
            </h1>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-lg">
              Fun, engaging 1‑on‑1 online Spanish classes designed for kids ages
              4–12. Taught by an experienced native‑speaking tutor who makes
              every lesson an adventure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full text-lg transition-colors shadow-lg shadow-primary/25"
              >
                Book a Free Trial Class
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center border-2 border-primary text-primary-dark hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-full text-lg transition-colors"
              >
                See Pricing
              </a>
            </div>
            <p className="mt-4 text-sm text-foreground/50">
              ✓ No credit card required &nbsp; ✓ 25‑minute free trial
            </p>
          </div>

          {/* Illustration placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md aspect-square rounded-3xl bg-warm-200/60 flex flex-col items-center justify-center gap-4 border-2 border-dashed border-warm-800/20">
              <span className="text-7xl">👩‍🏫</span>
              <span className="text-5xl">🧒🏽</span>
              <p className="text-warm-800/60 text-sm font-medium">
                Illustration / Photo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
