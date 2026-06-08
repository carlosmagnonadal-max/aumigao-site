import type { Metadata } from "next";
import Link from "next/link";
import { WhiteLabelShowroom } from "@/components/WhiteLabelShowroom";

export const metadata: Metadata = {
  title: "Demo White Label",
  description:
    "Showroom White Label do Aumigão Walk com Tutor, Passeador, Admin, Matching, Financeiro, Score e Recovery.",
};

const highlights = [
  "Marca própria",
  "Operação assistida",
  "Painel administrativo",
  "Rede de passeadores",
];

export default function DemoWhiteLabelPage() {
  return (
    <>
      <section className="bg-brand-cream px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Demo White Label</p>
            <h1 className="mt-4 text-4xl font-black leading-tight text-brand-night md:text-6xl">
              Um showroom para enxergar a operação Aumigão na sua marca.
            </h1>
            <p className="mt-6 text-lg leading-8 text-brand-ink/68">
              Navegue pelos módulos de Tutor, Passeador, Admin, Matching, Financeiro, Score e Recovery com screenshots reais do produto.
            </p>
            <Link href="/contato" className="mt-8 inline-flex rounded-full bg-brand-orange px-6 py-3 font-black text-white shadow-premium transition hover:bg-brand-night">
              Solicitar diagnóstico White Label
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="rounded-2xl bg-white p-6 text-xl font-black text-brand-night shadow-soft">
                {item}
              </div>
            ))}
            <img className="admin-shot col-span-full h-64 w-full object-cover" src="/screenshots/admin/admin-dashboard.png" alt="Painel da demo White Label" />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <WhiteLabelShowroom />
        </div>
      </section>

      <section className="sticky bottom-0 z-20 border-t border-brand-purple/10 bg-white/92 px-5 py-4 shadow-premium backdrop-blur lg:px-8">
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
