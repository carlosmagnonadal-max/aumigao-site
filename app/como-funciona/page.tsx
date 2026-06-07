import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Entenda como o Aumigão Walk transforma pedidos de passeio em cuidado real para pets e tutores.",
};

const timelines = [
  {
    title: "Fluxo do tutor",
    items: [
      "Escolhe o passeio ideal para a rotina do pet",
      "Envia a solicitação pelo aplicativo",
      "Acompanha o cuidado com mais tranquilidade",
      "Avalia a experiência e fortalece a confiança",
    ],
  },
  {
    title: "Fluxo do passeador",
    items: [
      "Recebe oportunidades próximas e compatíveis",
      "Confirma o atendimento com responsabilidade",
      "Cuida do pet durante a caminhada",
      "Constrói reputação com carinho e boas avaliações",
    ],
  },
  {
    title: "Fluxo da marca parceira",
    items: [
      "Organiza a demanda da comunidade local",
      "Acompanha unidades e passeadores ativos",
      "Cuida da qualidade da experiência",
      "Expande relacionamento e receita recorrente",
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
            Um passeio bem cuidado começa antes da coleira.
          </h1>
          <p className="mt-5 text-lg leading-8 text-brand-ink/65">
            O Aumigão Walk conecta tutores, passeadores e marcas parceiras em
            uma jornada simples, humana e feita para o pet se sentir bem.
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
