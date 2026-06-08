import type { Metadata } from "next";
import Link from "next/link";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { ImplementationTimeline } from "@/components/ImplementationTimeline";

export const metadata: Metadata = {
  title: "Aumigão Walk",
  description:
    "Plataforma tecnológica pet com app para tutores, app para passeadores, painel administrativo, matching, score, recovery e White Label.",
};

const productProof = [
  "App Tutor",
  "App Passeador",
  "Painel Admin",
  "Matching",
  "Score",
  "Recovery",
  "White Label",
];

const productBlocks = [
  {
    title: "App Tutor",
    text: "Agendamento, pet, planos, checkout e acompanhamento em uma experiência simples para o tutor.",
    image: "/screenshots/tutor/tutor-home.png",
    className: "phone-shot mx-auto w-56",
  },
  {
    title: "App Passeador",
    text: "Agenda, ganhos, kit, reputação, score operacional e credenciamento em uma jornada profissional.",
    image: "/screenshots/passeador/passeador-home.png",
    className: "phone-shot mx-auto w-56",
  },
  {
    title: "Painel Administrativo",
    text: "Visão de operação, matching, financeiro, passeadores e acompanhamento para tomada de decisão.",
    image: "/screenshots/admin/admin-dashboard.png",
    className: "admin-shot aspect-[16/10] w-full object-cover",
  },
];

const operationFlow = [
  ["Tutor", "agenda o passeio", "/screenshots/tutor/tutor-planos.png"],
  ["Matching", "conecta demanda e disponibilidade", "/screenshots/admin/admin-matching.png"],
  ["Passeador", "aceita e executa a jornada", "/screenshots/passeador/passeador-agenda.png"],
  ["Operação", "acompanha status e exceções", "/screenshots/admin/admin-operacao.png"],
  ["Avaliação", "fecha o ciclo com feedback", "/screenshots/tutor/tutor-passeios.png"],
  ["Score", "atualiza reputação e qualidade", "/screenshots/admin/admin-score.png"],
  ["Recovery", "atua quando há desvio operacional", "/screenshots/admin/admin-recovery.png"],
];

const commandCenter = [
  ["Matching", "Distribuição operacional entre tutores, passeadores e janelas de atendimento.", "/screenshots/admin/admin-matching.png"],
  ["Financeiro", "Controle comercial para ganhos, repasses e previsibilidade da operação.", "/screenshots/admin/admin-financeiro.png"],
  ["Passeadores", "Rede profissional com documentos, status e evolução acompanhados.", "/screenshots/admin/admin-passeadores.png"],
  ["Credenciamento", "Entrada organizada de profissionais, documentos e critérios operacionais.", "/screenshots/passeador/passeador-documentos.png"],
  ["Recovery", "Monitoramento de exceções para manter confiança e continuidade.", "/screenshots/admin/admin-recovery.png"],
  ["Score", "Reputação, qualidade e prioridade operacional visíveis para gestão.", "/screenshots/passeador/passeador-score.png"],
];

const journeys = [
  {
    title: "Tutor",
    text: "Segurança, rotina e acompanhamento para o pet.",
    cta: "Baixar app",
    href: "#cta-final",
    image: "/screenshots/tutor/tutor-pet.png",
  },
  {
    title: "Passeador",
    text: "Agenda, ganhos, reputação e profissionalização.",
    cta: "Quero ser passeador",
    href: "/seja-passeador",
    image: "/screenshots/passeador/passeador-ganhos.png",
  },
  {
    title: "Empresa",
    text: "Nova receita, marca própria e operação assistida.",
    cta: "Conhecer White Label",
    href: "/white-label",
    image: "/screenshots/admin/admin-white-label.png",
  },
];

const whiteLabelItems = [
  "Marca própria",
  "App próprio",
  "Painel próprio",
  "Multiunidades",
  "Rede de passeadores",
  "Implantação assistida",
];

function ProductHero() {
  return (
    <section className="overflow-hidden bg-brand-night px-5 py-16 text-white lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-peach">
            Plataforma tecnológica pet
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Passeios pet com segurança, tecnologia e uma operação que você pode confiar.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
            Aumigão Walk conecta tutores, passeadores verificados, painel administrativo,
            matching, score, recovery e White Label em uma única plataforma operacional.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="rounded-full bg-brand-orange px-6 py-3 text-center font-black text-white shadow-premium transition hover:bg-brand-peach hover:text-brand-night" href="/white-label">
              Solicitar diagnóstico White Label
            </Link>
            <Link className="rounded-full border border-white/20 px-6 py-3 text-center font-black text-white transition hover:bg-white/10" href="/demo-white-label">
              Conhecer a plataforma
            </Link>
          </div>
        </div>

        <div className="relative min-h-[520px]">
          <div className="absolute inset-x-0 top-10 rounded-[2rem] bg-white/8 p-4 backdrop-blur">
            <img className="admin-shot h-72 w-full object-cover" src="/screenshots/admin/admin-dashboard.png" alt="Painel administrativo Aumigão Walk" />
          </div>
          <img className="phone-shot absolute left-3 top-28 w-40 rotate-[-6deg] md:left-10 md:w-52" src="/screenshots/tutor/tutor-home.png" alt="App Tutor Aumigão Walk" />
          <img className="phone-shot absolute bottom-3 right-4 w-40 rotate-[5deg] md:right-16 md:w-52" src="/screenshots/passeador/passeador-home.png" alt="App Passeador Aumigão Walk" />
          {["Passeador verificado", "Matching ativo", "Score 4.9", "Recovery monitorado", "Operação online"].map((chip, index) => (
            <span
              key={chip}
              className="absolute rounded-full border border-white/15 bg-white/90 px-4 py-2 text-xs font-black text-brand-night shadow-premium"
              style={{
                left: `${index % 2 === 0 ? 6 + index * 6 : 58}%`,
                top: `${index % 2 === 0 ? 6 + index * 16 : 20 + index * 12}%`,
              }}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <ProductHero />

      <section className="bg-white px-5 py-5 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3">
          {productProof.map((item) => (
            <span key={item} className="rounded-full border border-brand-purple/10 bg-brand-cream px-4 py-2 text-sm font-black text-brand-ink">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section id="plataforma" className="bg-brand-cream px-5 py-18 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Plataforma em ação</p>
            <h2 className="mt-3 text-3xl font-black text-brand-night md:text-5xl">Produto real, operação visível e menos discurso.</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {productBlocks.map((block) => (
              <article key={block.title} className="overflow-hidden rounded-[1.5rem] bg-white p-5 shadow-premium">
                <div className="flex min-h-[410px] items-center justify-center rounded-[1rem] bg-gradient-to-br from-brand-cream to-white p-4">
                  <img className={block.className} src={block.image} alt={block.title} />
                </div>
                <h3 className="mt-6 text-2xl font-black text-brand-night">{block.title}</h3>
                <p className="mt-3 leading-7 text-brand-ink/66">{block.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-18 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Operação auditável</p>
              <h2 className="mt-3 text-3xl font-black text-brand-night md:text-5xl">Da agenda ao recovery, cada etapa deixa rastro operacional.</h2>
              <p className="mt-5 text-lg leading-8 text-brand-ink/65">
                A jornada combina app, painel e rotina de acompanhamento para que o passeio seja simples para o cliente e gerenciável para a operação.
              </p>
            </div>
            <div className="grid gap-4">
              {operationFlow.map(([title, text, image], index) => (
                <article key={title} className="grid items-center gap-4 rounded-[1.25rem] bg-brand-cloud p-4 shadow-soft sm:grid-cols-[4.5rem_1fr_8rem]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-night text-lg font-black text-white">{index + 1}</span>
                  <div>
                    <h3 className="text-xl font-black text-brand-night">{title}</h3>
                    <p className="text-sm leading-6 text-brand-ink/65">{text}</p>
                  </div>
                  <img className="h-24 w-full rounded-2xl object-cover product-frame" src={image} alt={`${title} Aumigão Walk`} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-night px-5 py-18 text-white lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-peach">Centro operacional</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Uma central de comando para crescer com controle.</h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                Matching, financeiro, credenciamento, score e recovery aparecem como rotina de gestão, não como promessa solta.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {commandCenter.map(([title, text, image]) => (
                <article key={title} className="rounded-[1.25rem] border border-white/10 bg-white/8 p-4 backdrop-blur">
                  <img className="h-36 w-full rounded-2xl object-cover bg-white" src={image} alt={`${title} Aumigão Walk`} />
                  <h3 className="mt-4 text-xl font-black text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/66">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream px-5 py-18 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Jornada por público</p>
            <h2 className="mt-3 text-3xl font-black text-brand-night md:text-5xl">Cada pessoa vê o que precisa para confiar e agir.</h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {journeys.map((journey) => (
              <article key={journey.title} className="overflow-hidden rounded-[1.5rem] bg-white shadow-premium">
                <img className="h-64 w-full object-cover object-top" src={journey.image} alt={journey.title} />
                <div className="p-6">
                  <h3 className="text-2xl font-black text-brand-night">{journey.title}</h3>
                  <p className="mt-3 leading-7 text-brand-ink/66">{journey.text}</p>
                  <Link className="mt-5 inline-flex rounded-full bg-brand-night px-5 py-3 text-sm font-black text-white transition hover:bg-brand-orange" href={journey.href}>
                    {journey.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-18 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-brand-night p-6 text-white shadow-premium md:p-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-peach">White Label</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">Lance sua própria operação de passeios pet.</h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Pet shops, clínicas, hotéis pet e redes podem lançar uma operação própria usando a tecnologia Aumigão.
            </p>
            <Link className="mt-8 inline-flex rounded-full bg-brand-orange px-6 py-3 font-black text-white transition hover:bg-brand-peach hover:text-brand-night" href="/white-label">
              Solicitar diagnóstico White Label
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {whiteLabelItems.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/10 p-5 font-black">{item}</div>
            ))}
            <img className="admin-shot col-span-full h-56 w-full object-cover" src="/screenshots/admin/admin-white-label.png" alt="White Label Aumigão Walk" />
          </div>
        </div>
      </section>

      <ImplementationTimeline />
      <FAQ />
      <div id="cta-final">
        <FinalCTA />
      </div>
    </>
  );
}
