import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claudia Groza — Educația în Valiță | Biologie BAC, Ateliere Copii & Scriere",
  description:
    "21 de ani la catedră. Curs de biologie pentru bacalaureat, atelier de biologie distractivă pentru copii 6-12 ani și atelier de scriere pentru femei. Online, din orice colț din România.",
  keywords: [
    "curs biologie bacalaureat online",
    "meditații biologie bac",
    "atelier biologie copii",
    "scriere creativă femei",
    "Claudia Groza biologie",
    "Educația în Valiță",
  ],
  authors: [{ name: "Claudia Groza" }],
  openGraph: {
    title: "Claudia Groza — Educația în Valiță",
    description:
      "21 de ani la catedră. Biologie pe înțelesul oricui — pentru bacalaureat, pentru copii și pentru suflet.",
    type: "website",
    locale: "ro_RO",
    url: "https://claudiagroza.ro",
    siteName: "Claudia Groza — Educația în Valiță",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudia Groza — Educația în Valiță",
    description: "21 de ani la catedră. Biologie pe înțelesul oricui.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://claudiagroza.ro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
