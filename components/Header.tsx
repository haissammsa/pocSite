"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Site name */}
          <Link
            href="/"
            className="text-xl font-bold text-indigo-700 hover:text-indigo-900 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
            aria-label="Upsilon Toulouse — Accueil"
          >
            Upsilon Toulouse
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Navigation principale" className="hidden md:flex gap-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors px-1 py-0.5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                  pathname === href
                    ? "text-indigo-700 underline underline-offset-4 decoration-2"
                    : "text-gray-700 hover:text-indigo-700"
                }`}
                aria-current={pathname === href ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="sr-only">{menuOpen ? "Fermer" : "Menu"}</span>
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Navigation mobile" className="md:hidden border-t border-gray-200 bg-white px-4 pb-4">
          <ul className="flex flex-col gap-2 pt-3">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block text-sm font-medium px-3 py-2 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${
                    pathname === href
                      ? "bg-indigo-50 text-indigo-700"
                      : "text-gray-700 hover:bg-gray-50 hover:text-indigo-700"
                  }`}
                  aria-current={pathname === href ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
