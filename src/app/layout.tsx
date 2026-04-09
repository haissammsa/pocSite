import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.upsilon-toulouse.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Upsilon Toulouse — Association étudiante",
    template: "%s | Upsilon Toulouse",
  },
  description:
    "Upsilon Toulouse est une association étudiante dynamique qui accompagne les étudiants dans leur vie universitaire, professionnelle et culturelle à Toulouse.",
  keywords: [
    "Upsilon",
    "Toulouse",
    "association étudiante",
    "étudiants",
    "Toulouse université",
    "vie étudiante",
  ],
  authors: [{ name: "Upsilon Toulouse" }],
  creator: "Upsilon Toulouse",
  publisher: "Upsilon Toulouse",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "Upsilon Toulouse",
    title: "Upsilon Toulouse — Association étudiante",
    description:
      "Upsilon Toulouse est une association étudiante dynamique qui accompagne les étudiants dans leur vie universitaire, professionnelle et culturelle à Toulouse.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Upsilon Toulouse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upsilon Toulouse — Association étudiante",
    description:
      "Association étudiante dynamique à Toulouse. Rejoins-nous et développe tes compétences.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "fr-FR": siteUrl,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Upsilon Toulouse",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Association étudiante dynamique à Toulouse accompagnant les étudiants dans leur vie universitaire, professionnelle et culturelle.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toulouse",
    addressCountry: "FR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Général",
    email: "contact@upsilon-toulouse.fr",
  },
  sameAs: [
    "https://www.linkedin.com/company/upsilon-toulouse",
    "https://www.instagram.com/upsilon_toulouse",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
