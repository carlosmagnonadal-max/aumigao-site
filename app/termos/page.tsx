import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de uso",
  description:
    "Termos de uso do Aumigão Walk — em fase final de revisão jurídica para publicação.",
};

// NOTA: a minuta completa de Termos (estruturada conforme o serviço e a LGPD) está
// guardada na branch `legal/minutas-lgpd`. Publicar aqui somente após o jurídico
// preencher os campos pendentes (CNPJ, foro, contato, etc.).

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
            Estamos finalizando a revisão jurídica dos nossos termos. Em breve a
            versão completa será publicada aqui.
          </p>
        </div>

        <article className="ov-legal">
          <div className="ov-legal-sec">
            <h2>Em revisão jurídica</h2>
            <p>
              Os Termos de Uso do Aumigão Walk — plataforma que conecta tutores a
              passeadores verificados, com agendamento, pagamento e operação
              auditável — estão em fase final de revisão para publicação.
            </p>
          </div>
          <div className="ov-legal-sec">
            <h2>Enquanto isso</h2>
            <p>
              Qualquer dúvida sobre o serviço, responsabilidades ou condições de
              uso pode ser tratada diretamente com o nosso time. O tratamento de
              dados pessoais segue a nossa{" "}
              <Link href="/privacidade">Política de Privacidade</Link>, em
              conformidade com a LGPD (Lei nº 13.709/2018).
            </p>
          </div>
        </article>

        <div className="ov-cta-row" style={{ justifyContent: "center" }}>
          <Link href="/contato" className="ov-btn ov-btn-primary">
            Falar com o time <span className="ov-arr">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
