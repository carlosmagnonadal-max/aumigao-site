import type { Metadata } from "next";
import Link from "next/link";
import { FeatureCards } from "@/components/FeatureCards";
import { Hero } from "@/components/Hero";
import { WhiteLabelCTA } from "@/components/WhiteLabelCTA";
import { demoHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aumigão Walk",
  description:
    "Passeios com carinho para pets, tranquilidade para tutores e expansão para negócios pet.",
};

const flow = ["Tutor", "Pedido no app", "Passeador", "Passeio feliz", "Avaliação"];

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
              Como funciona
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-4xl">
              Do pedido ao rabinho abanando.
            </h2>
            <p className="mt-4 text-lg leading-8 text-brand-ink/65">
              O tutor escolhe o passeio, o passeador recebe a solicitação e o
              pet ganha uma rotina mais saudável, com cuidado do começo ao fim.
            </p>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-5">
            {flow.map((item, index) => (
              <div key={item} className="rounded border border-brand-purple/10 bg-brand-cloud p-5">
                <span className="text-sm font-black text-brand-orange">
                  0{index + 1}
                </span>
                <p className="mt-3 text-lg font-black text-brand-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhiteLabelCTA />

      <section className="bg-brand-cloud px-5 py-16 text-center lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black text-brand-ink md:text-4xl">
            Mais passeios bons começam com uma escolha simples.
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-ink/65">
            Baixe o app para cuidar melhor da rotina do seu pet ou conheça a
            expansão White Label para levar essa experiência à sua marca.
          </p>
          <Link
            href={demoHref}
            className="mt-8 inline-flex rounded bg-brand-orange px-6 py-3 font-bold text-white shadow-soft transition hover:bg-brand-purple"
          >
            Solicitar demonstração
          </Link>
        </div>
      </section>
    </>
  );
}
