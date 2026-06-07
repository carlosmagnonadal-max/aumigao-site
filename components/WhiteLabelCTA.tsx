import Link from "next/link";

const benefits = [
  "Nova fonte de receita",
  "Fidelização de clientes",
  "Operação pronta",
  "Marca própria",
  "Painel administrativo",
  "Rede de passeadores",
  "Implantação assistida",
  "Multiunidades",
];

export function WhiteLabelCTA() {
  return (
    <section className="bg-brand-cream px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded bg-brand-purple p-8 text-white md:grid-cols-[1fr_0.9fr] md:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-peach">
            White Label
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Leve a operação Aumigão para a sua marca.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-white/75">
            Pet shops, clínicas veterinárias, hotéis pet, creches e redes podem
            oferecer passeios com marca própria usando app, painel
            administrativo e estrutura operacional preparada para crescer.
          </p>
          <Link
            href="/demo-white-label"
            className="mt-8 inline-flex rounded bg-brand-orange px-6 py-3 font-bold text-white transition hover:bg-brand-peach hover:text-brand-ink"
          >
            Solicitar demonstração
          </Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {benefits.map((feature) => (
            <div key={feature} className="rounded bg-white/10 px-4 py-3 font-semibold">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
