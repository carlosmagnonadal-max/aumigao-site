import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demo White Label",
  description:
    "Apresentação comercial simulada da expansão White Label do Aumigão Walk.",
};

const cards = [
  "Dashboard operacional",
  "Gestao de unidades",
  "Rede de passeadores",
  "Relatorios comerciais",
  "Branding personalizado",
  "Fluxo de atendimento",
];

export default function DemoWhiteLabelPage() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
            Demo White Label
          </p>
          <h1 className="mt-3 text-4xl font-black text-brand-ink md:text-5xl">
            Uma previa comercial da plataforma para sua marca.
          </h1>
          <p className="mt-5 text-lg leading-8 text-brand-ink/65">
            Esta pagina esta preparada para receber screenshots reais, videos
            de apresentacao e materiais comerciais futuros.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded border border-dashed border-brand-purple/30 bg-white p-6 shadow-soft">
            <div className="grid h-80 place-items-center rounded bg-brand-cloud text-center">
              <div>
                <p className="font-black text-brand-ink">Placeholder de screenshot</p>
                <p className="mt-2 text-sm text-brand-ink/60">
                  Area reservada para tela do painel administrativo
                </p>
              </div>
            </div>
          </div>
          <div className="rounded border border-dashed border-brand-orange/35 bg-white p-6 shadow-soft">
            <div className="grid h-80 place-items-center rounded bg-brand-ink text-center text-white">
              <div>
                <p className="font-black">Placeholder de video</p>
                <p className="mt-2 text-sm text-white/65">
                  Area preparada para embed futuro
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card} className="rounded bg-white p-6 shadow-soft">
              <div className="mb-5 h-24 rounded bg-brand-blush" />
              <h2 className="text-xl font-black text-brand-ink">{card}</h2>
              <p className="mt-3 text-sm leading-6 text-brand-ink/65">
                Espaco preparado para detalhar a funcionalidade com conteudo
                comercial e imagens futuras.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
