const pillars = [
  {
    title: "Missão",
    description:
      "Ajudar tutores a oferecerem mais movimento, cuidado e alegria aos pets.",
  },
  {
    title: "Visão",
    description:
      "Ser a marca que torna passeios pet mais acessíveis, confiáveis e felizes.",
  },
  {
    title: "Propósito",
    description:
      "Mais que um passeio, um momento de felicidade para pets, tutores e passeadores.",
  },
];

export function InstitutionalSection() {
  return (
    <section className="bg-brand-cream px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
            Sobre o Aumigão Walk
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-4xl">
            Mais que um passeio, um momento de felicidade.
          </h2>
          <p className="mt-5 text-lg leading-8 text-brand-ink/65">
            Acreditamos que caminhar muda o dia do pet e também alivia a rotina
            de quem ama, cuida e quer ver seu companheiro mais feliz.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="rounded bg-white p-6 shadow-soft">
              <h3 className="text-xl font-black text-brand-purple">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-ink/65">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
