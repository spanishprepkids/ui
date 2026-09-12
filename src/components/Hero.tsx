import Image from "next/image";
import graphic from "@/assets/graphic.png";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium text-xs uppercase tracking-[0.14em] mb-4">
              Online Spanish for ages 4 to 12
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] text-foreground">
              Give them a place to actually{" "}
              <span className="text-accent">speak</span> Spanish every week.
            </h1>
            <p className="mt-5 text-base md:text-lg text-foreground/70 leading-relaxed max-w-lg">
              Three classes, by age. 25 minutes for 4 to 6. 30 to 35 minutes for
              7 to 9. 45 minutes for 10 to 12. Same teacher. One-on-one or a
              small group.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#book"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-on-primary font-semibold px-7 py-3.5 rounded-xl text-base transition-colors shadow-sm"
              >
                Book Your Free Spanish Assessment
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-on-primary font-semibold px-7 py-3.5 rounded-xl text-base transition-colors"
              >
                See the classes
              </a>
            </div>
            <p className="mt-4 text-sm text-foreground/50">
              No credit card. 25 minutes. You get notes after class.
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
