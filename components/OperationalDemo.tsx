const modules = [
  "App do Tutor",
  "App do Passeador",
  "Painel Administrativo",
  "Matching",
  "Financeiro",
  "Kit e Credenciamento",
  "Score e Reputação",
  "Recovery Operacional",
];

export function OperationalDemo() {
  return (
    <section className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
            Demonstração operacional
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-4xl">
            Prévia da plataforma, do app ao painel.
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-ink/65">
            Uma visão comercial da operação Aumigão Walk para tutores,
            passeadores, equipes operacionais e marcas parceiras.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, index) => (
            <article key={module} className="rounded bg-brand-cloud p-5 shadow-soft">
              <div className="mb-5 h-28 rounded bg-white p-4">
                <div className="h-3 w-20 rounded bg-brand-orange/30" />
                <div className="mt-4 h-5 rounded bg-brand-purple/15" />
                <div className="mt-3 h-5 w-3/4 rounded bg-brand-purple/10" />
                <div className="mt-5 grid grid-cols-3 gap-2">
                  <span className="h-8 rounded bg-brand-blush" />
                  <span className="h-8 rounded bg-brand-orange/20" />
                  <span className="h-8 rounded bg-brand-purple/15" />
                </div>
              </div>
              <span className="text-sm font-black text-brand-orange">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-xl font-black text-brand-ink">{module}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-ink/65">
                Exemplo visual da operação em fase de ativação.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
