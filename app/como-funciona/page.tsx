import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Entenda como o Aumigão Walk conecta tutores, passeadores verificados e operação auditável.",
};

const timelines = [
  {
    title: "Fluxo do tutor",
    items: [
      "Agenda o passeio pelo aplicativo",
      "Escolhe pet, duração e modalidade",
      "Acompanha o status da jornada",
      "Avalia a experiência ao final",
    ],
  },
  {
    title: "Fluxo do passeador",
    items: [
      "Passa por cadastro e credenciamento",
      "Mantém documentos e kit operacional validados",
      "Recebe solicitações e acompanha agenda",
      "Evolui com score, reputação e histórico",
    ],
  },
  {
    title: "Fluxo operacional",
    items: [
      "Monitora matching e passeios",
      "Acompanha alertas e qualidade",
      "Apoia suporte e recovery operacional",
      "Fortalece a rede com reputação e melhoria contínua",
    ],
  },
];

export default function ComoFuncionaPage() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
            Como funciona
          </p>
          <h1 className="mt-3 text-4xl font-black text-brand-ink md:text-5xl">
            Segurança e carinho com operação por trás.
          </h1>
          <p className="mt-5 text-lg leading-8 text-brand-ink/65">
            O Aumigão Walk organiza a jornada de tutores, passeadores e operação
            para que cada passeio seja mais previsível, auditável e feliz.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {timelines.map((timeline) => (
            <article key={timeline.title} className="rounded bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-brand-ink">{timeline.title}</h2>
              <ol className="mt-6 grid gap-5">
                {timeline.items.map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-brand-blush text-sm font-black text-brand-purple">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-6 text-brand-ink/70">{item}</p>
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
