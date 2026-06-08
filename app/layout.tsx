import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://aumigao-walk.vercel.app"),
  title: {
    default: "Aumigão Walk | Plataforma tecnológica pet",
    template: "%s | Aumigão Walk",
  },
  description:
    "Aumigão Walk é uma plataforma de passeios pet com app para tutores, app para passeadores, painel administrativo e operação White Label.",
  openGraph: {
    title: "Aumigão Walk",
    description:
      "Passeios pet com segurança, tecnologia, operação auditável e proposta White Label.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
