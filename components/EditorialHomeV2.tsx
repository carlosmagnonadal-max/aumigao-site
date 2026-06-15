"use client";

import Image from "next/image";
import { HeroMerged } from "./HeroMerged";
import { Reveal, Stagger, RevealItem } from "./Motion";
import s from "./editorial-home.module.css";

const pillars = [
  ["🏷️", "Sua marca, seu serviço", "App, painel e financeiro com a SUA identidade. O cliente é seu, a relação é sua, a receita é sua — a tecnologia fica por nossa conta."],
  ["💰", "Nova receita recorrente", "Transforme passeios numa fonte de renda mensal previsível, sem contratar time técnico nem desenvolver nada do zero."],
  ["🛡️", "Operação segura e auditável", "Passeadores credenciados, rota monitorada em tempo real e trilha de auditoria de cada passeio. Tranquilidade pra você e pro tutor."],
  ["⚙️", "Tudo numa plataforma", "Matching, score, recovery e financeiro integrados. Você foca no negócio; a operação roda sozinha."],
];

const flow = [
  ["1", "Tutor agenda", "Solicita o passeio com horário e preferências do pet, pelo app com a sua marca."],
  ["2", "Sistema recomenda", "O matching cruza região, score e disponibilidade e indica o passeador certo."],
  ["3", "Passeador aceita", "Confirma, recebe o kit e a rota validada. Tudo credenciado."],
  ["4", "Operação acompanha", "A central monitora a rota em tempo real, com registro e auditoria."],
  ["5", "Score atualiza", "A reputação de cada passeador alimenta as próximas recomendações."],
  ["6", "Recovery atua", "Qualquer exceção recebe tratamento dedicado, monitorado 24/7."],
];

const modules = [
  ["Matching", "Distribuição inteligente", "Cruza região, score e disponibilidade para escalar o passeador certo, na hora certa."],
  ["Score", "Reputação viva", "Avaliação contínua que melhora a qualidade da operação a cada passeio."],
  ["Credenciamento", "Confiança verificada", "Documentos, validação e trilha de auditoria de cada passeador da sua rede."],
  ["Recovery", "Exceções sob controle", "Imprevistos com tratamento dedicado e monitoramento contínuo."],
  ["Financeiro", "Rastreável de ponta a ponta", "Repasses, comissões e relatórios — tudo com a sua marca e auditável."],
  ["White Label", "A plataforma é sua", "App, painel e financeiro com a identidade do seu petshop, prontos pra usar."],
];

export function EditorialHomeV2() {
  return (
    <div className={s.page}>
      <HeroMerged />

      {/* PILARES */}
      <section className={s.section}>
        <div className={s.container}>
          <Reveal>
            <div className={s.eyebrow}><i /> Por que Aumigão</div>
            <h2 className={s.h2}>Seu petshop passeando — e <em>lucrando</em> — com a própria marca.</h2>
            <p className={s.lead}>Você não precisa de equipe de tecnologia nem começar do zero. O Aumigão é a operação completa de passeios, pronta pra rodar com a sua identidade.</p>
          </Reveal>
          <Stagger className={s.pillars}>
            {pillars.map(([icon, title, desc]) => (
              <RevealItem key={title} className={s.pillar}>
                <span className={s.pillarIcon}>{icon}</span>
                <span className={s.pillarTitle}>{title}</span>
                <span className={s.pillarDesc}>{desc}</span>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* OPERAÇÃO */}
      <section className={`${s.section} ${s.alt}`} id="funciona">
        <div className={s.container}>
          <Reveal>
            <div className={s.eyebrow}><i /> Operação Viva</div>
            <h2 className={s.h2}>Do agendamento ao <em>recovery</em>, num ciclo só.</h2>
            <p className={s.lead}>Cada passeio percorre o mesmo fluxo auditável. O sistema recomenda, acompanha em tempo real e aprende — você só colhe os resultados.</p>
          </Reveal>
          <div className={s.flow}>
            {flow.map(([n, t, d]) => (
              <Reveal key={n} className={s.flowRow}>
                <span className={s.flowNum}>{n}</span>
                <span className={s.flowTitle}>{t}</span>
                <span className={s.flowDesc}>{d}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className={s.section} id="modulos">
        <div className={s.container}>
          <Reveal>
            <div className={s.eyebrow}><i /> A plataforma</div>
            <h2 className={s.h2}>Tudo que uma operação de passeios precisa.</h2>
            <p className={s.lead}>Cinco módulos integrados mais o white-label — sem você juntar ferramenta nenhuma. Já vem pronto e conversando entre si.</p>
          </Reveal>
          <Stagger className={s.modules}>
            {modules.map(([tag, title, desc]) => (
              <RevealItem key={tag} className={s.module}>
                <span className={s.moduleTag}>{tag}</span>
                <span className={s.moduleTitle}>{title}</span>
                <span className={s.moduleDesc}>{desc}</span>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHITE LABEL */}
      <section className={`${s.section} ${s.alt}`} id="white-label">
        <div className={s.container}>
          <div className={s.split}>
            <Reveal from="right" className={s.media}>
              <Image src="/tutor-laptop.jpg" alt="Painel da operação com a marca do petshop" fill sizes="50vw" style={{ objectFit: "cover" }} />
            </Reveal>
            <Reveal>
              <div className={s.eyebrow}><i /> White Label</div>
              <h2 className={s.h2}>A sua marca, do primeiro toque ao <em>financeiro.</em></h2>
              <p className={s.lead}>Seu petshop lança um serviço de passeios completo — com identidade própria. A receita e o relacionamento são seus; a operação é nossa.</p>
              <ul className={s.ul}>
                <li className={s.li}><span className={s.liDot}>✓</span> App e painel com o seu logo, suas cores e o seu domínio.</li>
                <li className={s.li}><span className={s.liDot}>✓</span> Financeiro e repasses com a sua marca, totalmente rastreáveis.</li>
                <li className={s.li}><span className={s.liDot}>✓</span> Pronto pra usar — sem desenvolver nada, sem time técnico.</li>
              </ul>
              <p style={{ marginTop: 26 }}><a href="#cta" className={s.link}>Conheça o White Label →</a></p>
            </Reveal>
          </div>
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

      {/* FOOTER */}
      <footer className={s.footer}>
        <div className={s.container}>
          <div className={s.footerRow}>
            <span className={s.footerBrand}>Aumigão Walk</span>
            <nav className={s.footerLinks}>
              <a href="#funciona">Como funciona</a>
              <a href="#modulos">Plataforma</a>
              <a href="#white-label">White Label</a>
              <a href="#cta">Contato</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
