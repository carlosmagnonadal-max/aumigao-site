import type { Metadata } from "next";
import Link from "next/link";
import { AudienceLayout } from "@/components/AudienceLayout";
import s from "@/components/inner.module.css";

export const metadata: Metadata = {
  title: "Seja passeador — renda recorrente, não bico",
  description:
    "Cuidar de cães virou profissão. Entre na rede global Aumigão por convite e aceite: credenciamento sério, repasses e gorjetas claros, reputação que cresce e direito a revisão. Valores ilustrativos.",
};

const ganhos = [
  {
    label: "Repasse por passeio",
    desc: "A maior parte do valor do passeio vai para você. A taxa da plataforma é transparente e definida por contrato — sem surpresa no fim do mês.",
    peso: 78,
  },
  {
    label: "Gorjetas dos tutores",
    desc: "100% das gorjetas são suas. Tutor satisfeito recompensa direto pelo app, fora do repasse.",
    peso: 100,
  },
  {
    label: "Incentivos por qualidade",
    desc: "Bônus por pontualidade, avaliação alta e constância. Quanto melhor o serviço, maior o ganho.",
    peso: 62,
  },
];

const credenciamento = [
  {
    icon: "⛉",
    role: "Identidade",
    title: "KYC desde o cadastro",
    items: ["Dados pessoais e documentos", "Validação de identidade", "Conferência da operação", "Ativação só quando aprovado"],
  },
  {
    icon: "◫",
    role: "Operação",
    title: "Kit e padrão",
    items: ["Identificação padronizada", "Orientações de atendimento", "Validação do kit por foto", "Experiência consistente para o tutor"],
  },
  {
    icon: "✓",
    role: "Compromisso",
    title: "O que esperamos",
    items: ["Responsabilidade com os pets", "Pontualidade e presença", "Boa comunicação com tutores", "Compromisso com segurança"],
  },
];

const faq = [
  {
    q: "Preciso de experiência prévia?",
    a: "Não exigimos currículo. Exigimos responsabilidade, pontualidade e cuidado real com os animais. O credenciamento e o kit operacional preparam você para atender no padrão Aumigão.",
  },
  {
    q: "Tenho vínculo CLT com vocês?",
    a: "Não. O passeador é um profissional parceiro, autônomo. Você não é funcionário do petshop nem da plataforma — você presta serviço com agenda e repasses próprios, com a estrutura da rede por trás.",
  },
  {
    q: "Quando e como eu recebo?",
    a: "Os repasses seguem o ciclo definido em contrato e ficam claros no app: cada passeio concluído entra no seu extrato, somado às gorjetas e aos incentivos. Sem caixa-preta.",
  },
  {
    q: "E se eu for suspenso?",
    a: "Suspensões seguem regras claras de reputação. Se você acredita que foi suspenso injustamente, tem direito a revisão: o caso é reanalisado pela operação antes de qualquer decisão definitiva.",
  },
];

export default function PasseadorPage() {
  const accent = "var(--accent)";

  return (
    <AudienceLayout
      aud="passeador"
      title={
        <>
          Cuidar de cães virou <em>profissão</em>. Com renda recorrente.
        </>
      }
    >
      {/* Hero: subtexto + CTAs */}
      <p className={s.lead} style={{ marginTop: 0 }}>
        Não é bico de fim de semana. É uma agenda própria de clientes recorrentes, dentro da rede
        global Aumigão — com solicitações organizadas pelo matching, repasses claros, gorjetas e uma
        reputação que cresce a cada passeio.
      </p>
      <div className={s.btnRow}>
        <Link href="/contato?perfil=passeador" className={`${s.btn} ${s.btnPrimary}`}>
          Quero me cadastrar →
        </Link>
        <Link href="/contato?perfil=passeador" className={`${s.btn} ${s.btnGhost}`}>
          Tenho dúvidas
        </Link>
      </div>

      {/* (2) Quanto dá pra ganhar */}
      <section className={s.block} id="ganhos">
        <div className={s.blockHead}>
          <p className={s.blockEye} style={{ color: accent }}>
            <i style={{ background: accent }} /> Quanto dá pra ganhar
          </p>
          <h2 className={s.h2}>
            Sua renda tem <em>três fontes</em> — e nenhuma é escondida.
          </h2>
          <p className={s.blockLead}>
            Quanto você ganha depende da sua agenda, da sua região e da sua avaliação. Quem atende
            bem e com constância constrói uma renda recorrente de verdade.
          </p>
        </div>

        <div className={`${s.tracks} ${s.tracks2}`} style={{ gridTemplateColumns: "1fr" }}>
          {ganhos.map((g) => (
            <article key={g.label} className={s.track}>
              <p className={s.trackRole} style={{ color: accent }}>
                {g.label}
              </p>
              <div
                style={{
                  height: 10,
                  borderRadius: 999,
                  background: "rgba(40,25,10,.10)",
                  overflow: "hidden",
                  margin: "4px 0 12px",
                }}
                aria-hidden="true"
              >
                <div
                  style={{
                    width: `${g.peso}%`,
                    height: "100%",
                    borderRadius: 999,
                    background: accent,
                  }}
                />
              </div>
              <p>{g.desc}</p>
            </article>
          ))}
        </div>

        <p className={s.note} style={{ textAlign: "left" }}>
          <strong>Valores e proporções ilustrativos.</strong> Os ganhos reais variam por região,
          plano do petshop, volume de passeios e avaliação. Os percentuais de repasse e a taxa da
          plataforma são definidos em contrato e ficam visíveis no app antes de você aceitar.
        </p>
      </section>

      {/* (3) Rede global */}
      <section className={s.block} id="rede">
        <div className={s.blockHead}>
          <p className={s.blockEye} style={{ color: accent }}>
            <i style={{ background: accent }} /> Rede global
          </p>
          <h2 className={s.h2}>
            Uma rede, vários petshops — você entra por <em>convite e aceite</em>.
          </h2>
          <p className={s.blockLead}>
            O passeador Aumigão não pertence a um único petshop: você faz parte de uma rede global
            compartilhada. Cada petshop convida você para a operação dele, e você aceita o vínculo —
            podendo atender mais de um, com uma única identidade e reputação que segue com você.
          </p>
        </div>

        <ol className={s.steps}>
          <li>Um petshop da rede convida você para a operação dele.</li>
          <li>Você revê as condições (repasse, região, regras) e aceita o vínculo.</li>
          <li>As solicitações chegam organizadas pelo matching, na sua agenda.</li>
          <li>Sua reputação é única e acompanha você por toda a rede.</li>
        </ol>
      </section>

      {/* (4) Credenciamento (KYC) */}
      <section className={s.block} id="credenciamento">
        <div className={s.blockHead}>
          <p className={s.blockEye} style={{ color: accent }}>
            <i style={{ background: accent }} /> Credenciamento
          </p>
          <h2 className={s.h2}>
            Sério desde o <em>cadastro</em>.
          </h2>
          <p className={s.blockLead}>
            Tutor confia porque a porta de entrada é exigente. Antes de receber a primeira
            solicitação, você passa por verificação de identidade e aprovação da operação.
          </p>
        </div>

        <div className={s.tracks}>
          {credenciamento.map((c) => (
            <article key={c.title} className={s.track}>
              <span className={s.trackIcon} style={{ color: accent, background: "rgba(109,43,189,.12)" }}>
                {c.icon}
              </span>
              <p className={s.trackRole} style={{ color: accent }}>
                {c.role}
              </p>
              <h3>{c.title}</h3>
              <ul className={s.wlist}>
                {c.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* (5) Reputação / Score + direito de revisão */}
      <section className={s.block} id="reputacao">
        <div className={s.blockHead}>
          <p className={s.blockEye} style={{ color: accent }}>
            <i style={{ background: accent }} /> Reputação e score
          </p>
          <h2 className={s.h2}>
            Sua reputação é o seu <em>patrimônio</em>.
          </h2>
          <p className={s.blockLead}>
            A cada passeio você recebe avaliação. Isso vira um score de qualidade que abre acesso a
            mais solicitações, melhores incentivos e o selo de passeador verificado.
          </p>
        </div>

        <div className={`${s.tracks} ${s.tracks2}`}>
          <article className={s.track}>
            <span className={s.trackIcon} style={{ color: accent, background: "rgba(109,43,189,.12)" }}>
              ★
            </span>
            <p className={s.trackRole} style={{ color: accent }}>
              Como cresce
            </p>
            <h3>Avaliação que abre portas</h3>
            <ul className={s.wlist}>
              <li>Avaliação dos tutores a cada passeio</li>
              <li>Score de qualidade e selo verificado</li>
              <li>Mais solicitações e melhores incentivos</li>
              <li>Trilha de recovery para voltar a subir</li>
            </ul>
          </article>

          <article className={s.track}>
            <span className={s.trackIcon} style={{ color: accent, background: "rgba(109,43,189,.12)" }}>
              ⚖
            </span>
            <p className={s.trackRole} style={{ color: accent }}>
              Direito de revisão
            </p>
            <h3>Foi suspenso injustamente? Você tem direito a revisão.</h3>
            <p>
              Nenhuma suspensão é definitiva no automático. Se você discorda de uma penalidade, pode
              pedir revisão: a operação reanalisa o caso, ouve o seu lado e só então decide. Regra
              clara, dos dois lados.
            </p>
          </article>
        </div>
      </section>

      {/* (6) FAQ */}
      <section className={s.block} id="faq">
        <div className={s.blockHead}>
          <p className={s.blockEye} style={{ color: accent }}>
            <i style={{ background: accent }} /> Perguntas frequentes
          </p>
          <h2 className={s.h2}>Antes de se cadastrar.</h2>
        </div>

        <div className={`${s.tracks} ${s.tracks2}`}>
          {faq.map((f) => (
            <article key={f.q} className={s.track}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* (7) CTA final */}
      <section className={s.block} id="cadastro">
        <div className={`${s.blockHead} ${s.blockHeadCenter}`}>
          <h2 className={s.h2} style={{ marginInline: "auto" }}>
            Pronto para virar <em>passeador Aumigão</em>?
          </h2>
          <p className={s.blockLead} style={{ marginInline: "auto" }}>
            Comece o cadastro agora. A operação entra em contato para credenciar você e liberar as
            primeiras solicitações.
          </p>
        </div>
        <div className={`${s.btnRow} ${s.btnRowCenter}`}>
          <Link href="/contato?perfil=passeador" className={`${s.btn} ${s.btnPrimary}`}>
            Quero me cadastrar →
          </Link>
          <Link href="/contato?perfil=passeador" className={`${s.btn} ${s.btnGhost}`}>
            Tenho dúvidas
          </Link>
        </div>
      </section>
    </AudienceLayout>
  );
}
