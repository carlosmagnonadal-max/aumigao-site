import type { Metadata } from "next";
import Link from "next/link";
import { WhiteLabelShowroom } from "@/components/WhiteLabelShowroom";

export const metadata: Metadata = {
  title: "Demo White Label",
  description:
    "Showroom conceitual White Label do Aumigão Walk com Matching, Score, Recovery, Financeiro, Rede, Credenciamento, Operação e White Label.",
};

export default function DemoWhiteLabelPage() {
  return (
    <>
      <section className="ov-section ov-center ov-grain">
        <span className="ov-glow" />
        <div className="ov-wrap">
          <div className="ov-section-head ov-section-center">
            <p className="ov-eyebrow">
              <span className="ov-dot ov-dot-ember" /> Showroom conceitual
            </p>
            <h1 className="ov-ptitle">
              Entenda a operação <em>White Label</em> sem expor telas internas.
            </h1>
            <p className="ov-lead">
              A demo apresenta os conceitos operacionais da plataforma em uma
              linguagem própria, protegida e comercial: módulos, fluxos,
              indicadores e arquitetura.
            </p>
            <div className="ov-cta-row">
              <Link href="/contato" className="ov-btn ov-btn-primary">
                Solicitar diagnóstico <span className="ov-arr">→</span>
              </Link>
              <Link href="/white-label" className="ov-btn ov-btn-ghost">
                Ver a proposta White Label
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ov-section ov-flow ov-grain">
        <div className="ov-wrap">
          <WhiteLabelShowroom />
        </div>
      </section>

      <section className="sticky bottom-0 z-20 border-t border-white/10 bg-[#140f1b]/90 px-5 py-4 backdrop-blur lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-black text-[#f6f1f8]">
            Pronto para avaliar a operação na sua marca?
          </p>
          <Link href="/contato" className="ov-btn ov-btn-primary">
            Solicitar diagnóstico <span className="ov-arr">→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
