import type { Metadata } from "next";
import Link from "next/link";
import { appDownloadHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Seja passeador",
  description:
    "Conheça as vantagens, requisitos e ganhos para passeadores no Aumigão Walk.",
};

const sections = [
  {
    title: "Como funciona",
    items: ["Veja oportunidades no app", "Confirme sua disponibilidade", "Realize passeios com cuidado e presença"],
  },
  {
    title: "Requisitos",
    items: ["Responsabilidade com animais", "Pontualidade", "Boa comunicação com tutores"],
  },
  {
    title: "Vantagens",
    items: ["Rotina flexível", "Histórico de avaliações", "Acesso a uma rede em crescimento"],
  },
  {
    title: "Ganhos",
    items: ["Receba por passeios realizados", "Aumente sua demanda", "Cresça com recorrência"],
  },
];

export default function SejaPasseadorPage() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
              Seja passeador
            </p>
            <h1 className="mt-3 text-4xl font-black text-brand-ink md:text-5xl">
              Ganhe caminhando com quem deixa o dia melhor.
            </h1>
            <p className="mt-5 text-lg leading-8 text-brand-ink/65">
              O Aumigão Walk aproxima passeadores de tutores que buscam alguém
              de confiança para cuidar do pet com carinho, atenção e movimento.
            </p>
            <Link
              href={appDownloadHref}
              className="mt-8 inline-flex rounded bg-brand-purple px-6 py-3 font-bold text-white shadow-soft transition hover:bg-brand-orange"
            >
              Baixar aplicativo
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="rounded border border-brand-purple/10 bg-white p-6 shadow-soft">
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
