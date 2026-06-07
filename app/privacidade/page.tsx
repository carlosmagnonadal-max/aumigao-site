import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Política de privacidade do Aumigão Walk em fase de revisão jurídica.",
};

export default function PrivacidadePage() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <article className="mx-auto max-w-4xl rounded bg-white p-8 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
          Privacidade
        </p>
        <h1 className="mt-3 text-4xl font-black text-brand-ink">
          Política de privacidade
        </h1>
        <p className="mt-5 leading-7 text-brand-ink/70">
          Esta página está em fase de revisão jurídica para publicação da
          política final de privacidade do Aumigão Walk.
        </p>
        <div className="mt-8 grid gap-6 text-brand-ink/70">
          <section>
            <h2 className="text-xl font-black text-brand-ink">1. Dados e finalidade</h2>
            <p className="mt-2 leading-7">
              A versão final explicará quais dados podem ser tratados e para
              quais finalidades.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-brand-ink">2. Segurança</h2>
            <p className="mt-2 leading-7">
              As práticas de proteção e governança de dados serão descritas nos
              canais oficiais.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-brand-ink">3. Direitos do titular</h2>
            <p className="mt-2 leading-7">
              Solicitações e dúvidas sobre privacidade terão canal indicado na
              versão final.
            </p>
          </section>
        </div>
      </article>
    </section>
  );
}
