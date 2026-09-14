export default function CTABanner() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-on-primary">
          Give them a place to actually speak Spanish
        </h2>
        <p className="mt-3 text-base text-on-primary/80 max-w-xl mx-auto">
          Try a free 25-minute class. We place your child in the 4 to 6,
          7 to 9, or 10 to 12 class.
        </p>
        <a
          href="#book"
          className="mt-8 inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-colors"
        >
          Try a free 25-minute class
        </a>
      </div>
    </section>
  );
}
