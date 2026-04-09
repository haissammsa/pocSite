import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et traitement des données personnelles d'Upsilon Toulouse.",
  robots: { index: false },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-gray-900">Politique de confidentialité</h1>

      <div className="mt-8 text-gray-700 space-y-8">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">Collecte des données</h2>
          <p className="mt-2">
            Upsilon Toulouse collecte uniquement les données personnelles que vous nous transmettez
            volontairement via le formulaire de contact (nom, prénom, adresse email, message).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Utilisation des données</h2>
          <p className="mt-2">
            Les données collectées sont utilisées exclusivement pour répondre à vos demandes et
            gérer les adhésions. Elles ne sont ni vendues, ni cédées à des tiers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Conservation des données</h2>
          <p className="mt-2">
            Vos données sont conservées pour une durée maximale de 3 ans à compter de votre
            dernière interaction avec l&apos;association.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Vos droits (RGPD)</h2>
          <p className="mt-2">
            Conformément au Règlement Général sur la Protection des Données (RGPD), vous
            disposez d&apos;un droit d&apos;accès, de rectification, de suppression et de
            portabilité de vos données. Pour exercer ces droits, contactez-nous à{" "}
            <a href="mailto:contact@upsilon-toulouse.fr" className="text-purple-600 hover:underline">
              contact@upsilon-toulouse.fr
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">Cookies</h2>
          <p className="mt-2">
            Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun
            cookie de traçage publicitaire n&apos;est utilisé.
          </p>
        </section>
      </div>
    </div>
  );
}
