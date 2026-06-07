import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://aumigao-walk.vercel.app"),
  title: {
    default: "Aumigao Walk | Plataforma para tutores, passeadores e negocios pet",
    template: "%s | Aumigao Walk",
  },
  description:
    "Conheca o Aumigao Walk: aplicativo para passeios pet e plataforma White Label SaaS para negocios do mercado pet.",
  openGraph: {
    title: "Aumigao Walk",
    description:
      "A plataforma que conecta tutores, passeadores e negocios pet.",
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
