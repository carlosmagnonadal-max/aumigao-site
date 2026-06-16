import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { ContactSection } from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o Aumigão Walk: White Label, rede de passeadores, suporte ou parceria comercial.",
};

export default function ContatoPage() {
  return (
    <InnerPage
      eyebrow="Contato"
      title={<>Vamos desenhar a sua <em>operação</em>.</>}
      lead="White Label, rede credenciada de passeadores, suporte ou parceria comercial — conte o seu objetivo e a gente responde com um plano sob medida, num diagnóstico gratuito."
    >
      <ContactSection />
    </InnerPage>
  );
}
