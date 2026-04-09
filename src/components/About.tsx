const values = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "Excellence académique",
    description:
      "Nous soutenons les étudiants dans leur parcours universitaire en proposant des ressources pédagogiques, du tutorat et des conférences thématiques.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Réseau professionnel",
    description:
      "Upsilon connecte ses membres avec des professionnels, des entreprises et d'anciens étudiants pour favoriser l'insertion professionnelle.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "Vie sociale & culturelle",
    description:
      "Des événements conviviaux tout au long de l'année — soirées, sorties culturelles, voyages — pour tisser des liens durables entre étudiants.",
  },
];

export default function About() {
  return (
    <section
      id="a-propos"
      aria-labelledby="about-heading"
      className="py-24 sm:py-32 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
            À propos
          </p>
          <h2
            id="about-heading"
            className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Qui sommes-nous ?
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Fondée il y a plus de dix ans, Upsilon Toulouse est une association à but non lucratif
            dédiée à l&apos;épanouissement étudiant sous toutes ses formes.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.title}
                className="relative rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-700">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Mission paragraph */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl bg-purple-50 p-8 text-center">
          <blockquote className="text-lg font-medium leading-8 text-purple-900">
            &ldquo;Notre mission est de faire de chaque étudiant toulousain un acteur engagé,
            épanoui et prêt à relever les défis de demain.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm text-purple-600 font-semibold">— Le Bureau d&apos;Upsilon Toulouse</p>
        </div>
      </div>
    </section>
  );
}
