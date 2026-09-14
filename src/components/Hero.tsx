import Image from "next/image";
import headshot from "@/assets/headshot1.png";

const trustItems = [
  "Same teacher every week",
  "Ages 4–12",
  "Free 25 minutes",
  "No credit card",
];

export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-20 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium text-xs uppercase tracking-[0.14em] mb-4">
              Live online Spanish with a teacher your child can keep
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.15] text-foreground">
              Your child speaks more Spanish.{" "}
              <span className="text-accent">You see the progress.</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-foreground/70 leading-relaxed max-w-lg">
              Ages 4–12 with Alejandra, a Mexican teacher who stays with your
              child every week. Every class includes speaking practice and a
              parent note with what to practice next.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#book"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary-dark text-on-primary font-semibold px-7 py-3.5 rounded-xl text-base transition-colors"
              >
                Try a free 25-minute class
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-on-primary font-semibold px-7 py-3.5 rounded-xl text-base transition-colors"
              >
                Meet Alejandra
              </a>
            </div>
            <p className="mt-4 text-sm text-foreground/50">
              A real class, not a sales call. Beginners welcome. 1:1 or a small
              group.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src={headshot}
                alt="Alejandra Gomez, Spanish teacher"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </div>
            <p className="mt-4 text-sm font-medium text-foreground">
              Alejandra Gomez
            </p>
            <p className="text-sm text-foreground/55">
              Mexican teacher · 8+ years with kids
            </p>
          </div>
        </div>

        <ul className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {trustItems.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-foreground text-center"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
