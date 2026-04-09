"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    // Simulate async submission (replace with actual API call)
    await new Promise((r) => setTimeout(r, 1000));
    setFormState("success");
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 sm:py-32 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Contactez-nous
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Une question, une envie de rejoindre l&apos;équipe ou un projet de partenariat ?
            Nous serons ravis de vous répondre.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Nos coordonnées</h3>
            <dl className="mt-6 space-y-6 text-sm text-gray-600">
              <div className="flex gap-4">
                <dt>
                  <span className="sr-only">Adresse</span>
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </dt>
                <dd>
                  Toulouse, Haute-Garonne
                  <br />
                  France
                </dd>
              </div>
              <div className="flex gap-4">
                <dt>
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </dt>
                <dd>
                  <a
                    href="mailto:contact@upsilon-toulouse.fr"
                    className="text-purple-600 hover:text-purple-700 underline underline-offset-2"
                  >
                    contact@upsilon-toulouse.fr
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10 rounded-2xl bg-purple-50 p-6">
              <h4 className="font-semibold text-purple-900">Rejoindre l&apos;association</h4>
              <p className="mt-2 text-sm text-purple-700 leading-6">
                Les adhésions sont ouvertes tout au long de l&apos;année. Remplis le formulaire
                ci-contre ou envoie-nous un email pour obtenir toutes les informations sur
                l&apos;adhésion.
              </p>
            </div>
          </div>

          {/* Form */}
          {formState === "success" ? (
            <div className="flex flex-col items-center justify-center rounded-2xl bg-green-50 p-10 text-center">
              <svg className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
              </svg>
              <h3 className="mt-4 text-lg font-semibold text-green-900">Message envoyé !</h3>
              <p className="mt-2 text-sm text-green-700">
                Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
              </p>
              <button
                type="button"
                onClick={() => setFormState("idle")}
                className="mt-6 text-sm font-medium text-green-700 underline underline-offset-2 hover:text-green-900"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-medium text-gray-700">
                    Prénom <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    required
                    autoComplete="given-name"
                    className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
                    Nom <span aria-hidden="true" className="text-red-500">*</span>
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    autoComplete="family-name"
                    className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Adresse email <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none"
                  placeholder="vous@exemple.com"
                />
              </div>

              <div>
                <label htmlFor="sujet" className="block text-sm font-medium text-gray-700">
                  Sujet
                </label>
                <select
                  id="sujet"
                  name="sujet"
                  className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none bg-white"
                >
                  <option value="">Sélectionner un sujet</option>
                  <option value="adhesion">Adhésion à l&apos;association</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="evenement">Événements</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message <span aria-hidden="true" className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 block w-full rounded-xl border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:outline-none resize-y"
                  placeholder="Votre message…"
                />
              </div>

              {formState === "error" && (
                <p role="alert" className="text-sm text-red-600">
                  Une erreur s&apos;est produite. Veuillez réessayer.
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="inline-flex w-full items-center justify-center rounded-full bg-purple-700 px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {formState === "submitting" ? (
                  <>
                    <svg className="mr-2 h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Envoi en cours…
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
