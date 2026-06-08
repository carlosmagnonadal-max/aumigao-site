import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "White Label",
  description:
    "Operação White Label do Aumigão Walk para empresas pet que querem lançar passeios com marca própria, tecnologia e implantação assistida.",
};

const marketProblems = [
  "Tutores já confiam em pet shops, clínicas, hotéis pet, creches e redes.",
  "A rotina de passeio ainda costuma ficar fora do relacionamento principal da marca.",
  "Construir app, painel, rede e processo operacional do zero exige tempo, equipe e investimento.",
];

const revenue = [
  ["Recorrência", "Passeios entram na rotina semanal do pet e ampliam frequência de relacionamento."],
  ["Marca própria", "O cliente percebe a experiência como uma extensão do negócio em que já confia."],
  ["Operação assistida", "A tecnologia chega acompanhada de método para implantação, onboarding e acompanhamento."],
];

const structure = [
  ["App do tutor", "Agendamento, pets, planos e acompanhamento.", "/screenshots/tutor/tutor-home.png"],
  ["App do passeador", "Agenda, ganhos, kit e reputação.", "/screenshots/passeador/passeador-home.png"],
  ["Painel administrativo", "Operação, matching, financeiro e qualidade.", "/screenshots/admin/admin-dashboard.png"],
  ["Rede operacional", "Credenciamento, documentos, score e recovery.", "/screenshots/admin/admin-passeadores.png"],
];

const assisted = [
  "Diagnóstico comercial e operacional",
  "Definição de unidades e regiões atendidas",
  "Configuração da marca e da experiência",
  "Onboarding de equipe e passeadores",
  "Acompanhamento inicial de operação",
];

const faq = [
  ["Minha empresa precisa criar tecnologia?", "Não. A proposta é usar app, painel e processos do Aumigão para acelerar uma operação com marca própria."],
  ["O que significa multiunidades?", "É a possibilidade de organizar mais de uma loja, clínica ou região dentro da mesma estrutura comercial e operacional."],
  ["Serve para redes pequenas?", "Sim. O diagnóstico define se a operação começa por uma unidade, bairro, região ou rede."],
  ["A marca do parceiro aparece?", "Sim. O White Label foi desenhado para que a experiência comercial seja percebida como uma operação da empresa parceira."],
];

export default function WhiteLabelPage() {
  return (
    <>
      <section className="overflow-hidden bg-brand-night px-5 py-16 text-white lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-peach">White Label Aumigão Walk</p>
            <h1 className="mt-5 text-4xl font-black leading-tight md:text-6xl">
              Sua empresa pet já tem confiança. O Aumigão transforma essa confiança em uma operação recorrente de passeios com sua marca.
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Pet shops, clínicas, hotéis pet, creches e redes podem oferecer passeios sem construir tecnologia do zero: app, painel, processos e implantação chegam juntos.
            </p>
            <Link href="/contato" className="mt-8 inline-flex rounded-full bg-brand-orange px-6 py-3 font-black text-white transition hover:bg-brand-peach hover:text-brand-night">
              Solicitar diagnóstico White Label
            </Link>
          </div>
          <div className="relative min-h-[460px]">
            <img className="admin-shot absolute inset-x-0 top-0 h-72 w-full object-cover" src="/screenshots/admin/admin-white-label.png" alt="Painel White Label Aumigão Walk" />
            <img className="phone-shot absolute bottom-0 left-4 w-44 rotate-[-5deg] md:left-10 md:w-52" src="/screenshots/tutor/tutor-planos.png" alt="App Tutor em operação White Label" />
            <img className="phone-shot absolute bottom-8 right-4 w-44 rotate-[5deg] md:right-12 md:w-52" src="/screenshots/passeador/passeador-score.png" alt="App Passeador em operação White Label" />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Problema do mercado</p>
            <h2 className="mt-3 text-3xl font-black text-brand-night md:text-5xl">A confiança já existe. A operação de passeio ainda precisa ser organizada.</h2>
          </div>
          <div className="grid gap-4">
            {marketProblems.map((item, index) => (
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
          <h2 className="mt-3 max-w-4xl text-3xl font-black text-brand-night md:text-5xl">Passeios criam presença recorrente na rotina do cliente.</h2>
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
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Estrutura entregue</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black text-brand-night md:text-5xl">App, painel e operação prontos para a marca parceira vender melhor.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {structure.map(([title, text, image]) => (
              <article key={title} className="overflow-hidden rounded-[1.5rem] bg-brand-cloud shadow-premium">
                <img className="h-64 w-full object-cover object-top bg-white" src={image} alt={title} />
                <div className="p-5">
                  <h3 className="text-xl font-black text-brand-night">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-ink/66">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-night px-5 py-16 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-peach">Operação pronta</p>
            <h2 className="mt-3 text-3xl font-black md:text-5xl">A empresa vende com sua marca. O Aumigão apoia a estrutura por trás.</h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Matching, score, recovery, financeiro e credenciamento formam a base para transformar passeio em produto recorrente e gerenciável.
            </p>
          </div>
          <img className="admin-shot h-[420px] w-full object-cover" src="/screenshots/admin/admin-operacao.png" alt="Operação pronta Aumigão Walk" />
        </div>
      </section>

      <section className="bg-brand-cream px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Implantação assistida</p>
            <h2 className="mt-3 text-3xl font-black text-brand-night md:text-5xl">Começar não precisa parecer um projeto de tecnologia.</h2>
            <p className="mt-5 text-lg leading-8 text-brand-ink/66">
              O diagnóstico define escopo, região, marca, unidades, equipe e primeiros passos comerciais.
            </p>
          </div>
          <div className="grid gap-3">
            {assisted.map((item, index) => (
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
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Showroom White Label</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-black text-brand-night md:text-5xl">Uma vitrine comercial para visualizar app, painel e operação juntos.</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <img className="admin-shot h-[420px] w-full object-cover" src="/screenshots/admin/admin-dashboard.png" alt="Showroom painel administrativo" />
            <div className="grid grid-cols-2 gap-4">
              <img className="phone-shot h-80 w-full object-cover object-top" src="/screenshots/tutor/tutor-checkout.png" alt="Checkout App Tutor" />
              <img className="phone-shot h-80 w-full object-cover object-top" src="/screenshots/passeador/passeador-kit.png" alt="Kit App Passeador" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-cream px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">Perguntas comerciais</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faq.map(([question, answer]) => (
              <article key={question} className="rounded-[1.25rem] bg-white p-6 shadow-soft">
                <h3 className="text-xl font-black text-brand-night">{question}</h3>
                <p className="mt-3 leading-7 text-brand-ink/66">{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-orange">CTA consultivo</p>
            <h2 className="mt-3 text-3xl font-black text-brand-night md:text-5xl">Vamos entender sua operação e desenhar o caminho White Label.</h2>
            <p className="mt-5 text-lg leading-8 text-brand-ink/66">
              O diagnóstico conversa sobre público, unidades, marca, equipe, região e potencial de recorrência.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
