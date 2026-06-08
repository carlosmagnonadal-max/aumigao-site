import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { MetricChip } from "@/components/ConceptVisuals";

export const metadata: Metadata = {
  title: "White Label",
  description:
    "Operação White Label do Aumigão Walk para empresas pet lançarem passeios com marca própria, governança e implantação assistida.",
};

const opportunity = [
  "Empresas pet já têm relacionamento e confiança com tutores.",
  "Passeios criam recorrência porque entram na rotina do pet.",
  "A marca parceira pode vender um novo serviço sem montar tecnologia do zero.",
];

const revenue = [
  ["Receita recorrente", "Serviço de rotina com potencial de frequência semanal."],
  ["Fidelização", "A marca participa de mais momentos da vida do pet."],
  ["Expansão regional", "A operação pode começar local e evoluir para novas unidades."],
];

const architecture = [
  "Marca parceira",
  "App Tutor",
  "App Passeador",
  "Painel Operacional",
  "Rede de Passeadores",
  "Governança",
  "Financeiro",
  "Recovery",
];

const governance = [
  ["Matching", "Regras operacionais para conectar demanda, região e disponibilidade."],
  ["Score", "Indicadores de reputação e qualidade para orientar decisões."],
  ["Credenciamento", "Processo de entrada, documentos e critérios mínimos."],
  ["Recovery", "Tratamento de exceções para proteger a confiança da jornada."],
  ["Financeiro", "Organização comercial para repasses, ganhos e acompanhamento."],
  ["Multiunidades", "Estrutura para operar mais de uma loja, clínica ou região."],
];

const rollout = [
  "Diagnóstico de mercado, unidades e região inicial",
  "Desenho da experiência com marca própria",
  "Configuração operacional e treinamento",
  "Onboarding de equipe e rede de passeadores",
  "Acompanhamento dos primeiros ciclos comerciais",
];

const objections = [
  ["Preciso ter equipe técnica?", "Não. A proposta entrega tecnologia e método operacional para reduzir a complexidade inicial."],
  ["A operação aparece com minha marca?", "Sim. A experiência comercial é organizada para fortalecer a marca parceira."],
  ["Dá para começar pequeno?", "Sim. O diagnóstico define uma primeira área atendida e um plano de evolução."],
  ["Como o controle acontece?", "Por governança, indicadores, credenciamento, score, recovery e acompanhamento assistido."],
];

export default function WhiteLabelPage() {
  return (
    <>
      <section className="overflow-hidden bg-brand-night px-5 py-16 text-white lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-peach">White Label Enterprise</p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Lance passeios pet com sua marca, sem construir uma operação do zero.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/[0.72]">
              O Aumigão combina tecnologia, governança e implantação assistida para transformar
              confiança local em uma nova frente recorrente de receita.
            </p>
            <Link href="/contato" className="mt-8 inline-flex rounded-full bg-brand-orange px-6 py-3 font-black text-white transition hover:bg-brand-peach hover:text-brand-night">
              Solicitar diagnóstico White Label
            </Link>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-premium">
            <div className="rounded-[1.5rem] bg-white p-6 text-center text-2xl font-black text-brand-night shadow-premium">
              Sua marca
            </div>
            <div className="mx-auto h-10 w-px bg-white/25" />
            <div className="grid gap-3 sm:grid-cols-2">
              {["Produto", "Operação", "Rede", "Governança"].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-5 text-center font-black">{item}</div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <MetricChip label="Marca própria" tone="dark" />
              <MetricChip label="Nova receita" tone="dark" />
              <MetricChip label="Implantação assistida" tone="dark" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Oportunidade de mercado</p>
            <h2 className="mt-3 text-3xl font-black text-brand-night md:text-5xl">
              Quem já tem confiança pode criar uma nova rotina de consumo.
            </h2>
          </div>
          <div className="grid gap-4">
            {opportunity.map((item, index) => (
              <article key={item} className="rounded-[1.25rem] bg-brand-cream p-6 shadow-soft">
                <span className="text-sm font-black text-brand-orange">0{index + 1}</span>
                <p className="mt-3 text-xl font-black leading-8 text-brand-night">{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Nova fonte de receita</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black text-brand-night md:text-5xl">
            Passeio deixa de ser serviço avulso e vira produto recorrente.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {revenue.map(([title, text]) => (
              <article key={title} className="rounded-[1.5rem] bg-white p-7 shadow-premium">
                <h3 className="text-2xl font-black text-brand-purple">{title}</h3>
                <p className="mt-4 leading-7 text-brand-ink/66">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Arquitetura da operação</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black text-brand-night md:text-5xl">
            Uma estrutura comercial protegida, modular e pronta para escalar.
          </h2>
          <div className="mt-10 rounded-[2rem] bg-brand-night p-6 text-white shadow-premium">
            <div className="grid gap-4 md:grid-cols-4">
              {architecture.map((item, index) => (
                <div key={item} className={`rounded-[1.25rem] border border-white/10 p-5 text-center font-black ${index === 0 ? "bg-white text-brand-night md:col-span-4" : "bg-white/[0.09]"}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-night px-5 py-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.76fr_1.24fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-peach">Governança operacional</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">
              A operação cresce com critérios, não só com demanda.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              Cada módulo representa um controle necessário para entregar confiança ao tutor,
              profissionalização ao passeador e previsibilidade à empresa.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {governance.map(([title, text]) => (
              <article key={title} className="rounded-[1.25rem] border border-white/10 bg-white/8 p-5">
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Implantação assistida</p>
            <h2 className="mt-3 text-3xl font-black text-brand-night md:text-5xl">
              Um caminho comercial antes de virar um projeto complexo.
            </h2>
          </div>
          <div className="grid gap-3">
            {rollout.map((item, index) => (
              <div key={item} className="flex items-center gap-4 rounded-2xl bg-white p-5 font-black text-brand-night shadow-soft">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange text-white">{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Objeções comerciais</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {objections.map(([question, answer]) => (
              <article key={question} className="rounded-[1.25rem] bg-brand-cloud p-6 shadow-soft">
                <h3 className="text-xl font-black text-brand-night">{question}</h3>
                <p className="mt-3 leading-7 text-brand-ink/66">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-cream px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">CTA consultivo</p>
            <h2 className="mt-3 text-3xl font-black text-brand-night md:text-5xl">
              Vamos mapear o potencial White Label da sua empresa.
            </h2>
            <p className="mt-5 text-lg leading-8 text-brand-ink/66">
              O diagnóstico analisa público, região, unidades, marca, operação e plano de lançamento.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
