import type { Metadata } from "next";
import Link from "next/link";
import { InnerPage } from "@/components/InnerPage";
import s from "@/components/inner.module.css";

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
    <InnerPage
      center
      eyebrow="Termos"
      title="Termos de uso"
      lead="Os termos do Aumigão Walk são organizados por perfil de usuário. Selecione o documento que se aplica à sua relação com a Plataforma."
    >
      <div className={s.cards}>
        {docs.map((d) => (
          <Link key={d.href} href={d.href} className={s.card}>
            <span className={s.cardIcon}>{d.icon}</span>
            <span className={s.cardTitle}>{d.title}</span>
            <span className={s.cardDesc}>{d.desc}</span>
            <span className={s.cardArr}>Ler documento →</span>
          </Link>
        ))}
      </div>
      <p className={s.note}>
        Dúvidas sobre os termos? <Link href="/contato">Fale com o nosso time</Link>. Veja também nossa{" "}
        <Link href="/privacidade">Política de Privacidade</Link>.
      </p>
    </InnerPage>
  );
}
