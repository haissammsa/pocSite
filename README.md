# pocSite — Upsilon Toulouse

Site officiel de l'association étudiante **Upsilon Toulouse**, construit avec [Next.js 16](https://nextjs.org/) (TypeScript), Tailwind CSS 4, et optimisé pour le SEO.

## Stack technique

| Outil | Rôle |
|---|---|
| Next.js 16 (App Router) | Framework React avec SSG/SSR |
| TypeScript | Typage statique |
| Tailwind CSS 4 | Styles utilitaires |
| ESLint | Qualité du code |

## Structure

```
app/
  layout.tsx        — Layout global, métadonnées de base
  page.tsx          — Page d'accueil
  about/page.tsx    — Page "À propos"
  contact/page.tsx  — Page "Contact"
  sitemap.ts        — Sitemap XML automatique (/sitemap.xml)
  robots.ts         — robots.txt dynamique (/robots.txt)
components/
  Header.tsx        — Navigation responsive + accessibilité
  Footer.tsx        — Pied de page
  JsonLd.tsx        — Injection de données structurées (JSON-LD)
```

## SEO intégré

- **Metadata API** Next.js : `title`, `description`, `openGraph`, `twitter:card` par page
- **Canonical URLs** via `alternates.canonical`
- **Sitemap XML** généré automatiquement à `/sitemap.xml`
- **robots.txt** dynamique à `/robots.txt`
- **JSON-LD** : `Organization` sur l'accueil, `BreadcrumbList` sur les sous-pages
- **Balises sémantiques HTML5** : `<header>`, `<main>`, `<nav>`, `<footer>`, `<article>`, `<section>`
- **Accessibilité** : skip-to-content, attributs ARIA, navigation clavier
- **Sécurité** : headers HTTP (CSP, X-Frame-Options, X-Content-Type-Options, etc.)

## Développement

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # Build de production
npm run lint       # Vérification ESLint
```

## Variables d'environnement

| Variable | Description | Défaut |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canonique du site | `https://www.upsilon-toulouse.fr` |

Créer un fichier `.env.local` pour le développement local :

```env
NEXT_PUBLIC_SITE_URL=https://www.upsilon-toulouse.fr
```

## Déploiement (recommandé)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Connecter le repo GitHub à Vercel
2. Définir `NEXT_PUBLIC_SITE_URL=https://www.upsilon-toulouse.fr` dans les variables d'environnement Vercel
3. Déployer — Vercel détecte automatiquement Next.js
