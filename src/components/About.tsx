import Image from "next/image";
import { LuAward, LuGraduationCap } from "react-icons/lu";
import headshot from "@/assets/headshot1.png";

export default function About() {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <Image
                src={headshot}
                alt="Alejandra Gomez, certified Spanish teacher"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 288px, 320px"
              />
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
              ¡Hola! I&apos;m Alejandra Gomez
            </h2>
            <p className="text-primary font-medium text-sm mb-5">
              Certified Spanish Teacher &bull; 8+ Years Experience
            </p>
            <div className="space-y-4 text-base text-foreground/70 leading-relaxed">
              <p>
                I&apos;m a certified Spanish teacher from Mexico with over 8
                years of experience teaching children both in person and online.
                I hold a degree in English Literature and am certified in
                Teaching Spanish as a Second Language.
              </p>
              <p>
                I believe that learning a language should be fun, natural, and
                full of joy. My lessons are packed with engaging games, fun
                stories, educational songs, and real-life conversations that
                bring Spanish to life for young learners.
              </p>
              <p>
                My goal is to help children build confidence, develop a love for
                languages, and communicate naturally in Spanish through
                interactive and engaging lessons.
              </p>
              <p className="font-semibold text-foreground">
                <a
                  href="#book"
                  className="text-primary hover:text-primary-dark transition-colors"
                >
                  🎉 Book your first class for free!
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
