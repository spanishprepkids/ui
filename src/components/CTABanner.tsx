export default function CTABanner() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Ready to Start Your Child&apos;s Spanish Journey?
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
          Book a free 25‑minute trial class today. No commitment, no credit card
          required.
        </p>
        <a
          href="#pricing"
          className="mt-8 inline-flex items-center justify-center bg-white text-primary-dark font-bold px-10 py-4 rounded-full text-lg hover:bg-warm-100 transition-colors shadow-lg"
        >
          Book Your Free Trial
        </a>
      </div>
    </section>
  );
}
