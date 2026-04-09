import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site web de l'association Upsilon Toulouse.",
  robots: { index: false },
};

export default function MentionsLegalesPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900">Mentions légales</h1>

      <div className="prose prose-purple mt-8 text-gray-700 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Éditeur du site</h2>
          <p className="mt-2">
            <strong>Nom de l&apos;association :</strong> Upsilon Toulouse
            <br />
            <strong>Statut :</strong> Association loi 1901
            <br />
            <strong>Siège social :</strong> Toulouse, Haute-Garonne, France
            <br />
            <strong>Email :</strong>{" "}
            <a href="mailto:contact@upsilon-toulouse.fr" className="text-purple-600 hover:underline">
              contact@upsilon-toulouse.fr
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Hébergement</h2>
          <p className="mt-2">Ce site est hébergé par un prestataire d&apos;hébergement web professionnel.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Propriété intellectuelle</h2>
          <p className="mt-2">
            L&apos;ensemble des contenus présents sur ce site (textes, images, logo, etc.) sont la
            propriété exclusive d&apos;Upsilon Toulouse, sauf mention contraire. Toute reproduction,
            distribution ou utilisation sans autorisation préalable est interdite.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Responsabilité</h2>
          <p className="mt-2">
            Upsilon Toulouse s&apos;efforce d&apos;assurer l&apos;exactitude des informations
            publiées sur ce site. Toutefois, nous ne saurions être tenus responsables des erreurs,
            omissions ou des résultats qui pourraient être obtenus par l&apos;usage de ces
            informations.
          </p>
        </section>
      </div>
    </div>
  );
}
