import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Aumigao Walk para demonstracao comercial e futuras integracoes.",
};

export default function ContatoPage() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-forest">
            Contato
          </p>
          <h1 className="mt-3 text-4xl font-black text-brand-ink md:text-5xl">
            Fale com o time Aumigao Walk.
          </h1>
          <p className="mt-5 text-lg leading-8 text-brand-ink/65">
            Conte um pouco sobre o seu negocio e deixe os dados preparados para
            a futura integracao do fluxo comercial.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
