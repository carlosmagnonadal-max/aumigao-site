import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Aumigão Walk para White Label, passeadores, suporte ou parceria comercial.",
};

export default function ContatoPage() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
            Contato
          </p>
          <h1 className="mt-3 text-4xl font-black text-brand-ink md:text-5xl">
            Fale com o time Aumigão Walk.
          </h1>
          <p className="mt-5 text-lg leading-8 text-brand-ink/65">
            Conte sobre sua empresa, cidade e interesse principal. O formulário
            já está preparado para futura integração comercial automatizada.
          </p>
          <p className="mt-4 rounded bg-brand-blush px-4 py-3 text-sm font-bold text-brand-purple">
            Retornamos normalmente em até 1 dia útil.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
