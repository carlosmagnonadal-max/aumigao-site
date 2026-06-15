"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Hoverable } from "./Motion";
import { Aurora } from "./Aurora";

type SectionEyebrowProps = {
  number?: string;
  children: React.ReactNode;
  live?: "ok" | "ember";
};

const flow = [
  ["Tutor agenda", "Solicita o passeio com horário e preferências do pet."],
  ["Sistema recomenda", "Matching cruza região, score e disponibilidade."],
  ["Passeador aceita", "Confirma e recebe kit e rota validada."],
  ["Operação acompanha", "Central monitora a rota em tempo real, com auditoria."],
  ["Passeio acontece", "Pet cuidado com protocolo, registro e segurança."],
  ["Tutor avalia", "Confirma a entrega e avalia a experiência."],
  ["Score atualiza", "Reputação alimenta as próximas recomendações."],
  ["Recovery atua", "Exceções recebem tratamento dedicado."],
];

const trustItems = [
  "Credenciamento verificado",
  "Trilha de auditoria",
  "Dados protegidos · LGPD",
  "Recovery monitorado",
  "Financeiro rastreável",
  "Operação contínua",
  "Multiunidades & White Label",
];

const modules: Array<[string, string, string, number[]]> = [
  ["Passeios ativos", "128", "rotas acompanhadas", [42, 60, 52, 78, 66, 90]],
  ["Rede verificada", "342", "passeadores ativos", [55, 48, 70, 60, 82, 74]],
  ["Matching", "98%", "encaixe operacional", [60, 72, 66, 84, 80, 92]],
  ["Kit validado", "100%", "conformidade", [88, 90, 86, 92, 90, 94]],
  ["Repasses", "auditável", "financeiro rastreável", [45, 60, 55, 72, 68, 80]],
  ["Multiunidades", "12", "operações ativas", [50, 58, 64, 60, 74, 70]],
];

const pillars = [
  ["Credenciamento verificado", "Passeadores passam por validação antes de operar. A rede é qualificada, não aberta."],
  ["Trilha de auditoria", "Do agendamento ao repasse, cada etapa fica registrada e rastreável para a operação."],
  ["Dados protegidos", "Tratamento de dados com foco em privacidade e conformidade, alinhado à LGPD."],
  ["Recovery monitorado", "Exceções não somem: entram em um fluxo dedicado de recuperação com acompanhamento."],
  ["Financeiro rastreável", "Repasses e movimentações ficam auditáveis para tutores, passeadores e empresas."],
  ["Operação contínua", "A central acompanha a operação em tempo real, sustentando a experiência ponta a ponta."],
];

const journeys = [
  [
    "Tutor",
    "Segurança e rotina",
    "Tranquilidade e cuidado consistente para o pet, sem fricção.",
    ["Agendamento simples e previsível", "Acompanhamento do passeio", "Avaliação que melhora o serviço"],
  ],
  [
    "Passeador",
    "Oportunidade e reputação",
    "Demanda qualificada, agenda própria e profissionalização.",
    ["Matching com encaixe inteligente", "Credenciamento e kit validado", "Score que valoriza qualidade"],
  ],
  [
    "Empresa",
    "Marca, receita e escala",
    "Lança a própria operação de passeios com governança assistida.",
    ["Plataforma White Label própria", "Nova receita recorrente", "Multiunidades e expansão"],
  ],
];

const faqs = [
  [
    "Como funciona o White Label?",
    "A empresa usa a operação Aumigão Walk com sua própria marca, app, painel, unidades e rede de passeadores.",
  ],
  [
    "Quanto tempo leva a implantação?",
    "O prazo depende de personalização, unidades e escopo operacional. A demonstração ajuda a estimar o plano.",
  ],
  [
    "Posso usar minha marca?",
    "Sim. A proposta White Label permite uma experiência com identidade da empresa parceira.",
  ],
  [
    "Posso operar mais de uma unidade?",
    "Sim. A estrutura é preparada para negócios com múltiplas unidades e expansão assistida.",
  ],
];

export function SectionEyebrow({ number, children, live }: SectionEyebrowProps) {
  return (
    <span className="ov-eyebrow">
      {live ? <LiveDot tone={live} /> : null}
      {number ? <span>{number}</span> : null}
      {children}
    </span>
  );
}

export function LiveDot({ tone = "ok" }: { tone?: "ok" | "ember" }) {
  return <span className={`ov-dot ${tone === "ember" ? "ov-dot-ember" : ""}`} />;
}

export function StatusPill({ children, tone = "ok" }: { children: React.ReactNode; tone?: "ok" | "ember" }) {
  return (
    <span className="ov-pill">
      <LiveDot tone={tone} />
      {children}
    </span>
  );
}

export function MetricChip({ label, value }: { label: string; value?: string }) {
  return (
    <span className="ov-metric-chip">
      {value ? <b>{value}</b> : null}
      {label}
    </span>
  );
}

function RevealSetup() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(".ov-reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    nodes.forEach((node, index) => {
      node.style.transitionDelay = `${Math.min(index % 8, 6) * 55}ms`;
      io.observe(node);
    });

    return () => io.disconnect();
  }, []);

  return null;
}

export function RouteVisual() {
  return (
    <div className="ov-route">
      <svg viewBox="0 0 480 240" aria-label="Visualização conceitual de rota de passeio monitorada">
        <defs>
          <linearGradient id="ov-route-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFA24D" />
            <stop offset="1" stopColor="#FF6A2B" />
          </linearGradient>
        </defs>
        <g stroke="rgba(255,255,255,.05)" strokeWidth="1">
          <path d="M0 60H480M0 120H480M0 180H480M96 0V240M192 0V240M288 0V240M384 0V240" />
        </g>
        <g fill="rgba(255,255,255,.03)">
          <rect x="40" y="30" width="60" height="44" rx="6" />
          <rect x="300" y="36" width="78" height="50" rx="6" />
          <rect x="150" y="150" width="70" height="46" rx="6" />
          <rect x="360" y="150" width="64" height="50" rx="6" />
        </g>
        <path
          d="M52 196 C 120 196, 130 90, 210 90 S 320 60, 360 150 430 60 430 60"
          fill="none"
          stroke="rgba(255,106,43,.25)"
          strokeWidth="9"
          strokeLinecap="round"
        />
        <path
          id="ov-route-path"
          d="M52 196 C 120 196, 130 90, 210 90 S 320 60, 360 150 430 60 430 60"
          fill="none"
          stroke="url(#ov-route-gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="7 9"
        />
        <circle cx="52" cy="196" r="6" fill="#fff" />
        <circle cx="52" cy="196" r="11" fill="none" stroke="rgba(255,255,255,.35)" />
        <circle cx="430" cy="60" r="6" fill="#FF6A2B" />
        <circle cx="430" cy="60" r="11" fill="none" stroke="rgba(255,106,43,.5)" />
        <text className="ov-pin" x="40" y="222">Tutor</text>
        <text className="ov-pin" x="405" y="44">Destino</text>
        <circle className="ov-walker-dot" r="5.5" fill="#fff">
          <animateMotion dur="4s" repeatCount="indefinite">
            <mpath href="#ov-route-path" />
          </animateMotion>
        </circle>
        <circle className="ov-walker-ring" r="11" fill="none" stroke="#FF6A2B" strokeWidth="1.5" opacity=".7">
          <animateMotion dur="4s" repeatCount="indefinite">
            <mpath href="#ov-route-path" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}

export function LiveOperationCard() {
  return (
    <div className="ov-reveal">
      <div className="ov-opcard">
        <div className="ov-opcard-head">
          <span>aumigão · operação ao vivo</span>
          <span className="ov-live"><LiveDot /> Ao vivo</span>
        </div>
        <RouteVisual />
        <div className="ov-opstats">
          <div><span>Score</span><b>4.9<small>/5</small></b></div>
          <div><span>Matching</span><b>≈ inst.</b></div>
          <div><span>Status</span><b className="ov-ok"><LiveDot />Em rota</b></div>
        </div>
      </div>
      <p className="ov-note">
        <LiveDot tone="ember" />
        Representação conceitual, não é a interface real do produto. Dados ilustrativos.
      </p>
    </div>
  );
}

function HeroPhotoRoute() {
  return (
    <svg className="ov-photo-route" viewBox="0 0 640 720" aria-hidden="true">
      <path
        className="ov-photo-route-glow"
        d="M338 708 C 302 594 250 556 285 456 S 356 344 302 274 160 194 86 88"
      />
      <path
        id="ov-photo-route-path"
        className="ov-photo-route-line"
        d="M338 708 C 302 594 250 556 285 456 S 356 344 302 274 160 194 86 88"
      />
      <circle cx="86" cy="88" r="8" className="ov-photo-route-end" />
      <circle cx="86" cy="88" r="17" className="ov-photo-route-end-ring" />
      <circle r="6.5" className="ov-photo-route-dot">
        <animateMotion dur="3.8s" repeatCount="indefinite" rotate="auto">
          <mpath href="#ov-photo-route-path" />
        </animateMotion>
      </circle>
      <circle r="15" className="ov-photo-route-ring">
        <animateMotion dur="3.8s" repeatCount="indefinite" rotate="auto">
          <mpath href="#ov-photo-route-path" />
        </animateMotion>
      </circle>
    </svg>
  );
}

function HeroPhotoGlassCard() {
  return (
    <div className="ov-photo-card">
      <div className="ov-photo-card-head">
        <span>{"OPERA\u00C7\u00C3O AO VIVO"}</span>
        <span><LiveDot /> agora</span>
      </div>
      <div className="ov-photo-mini-route" aria-hidden="true">
        <svg viewBox="0 0 230 52">
          <path d="M12 42 C 58 42 70 14 120 14 S 190 28 218 6" />
          <circle cx="12" cy="42" r="3.5" />
          <circle cx="218" cy="6" r="4.5" />
          <circle cx="218" cy="6" r="9" />
        </svg>
      </div>
      <div className="ov-photo-card-row"><span>Status</span><b className="ov-photo-ok"><LiveDot /> Em rota</b></div>
      <div className="ov-photo-card-row"><span>Passeador</span><b>Verificado ✓</b></div>
      <div className="ov-photo-card-row"><span>Score</span><b className="ov-photo-ember">4.9/5</b></div>
    </div>
  );
}

function PhotoTreatment({ variant = "standard" }: { variant?: "standard" | "cta" }) {
  return (
    <>
      <span className={`ov-img-aubergine ${variant === "cta" ? "is-cta" : ""}`} />
      <span className="ov-img-grain" />
      <span className={`ov-img-vignette ${variant === "cta" ? "is-cta" : ""}`} />
    </>
  );
}

function JourneyPhoto({ role }: { role: string }) {
  const photos: Record<string, { src: string; alt: string }> = {
    Tutor: { src: "/tutor-laptop.jpg", alt: "Tutora usando notebook com cachorro ao lado" },
    Passeador: { src: "/dog-walk-street.jpg", alt: "Passeador conduzindo cachorro em uma rua" },
  };
  const photo = photos[role];

  if (!photo) return null;

  return (
    <div className="ov-journey-photo">
      <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 840px) 100vw, 33vw" className="ov-journey-photo-img" />
      <span className="ov-journey-photo-tint" />
      <PhotoTreatment />
    </div>
  );
}

function WalkerRotatingBadge() {
  return (
    <div className="ov-walker-badge" aria-hidden="true">
      <svg viewBox="0 0 120 120">
        <defs>
          <path id="ov-walker-badge-path" d="M60 60 m -43 0 a43 43 0 1 1 86 0 a43 43 0 1 1 -86 0" />
        </defs>
        <text>
          <textPath href="#ov-walker-badge-path">passeador credenciado · aumigão walk ·</textPath>
        </text>
      </svg>
      <span />
    </div>
  );
}

export function EcosystemHero() {
  return (
    <section className="ov-hero ov-photo-hero">
      <div className="ov-photo-hero-bg">
        <Image
          src="/walker-hero.jpg"
          alt="Passeadora da Aumigao caminhando com cachorro em uma rua arborizada"
          fill
          priority={true}
          sizes="100vw"
          className="ov-photo-hero-img"
        />
      </div>
      <div className="ov-photo-scrim-top" />
      <div className="ov-photo-scrim-left" />
      <div className="ov-photo-scrim-bottom" />
      <div className="ov-photo-noise" />
      <Aurora intensity={1} />
      <HeroPhotoRoute />
      <HeroPhotoGlassCard />
      <div className="ov-photo-chip ov-photo-chip-one"><LiveDot tone="ember" /> Recovery monitorado</div>
      <div className="ov-photo-chip ov-photo-chip-two">✓ Passeador credenciado</div>
      <div className="ov-hero-grid" />
      <div className="ov-wrap ov-hero-wrap">
        <div className="ov-reveal">
          <div className="ov-photo-eyebrow"><span>{"OPERA\u00C7\u00C3O VIVA"}</span><i /></div>
          <h1 className="ov-photo-title">
            <span className="ov-word ov-word-1">Cada</span>{" "}
            <span className="ov-word ov-word-2">passeio,</span><br />
            <span className="ov-word ov-word-3">uma</span>{" "}
            <span className="ov-word ov-word-4 ov-word-gradient">{"opera\u00E7\u00E3o."}</span>
          </h1>
          <SectionEyebrow live="ember">Infraestrutura de passeios pet</SectionEyebrow>
          <p className="ov-hero-subtitle">A operação que cuida do passeio <em>de ponta a ponta</em>.</p>
          <p className="ov-lead ov-photo-fade ov-photo-fade-sub">
            Aumigão conecta tutores, passeadores e empresas em uma operação auditável:
            matching, score, credenciamento, recovery e White Label, em uma só plataforma.
          </p>
          <div className="ov-cta-row ov-photo-fade ov-photo-fade-cta">
            <Hoverable style={{ display: "inline-flex" }}>
              <Link href="/#cta" className="ov-btn ov-btn-primary">
                Solicitar diagnóstico White Label <span className="ov-arr">→</span>
              </Link>
            </Hoverable>
            <Hoverable style={{ display: "inline-flex" }}>
              <Link href="/#funciona" className="ov-btn ov-btn-ghost">
                Ver como funciona
              </Link>
            </Hoverable>
          </div>
          <div className="ov-trust-pills ov-photo-fade ov-photo-fade-pills">
            <StatusPill>Credenciamento verificado</StatusPill>
            <MetricChip label="Trilha de auditoria" />
            <MetricChip label="Recovery monitorado" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustMarquee() {
  const repeated = [...trustItems, ...trustItems];
  return (
    <div className="ov-strip" aria-hidden="true">
      <div className="ov-marquee">
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`} className="ov-marquee-item">
            <span className="ov-marquee-icon">◇</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function OperationFlow() {
  return (
    <section className="ov-section ov-flow ov-grain" id="funciona">
      <Aurora intensity={1.1} />
      <div className="ov-wrap">
        <div className="ov-section-head ov-reveal">
          <SectionEyebrow number="01">Como a operação funciona</SectionEyebrow>
          <h2>Um ciclo único, do agendamento ao recovery.</h2>
          <p className="ov-lead">Cada passeio percorre o mesmo fluxo auditável. O sistema recomenda, acompanha e aprende.</p>
        </div>
        <div className="ov-pulse-row ov-reveal" aria-hidden="true">
          <svg viewBox="0 0 1140 60" preserveAspectRatio="none">
            <path d="M0 30 H180 l14 -18 18 36 14 -18 H440 l14 -14 18 28 14 -14 H720 l14 -20 18 40 14 -20 H1010 l14 -12 18 24 14 -12 H1140" />
          </svg>
        </div>
        <div className="ov-flowtrack">
          {flow.map(([title, text], index) => (
            <article key={title} className="ov-step ov-reveal">
              <span className="ov-step-bar" />
              <span className="ov-step-num">{String(index + 1).padStart(2, "0")}</span>
              <span className="ov-step-icon">⌁</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConceptCommandCenter() {
  return (
    <section className="ov-section ov-center ov-grain">
      <Aurora intensity={1.15} />
      <div className="ov-glow" />
      <div className="ov-wrap">
        <div className="ov-section-head ov-reveal">
          <SectionEyebrow number="02">Centro Operacional</SectionEyebrow>
          <h2>Uma visão protegida da operação, sem expor a interface interna.</h2>
          <p className="ov-lead">
            Os blocos de gestão que sustentam a jornada: rede, qualidade, financeiro,
            recuperação de exceções e escala.
          </p>
        </div>
        <div className="ov-console ov-reveal">
          <div className="ov-console-bar">
            <span><i /> <i /> <i /> centro operacional</span>
            <div>
              <StatusPill>Operação online</StatusPill>
              <StatusPill tone="ember">Recovery monitorado</StatusPill>
              <MetricChip label="Credenciamento ativo" />
            </div>
          </div>
          <div className="ov-console-body">
            <div className="ov-modgrid">
              {modules.map(([label, value, sub, bars]) => (
                <article key={label} className="ov-module">
                  <span>{label}</span>
                  <b>{value}</b>
                  <p>{sub}</p>
                  <div className="ov-spark">
                    {(bars as number[]).map((height, index) => (
                      <i key={index} style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
            <aside className="ov-side">
              <h3>Qualidade da rede</h3>
              <div className="ov-score-ring">
                <svg viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.5" />
                  <circle className="ov-score-progress" cx="18" cy="18" r="15.5" />
                </svg>
                <div><b>4.9</b><span>score médio</span></div>
              </div>
              {["Credenciamentos|em dia|ok", "Recovery|monitorado|ember", "Auditoria|ativa|ok", "White Label|habilitado|ok"].map((row) => {
                const [label, value, tone] = row.split("|");
                return (
                  <div className="ov-row" key={label}>
                    <span><LiveDot tone={tone === "ember" ? "ember" : "ok"} />{label}</span>
                    <b className={value === "ativa" ? "ov-ok" : ""}>{value}</b>
                  </div>
                );
              })}
            </aside>
          </div>
        </div>
        <p className="ov-note ov-note-center ov-reveal">
          <LiveDot tone="ember" />
          Números ilustrativos para demonstração visual, não representam métricas reais.
        </p>
      </div>
    </section>
  );
}

export function SecurityTrust() {
  return (
    <section className="ov-section ov-trustsec ov-grain" id="confianca">
      <div className="ov-wrap">
        <div className="ov-section-head ov-reveal">
          <SectionEyebrow number="03">Confiança & Segurança</SectionEyebrow>
          <h2>Confiança não é promessa. É arquitetura.</h2>
          <p className="ov-lead">
            Cada passeio é uma operação registrada, verificável e recuperável. É isso que diferencia uma plataforma de um aplicativo.
          </p>
        </div>
        <div className="ov-trustgrid">
          {pillars.map(([title, text]) => (
            <article key={title} className="ov-trustcard ov-reveal">
              <span>✓</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ParticipantJourney() {
  return (
    <section className="ov-section ov-journey ov-grain" id="jornada">
      <Aurora intensity={0.9} />
      <div className="ov-wrap">
        <div className="ov-section-head ov-reveal">
          <SectionEyebrow number="04">Jornada dos participantes</SectionEyebrow>
          <h2>Três trilhas, uma só operação.</h2>
          <p className="ov-lead">Tutor, passeador e empresa entram por portas diferentes e se encontram na mesma infraestrutura.</p>
        </div>
        <div className="ov-tracks">
          {journeys.map(([role, title, text, bullets]) => (
            <article key={role as string} className="ov-track ov-reveal">
              <JourneyPhoto role={role as string} />
              <span className="ov-track-icon">⌾</span>
              <span className="ov-role">{role as string}</span>
              <h3>{title as string}</h3>
              <p>{text as string}</p>
              <ul>
                {(bullets as string[]).map((bullet) => <li key={bullet}>✓ {bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WalkerOpportunity() {
  return (
    <section className="ov-section ov-walker ov-walker-editorial ov-grain" id="passeadores">
      <div className="ov-wrap ov-walker-wrap">
        <div className="ov-walker-photo-panel ov-reveal">
          <Image src="/dog-walk-street.jpg" alt="Cachorro em passeio na rua" fill sizes="(max-width: 840px) 100vw, 55vw" className="ov-walker-photo-img" />
          <PhotoTreatment />
          <span className="ov-walker-dissolve" />
          <WalkerRotatingBadge />
        </div>
        <div className="ov-reveal ov-walker-copy">
          <span className="ov-ghost-rs" aria-hidden="true">+R$</span>
          <SectionEyebrow live="ember">Para quem passeia</SectionEyebrow>
          <h2>Transforme passeios em <em>renda recorrente</em>.</h2>
          <p className="ov-lead">
            O Aumigão leva demanda qualificada até você. Você define a agenda, constrói reputação
            e faz dos passeios uma fonte de renda de verdade, com uma operação que cuida das pontas.
          </p>
          <ul className="ov-wlist">
            <li><b>Renda recorrente, não bico.</b> Demanda contínua em vez de corrida esporádica.</li>
            <li><b>Agenda própria.</b> Você escolhe quando e quanto passear.</li>
            <li><b>Demanda certa via matching.</b> O sistema conecta você aos passeios do seu perfil e região.</li>
            <li><b>Score que valoriza.</b> Quem cuida bem ganha reputação e mais oportunidades.</li>
          </ul>
          <Link href="/seja-passeador" className="ov-btn ov-btn-ghost">
            Quero ser passeador <span className="ov-arr">→</span>
          </Link>
          <p className="ov-microline">
            Para empresas White Label: isso significa uma rede motivada e profissionalizada desde o primeiro dia de operação.
          </p>
        </div>
        <div className="ov-earn ov-reveal">
          <div className="ov-earn-head">
            <span>potencial de ganhos</span>
            <span className="ov-live"><LiveDot tone="ember" /> ilustrativo</span>
          </div>
          <div className="ov-earn-bars">
            {[32, 46, 58, 72, 86, 100].map((height, index) => (
              <div key={height}>
                <i className={index < 2 ? "is-lite" : ""} style={{ height: `${height}%` }} />
                <span>S{index + 1}</span>
              </div>
            ))}
          </div>
          <div className="ov-earn-foot">
            <span>Ganhos crescem com recorrência, agenda e reputação.</span>
            <div><MetricChip label="+ score" /><MetricChip label="+ demanda" /><MetricChip label="dados demonstrativos" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhiteLabelArchitecture() {
  const middle = ["App Tutor", "App Passeador", "Painel Operacional", "Rede de Passeadores", "Governança", "Financeiro"];
  const outcomes = ["Nova Receita", "Fidelização", "Escala"];
  return (
    <section className="ov-section ov-wl ov-grain" id="whitelabel">
      <div className="ov-glow" />
      <div className="ov-wrap">
        <div className="ov-wl-top">
          <div className="ov-reveal">
            <SectionEyebrow number="05">White Label Enterprise</SectionEyebrow>
            <h2>Lance sua própria operação de passeios pet.</h2>
          </div>
          <div className="ov-reveal">
            <p className="ov-lead">
              Sua marca no app do tutor, no app do passeador e no painel operacional. Você opera; o Aumigão sustenta tecnologia, rede e governança.
            </p>
            <Link href="/#cta" className="ov-btn ov-btn-primary">
              Solicitar diagnóstico White Label <span className="ov-arr">→</span>
            </Link>
          </div>
        </div>
        <div className="ov-arch ov-reveal">
          <div className="ov-arch-node is-brand">Sua marca</div>
          <div className="ov-connector" />
          <div className="ov-arch-layer">
            {middle.map((item) => <div className="ov-arch-cell" key={item}><span>Camada</span>{item}</div>)}
          </div>
          <div className="ov-connector" />
          <div className="ov-arch-layer is-out">
            {outcomes.map((item) => <div className="ov-arch-node" key={item}>{item}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AssistedDeployment() {
  return (
    <section className="ov-section ov-deploy ov-grain">
      <div className="ov-wrap">
        <div className="ov-section-head ov-reveal">
          <SectionEyebrow number="06">Implantação assistida</SectionEyebrow>
          <h2>Do diagnóstico à operação no ar.</h2>
        </div>
        <div className="ov-dsteps">
          {["Diagnóstico|Mapeamos marca, unidades e escopo operacional.", "Personalização|Configuramos identidade, matching, score e financeiro.", "Credenciamento|Estruturamos a rede e a validação de kits.", "Operação|Sua marca entra no ar com suporte contínuo."].map((item, index) => {
            const [title, text] = item.split("|");
            return (
              <article key={title} className="ov-dstep ov-reveal">
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="ov-section ov-faq ov-grain">
      <div className="ov-wrap">
        <div className="ov-section-head ov-section-center ov-reveal">
          <SectionEyebrow number="07">Empresas</SectionEyebrow>
          <h2>Perguntas frequentes</h2>
        </div>
        <div className="ov-faqlist">
          {faqs.map(([question, answer], index) => (
            <div key={question} className={`ov-qa ov-reveal ${open === index ? "is-open" : ""}`}>
              <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
                {question}
                <span />
              </button>
              <div>
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EnterpriseCTA() {
  return (
    <section className="ov-section ov-finalcta ov-final-photo ov-grain" id="cta">
      <div className="ov-final-photo-bg">
        <Image src="/dog-happy.jpg" alt="Cachorro feliz ao ar livre" fill sizes="100vw" className="ov-final-photo-img" />
        <PhotoTreatment variant="cta" />
      </div>
      <div className="ov-final-photo-scrim" />
      <div className="ov-wrap ov-reveal">
        <h2 className="ov-final-photo-title"><i>A operação de passeios pet,</i> <span>com tecnologia e confiança.</span></h2>
        <SectionEyebrow live="ember">Comece agora</SectionEyebrow>
        <h2>A operação de passeios pet, com tecnologia e confiança.</h2>
        <p className="ov-lead">
          Converse com o time e receba um diagnóstico White Label sob medida para a sua marca.
        </p>
        <div className="ov-cta-row">
          <Link href="/contato" className="ov-btn ov-btn-primary">
            Solicitar diagnóstico White Label <span className="ov-arr">→</span>
          </Link>
          <Link href="/#funciona" className="ov-btn ov-btn-ghost">
            Conhecer a plataforma
          </Link>
        </div>
      </div>
    </section>
  );
}

export function OperationVivaHome() {
  return (
    <>
      <RevealSetup />
      <EcosystemHero />
      <TrustMarquee />
      <OperationFlow />
      <ConceptCommandCenter />
      <SecurityTrust />
      <ParticipantJourney />
      <WalkerOpportunity />
      <WhiteLabelArchitecture />
      <AssistedDeployment />
      <Faq />
      <EnterpriseCTA />
    </>
  );
}
