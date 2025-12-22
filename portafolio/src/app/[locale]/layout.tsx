import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar, Footer } from "@/components/layout";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    es: "Richard Matos | Portafolio - Ciencia de la Computación",
    en: "Richard Matos | Portfolio - Computer Science",
  };

  const descriptions = {
    es: "Portafolio profesional de Richard Matos - Estudiante de último año de Ciencia de la Computación en MATCOM, Universidad de La Habana. Proyectos, investigaciones, certificaciones y más.",
    en: "Professional portfolio of Richard Matos - Final-year Computer Science student at MATCOM, University of Havana. Projects, research, certifications, and more.",
  };

  return {
    title: titles[locale as keyof typeof titles] || titles.es,
    description: descriptions[locale as keyof typeof descriptions] || descriptions.es,
    keywords: [
      "Richard Matos",
      "Computer Science",
      "Ciencia de la Computación",
      "Portfolio",
      "Portafolio",
      "MATCOM",
      "Universidad de La Habana",
      "Machine Learning",
      "Distributed Systems",
      "Compilers",
    ],
    authors: [{ name: "Richard Matos" }],
    creator: "Richard Matos",
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: "https://richard-matos.vercel.app",
      title: titles[locale as keyof typeof titles] || titles.es,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.es,
      siteName: "Richard Matos Portfolio",
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale as keyof typeof titles] || titles.es,
      description: descriptions[locale as keyof typeof descriptions] || descriptions.es,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-white min-h-screen`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
