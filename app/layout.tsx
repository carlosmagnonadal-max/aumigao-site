import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://aumigao-walk.vercel.app"),
  title: {
    default: "Aumigão Walk | Passeios pet com operação auditável",
    template: "%s | Aumigão Walk",
  },
  description:
    "Aumigão Walk é uma plataforma de passeios pet com operação auditável, conectando tutores, passeadores verificados e negócios pet.",
  openGraph: {
    title: "Aumigão Walk",
    description:
      "Mais que um passeio, um momento de felicidade com segurança, carinho e operação organizada.",
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
