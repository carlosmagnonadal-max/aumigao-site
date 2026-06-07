import Link from "next/link";
import { appDownloadHref, demoHref } from "@/lib/content";

export function Hero() {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20 lg:px-8">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-forest">
            Aumigao Walk
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-brand-ink md:text-6xl">
            A plataforma que conecta tutores, passeadores e negocios pet.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-ink/70">
            Agende passeios, encontre passeadores confiaveis e conheca a
            plataforma White Label do Aumigao.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={appDownloadHref}
              className="rounded bg-brand-forest px-6 py-3 text-center font-bold text-white shadow-soft transition hover:bg-brand-ink"
            >
              Baixar aplicativo
            </Link>
            <Link
              href={demoHref}
              className="rounded border border-brand-forest/25 bg-white px-6 py-3 text-center font-bold text-brand-forest transition hover:border-brand-coral hover:text-brand-coral"
            >
              Solicitar demonstracao
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px]">
          <div className="absolute inset-x-8 top-0 h-72 rounded bg-brand-mint/45" />
          <div className="absolute left-0 top-12 w-72 rounded border border-black/5 bg-white p-5 shadow-soft">
            <p className="text-sm font-bold text-brand-forest">Tutor</p>
            <p className="mt-3 text-2xl font-black">Passeio agendado</p>
            <div className="mt-5 h-3 rounded bg-brand-mint" />
            <div className="mt-3 h-3 w-2/3 rounded bg-brand-amber" />
          </div>
          <div className="absolute right-0 top-32 w-80 rounded border border-black/5 bg-brand-ink p-5 text-white shadow-soft">
            <p className="text-sm font-bold text-brand-amber">Operacao</p>
            <p className="mt-3 text-2xl font-black">Rede ativa em tempo real</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <span className="h-16 rounded bg-white/10" />
              <span className="h-16 rounded bg-brand-coral" />
              <span className="h-16 rounded bg-white/10" />
            </div>
          </div>
          <div className="absolute bottom-0 left-10 w-72 rounded border border-black/5 bg-white p-5 shadow-soft">
            <p className="text-sm font-bold text-brand-coral">White Label</p>
            <p className="mt-3 text-2xl font-black">Sua marca, nossa plataforma</p>
          </div>
        </div>
      </div>
    </section>
  );
}
