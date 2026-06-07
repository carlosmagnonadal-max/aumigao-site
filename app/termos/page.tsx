import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de uso",
  description:
    "Termos institucionais do Aumigão Walk em fase de revisão jurídica.",
};

export default function TermosPage() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <article className="mx-auto max-w-4xl rounded bg-white p-8 shadow-soft">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
          Termos
        </p>
        <h1 className="mt-3 text-4xl font-black text-brand-ink">Termos de uso</h1>
        <p className="mt-5 leading-7 text-brand-ink/70">
          Esta página está em fase de revisão jurídica para publicação da versão
          final dos termos aplicáveis ao Aumigão Walk.
        </p>
        <div className="mt-8 grid gap-6 text-brand-ink/70">
          <section>
            <h2 className="text-xl font-black text-brand-ink">1. Uso da plataforma</h2>
            <p className="mt-2 leading-7">
              As regras de uso serão apresentadas de forma clara para tutores,
              passeadores e empresas parceiras.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-brand-ink">2. Responsabilidades</h2>
            <p className="mt-2 leading-7">
              A versão final detalhará responsabilidades, limites do serviço e
              canais de atendimento.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-black text-brand-ink">3. Atualizações</h2>
            <p className="mt-2 leading-7">
              Mudanças futuras serão comunicadas pelos canais oficiais do
              Aumigão Walk.
            </p>
          </section>
        </div>
      </article>
    </section>
  );
}
