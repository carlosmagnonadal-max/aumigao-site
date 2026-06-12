import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos — Aumigão Walk",
  description:
    "Termos de uso do Aumigão Walk — documentos específicos por perfil de usuário: Tutor, Passeador, Empresa Parceira e Termos Gerais.",
};

const docs = [
  {
    href: "/termos/gerais",
    icon: "📋",
    title: "Termos Gerais da Plataforma",
    desc: "Regras comuns a todos os usuários: definições, natureza do serviço, cadastro, conduta proibida e disposições gerais.",
  },
  {
    href: "/termos/tutor",
    icon: "🐾",
    title: "Termos do Tutor",
    desc: "Regras específicas para quem agenda passeios, incluindo cancelamentos, reembolsos e tratamento de dados.",
  },
  {
    href: "/termos/passeador",
    icon: "🦮",
    title: "Termos do Passeador",
    desc: "Regras para prestadores de serviço: natureza autônoma, responsabilidade pela execução, indenidade e suspensão/revisão.",
  },
  {
    href: "/termos/white-label",
    icon: "🏢",
    title: "Contrato White Label",
    desc: "Contrato B2B para empresas parceiras que operam a Plataforma sob marca própria: SLA, responsabilidade operacional e LGPD.",
  },
];

export default function TermosPage() {
  return (
    <section className="ov-section ov-center ov-grain">
      <span className="ov-glow" />
      <div className="ov-wrap">
        <div className="ov-section-head ov-section-center">
          <p className="ov-eyebrow">
            <span className="ov-dot ov-dot-ember" /> Termos
          </p>
          <h1 className="ov-ptitle">Termos de uso</h1>
          <p className="ov-lead">
            Os termos do Aumigão Walk são organizados por perfil de usuário.
            Selecione o documento que se aplica à sua relação com a Plataforma.
          </p>
        </div>

        <div className="ov-legal-cards">
          {docs.map((d) => (
            <Link key={d.href} href={d.href} className="ov-legal-card">
              <span className="ov-legal-card-icon">{d.icon}</span>
              <span className="ov-legal-card-title">{d.title}</span>
              <span className="ov-legal-card-desc">{d.desc}</span>
              <span className="ov-legal-card-arr">Ler documento →</span>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <p style={{ fontSize: ".9rem", color: "var(--ov-text-2)" }}>
            Dúvidas sobre os termos?{" "}
            <Link href="/contato" style={{ color: "var(--ov-ember)", textDecoration: "underline" }}>
              Fale com o nosso time
            </Link>
            . Veja também nossa{" "}
            <Link href="/privacidade" style={{ color: "var(--ov-ember)", textDecoration: "underline" }}>
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
