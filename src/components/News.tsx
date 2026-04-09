const news = [
  {
    date: "2025-03-15",
    dateLabel: "15 mars 2025",
    category: "Événement",
    categoryColor: "bg-purple-100 text-purple-700",
    title: "Forum emploi & stages — édition 2025",
    excerpt:
      "Plus de 30 entreprises toulousaines présentes pour rencontrer les étudiants en recherche de stage, d'alternance ou d'emploi. Inscription gratuite pour les membres.",
  },
  {
    date: "2025-02-28",
    dateLabel: "28 février 2025",
    category: "Hackathon",
    categoryColor: "bg-amber-100 text-amber-700",
    title: "Hackathon IA & Énergie — Résultats",
    excerpt:
      "Félicitations à l'équipe Solstice, lauréate de notre hackathon sur l'intelligence artificielle appliquée à la transition énergétique. 48h de créativité et de code !",
  },
  {
    date: "2025-02-10",
    dateLabel: "10 février 2025",
    category: "Vie associative",
    categoryColor: "bg-green-100 text-green-700",
    title: "Assemblée Générale 2025",
    excerpt:
      "Le nouveau bureau a été élu lors de notre Assemblée Générale annuelle. Retrouvez le bilan de l'année passée et les projets pour 2025.",
  },
  {
    date: "2025-01-20",
    dateLabel: "20 janvier 2025",
    category: "Partenariat",
    categoryColor: "bg-blue-100 text-blue-700",
    title: "Nouveau partenariat avec LabTech Toulouse",
    excerpt:
      "Upsilon s'associe avec LabTech Toulouse pour proposer des ateliers pratiques en data science et développement web ouverts à tous les membres.",
  },
];

export default function News() {
  return (
    <section
      id="actualites"
      aria-labelledby="news-heading"
      className="py-24 sm:py-32 bg-gray-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
            Actualités
          </p>
          <h2
            id="news-heading"
            className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Dernières nouvelles
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Restez informés de l&apos;actualité d&apos;Upsilon et des événements à venir.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
          {news.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between gap-4">
                <span
                  className={`rounded-full px-3 py-0.5 text-xs font-semibold ${item.categoryColor}`}
                >
                  {item.category}
                </span>
                <time
                  dateTime={item.date}
                  className="text-xs text-gray-400 whitespace-nowrap"
                >
                  {item.dateLabel}
                </time>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">{item.excerpt}</p>
              <a
                href="#contact"
                className="mt-4 text-sm font-medium text-purple-600 hover:text-purple-700 inline-flex items-center gap-1"
                aria-label={`En savoir plus sur ${item.title}`}
              >
                En savoir plus
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
