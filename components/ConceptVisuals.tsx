import Link from "next/link";

export function MetricChip({
  label,
  value,
  tone = "dark",
}: {
  label: string;
  value?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={`rounded-full border px-4 py-2 text-sm font-black ${
        tone === "dark"
          ? "border-white/[0.12] bg-white/[0.09] text-white"
          : "border-brand-purple/10 bg-white text-brand-night shadow-soft"
      }`}
    >
      {value ? <span className="mr-2 text-brand-orange">{value}</span> : null}
      {label}
    </div>
  );
}

export function FlowNode({
  title,
  text,
  index,
}: {
  title: string;
  text: string;
  index: number;
}) {
  return (
    <article className="relative rounded-[1.35rem] border border-brand-purple/10 bg-white p-5 shadow-soft">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-night text-sm font-black text-white">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-5 text-xl font-black text-brand-night">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-brand-ink/65">{text}</p>
    </article>
  );
}

function NetworkNode({
  label,
  className,
}: {
  label: string;
  className: string;
}) {
  return (
    <div
      className={`absolute rounded-full border border-white/[0.16] bg-white/10 px-4 py-3 text-sm font-black text-white shadow-premium backdrop-blur ${className}`}
    >
      {label}
    </div>
  );
}

export function EcosystemHero() {
  const nodes = [
    ["Tutor", "left-3 top-10"],
    ["Pet", "left-12 bottom-24"],
    ["Passeador", "right-5 top-16"],
    ["Empresa", "right-10 bottom-20"],
    ["Matching", "left-1/2 top-2 -translate-x-1/2"],
    ["Score", "left-1/2 bottom-3 -translate-x-1/2"],
    ["Recovery", "left-6 top-1/2 -translate-y-1/2"],
    ["Financeiro", "right-2 top-1/2 -translate-y-1/2"],
    ["White Label", "left-1/2 top-1/2 -translate-x-1/2 translate-y-24"],
  ];

  return (
    <section className="overflow-hidden bg-brand-night px-5 py-16 text-white lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-peach">
            Ecossistema operacional
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Passeios pet com tecnologia, operação e confiança.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.74]">
            O Aumigão conecta tutores, passeadores e empresas em uma operação auditável com
            matching, score, credenciamento, recovery e White Label.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="rounded-full bg-brand-orange px-6 py-3 text-center font-black text-white shadow-premium transition hover:bg-brand-peach hover:text-brand-night"
              href="/white-label"
            >
              Solicitar diagnóstico White Label
            </Link>
            <Link
              className="rounded-full border border-white/20 px-6 py-3 text-center font-black text-white transition hover:bg-white/10"
              href="/demo-white-label"
            >
              Conhecer a plataforma
            </Link>
          </div>
        </div>

        <div className="relative min-h-[540px] rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-premium">
          <div className="absolute inset-8 rounded-[2rem] border border-dashed border-white/[0.13]" />
          <div className="absolute inset-20 rounded-full border border-brand-orange/30" />
          <div className="absolute left-1/2 top-1/2 z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] bg-white text-center text-brand-night shadow-premium">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-brand-orange">Aumigão</span>
            <strong className="mt-2 text-2xl font-black leading-7">Operação</strong>
            <span className="mt-2 text-xs font-bold text-brand-ink/58">online e auditável</span>
          </div>
          <div className="absolute left-1/2 top-1/2 h-px w-[82%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/35 to-transparent" />
          <div className="absolute left-1/2 top-1/2 h-[82%] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/35 to-transparent" />
          <div className="absolute left-[15%] top-[18%] h-[65%] w-[70%] rounded-full border border-white/[0.12]" />
          {nodes.map(([label, className]) => (
            <NetworkNode key={label} label={label} className={className} />
          ))}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
            <MetricChip label="Operação online" tone="dark" />
            <MetricChip label="Score médio" value="4.9" tone="dark" />
            <MetricChip label="Recovery monitorado" tone="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function OperationMap() {
  const flow = [
    ["Tutor agenda", "Solicitação entra com pet, rotina e janela."],
    ["Sistema recomenda", "Matching cruza região, disponibilidade e perfil."],
    ["Passeador aceita", "Profissional verificado confirma a jornada."],
    ["Operação acompanha", "Status, alertas e exceções ficam monitorados."],
    ["Passeio acontece", "A rotina do pet vira serviço organizado."],
    ["Tutor avalia", "Feedback fecha o ciclo de confiança."],
    ["Score atualiza", "Reputação e qualidade alimentam novas decisões."],
    ["Recovery atua", "Exceções recebem tratamento quando necessário."],
  ];

  return (
    <section className="bg-white px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Como a operação funciona</p>
          <h2 className="mt-3 text-3xl font-black text-brand-night md:text-5xl">
            Uma sequência clara por fora, com controle por dentro.
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {flow.map(([title, text], index) => (
            <FlowNode key={title} title={title} text={text} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ConceptCommandCenter() {
  const modules = [
    ["Passeios ativos", "rotas acompanhadas"],
    ["Passeadores verificados", "rede qualificada"],
    ["Matching operacional", "encaixe inteligente"],
    ["Score médio", "4.9 exemplo visual"],
    ["Kit validado", "padrão de campo"],
    ["Credenciamentos", "entrada assistida"],
    ["Recovery monitorado", "exceções tratadas"],
    ["Repasses", "fluxo financeiro"],
    ["Multiunidades", "escala regional"],
  ];

  return (
    <section className="bg-brand-night px-5 py-16 text-white lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-peach">Centro operacional conceitual</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Uma visão protegida da operação, sem expor a interface interna.
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/70">
            A central representa os blocos de gestão que sustentam a jornada: rede, qualidade,
            financeiro, recuperação de exceções e escala.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MetricChip label="Operação online" tone="dark" />
            <MetricChip label="Credenciamento ativo" tone="dark" />
            <MetricChip label="Recovery monitorado" tone="dark" />
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-premium">
          <div className="grid gap-4 md:grid-cols-3">
            {modules.map(([title, text], index) => (
              <article
                key={title}
                className={`rounded-[1.2rem] border border-white/10 bg-white/[0.09] p-5 ${
                  index === 2 || index === 6 ? "md:row-span-2" : ""
                }`}
              >
                <div className="h-2 w-16 rounded-full bg-brand-orange" />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/[0.63]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ParticipantJourney() {
  const lanes = [
    ["Tutor", "Busca segurança, rotina e tranquilidade.", ["Agenda", "Acompanha", "Avalia"]],
    ["Passeador", "Recebe oportunidades, agenda, reputação e profissionalização.", ["Aceita", "Executa", "Evolui"]],
    ["Empresa", "Ganha marca própria, nova receita e operação assistida.", ["Lança", "Opera", "Escala"]],
  ] as const;

  return (
    <section className="bg-brand-cream px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Jornada dos participantes</p>
          <h2 className="mt-3 text-3xl font-black text-brand-night md:text-5xl">
            Três trilhas conectadas por uma mesma operação.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {lanes.map(([title, text, steps]) => (
            <article key={title} className="rounded-[1.5rem] bg-white p-6 shadow-premium">
              <h3 className="text-2xl font-black text-brand-night">{title}</h3>
              <p className="mt-3 leading-7 text-brand-ink/66">{text}</p>
              <div className="mt-6 grid gap-3">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 rounded-2xl bg-brand-cream p-4 font-black text-brand-night">
                    <span className="h-3 w-3 rounded-full bg-brand-orange" />
                    {step}
                    {index < steps.length - 1 ? <span className="ml-auto text-brand-purple">→</span> : null}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhiteLabelArchitecture() {
  const middle = [
    "App Tutor",
    "App Passeador",
    "Painel Operacional",
    "Rede de Passeadores",
    "Governança",
    "Financeiro",
  ];
  const outcomes = ["Nova Receita", "Fidelização", "Escala"];

  return (
    <section className="bg-white px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-brand-night p-6 text-white shadow-premium md:p-10 lg:grid-cols-[0.86fr_1.14fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-peach">White Label Enterprise</p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">Lance sua própria operação de passeios pet.</h2>
          <p className="mt-5 text-lg leading-8 text-white/72">
            Uma arquitetura comercial para transformar confiança local em serviço recorrente com marca própria.
          </p>
          <Link className="mt-8 inline-flex rounded-full bg-brand-orange px-6 py-3 font-black text-white transition hover:bg-brand-peach hover:text-brand-night" href="/white-label">
            Solicitar diagnóstico White Label
          </Link>
        </div>
        <div className="grid gap-4">
          <div className="rounded-[1.4rem] bg-white p-6 text-center text-2xl font-black text-brand-night shadow-premium">Sua marca</div>
          <div className="mx-auto h-8 w-px bg-white/25" />
          <div className="grid gap-3 sm:grid-cols-2">
            {middle.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center font-black">{item}</div>
            ))}
          </div>
          <div className="mx-auto h-8 w-px bg-white/25" />
          <div className="grid gap-3 sm:grid-cols-3">
            {outcomes.map((item) => (
              <div key={item} className="rounded-2xl bg-brand-orange p-4 text-center font-black text-white">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EnterpriseCTA() {
  return (
    <section className="bg-brand-night px-5 py-16 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-premium md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-peach">Próximo passo</p>
          <h2 className="mt-3 text-3xl font-black">Desenhe sua operação White Label com o Aumigão.</h2>
        </div>
        <Link className="rounded-full bg-brand-orange px-6 py-3 text-center font-black text-white transition hover:bg-brand-peach hover:text-brand-night" href="/contato">
          Solicitar diagnóstico White Label
        </Link>
      </div>
    </section>
  );
}
