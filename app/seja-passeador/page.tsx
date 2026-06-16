import type { Metadata } from "next";
import Link from "next/link";
import { appDownloadHref } from "@/lib/content";
import { InnerPage } from "@/components/InnerPage";
import s from "@/components/inner.module.css";

export const metadata: Metadata = {
  title: "Seja passeador",
  description:
    "Seja um Aumigo parceiro: credenciamento, matching, kit operacional, ganhos, incentivos e reputação no Aumigão Walk.",
};

const tracks = [
  { icon: "◷", role: "Início", title: "Como funciona", items: ["Cadastro rápido pelo app", "Credenciamento com documentos", "Aprovação pela operação", "Solicitações organizadas pelo matching"] },
  { icon: "✓", role: "Elegibilidade", title: "Requisitos", items: ["Responsabilidade com os pets", "Pontualidade e presença", "Boa comunicação com tutores", "Compromisso com segurança"] },
  { icon: "⛉", role: "Verificação", title: "Credenciamento", items: ["Dados pessoais e documentos", "Validação de identidade (KYC)", "Análise da operação", "Ativação quando aprovado"] },
  { icon: "◫", role: "Operação", title: "Kit operacional", items: ["Identificação padronizada", "Orientações de atendimento", "Experiência consistente", "Validação do kit por foto"] },
  { icon: "$", role: "Renda", title: "Ganhos", items: ["Solicitações direto no app", "Agenda e repasses claros", "Gorjetas dos tutores", "Incentivos por qualidade"] },
  { icon: "★", role: "Carreira", title: "Reputação e evolução", items: ["Avaliações a cada passeio", "Score de qualidade", "Selo de passeador verificado", "Evolução com recovery e metas"] },
];

export default function SejaPasseadorPage() {
  return (
    <InnerPage
      center
      eyebrow="Seja passeador"
      title={<>Seja um <em>Aumigo</em> parceiro.</>}
      lead="Transforme cuidado com pets em renda profissional — com agenda, solicitações organizadas pelo matching, credenciamento, kit operacional, incentivos e uma reputação que cresce a cada passeio."
    >
      <div className={`${s.btnRow} ${s.btnRowCenter}`}>
        <Link href={appDownloadHref} className={`${s.btn} ${s.btnPrimary}`}>Quero me cadastrar →</Link>
        <Link href="/#plataforma-por-dentro" className={`${s.btn} ${s.btnGhost}`}>Ver como funciona</Link>
      </div>

      <div className={s.block}>
        <div className={s.tracks}>
          {tracks.map((track) => (
            <article key={track.title} className={s.track}>
              <span className={s.trackIcon}>{track.icon}</span>
              <p className={s.trackRole}>{track.role}</p>
              <h3>{track.title}</h3>
              <ul className={s.wlist}>
                {track.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </InnerPage>
  );
}
