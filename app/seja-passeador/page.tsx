import type { Metadata } from "next";
import Link from "next/link";
import { appDownloadHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Seja passeador",
  description:
    "Seja um Aumigo parceiro: cadastro, credenciamento, kit operacional, ganhos e reputação no Aumigão Walk.",
};

const sections = [
  {
    title: "Como funciona",
    items: [
      "Cadastre-se pelo aplicativo",
      "Envie dados e documentos",
      "Passe pela aprovação",
      "Receba solicitações organizadas",
    ],
  },
  {
    title: "Requisitos",
    items: [
      "Responsabilidade com pets",
      "Pontualidade",
      "Comunicação com tutores",
      "Compromisso com segurança",
    ],
  },
  {
    title: "Documentos e aprovação",
    items: [
      "Dados pessoais",
      "Documentos de validação",
      "Análise de cadastro",
      "Ativação conforme operação",
    ],
  },
  {
    title: "Kit básico",
    items: [
      "Identificação operacional",
      "Orientações de atendimento",
      "Padronização da experiência",
      "Validação em fase de ativação",
    ],
  },
  {
    title: "Ganhos",
    items: [
      "Solicitações pelo app",
      "Agenda organizada",
      "Controle de passeios",
      "Repasses conforme operação ativa",
    ],
  },
  {
    title: "Reputação e evolução",
    items: [
      "Avaliações",
      "Histórico de atendimento",
      "Score e qualidade",
      "Evolução profissional",
    ],
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
              Seja um Aumigo parceiro.
            </h1>
            <p className="mt-5 text-lg leading-8 text-brand-ink/65">
              Transforme cuidado com pets em oportunidade profissional, com
              agenda, solicitações, credenciamento, kit operacional, segurança
              e reputação.
            </p>
            <Link
              href={appDownloadHref}
              className="mt-8 inline-flex rounded bg-brand-purple px-6 py-3 font-bold text-white shadow-soft transition hover:bg-brand-orange"
            >
              Quero me cadastrar
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
