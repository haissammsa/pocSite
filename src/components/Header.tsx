"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#activites", label: "Activités" },
  { href: "#equipe", label: "Équipe" },
  { href: "#actualites", label: "Actualités" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-purple-700 hover:text-purple-900 transition-colors"
          aria-label="Upsilon Toulouse — Accueil"
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-700 text-white text-lg font-extrabold"
            aria-hidden="true"
          >
            Υ
          </span>
          <span>Upsilon</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-purple-700 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-purple-700 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-800 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
        >
          Nous rejoindre
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden rounded-lg p-2 text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav id="mobile-menu" aria-label="Menu mobile" className="border-t border-purple-100 bg-white md:hidden">
          <ul className="flex flex-col px-4 pb-4 pt-2 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#contact"
                className="block rounded-full bg-purple-700 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-purple-800 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Nous rejoindre
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
