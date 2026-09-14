import Image from "next/image";
import { LuAward, LuGraduationCap } from "react-icons/lu";
import headshot from "@/assets/headshot1.png";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <Image
                src={headshot}
                alt="Alejandra Gomez, certified Spanish teacher"
                fill
                className="object-cover object-[center_22%]"
                sizes="(max-width: 768px) 288px, 320px"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              ¡Hola! I&apos;m Alejandra Gomez
            </h2>
            <p className="text-primary font-medium text-sm mb-5">
              Certified Spanish teacher. 8+ years with kids.
            </p>
            <div className="space-y-4 text-base text-foreground/70 leading-relaxed">
              <p>
                I&apos;m from Mexico. I have taught children in person and
                online for over 8 years, including the 4 to 6, 7 to 9, and 10
                to 12 classes here. I have a degree in English Literature and a
                certification in Teaching Spanish as a Second Language.
              </p>
              <p>
                Class is in Spanish as much as possible. If a child is lost or
                getting upset, I use English so they can keep going.
              </p>
              <p>
                After every class I send you notes: how they showed up that day,
                what they actually did, and what I would practice before the
                next one.
              </p>
              <p>
                <a
                  href="#book"
                  className="font-semibold text-primary hover:text-primary-dark transition-colors"
                >
                  Try a free 25-minute class
                </a>
              </p>
            </div>
            <div className="mt-6 flex gap-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-surface-muted text-foreground px-4 py-2 rounded-xl border border-border">
                <LuGraduationCap className="w-4 h-4 text-primary" />
                English Literature
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-surface-muted text-foreground px-4 py-2 rounded-xl border border-border">
                <LuAward className="w-4 h-4 text-primary" />
                Teaching Spanish as a Second Language
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
