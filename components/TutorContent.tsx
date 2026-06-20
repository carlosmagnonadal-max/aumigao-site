"use client";

import Image from "next/image";
import Link from "next/link";
import { SubHero } from "./SubHero";
import { TutorPhone } from "./PlatformPeek";
import { EditorialFooter } from "./EditorialFooter";
import { Reveal, Stagger, RevealItem } from "./Motion";
import e from "./editorial-home.module.css";
import sub from "./subsite.module.css";
import { WHATSAPP_LINK } from "../lib/contact";

function qr(url: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=0&color=1c1611&bgcolor=fffdf8&data=${encodeURIComponent(url)}`;
}

const seguranca = [
  { icon: "⛉", role: "Verificação", title: "Passeador verificado (KYC)", desc: "Documento, identidade e credenciamento conferidos antes de pegar o seu cão. Só passeia quem passou pela operação." },
  { icon: "◉", role: "Ao vivo", title: "Mapa em tempo real", desc: "Acompanhe o trajeto pelo mapa enquanto o passeio acontece. Você sabe onde seu cão está, do começo ao fim." },
  { icon: "❍", role: "Registro", title: "Fotos do passeio", desc: "Receba fotos e o resumo de cada passeio direto no app. A prova de que correu tudo bem fica com você." },
];

const appBullets = [
  ["Agende em segundos.", "Dia, horário e modalidade — o matching encontra um passeador credenciado pra você."],
  ["Acompanhe ao vivo.", "Mapa em tempo real durante o passeio, do portão de casa à volta."],
  ["Receba as fotos.", "Registros do seu cão no passeio e um resumo ao final, direto no app."],
  ["Avalie e repita.", "Sua nota mantém a rede com qualidade — e seu passeador favorito a um toque."],
];

const passos = [
  { n: "Baixe o app", desc: "Baixe o app do tutor, crie seu acesso e pronto. Leva um minuto." },
  { n: "Cadastre seu pet", desc: "Nome, porte, temperamento e cuidados. O passeador recebe tudo que precisa saber sobre o seu cão." },
  { n: "Agende o passeio", desc: "Escolha dia, horário e modalidade. O matching organiza um passeador credenciado para você." },
  { n: "Acompanhe e avalie", desc: "Veja o mapa ao vivo, receba as fotos e avalie ao final. Sua nota mantém a rede com qualidade." },
];

const faq = [
  { q: "É seguro deixar meu cão com um passeador?", a: "Sim. Todo passeador passa por credenciamento e validação de identidade (KYC) antes de ser ativado. Durante o passeio, você acompanha o trajeto pelo mapa ao vivo e recebe fotos — nada acontece sem o seu acompanhamento." },
  { q: "Quem é o passeador que vai pegar meu cão?", a: "É um passeador da rede Aumigão, credenciado e com reputação construída a cada passeio. Você vê quem é antes do passeio e avalia depois. Passeadores com boas avaliações têm prioridade no matching." },
  { q: "Como eu pago e como cancelo?", a: "O pagamento é feito pelo próprio app, de forma simples e transparente. O cancelamento segue a política da sua empresa pet dentro do app — e, se um passeio agendado falhar por parte da rede, o valor é devolvido integralmente." },
  { q: "Como eu acompanho o passeio?", a: "Pelo app: mapa em tempo real durante o trajeto, fotos do seu cão no passeio e um resumo ao final. Você fica por dentro mesmo estando longe." },
];

export function TutorContent() {
  return (
    <div data-aud="tutor" className={e.page}>
      <SubHero
        current="tutor"
        eyebrow="Para tutores — seu cão, sob seus olhos"
        title={<>Você sai. Ele passeia. <em>Você vê tudo.</em></>}
        sub="Seu cão merece sair pra rua mesmo nos dias corridos. Um passeador verificado cuida do passeio — e você acompanha cada minuto pelo celular, com mapa ao vivo, fotos e avaliação."
        primary={{ label: "Como funciona", href: "#como-funciona" }}
        ghost={{ label: "Tirar dúvidas", href: "#faq" }}
        stats={[
          { num: "Ao vivo", label: "mapa em tempo real" },
          { num: "100%", label: "passeadores verificados" },
          { num: "Garantido", label: "reembolso se o passeio falhar" },
        ]}
        image="/dog-walk-street.jpg"
        imageAlt="Cão em um passeio na rua"
      />

      {/* EMOCIONAL */}
      <section className={`${e.section} ${e.alt}`}>
        <div className={e.container}>
          <Reveal>
            <div className={sub.emotion}>
              <span className={sub.kicker}><i /> Quem ama, acompanha</span>
              <h2 className={e.h2} style={{ marginInline: "auto" }}>O melhor dia dele não devia depender do <em>seu horário.</em></h2>
              <p className={e.lead} style={{ marginInline: "auto" }}>
                Trabalho, trânsito, reunião que furou a tarde. Enquanto a vida acontece, seu cão
                fica esperando a porta abrir. Com o Aumigão, ele sai, gasta energia e volta feliz —
                e você vê tudo de onde estiver.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROVA DE SEGURANÇA */}
      <section className={e.section} id="seguranca">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> Confiança</div>
            <h2 className={e.h2}>Cada passeador é <em>verificado.</em> Cada passeio é rastreado.</h2>
            <p className={e.lead}>Não é deixar seu cão com um desconhecido. É a rede Aumigão: gente credenciada, passeio acompanhado em tempo real e registro de tudo.</p>
          </Reveal>
          <Stagger className={e.trilhas}>
            {seguranca.map((item) => (
              <RevealItem key={item.title} className={e.trilha}>
                <span className={e.trilhaTag} style={{ color: "var(--accent)" }}>{item.icon} {item.role}</span>
                <div className={e.trilhaTitle}>{item.title}</div>
                <p className={e.trilhaPromise}>{item.desc}</p>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* O APP DO TUTOR POR DENTRO */}
      <section className={`${e.section} ${e.alt}`} id="o-app">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> O app do tutor</div>
            <h2 className={e.h2}>Toda a tranquilidade, na <em>palma da mão.</em></h2>
          </Reveal>
          <Reveal>
            <div className={sub.split}>
              <div>
                <ul className={sub.bullets}>
                  {appBullets.map(([t, d]) => (
                    <li key={t}><span className={sub.tick}>✓</span><span><b>{t}</b> {d}</span></li>
                  ))}
                </ul>
                <p className={sub.note}>Representação ilustrativa do app.</p>
              </div>
              <div className={sub.phoneWrap}><TutorPhone /></div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className={e.section} id="como-funciona">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> Passo a passo</div>
            <h2 className={e.h2}>Do download ao <em>cão feliz</em>, em 4 passos.</h2>
          </Reveal>
          <Stagger className={e.modules}>
            {passos.map((p, i) => (
              <RevealItem key={p.n} className={e.module}>
                <span className={e.moduleTag} style={{ color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")} · {p.n}</span>
                <span className={e.moduleDesc} style={{ marginTop: 8 }}>{p.desc}</span>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* EMOCIONAL — FOTO + GARANTIA */}
      <section className={`${e.section} ${e.alt}`} id="garantia">
        <div className={e.container}>
          <div className={`${sub.split} ${sub.rev}`}>
            <div className={sub.frameBack}>
              <div className={sub.frame}>
                <Image src="/dog-happy.jpg" alt="Cão feliz depois do passeio" fill sizes="(max-width: 880px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              </div>
            </div>
            <Reveal>
              <div className={e.eyebrow}><i /> Garantia</div>
              <h2 className={e.h2}>E se algo der errado?</h2>
              <p className={e.lead}>
                Se um passeio agendado não acontecer por parte da rede, você recebe o{" "}
                <strong style={{ color: "var(--accent)" }}>reembolso integral</strong>. Sem letra miúda:
                passeio que falha, dinheiro de volta. A gente trabalha pra que isso nunca aconteça — e,
                se acontecer, o risco é nosso, não seu.
              </p>
              <ul className={sub.bullets}>
                <li><span className={sub.tick}>✓</span><span>Reembolso integral se o passeio falhar por parte da rede.</span></li>
                <li><span className={sub.tick}>✓</span><span>Suporte da sua empresa pet e da operação Aumigão a qualquer momento.</span></li>
                <li><span className={sub.tick}>✓</span><span>Passeadores com baixa avaliação saem do matching — qualidade primeiro.</span></li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={e.section} id="faq">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> Dúvidas</div>
            <h2 className={e.h2}>Perguntas de quem <em>ama o cão.</em></h2>
          </Reveal>
          <Stagger className={e.trilhas}>
            {faq.map((item) => (
              <RevealItem key={item.q} className={e.trilha}>
                <div className={e.trilhaTitle}>{item.q}</div>
                <p className={e.trilhaPromise}>{item.a}</p>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* BAIXE O APP */}
      <section className={`${e.section} ${e.alt}`} id="baixar">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> Em breve nas lojas</div>
            <h2 className={e.h2}>Acompanhe os passeios na <em>palma da mão.</em></h2>
            <p className={e.lead}>O app chega em breve às lojas. Entre na lista de espera para ser avisado no lançamento — agende, acompanhe ao vivo no mapa e avalie cada passeio.</p>
          </Reveal>
          <Reveal>
            <div className={e.dl} style={{ marginTop: "clamp(20px,4vh,36px)" }}>
              <div className={e.dlInfo}>
                <div className={e.dlTag}>App do tutor</div>
                <div className={e.dlTitle}>Agende e acompanhe ao vivo</div>
                <p className={e.dlDesc}>Mapa em tempo real, fotos do passeio e avaliação — tudo no seu celular.</p>
                <div className={e.dlBadges}>
                  <span className={e.dlBadge} style={{ opacity: .72, cursor: "default" }}> App Store<small>Em breve</small></span>
                  <span className={e.dlBadge} style={{ opacity: .72, cursor: "default" }}>▶ Google Play<small>Em breve</small></span>
                </div>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={e.dlBadge} style={{ marginTop: 12 }}>✦ Entrar na<small>lista de espera</small></a>
              </div>
              <div className={e.dlQR}><img src={qr(WHATSAPP_LINK)} alt="QR para entrar na lista de espera do app do tutor" /></div>
            </div>
          </Reveal>
          <Reveal>
            <p className={e.lead} style={{ marginTop: "clamp(18px,3vh,26px)" }}>
              Sua empresa pet ainda não usa Aumigão?{" "}
              <Link href="/contato?perfil=empresa" style={{ color: "var(--accent)", fontWeight: 700, borderBottom: "2px solid var(--accent)" }}>Indique sua empresa pet →</Link>
            </p>
          </Reveal>
        </div>
      </section>

      <EditorialFooter />
    </div>
  );
}
