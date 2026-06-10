import type { Metadata } from "next";
import Link from "next/link";
import { appDownloadHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Seja passeador",
  description:
    "Seja um Aumigo parceiro: credenciamento, matching, kit operacional, ganhos, incentivos e reputação no Aumigão Walk.",
};

const tracks = [
  {
    icon: "◷",
    role: "Início",
    title: "Como funciona",
    items: [
      "Cadastro rápido pelo app",
      "Credenciamento com documentos",
      "Aprovação pela operação",
      "Solicitações organizadas pelo matching",
    ],
  },
  {
    icon: "✓",
    role: "Elegibilidade",
    title: "Requisitos",
    items: [
      "Responsabilidade com os pets",
      "Pontualidade e presença",
      "Boa comunicação com tutores",
      "Compromisso com segurança",
    ],
  },
  {
    icon: "⛉",
    role: "Verificação",
    title: "Credenciamento",
    items: [
      "Dados pessoais e documentos",
      "Validação de identidade (KYC)",
      "Análise da operação",
      "Ativação quando aprovado",
    ],
  },
  {
    icon: "◫",
    role: "Operação",
    title: "Kit operacional",
    items: [
      "Identificação padronizada",
      "Orientações de atendimento",
      "Experiência consistente",
      "Validação do kit por foto",
    ],
  },
  {
    icon: "$",
    role: "Renda",
    title: "Ganhos",
    items: [
      "Solicitações direto no app",
      "Agenda e repasses claros",
      "Gorjetas dos tutores",
      "Incentivos por qualidade",
    ],
  },
  {
    icon: "★",
    role: "Carreira",
    title: "Reputação e evolução",
    items: [
      "Avaliações a cada passeio",
      "Score de qualidade",
      "Selo de passeador verificado",
      "Evolução com recovery e metas",
    ],
  },
];

export default function SejaPasseadorPage() {
  return (
    <>
      <section className="ov-section ov-center ov-grain">
        <span className="ov-glow" />
        <div className="ov-wrap">
          <div className="ov-section-head">
            <p className="ov-eyebrow">
              <span className="ov-dot ov-dot-ember" /> Seja passeador
            </p>
            <h1 className="ov-ptitle">
              Seja um <em>Aumigo</em> parceiro.
            </h1>
            <p className="ov-lead">
              Transforme cuidado com pets em renda profissional — com agenda,
              solicitações organizadas pelo matching, credenciamento, kit
              operacional, incentivos e uma reputação que cresce a cada passeio.
            </p>
            <div className="ov-cta-row">
              <Link href={appDownloadHref} className="ov-btn ov-btn-primary">
                Quero me cadastrar <span className="ov-arr">→</span>
              </Link>
              <Link href="/#funciona" className="ov-btn ov-btn-ghost">
                Ver como funciona
              </Link>
            </div>
          </div>

          <div className="ov-tracks">
            {tracks.map((track) => (
              <article key={track.title} className="ov-track">
                <span className="ov-track-icon">{track.icon}</span>
                <p className="ov-role">{track.role}</p>
                <h3>{track.title}</h3>
                <ul className="ov-wlist">
                  {track.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
