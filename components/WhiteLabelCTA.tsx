import Link from "next/link";
import { whiteLabelFeatures } from "@/lib/content";

export function WhiteLabelCTA() {
  return (
    <section className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded bg-brand-ink p-8 text-white md:grid-cols-[1fr_0.9fr] md:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-amber">
            White Label
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Leve a experiencia Aumigao para a sua marca.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-white/75">
            Uma base SaaS para negocios pet criarem uma operacao digital de
            passeios com identidade propria, controle administrativo e rede de
            passeadores.
          </p>
          <Link
            href="/white-label"
            className="mt-8 inline-flex rounded bg-brand-coral px-6 py-3 font-bold text-white transition hover:bg-brand-amber hover:text-brand-ink"
          >
            Conhecer a solucao
          </Link>
        </div>
        <div className="grid gap-3">
          {whiteLabelFeatures.map((feature) => (
            <div key={feature} className="rounded bg-white/10 px-4 py-3 font-semibold">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
