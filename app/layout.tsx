import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Efe Constructora | Diseño y Construcción en Paraguay",
  description:
    "Transformamos sueños en espacios que trascienden. Diseño arquitectónico y construcción comercial y residencial en Paraguay con atención al detalle y rapidez.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
