import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Política de privacidade do Aumigão Walk — em fase final de revisão jurídica, em conformidade com a LGPD.",
};

// NOTA: a minuta completa da Política de Privacidade (mapeada conforme o tratamento
// real de dados e a LGPD) está guardada na branch `legal/minutas-lgpd`. Publicar
// aqui somente após o jurídico/encarregado preencher os campos pendentes
// (controlador, encarregado/DPO, prazos de retenção, contato).

export default function PrivacidadePage() {
  return (
    <section className="ov-section ov-center ov-grain">
      <span className="ov-glow" />
      <div className="ov-wrap">
        <div className="ov-section-head ov-section-center">
          <p className="ov-eyebrow">
            <span className="ov-dot ov-dot-ember" /> Privacidade
          </p>
          <h1 className="ov-ptitle">Política de privacidade</h1>
          <p className="ov-lead">
            Estamos finalizando a revisão jurídica da nossa política. Em breve a
            versão completa será publicada aqui.
          </p>
        </div>

        <article className="ov-legal">
          <div className="ov-legal-sec">
            <h2>Em revisão jurídica</h2>
            <p>
              A Política de Privacidade do Aumigão Walk está em fase final de
              revisão, redigida em conformidade com a Lei Geral de Proteção de
              Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </div>
          <div className="ov-legal-sec">
            <h2>Nosso compromisso</h2>
            <p>
              Tratamos os dados pessoais apenas no necessário para operar o serviço
              (cadastro, agendamento, pagamento e segurança), com controle de
              acesso, cifragem de senhas e acesso restrito a documentos sensíveis.
              Você poderá exercer seus direitos de titular assim que a versão final
              for publicada.
            </p>
          </div>
          <div className="ov-legal-sec">
            <h2>Dúvidas sobre seus dados</h2>
            <p>
              Enquanto a versão completa não é publicada, fale com o nosso time pela
              página de contato que orientamos o seu caso.
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
