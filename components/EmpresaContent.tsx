"use client";

import Link from "next/link";
import { SubHero } from "./SubHero";
import { AdminBrowser } from "./PlatformPeek";
import { BrandSwapper } from "./BrandSwapper";
import { EditorialFooter } from "./EditorialFooter";
import { Reveal, Stagger, RevealItem } from "./Motion";
import e from "./editorial-home.module.css";
import sub from "./subsite.module.css";

const painelBullets = [
  ["Operação ao vivo no mapa.", "Acompanhe todos os passeios em tempo real, do seu jeito, com a sua marca."],
  ["Rede de passeadores.", "Convide, credencie e gerencie a rede — sem recrutar ninguém do zero."],
  ["Financeiro rastreável.", "Repasses, comissões e relatórios com a sua marca, auditáveis ponta a ponta."],
  ["Tudo white-label.", "App do tutor, app do passeador e painel — com a sua identidade."],
];

const modules = [
  ["Matching", "Distribui o passeador certo por região, score e disponibilidade."],
  ["Score", "Reputação viva que melhora a operação a cada passeio."],
  ["Credenciamento", "Documentos, validação e trilha de auditoria de cada passeador."],
  ["Recovery", "Exceções com tratamento dedicado, monitoradas 24/7."],
  ["Financeiro", "Repasses, comissões e relatórios — com a sua marca, rastreáveis."],
  ["White Label", "App, painel e financeiro com a identidade da sua empresa."],
];

const plans = [
  { name: "Starter", price: "R$197", per: "/mês", desc: "Pra começar a operar com marca própria.", feats: ["1 unidade", "Módulos essenciais", "Setup grátis", "Comissão 12% por passeio"], cta: "Solicitar diagnóstico", feat: false },
  { name: "Business", price: "R$597", per: "/mês", desc: "Pra escalar a operação e fidelizar.", feats: ["2 unidades (+ extra)", "Rede de passeadores credenciada", "Recorrência + Pet Tour", "Comissão 8% por passeio"], cta: "Falar com a gente", feat: true },
  { name: "Enterprise", price: "Sob consulta", per: "", desc: "Pra redes e multiunidades.", feats: ["Unidades sob medida", "Todos os módulos", "Comissão 5% por passeio", "Governança dedicada"], cta: "Solicitar proposta", feat: false },
];

const rollout = [
  ["Diagnóstico", "A gente entende sua operação e desenha o plano ideal — sem custo."],
  ["Personalização", "Sua marca no app do tutor, no app do passeador e no painel."],
  ["Configuração", "Módulos, regiões, preços e rede ligados com a nossa equipe."],
  ["Operação", "Você opera e cresce; a Aumigão sustenta tecnologia, rede e governança."],
];

const faq = [
  { q: "Quanto custa e quando começo a ganhar?", a: "Os planos vão de R$197 a R$597/mês (Enterprise sob consulta), com comissão por passeio conforme o plano (12% / 8% / 5%). Você lança com a sua marca e o passeio vira receita recorrente — o plano ideal sai do diagnóstico gratuito." },
  { q: "Preciso de equipe técnica?", a: "Não. Você não monta tecnologia do zero nem contrata time de TI. A plataforma já existe: você escolhe o plano, personaliza com a sua marca e a operação roda com a nossa governança." },
  { q: "Eu uso a rede pronta de passeadores?", a: "Sim — a partir do plano Business. Você convida passeadores de uma rede credenciada e avaliada pela Aumigão, em vez de recrutar e gerir do zero. Cada passeador decide se topa trabalhar com a sua marca." },
  { q: "A base de tutores é minha?", a: "Sim. Os tutores são da sua empresa, com a sua marca e a sua carteira. Você opera; a Aumigão sustenta a tecnologia, a rede e os pagamentos por trás." },
];

export function EmpresaContent() {
  return (
    <div data-aud="empresa" className={e.page}>
      <SubHero
        current="empresa"
        eyebrow="Para empresas pet — sua marca, sua receita"
        title={<>Sua marca pet. <em style={{ color: "var(--accent)" }}>Nova receita recorrente.</em></>}
        sub="Lance a sua própria operação de passeios com a sua marca — sem montar tecnologia. Os tutores são seus; os passeadores, de uma rede pronta. Passeio deixa de ser serviço avulso e vira produto recorrente."
        primary={{ label: "Solicitar diagnóstico", href: "/contato?perfil=empresa" }}
        ghost={{ label: "Ver planos", href: "#planos" }}
        stats={[
          { num: "Sua marca", label: "no app e no painel" },
          { num: "5 módulos", label: "numa só plataforma" },
          { num: "Recorrente", label: "passeio vira produto" },
        ]}
        image="/tutor-laptop.jpg"
        imageAlt="Painel da operação com a sua marca"
      />

      {/* OPORTUNIDADE + EFEITO DE REDE */}
      <section className={`${e.section} ${e.alt}`}>
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> A oportunidade</div>
            <h2 className={e.h2}>Os tutores são <em>seus.</em> Os passeadores, de uma rede pronta.</h2>
            <p className={e.lead}>
              Você não recruta nem gerencia passeadores do zero: convida quem quiser de uma rede credenciada
              e avaliada pela Aumigão. A base de clientes é da sua marca; a infraestrutura é nossa.
            </p>
          </Reveal>
          <Reveal>
            <div className={e.netCallout}>
              <span className={e.netCalloutLabel}>◆ O pulo do gato · efeito de rede</span>
              <h3 className={e.netCalloutTitle}>A rede é compartilhada — e isso joga a <em>seu favor.</em></h3>
              <p className={e.netCalloutText}>
                A mesma rede credenciada atende a Aumigão e as outras empresas da plataforma. Quanto mais
                empresas e passeadores entram, <b style={{ color: "var(--ink)" }}>maior o pool pra você convidar</b>:
                novos bairros, picos de demanda e novas frentes de receita, sem recrutar ninguém do zero.
                Quem entra cedo cresce junto.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* O PAINEL POR DENTRO */}
      <section className={e.section} id="painel">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> O painel da sua marca</div>
            <h2 className={e.h2}>Toda a operação num <em>Ops Center</em> — com a sua marca.</h2>
            <p className={e.lead}>Operação ao vivo, rede de passeadores, qualidade e financeiro num só lugar.</p>
          </Reveal>
          <Reveal>
            <div style={{ marginTop: "clamp(20px,4vh,36px)" }}><AdminBrowser /></div>
          </Reveal>
          <Stagger className={e.modules} >
            {painelBullets.map(([t, d]) => (
              <RevealItem key={t} className={e.module}>
                <span className={e.moduleTag} style={{ color: "var(--accent)" }}>{t}</span>
                <span className={e.moduleDesc} style={{ marginTop: 8 }}>{d}</span>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TORNE SUA — BRANDSWAPPER */}
      <section className={`${e.section} ${e.alt}`} id="torne-seu">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> Torne seu</div>
            <h2 className={e.h2}>Veja o app com a <em>sua marca.</em></h2>
            <p className={e.lead}>Troque nome, logo e cor e veja o app reskinar na hora. É assim que o tutor vai ver a sua empresa.</p>
          </Reveal>
          <Reveal><BrandSwapper /></Reveal>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className={e.section} id="modulos">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> A plataforma</div>
            <h2 className={e.h2}>Tudo que uma operação de passeios precisa — <em>numa só.</em></h2>
            <p className={e.lead}>Cinco módulos integrados mais o white-label, já conversando entre si.</p>
          </Reveal>
          <Stagger className={e.modules}>
            {modules.map(([tag, desc]) => (
              <RevealItem key={tag} className={e.module}>
                <span className={e.moduleTag} style={{ color: "var(--accent)" }}>{tag}</span>
                <span className={e.moduleDesc} style={{ marginTop: 8 }}>{desc}</span>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* PLANOS */}
      <section className={`${e.section} ${e.alt}`} id="planos">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> Planos</div>
            <h2 className={e.h2}>Comece pequeno. Cresça com a <em>operação.</em></h2>
            <p className={e.lead}>Você não monta tecnologia do zero nem contrata time técnico. Escolhe o plano, lança com a sua marca e a operação roda.</p>
          </Reveal>
          <Stagger className={e.plans}>
            {plans.map((p) => (
              <RevealItem key={p.name} className={`${e.plan} ${p.feat ? e.planFeat : ""}`}>
                {p.feat && <span className={e.planBadge}>Mais escolhido</span>}
                <div className={e.planName}>{p.name}</div>
                <div className={e.planPrice}>{p.price}<small>{p.per}</small></div>
                <p className={e.planDesc}>{p.desc}</p>
                <ul className={e.planUl}>{p.feats.map((f) => <li key={f} className={e.planLi}><span>✓</span> {f}</li>)}</ul>
                <Link href="/contato?perfil=empresa" className={`${e.planCta} ${p.feat ? e.planCtaFill : ""}`}>{p.cta}</Link>
              </RevealItem>
            ))}
          </Stagger>
          <p className={e.plansNote}>Valores de referência — o plano e a configuração ideais saem do diagnóstico gratuito. Comissão por passeio conforme o plano.</p>
        </div>
      </section>

      {/* ROLLOUT */}
      <section className={e.section} id="rollout">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> Como entra no ar</div>
            <h2 className={e.h2}>Rollout assistido, do <em>diagnóstico</em> à operação.</h2>
          </Reveal>
          <Stagger className={e.modules}>
            {rollout.map(([t, d], i) => (
              <RevealItem key={t} className={e.module}>
                <span className={e.moduleTag} style={{ color: "var(--accent)" }}>{String(i + 1).padStart(2, "0")} · {t}</span>
                <span className={e.moduleDesc} style={{ marginTop: 8 }}>{d}</span>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${e.section} ${e.alt}`} id="faq">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> Objeções comuns</div>
            <h2 className={e.h2}>O que toda empresa pet <em>pergunta.</em></h2>
          </Reveal>
          <Stagger className={e.trilhas}>
            {faq.map((item) => (
              <RevealItem key={item.q} className={e.trilha}>
                <div className={e.trilhaTitle}>{item.q}</div>
                <p className={e.trilhaPromise}>
                  {item.a}{" "}
                  {item.q.startsWith("Eu uso a rede") && <Link href="/passeador" style={{ color: "var(--accent)", fontWeight: 600 }}>Ver a rede de passeadores →</Link>}
                </p>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className={e.section} id="contato">
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> Vamos começar</div>
            <h2 className={e.h2}>Sua operação de passeios, com a <em>sua marca.</em></h2>
            <p className={e.lead}>O diagnóstico é gratuito: a gente entende sua operação e mostra o caminho — sem compromisso.</p>
          </Reveal>
          <div style={{ marginTop: "clamp(20px,3vh,30px)", display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
            <Link href="/contato?perfil=empresa" style={{ display: "inline-flex", alignItems: "center", height: 56, padding: "0 28px", borderRadius: 44, fontWeight: 700, textDecoration: "none", color: "#fff", background: "linear-gradient(180deg, var(--roxo2,#8f45dd), var(--roxo,#6d2bbd))", boxShadow: "0 18px 38px -14px rgba(109,43,189,.55)" }}>
              Solicitar diagnóstico →
            </Link>
            <Link href="#planos" style={{ display: "inline-flex", alignItems: "center", fontWeight: 600, color: "var(--ink,#1c1611)", textDecoration: "none", borderBottom: "2px solid var(--accent)", paddingBottom: 2 }}>
              Ver planos
            </Link>
          </div>
        </div>
      </section>

      <EditorialFooter />
    </div>
  );
}
