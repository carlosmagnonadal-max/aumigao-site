"use client";

import Link from "next/link";
import { SubHero } from "./SubHero";
import { WalkPhoneDark } from "./WalkPhoneDark";
import { EditorialFooter } from "./EditorialFooter";
import { Reveal, Stagger, RevealItem } from "./Motion";
import e from "./editorial-home.module.css";
import sub from "./subsite.module.css";
import { WHATSAPP_LINK } from "../lib/contact";

function qr(url: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=0&color=15111d&bgcolor=ffffff&data=${encodeURIComponent(url)}`;
}

const appBullets = [
  ["Ganhos transparentes.", "Veja repasse, gorjetas e incentivos passeio a passeio — e saque fácil."],
  ["Agenda própria.", "Você escolhe seus horários e regiões. Matching te manda demanda perto de você."],
  ["Reputação que rende.", "Seu score sobe a cada passeio bem feito — e quem cuida bem recebe mais demanda."],
  ["Uma rede, várias marcas.", "Cadastre-se uma vez no Walk e atenda várias empresas pet parceiras."],
];

const ganhos = [
  { fonte: "Repasse por passeio", pct: 78, nota: "o grosso da sua renda" },
  { fonte: "Gorjetas dos tutores", pct: 14, nota: "quem encanta, ganha mais" },
  { fonte: "Incentivos e bônus", pct: 8, nota: "metas, picos e fidelidade" },
];

const faq = [
  { q: "Preciso de experiência pra começar?", a: "Não precisa ser profissional. Você passa pelo credenciamento (documentos e validação), recebe orientação e começa com passeios compatíveis com o seu perfil. Sua reputação cresce a cada passeio." },
  { q: "Tenho vínculo empregatício / CLT?", a: "Não. Você é um profissional autônomo da rede Aumigão — define sua agenda e suas regiões. Não há vínculo de emprego: você trabalha quando e quanto quiser." },
  { q: "Quando e como eu recebo?", a: "Seus ganhos ficam visíveis no app Walk e você solicita o saque de forma simples. Repasse, gorjetas e incentivos aparecem discriminados por passeio — sem caixa-preta." },
  { q: "E se eu for suspenso injustamente?", a: "Você tem direito a revisão. Suspensões e quedas de score passam por análise, e você pode contestar. A reputação é sua — e a gente trata isso com transparência." },
];

export function PasseadorContent() {
  return (
    <div data-aud="passeador" className={e.page}>
      <SubHero
        current="passeador"
        eyebrow="Para passeadores — sua profissão, sua renda"
        title={<>Cuidar de cães virou <em style={{ color: "var(--accent)" }}>profissão.</em></>}
        sub="Não é bico: é renda recorrente. Entre para a rede Aumigão, receba passeios de várias empresas pet e construa uma reputação que te acompanha em toda a rede. Quem cuida bem, ganha mais demanda."
        primary={{ label: "Quero me cadastrar", href: "#baixar" }}
        ghost={{ label: "Como funciona", href: "#como-funciona" }}
        stats={[
          { num: "Recorrente", label: "renda, não bico" },
          { num: "1 rede", label: "várias empresas pet" },
          { num: "Score", label: "quem cuida ganha mais" },
        ]}
        image="/walker-hero.jpg"
        imageAlt="Passeador cuidando de cães na rua"
      />

      {/* OPORTUNIDADE */}
      <section className={`${e.section} ${e.alt}`}>
        <div className={e.container}>
          <Reveal>
            <div className={sub.emotion}>
              <span className={sub.kicker}><i /> Não é bico</span>
              <h2 className={e.h2}>Você cuida bem dos cães. <em>Por que isso seria só um troco?</em></h2>
              <p className={e.lead} style={{ marginInline: "auto" }}>
                Na Aumigão, passear deixa de ser um favor de fim de tarde e vira profissão: demanda
                qualificada de várias empresas pet, ganhos transparentes e uma reputação que abre portas
                na rede inteira.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* O APP WALK POR DENTRO */}
      <section className={e.section} id="como-funciona">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> O app do passeador · Walk</div>
            <h2 className={e.h2}>Sua operação inteira, num <em>app só.</em></h2>
          </Reveal>
          <Reveal>
            <div className={sub.split}>
              <div className={sub.phoneWrap}><WalkPhoneDark /></div>
              <div>
                <ul className={sub.bullets}>
                  {appBullets.map(([t, d]) => (
                    <li key={t}><span className={sub.tick}>✓</span><span><b>{t}</b> {d}</span></li>
                  ))}
                </ul>
                <p className={sub.note}>Representação ilustrativa do app Walk. Valores conceituais.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* QUANTO DÁ PRA GANHAR */}
      <section className={`${e.section} ${e.alt}`} id="ganhos">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> Quanto dá pra ganhar</div>
            <h2 className={e.h2}>Sua renda vem de <em>três fontes.</em></h2>
            <p className={e.lead}>Tudo discriminado no app, passeio a passeio. Quanto mais e melhor você atende, mais cada fonte cresce.</p>
          </Reveal>
          <Reveal>
            <div style={{ maxWidth: 720, display: "grid", gap: 22, marginTop: "clamp(20px,4vh,36px)" }}>
              {ganhos.map((g) => (
                <div key={g.fonte}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                    <span style={{ fontWeight: 600, color: "var(--ink,#1c1611)" }}>{g.fonte}</span>
                    <span style={{ fontSize: 13, color: "var(--ink2,#7a6e60)" }}>{g.nota}</span>
                  </div>
                  <div style={{ height: 14, borderRadius: 999, background: "rgba(80,40,10,.08)", overflow: "hidden" }}>
                    <div style={{ width: `${g.pct}%`, height: "100%", borderRadius: 999, background: "linear-gradient(90deg, color-mix(in srgb, var(--accent) 70%, #fff), var(--accent))" }} />
                  </div>
                </div>
              ))}
              <p className={sub.note}>Proporções ilustrativas para mostrar a composição da renda — não são promessa de ganho.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* REDE GLOBAL / CONVITE */}
      <section className={e.section} id="rede">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> A rede Aumigão</div>
            <h2 className={e.h2}>Uma rede, <em>várias empresas pet.</em> Você entra por convite e aceite.</h2>
            <p className={e.lead}>
              Em vez de depender de um único cliente, você recebe demanda de várias empresas pet parceiras.
              Cada empresa pet convida passeadores da rede — e você decide se topa trabalhar com aquela marca.
              Sua reputação te acompanha em toda a rede.
            </p>
          </Reveal>
          <Stagger className={e.modules}>
            {[
              ["Cadastre-se uma vez", "Um único cadastro no Walk te coloca na rede inteira."],
              ["Receba convites", "Empresas pet da rede convidam passeadores por região e score."],
              ["Você aceita (ou não)", "O vínculo é seu: trabalha com as marcas que quiser."],
              ["Reputação que viaja", "Seu score vale em toda a rede — não recomeça do zero."],
            ].map(([t, d], i) => (
              <RevealItem key={t} className={e.module}>
                <span className={e.moduleTag} style={{ color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")} · {t}</span>
                <span className={e.moduleDesc} style={{ marginTop: 8 }}>{d}</span>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CREDENCIAMENTO + SCORE */}
      <section className={`${e.section} ${e.alt}`} id="credenciamento">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> Sério desde o cadastro</div>
            <h2 className={e.h2}>Credenciamento de verdade — e <em>direito de revisão.</em></h2>
          </Reveal>
          <Stagger className={e.trilhas}>
            <RevealItem className={e.trilha}>
              <span className={e.trilhaTag} style={{ color: "var(--accent)" }}>Credenciamento</span>
              <div className={e.trilhaTitle}>Documentos e validação (KYC)</div>
              <p className={e.trilhaPromise}>Identidade e documentos conferidos antes de você ativar. Isso protege você, o tutor e a rede.</p>
            </RevealItem>
            <RevealItem className={e.trilha}>
              <span className={e.trilhaTag} style={{ color: "var(--accent)" }}>Score</span>
              <div className={e.trilhaTitle}>Reputação que valoriza quem cuida</div>
              <p className={e.trilhaPromise}>Boas avaliações sobem seu score e te dão prioridade no matching. Quem cuida bem, ganha mais demanda.</p>
            </RevealItem>
            <RevealItem className={e.trilha}>
              <span className={e.trilhaTag} style={{ color: "var(--accent)" }}>Direito de revisão</span>
              <div className={e.trilhaTitle}>Suspendeu? Você pode contestar</div>
              <p className={e.trilhaPromise}>Quedas de score e suspensões passam por análise e podem ser revisadas. A reputação é sua.</p>
            </RevealItem>
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className={e.section} id="faq">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> Dúvidas</div>
            <h2 className={e.h2}>Perguntas de quem quer <em>profissionalizar.</em></h2>
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

      {/* BAIXE O WALK */}
      <section className={e.section} id="baixar">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> Baixe o Walk</div>
            <h2 className={e.h2}>Entre para a rede pelo app <em>Walk.</em></h2>
            <p className={e.lead}>Baixe o Walk, faça seu credenciamento e comece a receber demanda das empresas pet parceiras.</p>
          </Reveal>
          <Reveal>
            <div
              style={{
                marginTop: "clamp(20px,4vh,36px)",
                background: "linear-gradient(135deg, #1b1526, #0e0b15)",
                borderRadius: 24,
                padding: "clamp(24px,3vw,40px)",
                display: "flex",
                gap: "clamp(22px,4vw,52px)",
                alignItems: "center",
                flexWrap: "wrap",
                boxShadow: "0 34px 80px -38px rgba(20,10,40,.6)",
                border: "1px solid rgba(255,255,255,.06)",
              }}
            >
              <div style={{ flex: "1 1 280px", color: "#f3eefb" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <img src="/walk-icon.png" alt="App Walk" style={{ width: 72, height: 72, borderRadius: 18, boxShadow: "0 12px 28px -10px rgba(0,0,0,.6)" }} />
                  <div>
                    <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 600, fontSize: 24, color: "#fff", lineHeight: 1.05 }}>Aumigão Walk</div>
                    <div style={{ fontSize: 13, color: "#a99fc0", marginTop: 3 }}>O app do passeador</div>
                  </div>
                </div>
                <p style={{ marginTop: 18, fontSize: 15.5, lineHeight: 1.55, color: "#cfc6e0", maxWidth: "46ch" }}>
                  Ganhos, agenda, score e passeios num app só. Cadastre-se uma vez e receba demanda de várias empresas pet parceiras.
                </p>
                <div style={{ display: "flex", gap: 10, marginTop: 20, flexWrap: "wrap", alignItems: "center" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 48, padding: "0 18px", borderRadius: 12, background: "rgba(255,255,255,.08)", color: "#cfc6e0", fontWeight: 700, fontSize: 13.5, border: "1px solid rgba(255,255,255,.16)" }}>Em breve nas lojas</span>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, height: 48, padding: "0 20px", borderRadius: 12, background: "#fff", color: "#15111d", textDecoration: "none", fontWeight: 700, fontSize: 13.5 }}>Entrar na lista de espera</a>
                </div>
              </div>
              <div style={{ flex: "none", display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                <div style={{ background: "#fff", padding: 9, borderRadius: 16 }}>
                  <img src={qr(WHATSAPP_LINK)} alt="QR para entrar na lista de espera do Walk" style={{ width: 132, height: 132, display: "block" }} />
                </div>
                <span style={{ fontSize: 11.5, color: "#a99fc0" }}>Aponte a câmera para entrar na lista</span>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className={e.lead} style={{ marginTop: "clamp(18px,3vh,26px)" }}>
              Ainda com dúvidas?{" "}
              <Link href="/contato?perfil=passeador" style={{ color: "var(--accent)", fontWeight: 700, borderBottom: "2px solid var(--accent)" }}>Fale com a gente →</Link>
            </p>
          </Reveal>
        </div>
      </section>

      <EditorialFooter />
    </div>
  );
}
