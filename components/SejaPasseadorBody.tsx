"use client";

import { useSearchParams } from "next/navigation";
import { WalkerLeadForm } from "./WalkerLeadForm";
import s from "./inner.module.css";

const steps = [
  {
    icon: "①",
    title: "Cadastro rápido",
    desc: "Preencha o formulário abaixo. Nossa equipe te chama no WhatsApp para dar continuidade.",
  },
  {
    icon: "②",
    title: "Aprovação com verificação de segurança",
    desc: "Você envia seus documentos pelo app e passamos pela validação de identidade (KYC). Tutores e pets ficam protegidos.",
  },
  {
    icon: "③",
    title: "Aceite passeios",
    desc: "Defina seus horários e regiões no app Walk. O matching te manda demanda perto de você — você escolhe o que aceitar.",
  },
  {
    icon: "④",
    title: "Receba via PIX",
    desc: "Seus ganhos aparecem discriminados no app passeio a passeio: repasse, gorjetas e incentivos. Saque simples.",
  },
];

const trust = [
  {
    icon: "🔒",
    title: "Verificação de antecedentes",
    desc: "Todos os passeadores passam por validação de identidade e análise de antecedentes antes de ativar.",
  },
  {
    icon: "📋",
    title: "Suporte da operação",
    desc: "Dúvidas, contestações ou suporte — nossa equipe está disponível pelo app e pelo WhatsApp.",
  },
  {
    icon: "⭐",
    title: "Reputação que cresce",
    desc: "Seu score sobe a cada passeio bem feito, abrindo mais oportunidades na rede.",
  },
];

export function SejaPasseadorBody() {
  const params = useSearchParams();
  const indicationId = params.get("ind") ?? undefined;
  const tenantSlug = params.get("t") ?? undefined;

  return (
    <>
      {/* COMO FUNCIONA */}
      <div className={s.block}>
        <div className={`${s.blockHead} ${s.blockHeadCenter}`}>
          <p className={s.blockEye}>
            <i /> Como funciona
          </p>
          <h2 className={s.h2}>
            Do cadastro ao <em>primeiro PIX</em> — em 4 passos.
          </h2>
        </div>

        <div className={s.dsteps}>
          {steps.map((step, i) => (
            <div key={step.title} className={s.dstep}>
              <span>{i + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* POR QUE VALE A PENA */}
      <div className={s.block}>
        <div className={`${s.blockHead} ${s.blockHeadCenter}`}>
          <p className={s.blockEye}>
            <i /> Por que vale a pena
          </p>
          <h2 className={s.h2}>
            Renda recorrente, <em>não bico.</em>
          </h2>
          <p className={s.blockLead} style={{ marginInline: "auto", textAlign: "center" }}>
            Na Aumigão, passear deixa de ser favor de fim de tarde e vira profissão: agenda própria, ganhos transparentes e uma reputação que abre portas na rede inteira.
          </p>
        </div>

        <div className={`${s.tracks} ${s.tracks2}`} style={{ maxWidth: 760, marginInline: "auto" }}>
          {[
            {
              icon: "📅",
              role: "Flexibilidade",
              title: "Você define os horários",
              items: [
                "Trabalha quando quiser",
                "Escolhe suas regiões no app",
                "Aceita ou recusa cada passeio",
                "Sem chefe, sem horário fixo",
              ],
            },
            {
              icon: "💸",
              role: "Renda",
              title: "Receba por cada passeio",
              items: [
                "Repasse direto via PIX",
                "Gorjetas dos tutores",
                "Incentivos por qualidade",
                "Tudo discriminado no app",
              ],
            },
          ].map((track) => (
            <article key={track.title} className={s.track}>
              <span className={s.trackIcon}>{track.icon}</span>
              <p className={s.trackRole}>{track.role}</p>
              <h3>{track.title}</h3>
              <ul className={s.wlist}>
                {track.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* FORMULÁRIO */}
      <div
        className={s.block}
        id="cadastro"
        style={{ scrollMarginTop: 80 }}
      >
        <div className={`${s.blockHead} ${s.blockHeadCenter}`}>
          <p className={s.blockEye}>
            <i /> Comece agora
          </p>
          <h2 className={s.h2}>
            Deixe seu contato — <em>a gente te chama.</em>
          </h2>
          <p className={s.blockLead} style={{ marginInline: "auto", textAlign: "center" }}>
            Preencha abaixo e nossa equipe entra em contato pelo WhatsApp para dar continuidade ao seu cadastro como passeador.
          </p>
        </div>

        <div style={{ maxWidth: 480, marginInline: "auto" }}>
          <WalkerLeadForm
            indicationId={indicationId}
            tenantSlug={tenantSlug}
          />
        </div>
      </div>

      {/* CONFIANÇA */}
      <div className={s.block}>
        <div className={`${s.blockHead} ${s.blockHeadCenter}`}>
          <p className={s.blockEye}>
            <i /> Segurança e suporte
          </p>
          <h2 className={s.h2}>
            Uma rede <em>séria</em> — para você e para os tutores.
          </h2>
        </div>

        <div className={s.tracks}>
          {trust.map((item) => (
            <article key={item.title} className={s.track}>
              <span className={s.trackIcon}>{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* CTA FINAL */}
      <div className={s.block}>
        <div
          style={{
            background: "linear-gradient(135deg, rgba(109,43,189,.1), rgba(143,69,221,.05))",
            border: "1px solid rgba(109,43,189,.24)",
            borderRadius: 24,
            padding: "clamp(28px,4vw,48px)",
            textAlign: "center",
          }}
        >
          <p className={s.eyebrow} style={{ justifyContent: "center" }}>
            <i /> Sem mensalidade · sem compromisso
          </p>
          <h2
            className={s.h1}
            style={{
              fontSize: "clamp(28px,4vw,48px)",
              marginInline: "auto",
              marginBottom: 16,
            }}
          >
            Pronto para começar?
          </h2>
          <p
            className={s.lead}
            style={{ marginInline: "auto", textAlign: "center" }}
          >
            Cadastro gratuito, verificação de antecedentes incluída, ganhos via PIX.
            Sem mensalidade e sem vínculo empregatício.
          </p>
          <div className={`${s.btnRow} ${s.btnRowCenter}`}>
            <a href="#cadastro" className={`${s.btn} ${s.btnPrimary}`}>
              Preencher o cadastro →
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
