"use client";

import Image from "next/image";
import Link from "next/link";
import { HeroV2 } from "./HeroV2";
import { Reveal, Stagger, RevealItem } from "./Motion";
import s from "./editorial.module.css";

const flow = [
  ["01", "Tutor agenda", "Solicita o passeio com horário e preferências do pet."],
  ["02", "Sistema recomenda", "O matching cruza região, score e disponibilidade."],
  ["03", "Passeador aceita", "Confirma, recebe kit e rota validada."],
  ["04", "Operação acompanha", "Central monitora a rota em tempo real, auditável."],
  ["05", "Score atualiza", "A reputação alimenta as próximas recomendações."],
  ["06", "Recovery atua", "Exceções recebem tratamento dedicado."],
];

const modules = [
  ["Matching", "Distribuição inteligente", "Cruza região, score e disponibilidade para o passeador certo, na hora certa."],
  ["Score", "Reputação viva", "Avaliação contínua que melhora a operação a cada passeio."],
  ["Credenciamento", "Confiança verificada", "Documentos, validação e trilha de auditoria de cada passeador."],
  ["Recovery", "Exceções sob controle", "Tratamento dedicado para imprevistos, monitorado 24/7."],
  ["Financeiro", "Rastreável de ponta a ponta", "Repasses, comissões e relatórios com a sua marca."],
  ["White Label", "A plataforma é sua", "App, painel e financeiro com a identidade do seu petshop."],
];

export function EditorialHome() {
  return (
    <div className={s.page}>
      <HeroV2 />

      {/* STATEMENT */}
      <section className={s.section}>
        <div className={s.container}>
          <Reveal>
            <p className={s.statement}>
              A operação completa por trás de cada passeio —{" "}
              <span className={s.accent}>com a sua marca.</span>
            </p>
          </Reveal>
          <Stagger className={s.bignums}>
            {[
              ["5", "módulos numa só plataforma: matching, score, credenciamento, recovery e financeiro"],
              ["100%", "auditável e rastreável, do agendamento ao repasse — em conformidade com a LGPD"],
              ["White-label", "a sua marca do app ao financeiro, sem escrever uma linha de código"],
            ].map(([v, l]) => (
              <RevealItem key={v} className={s.bignum}>
                <div className={s.bignumV}>{v}</div>
                <div className={s.bignumL}>{l}</div>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* OPERAÇÃO / FLUXO */}
      <section className={`${s.section} ${s.sectionAlt}`} id="funciona">
        <div className={s.container}>
          <Reveal>
            <div className={s.eyebrow}><i /> Operação Viva</div>
            <h2 className={s.h2}>
              Um ciclo único, do agendamento ao <span className={s.accent}>recovery.</span>
            </h2>
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
      <section className={`${s.section} ${s.sectionAlt}`} id="white-label">
        <div className={s.container}>
          <div className={s.split}>
            <Reveal from="right" className={s.media}>
              <Image src="/tutor-laptop.jpg" alt="Painel da operação com a marca do petshop" fill sizes="50vw" style={{ objectFit: "cover" }} />
            </Reveal>
            <Reveal>
              <div className={s.eyebrow}><i /> White Label</div>
              <h2 className={s.h2}>A sua marca, do primeiro toque ao financeiro.</h2>
              <p className={s.lead}>
                Seu petshop lança um serviço de passeios com app próprio, painel próprio
                e financeiro próprio. A tecnologia é nossa; a marca, o cliente e a receita
                são seus.
              </p>
              <p style={{ marginTop: 24 }}>
                <Link href="/white-label" className={s.link}>Conheça o White Label →</Link>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={s.cta} id="cta">
        <div className={s.container}>
          <Reveal>
            <h2 className={s.ctaTitle}>
              Comece a operar <span className={s.accent}>com a sua marca.</span>
            </h2>
            <Link href="/contato" className={s.btn}>Solicitar diagnóstico White Label <span aria-hidden>→</span></Link>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={s.footer}>
        <div className={s.container}>
          <div className={s.footerRow}>
            <span className={s.footerBrand}>Aumigão Walk</span>
            <nav className={s.footerLinks}>
              <Link href="/#funciona">Como funciona</Link>
              <Link href="/white-label">White Label</Link>
              <Link href="/contato">Contato</Link>
              <Link href="/termos">Termos</Link>
              <Link href="/privacidade">Privacidade</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
