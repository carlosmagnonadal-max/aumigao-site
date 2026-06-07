import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ImplementationTimeline } from "@/components/ImplementationTimeline";
import { OperationalDemo } from "@/components/OperationalDemo";

export const metadata: Metadata = {
  title: "White Label",
  description:
    "Leve a operação Aumigão Walk para sua marca com app, painel administrativo, rede de passeadores e implantação assistida.",
};

const audiences = [
  "Pet shops",
  "Clínicas veterinárias",
  "Hotéis pet",
  "Creches pet",
  "Redes e franquias",
];

const deliverables = [
  "Aplicativo com marca própria",
  "Painel administrativo",
  "Gestão de tutores, pets e passeadores",
  "Acompanhamento de passeios",
  "Fluxos de credenciamento",
  "Kit operacional do passeador",
  "Score e reputação",
  "Implantação assistida",
];

const gains = [
  {
    title: "Nova fonte de receita",
    description:
      "Transforme a relação com tutores em uma frente recorrente de passeios.",
  },
  {
    title: "Fidelização",
    description:
      "Sua marca participa da rotina do pet, não apenas de compras e atendimentos pontuais.",
  },
  {
    title: "Operação pronta",
    description:
      "App, painel e processos reduzem o esforço para começar a organizar a operação.",
  },
  {
    title: "Crescimento por unidade",
    description:
      "Estrutura preparada para expansão em mais de uma loja, clínica ou região.",
  },
];

const companyFaq = [
  {
    question: "Como funciona o White Label?",
    answer:
      "Sua empresa usa a operação Aumigão Walk com marca própria, app, painel e estrutura para organizar passeios.",
  },
  {
    question: "Quanto tempo leva a implantação?",
    answer:
      "O prazo depende do escopo, personalização e unidades envolvidas. A demonstração define o plano de implantação.",
  },
  {
    question: "Posso usar minha marca?",
    answer:
      "Sim. A proposta White Label foi pensada para a experiência aparecer com a identidade da empresa parceira.",
  },
  {
    question: "Posso operar mais de uma unidade?",
    answer:
      "Sim. A estrutura é preparada para expansão multiunidades com acompanhamento operacional.",
  },
];

export default function WhiteLabelPage() {
  return (
    <>
      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
              White Label Aumigão Walk
            </p>
            <h1 className="mt-3 text-4xl font-black text-brand-ink md:text-5xl">
              Leve a operação Aumigão para a sua marca.
            </h1>
            <p className="mt-5 text-lg leading-8 text-brand-ink/65">
              Uma frente de passeios pet com app, painel administrativo,
              passeadores verificados, operação auditável e implantação
              assistida para negócios que querem crescer com segurança.
            </p>
            <Link
              href="/contato"
              className="mt-8 inline-flex rounded bg-brand-orange px-6 py-3 font-bold text-white shadow-soft transition hover:bg-brand-purple"
            >
              Solicitar demonstração
            </Link>
          </div>

          <div className="rounded bg-brand-purple p-6 text-white shadow-soft">
            <p className="font-black text-brand-peach">Para quem é</p>
            <div className="mt-5 grid gap-3">
              {audiences.map((audience) => (
                <div key={audience} className="rounded bg-white/10 px-4 py-3 font-bold">
                  {audience}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-cloud px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
              O que sua empresa recebe
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-4xl">
              Estrutura comercial e operacional para lançar passeios com sua marca.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item) => (
              <article key={item} className="rounded bg-white p-5 font-bold text-brand-ink shadow-soft">
                {item}
              </article>
            ))}
          </div>
        </div>
      </section>

      <ImplementationTimeline />

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
              Benefícios financeiros e operacionais
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-4xl">
              Mais valor para o cliente e mais recorrência para o negócio.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {gains.map((gain) => (
              <article key={gain.title} className="rounded bg-brand-cloud p-6">
                <h3 className="text-xl font-black text-brand-purple">{gain.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-ink/65">
                  {gain.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <OperationalDemo />

      <section className="bg-brand-cloud px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
              FAQ empresarial
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-4xl">
              O que empresas costumam perguntar antes da demonstração.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {companyFaq.map((item) => (
              <article key={item.question} className="rounded bg-white p-6 shadow-soft">
                <h3 className="text-xl font-black text-brand-purple">{item.question}</h3>
                <p className="mt-3 leading-7 text-brand-ink/65">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
              Solicitar demonstração
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-4xl">
              Vamos entender sua operação e mostrar o melhor caminho.
            </h2>
            <p className="mt-5 text-lg leading-8 text-brand-ink/65">
              Retornamos normalmente em até 1 dia útil para conversar sobre
              unidades, marca, operação e implantação.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
