import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.upsilon-toulouse.fr";

export const metadata: Metadata = {
  title: "Upsilon Toulouse — Association étudiante",
  description:
    "Upsilon est une association étudiante de Toulouse. Découvrez nos événements, nos activités et rejoignez une communauté engagée.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Upsilon Toulouse — Association étudiante",
    description:
      "Upsilon est une association étudiante de Toulouse. Découvrez nos événements, nos activités et rejoignez une communauté engagée.",
    url: SITE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Upsilon Toulouse",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Association étudiante basée à Toulouse, engagée dans la vie du campus et l'épanouissement de ses membres.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toulouse",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@upsilon-toulouse.fr",
    contactType: "customer service",
    availableLanguage: "French",
  },
  sameAs: [],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema} />

      {/* Hero */}
      <section
        className="relative bg-indigo-700 text-white py-24 px-4 sm:px-6 lg:px-8"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
          >
            Bienvenue chez&nbsp;
            <span className="text-indigo-200">Upsilon Toulouse</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-8 text-indigo-100 max-w-2xl mx-auto">
            Une association étudiante engagée, dynamique et ouverte à tous. Rejoignez-nous
            pour vivre des expériences inoubliables sur le campus toulousain.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-indigo-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-700"
            >
              En savoir plus
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-indigo-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-700"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
        aria-labelledby="features-heading"
      >
        <div className="max-w-6xl mx-auto">
          <h2
            id="features-heading"
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Ce que nous proposons
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
            {[
              {
                emoji: "🎉",
                title: "Événements",
                description:
                  "Soirées, tournois, sorties culturelles… Nous organisons des événements tout au long de l'année pour souder notre communauté.",
              },
              {
                emoji: "🤝",
                title: "Entraide",
                description:
                  "Partage de ressources, tutorat, conseils d'orientation — nous nous soutenons mutuellement dans nos parcours.",
              },
              {
                emoji: "🌍",
                title: "Engagement",
                description:
                  "Actions solidaires, projets citoyens et partenariats locaux pour un impact positif au-delà du campus.",
              },
            ].map(({ emoji, title, description }) => (
              <li
                key={title}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col gap-4"
              >
                <span className="text-4xl" role="img" aria-label={title}>
                  {emoji}
                </span>
                <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                <p className="text-gray-600 leading-7">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-50"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2
            id="cta-heading"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Rejoignez l&apos;aventure
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Que vous soyez étudiant(e) en première année ou en fin de cursus, il y a une
            place pour vous chez Upsilon.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-indigo-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-indigo-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          >
            Rejoindre l&apos;association
          </Link>
        </div>
      </section>
    </>
  );
}
