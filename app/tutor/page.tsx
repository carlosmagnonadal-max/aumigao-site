import type { Metadata } from "next";
import Link from "next/link";
import { AudienceLayout } from "@/components/AudienceLayout";
import s from "@/components/inner.module.css";

export const metadata: Metadata = {
  title: "Para tutores — você sai, ele passeia, você vê tudo",
  description:
    "Seu cão passeia com um passeador verificado e você acompanha tudo: mapa ao vivo, fotos do passeio e avaliação. Reembolso integral se o passeio falhar.",
};

const seguranca = [
  {
    icon: "⛉",
    role: "Verificação",
    title: "Passeador verificado (KYC)",
    desc: "Documento, identidade e credenciamento conferidos antes de pegar o seu cão. Só passeia quem passou pela operação.",
  },
  {
    icon: "◉",
    role: "Ao vivo",
    title: "Mapa em tempo real",
    desc: "Acompanhe o trajeto pelo mapa enquanto o passeio acontece. Você sabe onde seu cão está, do começo ao fim.",
  },
  {
    icon: "❍",
    role: "Registro",
    title: "Fotos do passeio",
    desc: "Receba fotos e o resumo de cada passeio direto no app. A prova de que correu tudo bem fica com você.",
  },
];

const passos = [
  {
    n: "Baixe o app da sua marca",
    desc: "Se o seu petshop usa Aumigão, ele tem um app com a marca dele. Você baixa, faz seu login e pronto.",
  },
  {
    n: "Cadastre seu pet",
    desc: "Nome, porte, temperamento e cuidados. O passeador recebe tudo que precisa saber sobre o seu cão.",
  },
  {
    n: "Agende o passeio",
    desc: "Escolha dia, horário e modalidade. O matching organiza um passeador credenciado para você.",
  },
  {
    n: "Acompanhe e avalie",
    desc: "Veja o mapa ao vivo, receba as fotos e avalie ao final. Sua nota mantém a rede com qualidade.",
  },
];

const faq = [
  {
    q: "É seguro deixar meu cão com um passeador?",
    a: "Sim. Todo passeador passa por credenciamento e validação de identidade (KYC) antes de ser ativado. Durante o passeio, você acompanha o trajeto pelo mapa ao vivo e recebe fotos — nada acontece sem o seu acompanhamento.",
  },
  {
    q: "Quem é o passeador que vai pegar meu cão?",
    a: "É um passeador da rede Aumigão, credenciado e com reputação construída a cada passeio. Você vê quem é antes do passeio e avalia depois. Passeadores com boas avaliações têm prioridade no matching.",
  },
  {
    q: "Como eu pago e como cancelo?",
    a: "O pagamento é feito pelo próprio app, de forma simples e transparente. O cancelamento segue a política do seu petshop dentro do app — e, se um passeio agendado falhar por parte da rede, o valor é devolvido integralmente.",
  },
  {
    q: "Como eu acompanho o passeio?",
    a: "Pelo app: mapa em tempo real durante o trajeto, fotos do seu cão no passeio e um resumo ao final. Você fica por dentro mesmo estando longe.",
  },
];

export default function TutorPage() {
  return (
    <AudienceLayout aud="tutor" title={<>Você sai. Ele passeia. <em>Você vê tudo.</em></>}>
      {/* HERO — copy afetiva (o título já vem do AudienceLayout/InnerPage) */}
      <p className={s.lead} style={{ marginTop: 0 }}>
        Seu cão merece sair pra rua mesmo nos dias corridos. Com o Aumigão, um
        passeador verificado cuida do passeio — e você acompanha cada minuto pelo
        seu celular, com <strong style={{ color: "var(--accent)" }}>mapa ao vivo, fotos e avaliação</strong>.
      </p>
      <div className={s.btnRow}>
        <Link href="#como-funciona" className={`${s.btn} ${s.btnPrimary}`}>
          Como funciona →
        </Link>
        <a href="#faq" className={`${s.btn} ${s.btnGhost}`}>Tirar dúvidas</a>
      </div>

      {/* 2 — PROVA DE SEGURANÇA */}
      <section className={s.block} id="seguranca">
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Confiança</p>
          <h2 className={s.h2}>
            Cada passeador é <em>verificado</em>. Cada passeio é rastreado.
          </h2>
          <p className={s.blockLead}>
            Não é deixar seu cão com um desconhecido. É a rede Aumigão: gente
            credenciada, passeio acompanhado em tempo real e registro de tudo.
          </p>
        </div>
        <div className={s.tracks}>
          {seguranca.map((item) => (
            <article key={item.title} className={s.track}>
              <span className={s.trackIcon} style={{ background: "color-mix(in srgb, var(--accent) 14%, transparent)", color: "var(--accent)" }}>
                {item.icon}
              </span>
              <p className={s.trackRole} style={{ color: "var(--accent)" }}>{item.role}</p>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 3 — COMO FUNCIONA (4 passos) */}
      <section className={s.block} id="como-funciona">
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Passo a passo</p>
          <h2 className={s.h2}>Do download ao <em>cão feliz</em>, em 4 passos.</h2>
        </div>
        <div className={s.dsteps}>
          {passos.map((p, i) => (
            <div key={p.n} className={s.dstep}>
              <span>{i + 1}</span>
              <h3>{p.n}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 — E SE ALGO DER ERRADO? */}
      <section className={s.block} id="garantia">
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Garantia</p>
          <h2 className={s.h2}>E se algo der errado?</h2>
          <p className={s.blockLead}>
            Se um passeio agendado não acontecer por parte da rede, você recebe o{" "}
            <strong style={{ color: "var(--accent)" }}>reembolso integral</strong>. Sem letra miúda: passeio que
            falha, dinheiro de volta. A gente trabalha pra que isso nunca
            aconteça — e, se acontecer, o risco é nosso, não seu.
          </p>
        </div>
        <ul className={s.wlist} style={{ maxWidth: "62ch" }}>
          <li>Reembolso integral se o passeio falhar por parte da rede.</li>
          <li>Suporte do seu petshop e da operação Aumigão a qualquer momento.</li>
          <li>Passeadores com baixa avaliação saem do matching — qualidade primeiro.</li>
        </ul>
      </section>

      {/* 5 — FAQ */}
      <section className={`${s.block} ${s.legal}`} id="faq">
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Dúvidas</p>
          <h2 className={s.h2}>Perguntas de quem ama o cão.</h2>
        </div>
        {faq.map((item) => (
          <div className={s.sec} key={item.q}>
            <h2>{item.q}</h2>
            <p>{item.a}</p>
          </div>
        ))}
      </section>

      {/* 6 — CTA DUPLO */}
      <section className={s.block} id="encontrar">
        <div className={`${s.blockHead} ${s.blockHeadCenter}`}>
          <p className={s.blockEye} style={{ justifyContent: "center" }}><i /> Comece agora</p>
          <h2 className={s.h2} style={{ marginInline: "auto" }}>
            Seu petshop já usa <em>Aumigão</em>?
          </h2>
          <p className={s.blockLead} style={{ marginInline: "auto" }}>
            O app é da marca do seu petshop. Veja o caminho certo pra você.
          </p>
        </div>
        <div className={`${s.btnRow} ${s.btnRowCenter}`}>
          <Link href="/contato" className={`${s.btn} ${s.btnPrimary}`}>
            Sim → baixar o app da minha marca
          </Link>
          <Link href="/contato?perfil=empresa" className={`${s.btn} ${s.btnGhost}`}>
            Não → indicar meu petshop
          </Link>
        </div>
      </section>
    </AudienceLayout>
  );
}
