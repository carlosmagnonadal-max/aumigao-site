import Link from "next/link";
import Image from "next/image";
import { appDownloadHref, demoHref } from "@/lib/content";

export function Hero() {
  return (
    <section className="overflow-hidden bg-brand-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-20 lg:px-8">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
            Para tutores que querem ver o pet bem
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-brand-ink md:text-6xl">
            Passeios felizes para pets, dias mais leves para tutores.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-ink/70">
            O Aumigão Walk aproxima seu pet de passeadores de confiança para
            transformar a caminhada em cuidado, gasto de energia e alegria.
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
              Expandir meu negócio pet
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px]">
          <div className="absolute inset-x-10 top-2 h-72 rounded bg-brand-blush" />
          <div className="absolute left-0 top-10 w-72 rounded border border-brand-purple/10 bg-white p-5 shadow-soft">
            <div className="flex items-center gap-3">
              <Image src="/aumigao-logo.png" alt="" width={46} height={50} />
              <p className="text-sm font-bold text-brand-orange">Passeio marcado</p>
            </div>
            <p className="mt-4 text-2xl font-black text-brand-ink">
              Hoje tem caminhada, cheiros novos e energia boa.
            </p>
          </div>
          <div className="absolute right-0 top-32 w-80 rounded border border-brand-purple/10 bg-brand-purple p-5 text-white shadow-soft">
            <p className="text-sm font-bold text-brand-peach">Tutor tranquilo</p>
            <p className="mt-3 text-2xl font-black">Acompanhe o cuidado do pet com simplicidade.</p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <span className="h-16 rounded bg-white/15" />
              <span className="h-16 rounded bg-brand-orange" />
              <span className="h-16 rounded bg-white/15" />
            </div>
          </div>
          <div className="absolute bottom-0 left-10 w-72 rounded border border-brand-purple/10 bg-white p-5 shadow-soft">
            <p className="text-sm font-bold text-brand-orange">Expansão White Label</p>
            <p className="mt-3 text-2xl font-black text-brand-ink">
              Sua marca levando mais passeios para mais famílias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
