import type { Metadata } from "next";
import { AppDownload } from "@/components/AppDownload";
import { AppShowcase } from "@/components/AppShowcase";
import { AudienceSections } from "@/components/AudienceSections";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Hero } from "@/components/Hero";
import { InstitutionalSection } from "@/components/InstitutionalSection";
import { OperationalDemo } from "@/components/OperationalDemo";
import { TrustSection } from "@/components/TrustSection";
import { WhiteLabelCTA } from "@/components/WhiteLabelCTA";

export const metadata: Metadata = {
  title: "Aumigão Walk",
  description:
    "Plataforma de passeios pet com operação auditável, app para tutores e passeadores, painel operacional e White Label para negócios pet.",
};

const flow = [
  "Tutor agenda o passeio",
  "Passeador verificado aceita",
  "Operação acompanha",
  "Tutor avalia",
  "Rede evolui com reputação e qualidade",
];

export default function Home() {
  return (
    <>
      <Hero />
      <TrustSection />
      <AppShowcase />

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
              Como funciona
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-4xl">
              Um fluxo simples por fora e organizado por dentro.
            </h2>
          </div>
          <div className="mt-10 grid gap-3 md:grid-cols-5">
            {flow.map((item, index) => (
              <article key={item} className="rounded border border-brand-purple/10 bg-brand-cloud p-5">
                <span className="text-sm font-black text-brand-orange">
                  0{index + 1}
                </span>
                <p className="mt-3 text-lg font-black text-brand-ink">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AudienceSections />
      <WhiteLabelCTA />
      <OperationalDemo />
      <InstitutionalSection />
      <AppDownload />
      <FAQ />
      <FinalCTA />
    </>
  );
}
