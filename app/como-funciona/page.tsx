import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Entenda os fluxos do tutor, do passeador e da operacao no Aumigao Walk.",
};

const timelines = [
  {
    title: "Fluxo do tutor",
    items: [
      "Escolhe o servico de passeio",
      "Envia a solicitacao pelo aplicativo",
      "Acompanha o status do passeio",
      "Avalia a experiencia ao final",
    ],
  },
  {
    title: "Fluxo do passeador",
    items: [
      "Recebe oportunidades disponiveis",
      "Confirma o atendimento",
      "Executa o passeio com registro operacional",
      "Construi reputacao com avaliacoes",
    ],
  },
  {
    title: "Fluxo operacional",
    items: [
      "Organiza demandas e disponibilidade",
      "Acompanha unidades e rede ativa",
      "Monitora indicadores e qualidade",
      "Apoia a expansao do negocio",
    ],
  },
];

export default function ComoFuncionaPage() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-forest">
            Como funciona
          </p>
          <h1 className="mt-3 text-4xl font-black text-brand-ink md:text-5xl">
            Tres fluxos conectados em uma mesma experiencia.
          </h1>
          <p className="mt-5 text-lg leading-8 text-brand-ink/65">
            O Aumigao Walk foi pensado para dar clareza ao tutor, rotina ao
            passeador e visibilidade para a operacao.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {timelines.map((timeline) => (
            <article key={timeline.title} className="rounded bg-white p-6 shadow-soft">
              <h2 className="text-2xl font-black text-brand-ink">{timeline.title}</h2>
              <ol className="mt-6 grid gap-5">
                {timeline.items.map((item, index) => (
                  <li key={item} className="flex gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded bg-brand-mint text-sm font-black text-brand-forest">
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
