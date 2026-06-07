const trustItems = [
  {
    title: "Passeadores verificados",
    description:
      "Credenciamento e validações ajudam a organizar quem entra na operação.",
  },
  {
    title: "Kit operacional do passeador",
    description:
      "Padronização para apoiar identificação, rotina e qualidade do atendimento.",
  },
  {
    title: "Documentos e validação",
    description:
      "Etapas de documentação e aprovação fortalecem a operação antes do atendimento.",
  },
  {
    title: "Acompanhamento pelo app",
    description:
      "A experiência do app dá mais previsibilidade ao tutor e ao time operacional.",
  },
  {
    title: "Score e reputação",
    description:
      "Avaliações e histórico apoiam melhoria contínua e evolução da rede.",
  },
  {
    title: "Suporte e recovery operacional",
    description:
      "Fluxos de apoio ajudam a tratar exceções e proteger a experiência.",
  },
];

export function TrustSection() {
  return (
    <section className="bg-brand-cloud px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
            Bloco de confiança
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-4xl">
            Cuidado não pode depender de improviso.
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-ink/65">
            Aumigão Walk combina carinho com organização: verificação,
            acompanhamento, reputação e operação preparada para crescer.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => (
            <article key={item.title} className="rounded bg-white p-6 shadow-soft">
              <div className="mb-5 h-10 w-10 rounded bg-brand-blush" />
              <h3 className="text-xl font-black text-brand-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-ink/65">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
