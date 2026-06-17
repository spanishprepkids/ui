import Image from "next/image";
import { LuAward, LuGraduationCap, LuUsers } from "react-icons/lu";
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
                years of experience teaching children online. I hold a degree in
                Early Childhood Education and a DELE C2 certification.
              </p>
              <p>
                I believe that learning a language should be fun, natural, and
                full of joy. My lessons are packed with games, stories, songs,
                and real‑life conversations that make Spanish come alive for
                young learners.
              </p>
              <p>
                I&apos;ve helped over <strong className="font-semibold">200 kids</strong> from around the
                world fall in love with Spanish — and I can&apos;t wait to meet
                yours!
              </p>
            </div>
            <div className="mt-6 flex gap-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-surface-muted text-foreground px-4 py-2 rounded-xl border border-border">
                <LuGraduationCap className="w-4 h-4 text-primary" />
                B.Ed. Early Childhood
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-surface-muted text-foreground px-4 py-2 rounded-xl border border-border">
                <LuAward className="w-4 h-4 text-primary" />
                DELE C2
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-surface-muted text-foreground px-4 py-2 rounded-xl border border-border">
                <LuUsers className="w-4 h-4 text-primary" />
                200+ Students
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
