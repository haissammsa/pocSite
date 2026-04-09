# Upsilon Toulouse — Site web

Site officiel de l'association étudiante **Upsilon Toulouse**, développé avec Next.js, TypeScript et Tailwind CSS.

## Stack technique

- **Framework** : [Next.js 16](https://nextjs.org/) (App Router)
- **Langage** : TypeScript
- **Styles** : [Tailwind CSS 4](https://tailwindcss.com/)
- **SEO** : Métadonnées structurées, JSON-LD, sitemap.xml, robots.txt

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Build de production

```bash
npm run build
npm run start
```

## Variables d'environnement

| Variable | Description | Valeur par défaut |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL de production du site | `https://www.upsilon-toulouse.fr` |

## Structure du projet

```
src/
├── app/
│   ├── layout.tsx           # Layout racine (métadonnées SEO, JSON-LD)
│   ├── page.tsx             # Page d'accueil
│   ├── sitemap.ts           # Génération du sitemap.xml
│   ├── robots.ts            # Génération du robots.txt
│   ├── mentions-legales/    # Page mentions légales
│   └── politique-confidentialite/
└── components/
    ├── Header.tsx           # Navigation responsive
    ├── Footer.tsx           # Pied de page
    ├── Hero.tsx             # Section hero
    ├── About.tsx            # À propos
    ├── Activities.tsx       # Activités
    ├── Team.tsx             # Équipe
    ├── News.tsx             # Actualités
    └── Contact.tsx          # Formulaire de contact
```
