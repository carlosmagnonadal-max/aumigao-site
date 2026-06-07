import { benefits } from "@/lib/content";

export function FeatureCards() {
  return (
    <section className="bg-brand-cloud px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
            Por que os tutores sentem diferença
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-4xl">
            Mais passeio, mais vínculo, mais tranquilidade.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="rounded border border-brand-purple/10 bg-white p-6 shadow-soft"
            >
              <div className="mb-6 h-10 w-10 rounded bg-brand-blush" />
              <h3 className="text-xl font-black text-brand-ink">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-ink/65">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
