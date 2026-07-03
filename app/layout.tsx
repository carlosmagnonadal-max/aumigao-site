import type { Metadata } from "next";
import {
  Baloo_2,
  Fraunces,
  Hanken_Grotesk,
  JetBrains_Mono,
  Schibsted_Grotesk,
} from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import { EditorialFooter } from "@/components/EditorialFooter";
import { RevealInit } from "@/components/RevealInit";
import { AuWidget } from "@/components/AuWidget";
import { ScrollProgress } from "@/components/ScrollProgress";

const display = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["700", "800"],
});

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["500", "600"],
});

const logo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-logo",
  weight: ["700", "800"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  metadataBase: new URL("https://aumigaowalk.com.br"),
  title: {
    default: "Aumigão Walk | Operação Viva",
    template: "%s | Aumigão Walk",
  },
  description:
    "Aumigão Walk é uma infraestrutura de passeios pet com operação auditável, matching, score, recovery e White Label.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/apple-touch-icon-180.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Aumigão Walk",
    description:
      "Operação auditável de passeios pet para tutores, passeadores e empresas White Label.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Aumigão Walk — Infraestrutura de passeios pet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aumigão Walk",
    description:
      "Operação auditável de passeios pet para tutores, passeadores e empresas White Label.",
    images: ["/og-image.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Lê o nonce injetado pelo middleware (x-nonce) para uso futuro em <Script nonce={nonce}>
  const nonce = (await headers()).get("x-nonce") ?? "";
  void nonce; // disponível para <Script nonce={nonce}> futuros; suprime warning de não-uso
  return (
    <html
      lang="pt-BR"
      className={`${display.variable} ${body.variable} ${mono.variable} ${logo.variable} ${fraunces.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#7B4DF2" />
      </head>
      <body>
        <ScrollProgress />
        <RevealInit />
        <main>{children}</main>
        <EditorialFooter />
        <AuWidget />
      </body>
    </html>
  );
}
