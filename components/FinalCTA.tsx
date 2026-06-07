import Link from "next/link";
import { appDownloadHref, demoHref } from "@/lib/content";

export function FinalCTA() {
  return (
    <section className="bg-brand-purple px-5 py-16 text-white lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-black md:text-5xl">
          Pronto para transformar passeios em uma operação segura e escalável?
        </h2>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href={appDownloadHref}
            className="rounded bg-white px-6 py-3 font-bold text-brand-purple transition hover:bg-brand-peach hover:text-brand-ink"
          >
            Baixar app
          </Link>
          <Link
            href={demoHref}
            className="rounded border border-white/30 px-6 py-3 font-bold text-white transition hover:border-brand-peach hover:text-brand-peach"
          >
            Solicitar demonstração
          </Link>
        </div>
      </div>
    </section>
  );
}
