import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.upsilon-toulouse.fr";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Upsilon Toulouse pour toute question, partenariat ou demande d'adhésion. Nous répondons dans les plus brefs délais.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact — Upsilon Toulouse",
    description:
      "Contactez Upsilon Toulouse pour toute question, partenariat ou demande d'adhésion.",
    url: `${SITE_URL}/contact`,
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
      name: "Contact",
      item: `${SITE_URL}/contact`,
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Page hero */}
      <section className="bg-indigo-700 text-white py-16 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
        <div className="max-w-3xl mx-auto">
          <nav aria-label="Fil d'Ariane" className="mb-4">
            <ol className="flex items-center gap-2 text-indigo-200 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-white font-medium" aria-current="page">Contact</li>
            </ol>
          </nav>
          <h1 id="contact-heading" className="text-4xl font-extrabold tracking-tight">
            Contactez-nous
          </h1>
          <p className="mt-4 text-lg text-indigo-100">
            Une question ? Envie de rejoindre l&apos;association ? Écrivez-nous !
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact info */}
        <section aria-labelledby="contact-info-heading">
          <h2 id="contact-info-heading" className="text-2xl font-bold text-gray-900 mb-6">
            Nos coordonnées
          </h2>
          <address className="not-italic space-y-4 text-gray-700">
            <p className="flex items-start gap-3">
              <span className="text-indigo-600 text-xl mt-0.5" aria-hidden="true">📍</span>
              <span>Toulouse, Haute-Garonne, France</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-indigo-600 text-xl mt-0.5" aria-hidden="true">✉️</span>
              <a
                href="mailto:contact@upsilon-toulouse.fr"
                className="text-indigo-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
              >
                contact@upsilon-toulouse.fr
              </a>
            </p>
          </address>

          <div className="mt-8">
            <h3 className="font-semibold text-gray-900 mb-3">Horaires de permanence</h3>
            <dl className="space-y-2 text-sm text-gray-700">
              <div className="flex justify-between">
                <dt>Lundi – Vendredi</dt>
                <dd>10h00 – 18h00</dd>
              </div>
              <div className="flex justify-between">
                <dt>Samedi</dt>
                <dd>Sur rendez-vous</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Contact form */}
        <section aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading" className="text-2xl font-bold text-gray-900 mb-6">
            Envoyez-nous un message
          </h2>
          <form
            action="mailto:contact@upsilon-toulouse.fr"
            method="POST"
            encType="text/plain"
            className="space-y-5"
            aria-label="Formulaire de contact"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom complet <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                autoComplete="name"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Adresse e-mail <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Sujet <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
                aria-required="true"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition resize-y"
                aria-required="true"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-700 text-white font-semibold py-3 rounded-lg hover:bg-indigo-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            >
              Envoyer le message
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
