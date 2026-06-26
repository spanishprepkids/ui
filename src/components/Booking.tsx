const bookingUrl = process.env.NEXT_PUBLIC_GOOGLE_BOOKING_URL;

export default function Booking() {
  return (
    <section id="book" className="py-20 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
            Book Your Free Trial Class
          </h2>
          <p className="mt-3 text-base text-foreground/65 max-w-2xl mx-auto">
            Pick a time that works for your family. The trial is 25 minutes, no
            credit card required, and classes must be booked at least 24 hours in
            advance.
          </p>
        </div>

        {bookingUrl ? (
          <iframe
            src={bookingUrl}
            className="w-full rounded-2xl border border-border bg-surface"
            style={{ height: "700px", border: 0 }}
            title="Book a free trial class"
          />
        ) : (
          <div className="rounded-2xl border border-dashed border-border bg-surface-muted px-6 py-12 text-center">
            <p className="text-base font-medium text-foreground">
              Booking calendar coming soon
            </p>
            <p className="mt-2 text-sm text-foreground/60 max-w-md mx-auto">
              Add your Google Calendar appointment schedule URL to{" "}
              <code className="text-xs bg-surface px-1.5 py-0.5 rounded">
                NEXT_PUBLIC_GOOGLE_BOOKING_URL
              </code>{" "}
              in <code className="text-xs bg-surface px-1.5 py-0.5 rounded">.env.local</code>.
              See <code className="text-xs bg-surface px-1.5 py-0.5 rounded">.env.example</code>{" "}
              for setup steps.
            </p>
          </div>
        )}

        <p className="text-center mt-6 text-foreground/50 text-sm">
          Already booked? You can reschedule or cancel with at least 3 hours&apos;
          notice — see our{" "}
          <a href="#faq" className="text-primary hover:text-primary-dark transition-colors">
            FAQ
          </a>
          .
        </p>
      </div>
    </section>
  );
}
