import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://aumigao-walk.vercel.app"),
  title: {
    default: "Aumigão Walk | Passeios com carinho, cuidado e confiança",
    template: "%s | Aumigão Walk",
  },
  description:
    "Conheça o Aumigão Walk: passeios para pets, apoio para passeadores e expansão de negócios pet com marca própria.",
  openGraph: {
    title: "Aumigão Walk",
    description:
      "Passeios com carinho para pets e crescimento para negócios pet.",
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
