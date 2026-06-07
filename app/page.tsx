import type { Metadata } from "next";
import Link from "next/link";
import { FeatureCards } from "@/components/FeatureCards";
import { Hero } from "@/components/Hero";
import { WhiteLabelCTA } from "@/components/WhiteLabelCTA";
import { demoHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Aumigao Walk",
  description:
    "Landing page do Aumigao Walk para tutores, passeadores e empresas pet interessadas em White Label.",
};

const flow = ["Tutor", "Solicitacao", "Passeador", "Passeio", "Avaliacao"];

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-forest">
              Como funciona
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-4xl">
              Um fluxo claro do pedido ate a avaliacao.
            </h2>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-5">
            {flow.map((item, index) => (
              <div key={item} className="rounded border border-black/5 bg-brand-cloud p-5">
                <span className="text-sm font-black text-brand-coral">
                  0{index + 1}
                </span>
                <p className="mt-3 text-lg font-black text-brand-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhiteLabelCTA />

      <section className="bg-brand-cloud px-5 py-16 text-center lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black text-brand-ink md:text-4xl">
            Pronto para conhecer a plataforma?
          </h2>
          <p className="mt-4 text-lg leading-8 text-brand-ink/65">
            Veja como o Aumigao Walk pode apoiar tutores, passeadores e
            empresas pet com uma operacao digital preparada para crescer.
          </p>
          <Link
            href={demoHref}
            className="mt-8 inline-flex rounded bg-brand-coral px-6 py-3 font-bold text-white shadow-soft transition hover:bg-brand-forest"
          >
            Solicitar demonstracao
          </Link>
        </div>
      </section>
    </>
  );
}
