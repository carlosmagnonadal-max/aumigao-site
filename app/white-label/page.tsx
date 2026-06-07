import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "White Label",
  description:
    "SaaS White Label multi-tenant para empresas pet gerenciarem passeios, unidades, painel administrativo e rede de passeadores.",
};

const features = [
  "Plataforma SaaS",
  "Branding personalizado",
  "Gestao de passeios",
  "Painel administrativo",
  "Multi-tenant",
  "Multiunidades",
  "Relatorios",
  "Rede de passeadores",
];

const differentials = [
  "Modelo preparado para diferentes marcas e unidades",
  "Operacao de passeios organizada em uma base digital",
  "Experiencia comercial pronta para evoluir com novos canais",
  "Arquitetura institucional pensada para futura escala na Vercel",
];

export default function WhiteLabelPage() {
  return (
    <section className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-forest">
              White Label
            </p>
            <h1 className="mt-3 text-4xl font-black text-brand-ink md:text-5xl">
              Uma plataforma de passeios pet com a marca do seu negocio.
            </h1>
            <p className="mt-5 text-lg leading-8 text-brand-ink/65">
              O Aumigao Walk White Label entrega uma base SaaS multi-tenant
              para empresas pet criarem, gerirem e expandirem sua propria
              operacao de passeios.
            </p>
            <Link
              href="/demo-white-label"
              className="mt-8 inline-flex rounded bg-brand-coral px-6 py-3 font-bold text-white shadow-soft transition hover:bg-brand-forest"
            >
              Solicitar demonstracao
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
              <article key={item} className="rounded border border-black/5 bg-brand-cloud p-6">
                <p className="text-lg font-bold leading-7 text-brand-ink">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
