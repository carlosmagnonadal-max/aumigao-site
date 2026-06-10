import type { Metadata } from "next";
import Link from "next/link";
import { appDownloadHref } from "@/lib/content";

export const metadata: Metadata = {
  title: "Como funciona",
  description:
    "Entenda como o Aumigão Walk conecta tutores, passeadores verificados e operação auditável.",
};

const timelines = [
  {
    role: "Tutor",
    title: "Fluxo do tutor",
    items: [
      "Agenda o passeio pelo aplicativo",
      "Escolhe pet, duração e modalidade",
      "Acompanha o status da jornada",
      "Avalia a experiência ao final",
    ],
  },
  {
    role: "Passeador",
    title: "Fluxo do passeador",
    items: [
      "Passa por cadastro e credenciamento",
      "Mantém documentos e kit operacional validados",
      "Recebe solicitações e acompanha agenda",
      "Evolui com score, reputação e histórico",
    ],
  },
  {
    role: "Operação",
    title: "Fluxo operacional",
    items: [
      "Monitora matching e passeios",
      "Acompanha alertas e qualidade",
      "Apoia suporte e recovery operacional",
      "Fortalece a rede com reputação e melhoria contínua",
    ],
  },
];

export default function ComoFuncionaPage() {
  return (
    <section className="ov-section ov-center ov-grain">
      <span className="ov-glow" />
      <div className="ov-wrap">
        <div className="ov-section-head">
          <p className="ov-eyebrow">
            <span className="ov-dot ov-dot-ember" /> Como funciona
          </p>
          <h1 className="ov-ptitle">
            Segurança e carinho com <em>operação</em> por trás.
          </h1>
          <p className="ov-lead">
            O Aumigão Walk organiza a jornada de tutores, passeadores e operação
            para que cada passeio seja mais previsível, auditável e feliz.
          </p>
          <div className="ov-cta-row">
            <Link href={appDownloadHref} className="ov-btn ov-btn-primary">
              Baixar o aplicativo <span className="ov-arr">→</span>
            </Link>
            <Link href="/seja-passeador" className="ov-btn ov-btn-ghost">
              Quero ser passeador
            </Link>
          </div>
        </div>

        <div className="ov-tracks">
          {timelines.map((timeline) => (
            <article key={timeline.title} className="ov-track">
              <p className="ov-role">{timeline.role}</p>
              <h3>{timeline.title}</h3>
              <ol className="ov-steps">
                {timeline.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
