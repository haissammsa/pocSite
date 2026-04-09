const team = [
  {
    name: "Président·e",
    role: "Bureau — Présidence",
    description: "Pilote la stratégie de l'association et représente Upsilon auprès des partenaires institutionnels.",
    initials: "PR",
    color: "bg-purple-700",
  },
  {
    name: "Vice-Président·e",
    role: "Bureau — Vice-présidence",
    description: "Assiste la présidence et coordonne les projets transversaux entre les différents pôles.",
    initials: "VP",
    color: "bg-indigo-700",
  },
  {
    name: "Trésorier·ère",
    role: "Bureau — Trésorerie",
    description: "Gère le budget de l'association, les partenariats financiers et les demandes de subventions.",
    initials: "TR",
    color: "bg-violet-700",
  },
  {
    name: "Secrétaire général·e",
    role: "Bureau — Secrétariat",
    description: "Organise les réunions, rédige les comptes-rendus et gère les adhésions des membres.",
    initials: "SG",
    color: "bg-fuchsia-700",
  },
  {
    name: "Responsable Communication",
    role: "Pôle Communication",
    description: "Anime les réseaux sociaux, crée les supports visuels et coordonne la communication externe.",
    initials: "COM",
    color: "bg-pink-700",
  },
  {
    name: "Responsable Événements",
    role: "Pôle Événements",
    description: "Planifie et organise l'ensemble des événements de l'association tout au long de l'année.",
    initials: "EVT",
    color: "bg-rose-700",
  },
];

export default function Team() {
  return (
    <section
      id="equipe"
      aria-labelledby="team-heading"
      className="py-24 sm:py-32 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
            Équipe
          </p>
          <h2
            id="team-heading"
            className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Notre bureau
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Des étudiants passionnés et investis qui font vivre Upsilon au quotidien.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="flex flex-col items-center rounded-2xl bg-gray-50 p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full ${member.color} text-lg font-bold text-white`}
                aria-hidden="true"
              >
                {member.initials}
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-purple-600">{member.role}</p>
              <p className="mt-3 text-sm leading-6 text-gray-500">{member.description}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-xl text-center text-sm text-gray-400">
          Tu souhaites t&apos;impliquer davantage dans la vie de l&apos;association ?{" "}
          <a href="#contact" className="font-medium text-purple-600 hover:text-purple-700 underline underline-offset-2">
            Contacte-nous
          </a>{" "}
          pour rejoindre un pôle.
        </p>
      </div>
    </section>
  );
}
