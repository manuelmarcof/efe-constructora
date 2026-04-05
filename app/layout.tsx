import type { Metadata } from "next";
import { Geist } from "next/font/google";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const SITE_URL = "https://efeconstructora.com.py";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Efe Constructora | Construccion, Reformas y Diseño de Interiores en Paraguay",
    template: "%s | Efe Constructora",
  },

  description:
    "Empresa de arquitectura e ingenieria en Asuncion, Paraguay. Construccion desde cero, reformas de viviendas, diseño de interiores y obras llave en mano. Cobertura en Asuncion, Gran Asuncion y Cordillera.",

  keywords: [
    "constructora Paraguay",
    "arquitectura Asuncion",
    "construccion desde cero Paraguay",
    "reformas de viviendas Asuncion",
    "diseño de interiores Paraguay",
    "obra llave en mano Paraguay",
    "construccion residencial Paraguay",
    "construccion comercial Asuncion",
    "empresa constructora Asuncion",
    "Efe Constructora",
    "ingenieria civil Paraguay",
    "remodelacion Asuncion",
    "reformas Cordillera Paraguay",
    "diseño arquitectonico Paraguay",
    "supermercados construccion Paraguay",
  ],

  authors: [{ name: "Efe Constructora" }],
  creator: "Efe Constructora",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "es_PY",
    url: "/",
    siteName: "Efe Constructora",
    title:
      "Efe Constructora | Construccion, Reformas y Diseño de Interiores en Paraguay",
    description:
      "Transformamos sueños en espacios que trascienden. Construccion desde cero, reformas y diseño de interiores en Asuncion, Paraguay.",
    images: [
      {
        url: "/images/mockup-web.png",
        width: 1200,
        height: 630,
        alt: "Efe Constructora - Arquitectura e Ingenieria en Paraguay",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Efe Constructora | Arquitectura e Ingenieria en Paraguay",
    description:
      "Construccion desde cero, reformas y diseño de interiores en Asuncion y todo Paraguay.",
    images: ["/images/mockup-web.png"],
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

  verification: {
    google: "googlecb32328597bad2ba",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} antialiased`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
