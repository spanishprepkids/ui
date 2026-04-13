export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-warm-200/60 flex items-center justify-center border-4 border-primary/30">
              <span className="text-8xl">👩‍🏫</span>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
              ¡Hola! I&apos;m María
            </h2>
            <p className="text-primary-dark font-semibold mb-6">
              Certified Spanish Teacher &bull; 8+ Years Experience
            </p>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                I&apos;m a certified Spanish teacher from Colombia with over 8
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
                I&apos;ve helped over <strong>200 kids</strong> from around the
                world fall in love with Spanish — and I can&apos;t wait to meet
                yours!
              </p>
            </div>
            <div className="mt-6 flex gap-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-warm-100 text-warm-800 px-4 py-2 rounded-full">
                🎓 B.Ed. Early Childhood
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-warm-100 text-warm-800 px-4 py-2 rounded-full">
                📜 DELE C2
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium bg-warm-100 text-warm-800 px-4 py-2 rounded-full">
                🌎 200+ Students
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
