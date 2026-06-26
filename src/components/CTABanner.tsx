export default function CTABanner() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-on-primary">
          Ready to Start Your Child&apos;s Spanish Journey?
        </h2>
        <p className="mt-3 text-base text-on-primary/80 max-w-xl mx-auto">
          See how your child responds in a free 25-minute trial with Alejandra
          — warm, low-pressure, and no credit card required.
        </p>
        <a
          href="#book"
          className="mt-8 inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-colors shadow-sm"
        >
          Book Your Free Trial
        </a>
      </div>
    </section>
  );
}
