const activities = [
  {
    emoji: "🎓",
    category: "Académique",
    title: "Tutorat & Soutien scolaire",
    description:
      "Des séances de tutorat hebdomadaires par des étudiants avancés pour aider ceux qui rencontrent des difficultés dans leurs cours.",
    tags: ["Mathématiques", "Physique", "Informatique"],
  },
  {
    emoji: "💼",
    category: "Professionnel",
    title: "Forum emploi & stages",
    description:
      "Un forum annuel réunissant entreprises locales et étudiants pour faciliter les rencontres et décrocher stage ou premier emploi.",
    tags: ["Networking", "CV", "Entretiens"],
  },
  {
    emoji: "🚀",
    category: "Innovation",
    title: "Hackathons & projets",
    description:
      "Participez à nos hackathons mensuels et concrétisez vos idées en équipe dans une ambiance stimulante et bienveillante.",
    tags: ["Tech", "Entrepreneuriat", "Créativité"],
  },
  {
    emoji: "🎭",
    category: "Culture",
    title: "Sorties & événements culturels",
    description:
      "Théâtre, musées, concerts, cinéma… Upsilon organise des sorties culturelles accessibles à prix réduit pour ses membres.",
    tags: ["Toulouse", "Découverte", "Partage"],
  },
  {
    emoji: "🏃",
    category: "Sport",
    title: "Activités sportives",
    description:
      "Tournois de sport, randonnées, sessions bien-être… Pour garder un équilibre entre études et vie personnelle.",
    tags: ["Sport", "Bien-être", "Équipe"],
  },
  {
    emoji: "🌍",
    category: "International",
    title: "Mobilité & échanges",
    description:
      "Accompagnement des étudiants dans leurs projets Erasmus et internationaux, partage d'expériences, préparation au départ.",
    tags: ["Erasmus", "Voyages", "Langues"],
  },
];

export default function Activities() {
  return (
    <section
      id="activites"
      aria-labelledby="activities-heading"
      className="py-24 sm:py-32 bg-gray-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
            Activités
          </p>
          <h2
            id="activities-heading"
            className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Ce que nous proposons
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Des actions variées pour s&apos;épanouir, se former et créer des liens tout au long de
            l&apos;année universitaire.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <article
              key={activity.title}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 hover:shadow-md hover:ring-purple-200 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl" role="img" aria-label={activity.category}>
                  {activity.emoji}
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-0.5 text-xs font-semibold text-purple-700">
                  {activity.category}
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{activity.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6 text-gray-600">{activity.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {activity.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
