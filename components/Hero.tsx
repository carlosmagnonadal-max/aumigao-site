import Image from "next/image";
import Link from "next/link";
import { appDownloadHref, demoHref } from "@/lib/content";

export function Hero() {
  return (
    <section className="overflow-hidden bg-brand-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20 lg:px-8">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
            Mais que um passeio, um momento de felicidade.
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-brand-ink md:text-6xl">
            Passeios pet com segurança, carinho e operação auditável.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-ink/70">
            Conectamos tutores a passeadores verificados, com acompanhamento
            pelo app, rotina do pet e uma estrutura operacional preparada para
            crescer.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={appDownloadHref}
              className="rounded bg-brand-purple px-6 py-3 text-center font-bold text-white shadow-soft transition hover:bg-brand-orange"
            >
              Baixar aplicativo
            </Link>
            <Link
              href={demoHref}
              className="rounded border border-brand-purple/20 bg-white px-6 py-3 text-center font-bold text-brand-purple transition hover:border-brand-orange hover:text-brand-orange"
            >
              Conhecer White Label
            </Link>
          </div>
        </div>

        <div className="relative min-h-[480px]">
          <div className="absolute inset-x-8 top-4 h-80 rounded bg-brand-blush" />
          <div className="absolute left-0 top-8 w-64 rounded-[30px] border-[9px] border-brand-ink bg-white p-4 shadow-soft">
            <div className="flex items-center gap-3">
              <Image src="/aumigao-logo.png" alt="" width={38} height={42} />
              <p className="text-sm font-bold text-brand-orange">App Tutor</p>
            </div>
            <p className="mt-4 text-xl font-black text-brand-ink">Passeio agendado</p>
            <div className="mt-5 h-14 rounded bg-brand-purple/10" />
            <div className="mt-3 h-10 rounded bg-brand-orange/20" />
            <div className="mt-3 h-24 rounded bg-brand-blush" />
          </div>
          <div className="absolute right-0 top-28 w-64 rounded-[30px] border-[9px] border-brand-ink bg-brand-purple p-4 text-white shadow-soft">
            <p className="text-sm font-bold text-brand-peach">App Passeador</p>
            <p className="mt-3 text-xl font-black">Agenda e solicitações</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <span className="h-16 rounded bg-white/15" />
              <span className="h-16 rounded bg-brand-orange" />
              <span className="h-16 rounded bg-white/15" />
            </div>
            <div className="mt-4 h-16 rounded bg-white/10" />
          </div>
          <div className="absolute bottom-0 left-8 right-8 rounded border border-brand-purple/10 bg-white p-5 shadow-soft">
            <p className="text-sm font-bold text-brand-orange">Operação auditável</p>
            <p className="mt-2 text-xl font-black text-brand-ink">
              Matching, score, kit, credenciamento e recovery operacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
