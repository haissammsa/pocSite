import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-24 sm:py-32"
    >
      {/* Background decorative circles */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-1.5 text-sm font-medium text-purple-200">
            <span className="mr-2 text-purple-300">✦</span>
            Association étudiante à Toulouse
          </div>

          <h1
            id="hero-heading"
            className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Bienvenue chez{" "}
            <span className="text-amber-400">Upsilon</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-purple-100 sm:text-xl">
            Une association étudiante dynamique qui accompagne les étudiants toulousains dans leur
            développement personnel, professionnel et culturel.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="#a-propos"
              className="inline-flex w-full items-center justify-center rounded-full bg-amber-400 px-8 py-3.5 text-base font-semibold text-gray-900 shadow-lg hover:bg-amber-300 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 sm:w-auto"
            >
              Découvrir Upsilon
            </Link>
            <Link
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-white/40 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors sm:w-auto"
            >
              Nous rejoindre
            </Link>
          </div>
        </div>

        {/* Stats */}
        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-px rounded-2xl bg-white/10 sm:grid-cols-3">
          {[
            { value: "200+", label: "Membres actifs" },
            { value: "10+", label: "Années d'existence" },
            { value: "50+", label: "Événements par an" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-6 py-8 text-center"
            >
              <dt className="text-sm font-medium text-purple-200">{stat.label}</dt>
              <dd className="mt-1 text-4xl font-bold text-white">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
