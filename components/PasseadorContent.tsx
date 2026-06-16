"use client";

import Link from "next/link";
import { SubHero } from "./SubHero";
import { PasseadorPhone } from "./PlatformPeek";
import { EditorialFooter } from "./EditorialFooter";
import { Reveal, Stagger, RevealItem } from "./Motion";
import e from "./editorial-home.module.css";
import sub from "./subsite.module.css";

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
        primary={{ label: "Quero me cadastrar", href: "/contato?perfil=passeador" }}
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
              <div className={sub.phoneWrap}><PasseadorPhone /></div>
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
            <h2 className={e.h2}>Uma rede, <em>vários petshops.</em> Você entra por convite e aceite.</h2>
            <p className={e.lead}>
              Em vez de depender de um único cliente, você recebe demanda de várias empresas pet parceiras.
              Cada petshop convida passeadores da rede — e você decide se topa trabalhar com aquela marca.
              Sua reputação te acompanha em toda a rede.
            </p>
          </Reveal>
          <Stagger className={e.modules}>
            {[
              ["Cadastre-se uma vez", "Um único cadastro no Walk te coloca na rede inteira."],
              ["Receba convites", "Petshops da rede convidam passeadores por região e score."],
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

      {/* CTA */}
      <section className={`${e.section} ${e.alt}`} id="cadastro">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> Comece agora</div>
            <h2 className={e.h2}>Entre para a rede e <em>comece a receber.</em></h2>
            <p className={e.lead}>Baixe o Walk, faça seu credenciamento e comece a receber demanda das empresas pet parceiras.</p>
          </Reveal>
          <div style={{ marginTop: "clamp(20px,3vh,30px)", display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/contato?perfil=passeador" style={{ display: "inline-flex", alignItems: "center", height: 56, padding: "0 28px", borderRadius: 44, fontWeight: 700, textDecoration: "none", color: "#fff", background: "linear-gradient(180deg, var(--roxo2,#8f45dd), var(--roxo,#6d2bbd))", boxShadow: "0 18px 38px -14px rgba(109,43,189,.55)" }}>
              Quero me cadastrar →
            </Link>
            <Link href="/contato?perfil=passeador" style={{ display: "inline-flex", alignItems: "center", fontWeight: 600, color: "var(--ink,#1c1611)", textDecoration: "none", borderBottom: "2px solid var(--accent)", paddingBottom: 2 }}>
              Tenho dúvidas
            </Link>
          </div>
        </div>
      </section>

      <EditorialFooter />
    </div>
  );
}
