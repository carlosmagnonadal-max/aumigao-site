import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Demo White Label",
  description:
    "Apresentação comercial da operação White Label do Aumigão Walk para negócios pet.",
};

const sections = [
  {
    title: "App com marca própria",
    description:
      "Experiência para tutores com identidade da empresa parceira e fluxo de solicitação de passeios.",
  },
  {
    title: "Painel de operação",
    description:
      "Visão administrativa para acompanhar demandas, status, unidades e qualidade operacional.",
  },
  {
    title: "Gestão de passeadores",
    description:
      "Organização de credenciamento, documentos, kit, disponibilidade e reputação da rede.",
  },
  {
    title: "Gestão de tutores e pets",
    description:
      "Base para entender perfis, pets, histórico e relacionamento com clientes.",
  },
  {
    title: "Monitoramento de passeios",
    description:
      "Acompanhamento de jornadas, alertas e exceções para apoiar uma operação auditável.",
  },
  {
    title: "Financeiro e repasses",
    description:
      "Prévia de fluxos comerciais para organizar ganhos, repasses e controle operacional.",
  },
  {
    title: "Kit, credenciamento e qualidade",
    description:
      "Processos para padronizar a experiência e fortalecer confiança entre marca, tutor e passeador.",
  },
];

export default function DemoWhiteLabelPage() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
              Demo White Label
            </p>
            <h1 className="mt-3 text-4xl font-black text-brand-ink md:text-5xl">
              Uma apresentação comercial da operação Aumigão na sua marca.
            </h1>
            <p className="mt-5 text-lg leading-8 text-brand-ink/65">
              Veja como app, painel administrativo, rede de passeadores e
              processos operacionais se conectam para lançar uma frente de
              passeios segura e escalável.
            </p>
            <Link
              href="/contato"
              className="mt-8 inline-flex rounded bg-brand-orange px-6 py-3 font-bold text-white shadow-soft transition hover:bg-brand-purple"
            >
              Solicitar demonstração real
            </Link>
          </div>

          <div className="rounded bg-brand-purple p-6 text-white shadow-soft">
            <p className="font-black text-brand-peach">Prévia da plataforma</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-[0.8fr_1.2fr]">
              <div className="mx-auto flex h-80 w-44 flex-col rounded-[26px] border-[9px] border-brand-ink bg-white p-4 text-brand-ink">
                <div className="h-16 rounded bg-brand-blush" />
                <div className="mt-4 h-10 rounded bg-brand-purple/10" />
                <div className="mt-3 h-10 rounded bg-brand-orange/20" />
                <div className="mt-auto rounded bg-brand-purple px-3 py-2 text-center text-xs font-bold text-white">
                  Marca própria
                </div>
              </div>
              <div className="rounded bg-white p-5 text-brand-ink">
                <div className="h-4 w-28 rounded bg-brand-orange/40" />
                <div className="mt-5 grid gap-3">
                  <div className="h-14 rounded bg-brand-purple/10" />
                  <div className="h-14 rounded bg-brand-blush" />
                  <div className="h-14 rounded bg-brand-purple/10" />
                  <div className="h-20 rounded bg-brand-orange/20" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <article key={section.title} className="rounded bg-white p-6 shadow-soft">
              <div className="mb-5 h-24 rounded bg-brand-blush" />
              <h2 className="text-xl font-black text-brand-ink">{section.title}</h2>
              <p className="mt-3 text-sm leading-6 text-brand-ink/65">
                {section.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded bg-brand-purple p-8 text-white shadow-soft">
          <h2 className="text-3xl font-black">Solicitar demonstração real</h2>
          <p className="mt-4 max-w-3xl leading-7 text-white/75">
            A demonstração ajuda a visualizar marca própria, implantação,
            unidades, rede de passeadores e operação auditável no contexto do
            seu negócio.
          </p>
          <Link
            href="/contato"
            className="mt-8 inline-flex rounded bg-brand-orange px-6 py-3 font-bold text-white transition hover:bg-brand-peach hover:text-brand-ink"
          >
            Falar com o time comercial
          </Link>
        </div>
      </div>
    </section>
  );
}
