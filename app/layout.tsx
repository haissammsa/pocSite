import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.upsilon-toulouse.fr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Upsilon Toulouse — Association étudiante",
    template: "%s | Upsilon Toulouse",
  },
  description:
    "Upsilon est une association étudiante de Toulouse. Découvrez nos activités, nos événements et rejoignez-nous.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Upsilon Toulouse",
    title: "Upsilon Toulouse — Association étudiante",
    description:
      "Upsilon est une association étudiante de Toulouse. Découvrez nos activités, nos événements et rejoignez-nous.",
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
      "Upsilon est une association étudiante de Toulouse. Découvrez nos activités et rejoignez-nous.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <a href="#main-content" className="skip-to-content">
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
