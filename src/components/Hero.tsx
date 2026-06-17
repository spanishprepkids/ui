import Image from "next/image";
import graphic from "@/assets/graphic.png";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium text-xs uppercase tracking-[0.14em] mb-4">
              Online Spanish Classes for Kids
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] text-foreground">
              Your Child Will{" "}
              <span className="text-accent">Love</span> Speaking Spanish!
            </h1>
            <p className="mt-5 text-base md:text-lg text-foreground/70 leading-relaxed max-w-lg">
              Fun, engaging 1‑on‑1 online Spanish classes designed for kids ages
              4–12. Taught by an experienced native‑speaking tutor who makes
              every lesson an adventure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-on-primary font-semibold px-7 py-3.5 rounded-xl text-base transition-colors shadow-sm"
              >
                Book a Free Trial Class
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-on-primary font-semibold px-7 py-3.5 rounded-xl text-base transition-colors"
              >
                See Pricing
              </a>
            </div>
            <p className="mt-4 text-sm text-foreground/50">
              ✓ No credit card required &nbsp; ✓ 25‑minute free trial
            </p>
          </div>

          <div className="flex items-center justify-center rounded-2xl overflow-hidden">
            <Image
              src={graphic}
              alt="Online Spanish class with a teacher and student"
              className="w-full max-w-md h-auto rounded-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
