import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de privacidade",
  description:
    "Placeholder organizado para a futura politica de privacidade do Aumigao Walk.",
};

export default function PrivacidadePage() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <article className="mx-auto max-w-4xl rounded bg-white p-8 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-forest">
          Privacidade
        </p>
        <h1 className="mt-3 text-4xl font-black text-brand-ink">
          Politica de privacidade
        </h1>
        <div className="mt-8 grid gap-6 text-brand-ink/70">
          <section>
            <h2 className="text-xl font-black text-brand-ink">1. Dados coletados</h2>
            <p className="mt-2 leading-7">
              Conteudo reservado para detalhar dados pessoais, finalidade e base
              legal em versao futura.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-brand-ink">2. Uso das informacoes</h2>
            <p className="mt-2 leading-7">
              Espaco reservado para explicar tratamento, comunicacao e melhoria
              de servicos.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-brand-ink">3. Direitos do titular</h2>
            <p className="mt-2 leading-7">
              Espaco reservado para direitos, canais de contato e solicitacoes.
            </p>
          </section>
        </div>
      </article>
    </section>
  );
}
