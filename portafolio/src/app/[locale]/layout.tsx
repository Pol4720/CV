import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Navbar, Footer } from "@/components/layout";
import { personalInfo } from "@/data/personal";

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
    es: "Richard A. Matos Arderí | Científico de la Computación",
    en: "Richard A. Matos Arderí | Computer Scientist",
  };

  const descriptions = {
    es: "Científico de la Computación (MATCOM, Universidad de La Habana) especializado en Ciencia de Datos, Machine Learning e IA. Especialista Consultor en el Instituto Finlay de Vacunas. Premio al Mérito Científico. Proyectos, investigaciones, publicaciones y CV.",
    en: "Computer Scientist (MATCOM, University of Havana) specialized in Data Science, Machine Learning and AI. Consultant Specialist at the Finlay Vaccine Institute. Scientific Merit Award. Projects, research, publications and CV.",
  };

  const title = titles[locale as keyof typeof titles] || titles.es;
  const description = descriptions[locale as keyof typeof descriptions] || descriptions.es;

  return {
    metadataBase: new URL("https://richard-matos.vercel.app"),
    title,
    description,
    keywords: [
      "Richard Matos", "Richard Matos Arderí", "Computer Scientist", "Científico de la Computación",
      "Data Science", "Machine Learning", "AI", "MATCOM", "Universidad de La Habana",
      "Instituto Finlay de Vacunas", "BioCubaFarma", "AutoML", "RAG", "Multiagentes",
      "Portfolio", "Portafolio",
    ],
    authors: [{ name: personalInfo.name }],
    creator: personalInfo.name,
    openGraph: {
      type: "profile",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: "https://richard-matos.vercel.app",
      title,
      description,
      siteName: "Richard Matos — Portfolio",
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
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
    <NextIntlClientProvider messages={messages}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
