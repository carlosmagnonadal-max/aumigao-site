import type { Metadata } from "next";
import Link from "next/link";
import { appDownloadHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Seja passeador",
  description:
    "Conheca as vantagens, requisitos e ganhos para passeadores no Aumigao Walk.",
};

const sections = [
  {
    title: "Como funciona",
    items: ["Veja oportunidades no app", "Confirme sua disponibilidade", "Realize passeios com orientacao"],
  },
  {
    title: "Requisitos",
    items: ["Responsabilidade com animais", "Pontualidade", "Boa comunicacao com tutores"],
  },
  {
    title: "Vantagens",
    items: ["Rotina flexivel", "Historico de avaliacoes", "Acesso a uma rede em crescimento"],
  },
  {
    title: "Ganhos",
    items: ["Receba por passeios realizados", "Aumente sua demanda", "Cresca com recorrencia"],
  },
];

export default function SejaPasseadorPage() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-forest">
              Seja passeador
            </p>
            <h1 className="mt-3 text-4xl font-black text-brand-ink md:text-5xl">
              Transforme cuidado com pets em oportunidade.
            </h1>
            <p className="mt-5 text-lg leading-8 text-brand-ink/65">
              O Aumigao Walk aproxima passeadores de tutores que precisam de
              passeios confiaveis, organizados e avaliados.
            </p>
            <Link
              href={appDownloadHref}
              className="mt-8 inline-flex rounded bg-brand-forest px-6 py-3 font-bold text-white shadow-soft transition hover:bg-brand-ink"
            >
              Baixar aplicativo
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="rounded bg-white p-6 shadow-soft">
                <h2 className="text-xl font-black text-brand-ink">{section.title}</h2>
                <ul className="mt-5 grid gap-3 text-sm leading-6 text-brand-ink/68">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
