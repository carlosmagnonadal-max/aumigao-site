"use client";

import { HeroMerged } from "./HeroMerged";
import { BrandSwapper } from "./BrandSwapper";
import { PlatformPeek } from "./PlatformPeek";
import { AppDownload } from "./AppDownload";
import { ContactSection } from "./ContactSection";
import { Reveal, Stagger, RevealItem } from "./Motion";
import s from "./editorial-home.module.css";

const trilhas = [
  { tag: "Para o tutor", title: "Segurança e rotina", promise: "Tranquilidade e cuidado consistente para o pet, sem fricção.", bullets: ["Agendamento simples e previsível", "Acompanhamento do passeio ao vivo", "Avaliação que melhora o serviço"] },
  { tag: "Para o passeador", title: "Oportunidade e reputação", promise: "Demanda qualificada, agenda própria e profissionalização.", bullets: ["Renda recorrente, não bico", "Agenda própria", "Score que valoriza quem cuida"] },
  { tag: "Para a empresa pet", title: "Marca, receita e escala", promise: "Lance a própria operação de passeios com governança assistida.", bullets: ["Plataforma white-label própria", "Nova receita recorrente", "Multiunidades e expansão"] },
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
  { name: "Starter", price: "R$197", per: "/mês", desc: "Pra começar a operar com marca própria.", feats: ["1 unidade", "Módulos essenciais", "Setup grátis", "Comissão 12% por passeio"], cta: "Solicitar diagnóstico", fill: false, feat: false },
  { name: "Business", price: "R$597", per: "/mês", desc: "Pra escalar a operação e fidelizar.", feats: ["2 unidades (+ extra)", "Rede de passeadores credenciada", "Recorrência + Pet Tour", "Comissão 8% por passeio"], cta: "Falar com a gente", fill: true, feat: true },
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

      {/* POR DENTRO DA PLATAFORMA */}
      <section className={`${s.section} ${s.alt}`} id="plataforma-por-dentro">
        <div className={s.container}>
          <Reveal>
            <div className={s.eyebrow}><i /> Por dentro da plataforma</div>
            <h2 className={s.h2}>Veja o app e o painel — <em>por dentro.</em></h2>
            <p className={s.lead}>A mesma operação, três experiências: o app do tutor, o app do passeador (a rede é nossa) e o painel white-label que você comanda com a sua marca.</p>
          </Reveal>
          <Reveal><PlatformPeek /></Reveal>
        </div>
      </section>

      {/* WHITE-LABEL + TORNE SEU */}
      <section className={`${s.section} ${s.alt}`} id="white-label">
        <div className={s.container}>
          <Reveal>
            <div className={s.eyebrow}><i /> Para a empresa pet · White Label</div>
            <h2 className={s.h2}>Lance sua própria operação de passeios — com a sua <em>marca.</em></h2>
            <p className={s.lead}>Sua marca no app do tutor, no app do passeador e no painel operacional. Você opera; o Aumigão sustenta a tecnologia, a rede e a governança. Passeio deixa de ser serviço avulso e vira produto recorrente.</p>
            <ul className={s.ul} style={{ maxWidth: "72ch" }}>
              <li className={s.li}><span className={s.liDot}>1</span><span><b style={{ color: "var(--ink)" }}>Os tutores são seus.</b> A base de clientes é da sua empresa — com a sua marca e a sua carteira.</span></li>
              <li className={s.li}><span className={s.liDot}>2</span><span><b style={{ color: "var(--ink)" }}>Os passeadores são da rede Aumigão.</b> Credenciados, avaliados e mantidos pela plataforma: você pluga numa rede pronta em vez de recrutar e gerir passeadores do zero.</span></li>
              <li className={s.li}><span className={s.liDot}>3</span><span><b style={{ color: "var(--ink)" }}>Você opera; a Aumigão sustenta.</b> Rede de passeadores, matching, reputação e pagamentos por nossa conta — a operação e a marca, por sua.</span></li>
            </ul>
            <p className={s.plansNote} style={{ marginTop: 14 }}>Acesso à Rede de passeadores disponível a partir do plano Business.</p>
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
                <a href="#contato" className={`${s.planCta} ${p.fill ? s.planCtaFill : ""}`}>{p.cta}</a>
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

      {/* BAIXE OS APPS */}
      <section className={s.section} id="baixar">
        <div className={s.container}>
          <Reveal>
            <div className={s.eyebrow}><i /> Baixe os apps</div>
            <h2 className={s.h2}>Leve a operação no <em>bolso.</em></h2>
            <p className={s.lead}>Dois apps com a sua marca: um para o tutor agendar e acompanhar ao vivo, outro para o passeador receber demanda e ganhos.</p>
          </Reveal>
          <Reveal><AppDownload /></Reveal>
        </div>
      </section>

      {/* CONTATO */}
      <section className={`${s.section} ${s.alt}`} id="contato">
        <div className={s.container}>
          <Reveal>
            <div className={s.eyebrow}><i /> Vamos começar</div>
            <h2 className={s.h2}>Sua operação de passeios, com a sua <em>marca.</em></h2>
          </Reveal>
          <Reveal><ContactSection /></Reveal>
        </div>
      </section>

      <footer className={s.footer}>
        <div className={s.container}>
          <div className={s.footerTop}>
            <div>
              <a href="#" className={s.footerLogo}><img src="/icon-rounded-512.png" alt="" /><span>Aumigão Walk</span></a>
              <p className={s.footerTagline}>Infraestrutura de passeios pet: operação auditável, rede credenciada e White Label — com a sua marca.</p>
            </div>
            <div className={s.footerCol}>
              <h4>Plataforma</h4>
              <a href="#plataforma-por-dentro">Como funciona</a>
              <a href="#plataforma">Módulos</a>
              <a href="#white-label">White Label</a>
              <a href="#planos">Planos</a>
            </div>
            <div className={s.footerCol}>
              <h4>Participantes</h4>
              <a href="#plataforma-por-dentro">Para tutores</a>
              <a href="#baixar">Seja passeador (Walk)</a>
              <a href="#white-label">Para empresas pet</a>
            </div>
            <div className={s.footerCol}>
              <h4>Empresa</h4>
              <a href="#contato">Contato</a>
              <a href="/termos">Termos</a>
              <a href="/privacidade">Privacidade · LGPD</a>
            </div>
          </div>
          <div className={s.footerBottom}>
            <span>© 2026 Aumigão Walk · CNPJ 49.617.734/0001-03</span>
            <nav className={s.footerLegal}>
              <a href="/termos">Termos</a>
              <a href="/privacidade">Privacidade · LGPD</a>
              <a href="#contato">Contato</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
