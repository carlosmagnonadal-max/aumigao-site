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
  ["Marca própria no app e no painel.", "Logo, cores, nome e splash aplicados em runtime — sem builds separados. App publicado nas lojas é add-on (Pro) ou já incluído (Enterprise)."],
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
  {
    name: "Começar",
    price: "R$0",
    per: "/mês",
    desc: "Para provar que funciona.",
    feats: [
      "Passeios avulsos individuais",
      "Agenda, matching e GPS ao vivo",
      "Perfil Vivo do Pet e relatórios ao tutor",
      "Cobrança integrada",
      "Comissão de 20% por passeio",
      "Até 40 passeios/mês",
      "Todo cadastro começa com 21 dias de Pro grátis",
    ],
    note: "Comissão de 20% sobre cada passeio. Apenas passeios avulsos individuais. Sem rede Aumigão. Limite de 40 passeios/mês.",
    cta: "Criar conta grátis",
    feat: false,
    badge: null,
    notIncluded: [
      "Passeios compartilhados e Pet Tour",
      "Planos mensais recorrentes",
      "Cupons e indicações",
      "Rede de passeadores Aumigão",
      "White-label completo",
    ],
  },
  {
    name: "Pro",
    price: "R$129,90",
    per: "/mês",
    desc: "Pra lançar e crescer com a sua marca.",
    feats: [
      "Tudo do Começar, sem limites de passeios",
      "Passeios compartilhados e Pet Tour",
      "Planos mensais recorrentes e assinaturas",
      "Cupons, indicações e boosts",
      "Rede de passeadores Aumigão (comissão 18%)",
      "Comissão 10% por passeio (operação própria)",
      "Marca própria no app e no painel (runtime)",
      "Até 2 unidades",
      "App próprio nas lojas: add-on disponível",
      "Onboarding assistido / prioridade alta",
    ],
    note: null,
    cta: "Solicitar diagnóstico",
    feat: true,
    badge: "Mais popular",
    notIncluded: null,
  },
  {
    name: "Enterprise",
    price: "A partir de R$1.199,90",
    per: "/mês",
    desc: "Pra redes, multiunidades e projetos customizados.",
    feats: [
      "Tudo do Pro, mais:",
      "App próprio nas lojas incluído (ícone e nome)",
      "Até 4 unidades (acima disso, sob consulta)",
      "Comissão 5% por passeio (operação própria)",
      "Rede de passeadores (comissão 10%)",
      "Projetos customizados",
      "Suporte dedicado / prioridade máxima",
    ],
    note: null,
    cta: "Solicitar proposta",
    feat: false,
    badge: null,
    notIncluded: null,
  },
];

const rollout = [
  ["Diagnóstico", "A gente entende sua operação e desenha o plano ideal — sem custo."],
  ["Personalização", "Sua marca no app do tutor, no app do passeador e no painel."],
  ["Configuração", "Módulos, regiões, preços e rede ligados com a nossa equipe."],
  ["Operação", "Você opera e cresce; a Aumigão sustenta tecnologia, rede e governança."],
];

const faq = [
  { q: "O plano Começar é grátis mesmo?", a: "Sim, R$0 de mensalidade. A plataforma cobra apenas 20% por passeio realizado — você só paga quando opera. Ao crescer, o Pro fica mais barato: com 10% de comissão e acesso à rede Aumigão, o custo por passeio cai rápido e as features de recorrência e cupons multiplicam a receita." },
  { q: "Quanto custa e quando começo a ganhar?", a: "O Começar é gratuito (20% por passeio, até 40/mês). O Pro custa R$129,90/mês com comissão de 10% e acesso à rede. O Enterprise a partir de R$1.199,90/mês com 5% e app dedicado. Todo cadastro começa com 21 dias de Pro completo grátis — o plano ideal sai do diagnóstico gratuito." },
  { q: "Preciso de equipe técnica?", a: "Não. Você não monta tecnologia do zero nem contrata time de TI. A plataforma já existe: você escolhe o plano, personaliza com a sua marca e a operação roda com a nossa governança." },
  { q: "Eu uso a rede pronta de passeadores?", a: "Em ambos os planos você fica habilitado a usar a rede: pode convidar passeadores de uma rede credenciada e avaliada pela Aumigão, em vez de recrutar e gerir do zero. Habilitação não é obrigação de uso — você convida quando e se quiser, e cada passeador decide se topa trabalhar com a sua marca. As condições de uso da rede são definidas no diagnóstico." },
  { q: "E o app com a minha marca nas lojas?", a: "A marca própria (logo, cores, nome, splash) aparece no app em runtime desde o plano Pro, sem builds separados. Publicar um app com o seu ícone e nome nas lojas (App Store / Google Play) é um add-on no Pro e já vem incluído no Enterprise. Os detalhes saem no diagnóstico." },
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
            <h2 className={e.h2}>Comece <em>grátis.</em> Cresça com a operação.</h2>
            <p className={e.lead}>Três planos para cada momento da sua empresa. Todo cadastro começa com 21 dias de Pro completo — sem cartão.</p>
          </Reveal>
          <Stagger className={e.plans}>
            {plans.map((p) => (
              <RevealItem key={p.name} className={`${e.plan} ${p.feat ? e.planFeat : ""}`}>
                {p.badge && <span className={e.planBadge}>{p.badge}</span>}
                <div className={e.planName}>{p.name}</div>
                <div className={e.planPrice}>{p.price}<small>{p.per}</small></div>
                <p className={e.planDesc}>{p.desc}</p>
                <ul className={e.planUl}>{p.feats.map((f) => <li key={f} className={e.planLi}><span>✓</span> {f}</li>)}</ul>
                {p.notIncluded && (
                  <ul className={e.planUl} style={{ marginTop: 0 }}>
                    {p.notIncluded.map((f) => (
                      <li key={f} className={e.planLi} style={{ opacity: 0.45 }}>
                        <span style={{ color: "var(--muted)" }}>✗</span> {f}
                      </li>
                    ))}
                  </ul>
                )}
                {p.note && <p className={e.plansNote} style={{ marginTop: 12, marginBottom: 0 }}>{p.note}</p>}
                <Link href="/contato?perfil=empresa" className={`${e.planCta} ${p.feat ? e.planCtaFill : ""}`} style={{ marginTop: 20 }}>{p.cta}</Link>
              </RevealItem>
            ))}
          </Stagger>
          <p className={e.plansNote}>Plano Começar sem mensalidade; comissão de 20% por passeio realizado. Pro e Enterprise: comissão conforme o plano. O diagnóstico gratuito define a configuração ideal.</p>
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
