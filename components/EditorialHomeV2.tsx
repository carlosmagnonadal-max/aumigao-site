"use client";

import Image from "next/image";
import { HeroMerged } from "./HeroMerged";
import { BrandSwapper } from "./BrandSwapper";
import { Reveal, Stagger, RevealItem } from "./Motion";
import s from "./editorial-home.module.css";

const trilhas = [
  { tag: "Para o tutor", title: "Segurança e rotina", promise: "Tranquilidade e cuidado consistente para o pet, sem fricção.", bullets: ["Agendamento simples e previsível", "Acompanhamento do passeio ao vivo", "Avaliação que melhora o serviço"] },
  { tag: "Para o passeador", title: "Oportunidade e reputação", promise: "Demanda qualificada, agenda própria e profissionalização.", bullets: ["Renda recorrente, não bico", "Agenda própria", "Score que valoriza quem cuida"] },
  { tag: "Para o petshop", title: "Marca, receita e escala", promise: "Lance a própria operação de passeios com governança assistida.", bullets: ["Plataforma white-label própria", "Nova receita recorrente", "Multiunidades e expansão"] },
];

const passeadorGanhos = [
  ["Renda recorrente, não bico.", "Demanda contínua em vez de corrida esporádica."],
  ["Agenda própria.", "Você escolhe quando e quanto passear."],
  ["Demanda certa via matching.", "O sistema conecta você aos passeios do seu perfil e região."],
  ["Score que valoriza.", "Quem cuida bem ganha reputação e mais oportunidades."],
];

const modules = [
  ["Matching", "Distribui o passeador certo por região, score e disponibilidade."],
  ["Score", "Reputação viva que melhora a operação a cada passeio."],
  ["Credenciamento", "Documentos, validação e trilha de auditoria de cada passeador."],
  ["Recovery", "Exceções com tratamento dedicado, monitoradas 24/7."],
  ["Financeiro", "Repasses, comissões e relatórios — com a sua marca, rastreáveis."],
  ["White Label", "App, painel e financeiro com a identidade do seu petshop."],
];

const plans = [
  { name: "Starter", price: "R$197", per: "/mês", desc: "Pra começar a operar com marca própria.", feats: ["1 unidade", "Módulos essenciais", "Setup grátis", "Comissão 12% por passeio"], cta: "Solicitar diagnóstico", fill: false, feat: false },
  { name: "Business", price: "R$597", per: "/mês", desc: "Pra escalar a operação e fidelizar.", feats: ["2 unidades (+ extra)", "Recorrência + Pet Tour", "Comissão 8% por passeio", "Setup isentável no anual"], cta: "Falar com a gente", fill: true, feat: true },
  { name: "Enterprise", price: "Sob consulta", per: "", desc: "Pra redes e multiunidades.", feats: ["Unidades sob medida", "Todos os módulos", "Comissão 5% por passeio", "Governança dedicada"], cta: "Solicitar proposta", fill: false, feat: false },
];

export function EditorialHomeV2() {
  return (
    <div className={s.page}>
      <HeroMerged />

      {/* TRÊS PÚBLICOS */}
      <section className={s.section} id="para-quem">
        <div className={s.container}>
          <Reveal>
            <div className={s.eyebrow}><i /> Para quem é</div>
            <h2 className={s.h2}>Três trilhas, uma só <em>operação.</em></h2>
            <p className={s.lead}>Tutor, passeador e empresa entram por portas diferentes e se encontram na mesma infraestrutura. Uma plataforma, três jeitos de ganhar.</p>
          </Reveal>
          <Stagger className={s.trilhas}>
            {trilhas.map((t) => (
              <RevealItem key={t.title} className={s.trilha}>
                <span className={s.trilhaTag}>{t.tag}</span>
                <div className={s.trilhaTitle}>{t.title}</div>
                <p className={s.trilhaPromise}>{t.promise}</p>
                <ul className={s.trilhaUl}>{t.bullets.map((b) => <li key={b} className={s.trilhaLi}>{b}</li>)}</ul>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TUTOR */}
      <section className={`${s.section} ${s.alt}`} id="tutor">
        <div className={s.container}>
          <div className={s.split}>
            <Reveal>
              <div className={s.eyebrow}><i /> Para o tutor</div>
              <h2 className={s.h2}>Segurança e rotina, sem <em>fricção.</em></h2>
              <p className={s.lead}>Seu cliente agenda em segundos, acompanha o passeio ao vivo no mapa e avalia ao final. Cada passeio é registrado, verificável e recuperável.</p>
              <ul className={s.ul}>
                <li className={s.li}><span className={s.liDot}>✓</span> Agenda pet, duração e modalidade pelo app — com a sua marca.</li>
                <li className={s.li}><span className={s.liDot}>✓</span> Acompanha a rota e a localização em tempo real.</li>
                <li className={s.li}><span className={s.liDot}>✓</span> Passeador credenciado, verificado e avaliado.</li>
                <li className={s.li}><span className={s.liDot}>✓</span> Avalia a experiência e ajuda a operação a melhorar.</li>
              </ul>
            </Reveal>
            <Reveal from="right" className={s.media}>
              <Image src="/dog-walk-street.jpg" alt="Tutor acompanha o passeio do pet" fill sizes="50vw" style={{ objectFit: "cover" }} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* PASSEADOR */}
      <section className={s.section} id="passeador">
        <div className={s.container}>
          <div className={s.split}>
            <Reveal className={s.media}>
              <Image src="/walker-hero.jpg" alt="Passeador da rede Aumigão" fill sizes="50vw" style={{ objectFit: "cover" }} />
            </Reveal>
            <Reveal from="right">
              <div className={s.eyebrow}><i /> Para o passeador</div>
              <h2 className={s.h2}>Transforme passeios em renda <em>recorrente.</em></h2>
              <p className={s.lead}>O Aumigão leva demanda qualificada até você. Você define a agenda, constrói reputação e faz dos passeios uma fonte de renda de verdade — com kit, credenciamento e suporte.</p>
              <ul className={s.ul}>
                {passeadorGanhos.map(([t, d]) => (
                  <li key={t} className={s.li}><span className={s.liDot}>✓</span><span><b style={{ color: "var(--ink)" }}>{t}</b> {d}</span></li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHITE-LABEL + TORNE SEU */}
      <section className={`${s.section} ${s.alt}`} id="white-label">
        <div className={s.container}>
          <Reveal>
            <div className={s.eyebrow}><i /> Para o petshop · White Label</div>
            <h2 className={s.h2}>Lance sua própria operação de passeios — com a sua <em>marca.</em></h2>
            <p className={s.lead}>Sua marca no app do tutor, no app do passeador e no painel operacional. Você opera; o Aumigão sustenta a tecnologia, a rede e a governança. Passeio deixa de ser serviço avulso e vira produto recorrente.</p>
          </Reveal>
          <div style={{ marginTop: "clamp(36px,6vh,64px)" }}>
            <Reveal><BrandSwapper /></Reveal>
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section className={s.section} id="planos">
        <div className={s.container}>
          <Reveal>
            <div className={s.eyebrow}><i /> Planos</div>
            <h2 className={s.h2}>Comece pequeno. Cresça com a <em>operação.</em></h2>
            <p className={s.lead}>Você não monta tecnologia do zero nem contrata time técnico. Escolhe o plano, lança com a sua marca e a operação roda.</p>
          </Reveal>
          <Stagger className={s.plans}>
            {plans.map((p) => (
              <RevealItem key={p.name} className={`${s.plan} ${p.feat ? s.planFeat : ""}`}>
                {p.feat && <span className={s.planBadge}>Mais escolhido</span>}
                <div className={s.planName}>{p.name}</div>
                <div className={s.planPrice}>{p.price}<small>{p.per}</small></div>
                <p className={s.planDesc}>{p.desc}</p>
                <ul className={s.planUl}>{p.feats.map((f) => <li key={f} className={s.planLi}><span>✓</span> {f}</li>)}</ul>
                <a href="#cta" className={`${s.planCta} ${p.fill ? s.planCtaFill : ""}`}>{p.cta}</a>
              </RevealItem>
            ))}
          </Stagger>
          <p className={s.plansNote}>Valores de referência — o plano e a configuração ideais saem do diagnóstico gratuito. Comissão por passeio conforme o plano. Cupons e passeadores ilimitados em todos.</p>
        </div>
      </section>

      {/* PLATAFORMA / MÓDULOS */}
      <section className={`${s.section} ${s.alt}`} id="plataforma">
        <div className={s.container}>
          <Reveal>
            <div className={s.eyebrow}><i /> A plataforma</div>
            <h2 className={s.h2}>Tudo que uma operação de passeios precisa — numa só.</h2>
            <p className={s.lead}>Cinco módulos integrados mais o white-label, já conversando entre si. Confiança não é promessa: é arquitetura.</p>
          </Reveal>
          <Stagger className={s.modules}>
            {modules.map(([tag, desc]) => (
              <RevealItem key={tag} className={s.module}>
                <span className={s.moduleTag}>{tag}</span>
                <span className={s.moduleDesc} style={{ marginTop: 8 }}>{desc}</span>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className={`${s.section} ${s.dark}`} id="cta">
        <div className={s.container}>
          <Reveal>
            <div className={s.eyebrow}><i /> Vamos começar</div>
            <h2 className={s.ctaTitle}>Sua operação de passeios, com a sua <em>marca.</em></h2>
            <p className={s.lead} style={{ marginBottom: 34 }}>Agende um diagnóstico gratuito. A gente mostra como o seu petshop pode lançar passeios com marca própria e nova receita — em semanas, não meses.</p>
            <a href="#" className={s.btn}>Solicitar diagnóstico White Label →</a>
          </Reveal>
        </div>
      </section>

      <footer className={s.footer}>
        <div className={s.container}>
          <div className={s.footerRow}>
            <span className={s.footerBrand}>Aumigão Walk</span>
            <nav className={s.footerLinks}>
              <a href="#tutor">Tutor</a>
              <a href="#passeador">Passeador</a>
              <a href="#white-label">White Label</a>
              <a href="#planos">Planos</a>
              <a href="#cta">Contato</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
