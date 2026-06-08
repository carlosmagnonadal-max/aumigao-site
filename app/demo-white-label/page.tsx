import type { Metadata } from "next";
import Link from "next/link";
import { WhiteLabelShowroom } from "@/components/WhiteLabelShowroom";

export const metadata: Metadata = {
  title: "Demo White Label",
  description:
    "Showroom conceitual White Label do Aumigão Walk com Matching, Score, Recovery, Financeiro, Rede, Credenciamento, Operação e White Label.",
};

const highlights = [
  "Matching",
  "Score",
  "Recovery",
  "Financeiro",
  "Rede",
  "Credenciamento",
  "Operação",
  "White Label",
];

export default function DemoWhiteLabelPage() {
  return (
    <>
      <section className="bg-brand-cream px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Showroom conceitual</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-brand-night md:text-6xl">
              Entenda a operação White Label sem expor telas internas.
            </h1>
            <p className="mt-6 text-lg leading-8 text-brand-ink/68">
              A demo apresenta os conceitos operacionais da plataforma em uma linguagem própria,
              protegida e comercial: módulos, fluxos, indicadores e arquitetura.
            </p>
            <Link href="/contato" className="mt-8 inline-flex rounded-full bg-brand-orange px-6 py-3 font-black text-white shadow-premium transition hover:bg-brand-night">
              Solicitar diagnóstico White Label
            </Link>
          </div>
          <div className="rounded-[2rem] bg-brand-night p-6 text-white shadow-premium">
            <div className="grid gap-3 sm:grid-cols-2">
              {highlights.map((item, index) => (
                <div key={item} className={`rounded-2xl border border-white/10 p-5 font-black ${index === 0 ? "bg-brand-orange" : "bg-white/[0.09]"}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <WhiteLabelShowroom />
        </div>
      </section>

      <section className="sticky bottom-0 z-20 border-t border-brand-purple/10 bg-white/[0.92] px-5 py-4 shadow-premium backdrop-blur lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black text-brand-night">Pronto para avaliar a operação na sua marca?</p>
          <Link href="/contato" className="rounded-full bg-brand-night px-5 py-3 text-center text-sm font-black text-white transition hover:bg-brand-orange">
            Solicitar diagnóstico White Label
          </Link>
        </div>
      </section>
    </>
  );
}
