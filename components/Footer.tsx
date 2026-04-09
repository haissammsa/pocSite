import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Pied de page</h2>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-white font-bold text-lg">Upsilon Toulouse</p>
            <p className="mt-2 text-sm leading-6">
              Association étudiante basée à Toulouse, engagée dans la vie du campus
              et l&apos;épanouissement de ses membres.
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Liens rapides">
            <p className="text-white font-semibold mb-3">Navigation</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <p className="text-white font-semibold mb-3">Contact</p>
            <address className="not-italic text-sm space-y-1">
              <p>Toulouse, France</p>
              <p>
                <a
                  href="mailto:contact@upsilon-toulouse.fr"
                  className="hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded"
                >
                  contact@upsilon-toulouse.fr
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
          <p>© {currentYear} Upsilon Toulouse. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
