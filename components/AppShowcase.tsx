const fronts = [
  {
    title: "Tutor",
    description:
      "Agenda passeios, acompanha status, cadastra pets, escolhe planos e modalidades e acessa ajuda.",
    highlights: ["Pets", "Planos", "Status", "Ajuda"],
  },
  {
    title: "Passeador",
    description:
      "Recebe solicitações, acompanha agenda, gerencia ganhos, evolui reputação e valida kit e documentos.",
    highlights: ["Agenda", "Ganhos", "Kit", "Score"],
  },
  {
    title: "Operação/Admin",
    description:
      "Acompanha dashboard, monitora matching, passeios, alertas e qualidade operacional.",
    highlights: ["Dashboard", "Matching", "Alertas", "Qualidade"],
  },
];

export function AppShowcase() {
  return (
    <section className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
            Conheça o aplicativo
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-5xl">
            Três frentes conectadas na mesma operação.
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-ink/65">
            Aumigão Walk organiza a experiência de quem agenda, de quem passeia
            e de quem acompanha a qualidade da operação.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {fronts.map((front) => (
            <article
              key={front.title}
              className="rounded border border-brand-purple/10 bg-brand-cloud p-5 shadow-soft"
            >
              <div className="mx-auto flex h-[420px] max-w-[250px] flex-col rounded-[28px] border-[10px] border-brand-ink bg-white p-4">
                <div className="mx-auto mb-5 h-1.5 w-20 rounded bg-brand-ink/20" />
                <div className="rounded bg-brand-blush p-4">
                  <p className="text-xs font-black uppercase tracking-[0.12em] text-brand-orange">
                    Prévia da plataforma
                  </p>
                  <h3 className="mt-3 text-xl font-black text-brand-ink">
                    {front.title}
                  </h3>
                </div>
                <div className="mt-5 grid gap-3">
                  {front.highlights.map((highlight) => (
                    <div key={highlight} className="rounded bg-brand-purple/10 px-3 py-2 text-sm font-bold text-brand-ink">
                      {highlight}
                    </div>
                  ))}
                </div>
                <div className="mt-auto rounded bg-brand-purple px-4 py-3 text-center text-sm font-bold text-white">
                  Em fase de ativação
                </div>
              </div>
              <p className="mt-5 text-center text-sm leading-6 text-brand-ink/65">
                {front.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
