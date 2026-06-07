import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "White Label",
  description:
    "Expansão White Label para negócios pet criarem uma frente de passeios com marca própria, comunidade e recorrência.",
};

const features = [
  "Marca própria",
  "Experiência para tutores",
  "Gestão de passeios",
  "Painel de acompanhamento",
  "Modelo multi-tenant",
  "Crescimento multiunidades",
  "Relatórios de expansão",
  "Rede de passeadores",
];

const differentials = [
  "Transforma a confiança que o cliente já tem na sua marca em uma nova linha de cuidado.",
  "Cria recorrência com tutores que precisam de apoio além da compra pontual.",
  "Aproxima passeadores, unidades e famílias em uma experiência com identidade local.",
  "Ajuda redes pet a crescerem sem perder o tom humano do atendimento.",
];

export default function WhiteLabelPage() {
  return (
    <section className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
              Expansão White Label
            </p>
            <h1 className="mt-3 text-4xl font-black text-brand-ink md:text-5xl">
              Sua marca cuidando da rotina dos pets também na rua.
            </h1>
            <p className="mt-5 text-lg leading-8 text-brand-ink/65">
              O Aumigão Walk White Label é uma nova frente de crescimento para
              negócios pet: uma operação de passeios com a sua identidade,
              pensada para aproximar tutores, aumentar recorrência e fortalecer
              a presença da marca no dia a dia das famílias.
            </p>
            <Link
              href="/demo-white-label"
              className="mt-8 inline-flex rounded bg-brand-orange px-6 py-3 font-bold text-white shadow-soft transition hover:bg-brand-purple"
            >
              Solicitar demonstração
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature} className="rounded bg-brand-cloud p-5 font-bold text-brand-ink">
                {feature}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-black text-brand-ink">Diferenciais</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {differentials.map((item) => (
              <article key={item} className="rounded border border-brand-purple/10 bg-brand-cloud p-6">
                <p className="text-lg font-bold leading-7 text-brand-ink">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
