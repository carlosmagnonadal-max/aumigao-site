import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de uso",
  description:
    "Placeholder organizado para os futuros termos de uso do Aumigao Walk.",
};

export default function TermosPage() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <article className="mx-auto max-w-4xl rounded bg-white p-8 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-forest">
          Termos
        </p>
        <h1 className="mt-3 text-4xl font-black text-brand-ink">Termos de uso</h1>
        <div className="mt-8 grid gap-6 text-brand-ink/70">
          <section>
            <h2 className="text-xl font-black text-brand-ink">1. Introducao</h2>
            <p className="mt-2 leading-7">
              Conteudo juridico institucional a ser revisado e publicado em
              versao final.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-brand-ink">2. Uso da plataforma</h2>
            <p className="mt-2 leading-7">
              Espaco reservado para regras de utilizacao, responsabilidades e
              limites do servico.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-brand-ink">3. Atualizacoes</h2>
            <p className="mt-2 leading-7">
              Espaco reservado para politica de alteracoes futuras dos termos.
            </p>
          </section>
        </div>
      </article>
    </section>
  );
}
