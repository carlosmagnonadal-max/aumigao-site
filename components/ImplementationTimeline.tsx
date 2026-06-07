const steps = [
  "Demonstração",
  "Contratação",
  "Personalização",
  "Implantação",
  "Operação",
];

export function ImplementationTimeline() {
  return (
    <section className="bg-brand-cloud px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
            Como funciona a implantação
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-4xl">
            Da primeira conversa até a operação ativa.
          </h2>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-5">
          {steps.map((step, index) => (
            <article key={step} className="rounded bg-white p-5 shadow-soft">
              <span className="text-sm font-black text-brand-orange">
                0{index + 1}
              </span>
              <h3 className="mt-3 text-xl font-black text-brand-ink">{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
