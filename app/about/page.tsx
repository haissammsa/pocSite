import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.upsilon-toulouse.fr";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l'histoire d'Upsilon Toulouse, notre mission, nos valeurs et l'équipe qui fait vivre l'association au quotidien.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "À propos — Upsilon Toulouse",
    description:
      "Découvrez l'histoire d'Upsilon Toulouse, notre mission, nos valeurs et l'équipe qui anime l'association.",
    url: `${SITE_URL}/about`,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Accueil",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "À propos",
      item: `${SITE_URL}/about`,
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Page hero */}
      <section className="bg-indigo-700 text-white py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="about-heading">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Fil d'Ariane" className="mb-4">
            <ol className="flex items-center gap-2 text-indigo-200 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-white font-medium" aria-current="page">À propos</li>
            </ol>
          </nav>
          <h1 id="about-heading" className="text-4xl font-extrabold tracking-tight">
            À propos d&apos;Upsilon
          </h1>
          <p className="mt-4 text-lg text-indigo-100">
            Notre histoire, notre mission, nos valeurs.
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <section aria-labelledby="mission-heading">
          <h2 id="mission-heading" className="text-2xl font-bold text-gray-900 mb-4">
            Notre mission
          </h2>
          <p className="text-gray-700 leading-8">
            Upsilon Toulouse est une association étudiante créée pour fédérer et animer
            la vie étudiante à Toulouse. Notre mission est de créer un espace de rencontre,
            d&apos;échange et d&apos;entraide pour tous les étudiants, quelles que soient
            leur filière ou leur origine.
          </p>
        </section>

        <section aria-labelledby="values-heading">
          <h2 id="values-heading" className="text-2xl font-bold text-gray-900 mb-6">
            Nos valeurs
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6" role="list">
            {[
              {
                title: "Inclusivité",
                description: "Nous accueillons tous les profils, toutes les cultures et toutes les passions.",
              },
              {
                title: "Engagement",
                description: "Nous croyons en l'action concrète, au bénévolat et à l'impact positif.",
              },
              {
                title: "Convivialité",
                description: "Partager des moments de vie, se retrouver, rire et créer des souvenirs.",
              },
              {
                title: "Innovation",
                description: "Explorer de nouvelles idées et formats pour enrichir constamment nos activités.",
              },
            ].map(({ title, description }) => (
              <li key={title} className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                <h3 className="font-semibold text-indigo-800 mb-2">{title}</h3>
                <p className="text-gray-700 text-sm leading-6">{description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="team-heading">
          <h2 id="team-heading" className="text-2xl font-bold text-gray-900 mb-4">
            L&apos;équipe
          </h2>
          <p className="text-gray-700 leading-8">
            L&apos;association est gérée par un bureau élu chaque année composé d&apos;étudiants
            passionnés et investis. Chaque membre du bureau contribue bénévolement à faire
            vivre Upsilon au quotidien : organisation d&apos;événements, communication,
            partenariats et bien plus encore.
          </p>
        </section>

        <div className="text-center pt-4">
          <Link
            href="/contact"
            className="inline-block bg-indigo-700 text-white font-semibold px-8 py-4 rounded-full shadow hover:bg-indigo-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Nous rejoindre
          </Link>
        </div>
      </article>
    </>
  );
}
