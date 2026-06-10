import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";

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

const revenue: [string, string][] = [
  ["Receita recorrente", "Serviço de rotina com potencial de frequência semanal."],
  ["Fidelização", "A marca participa de mais momentos da vida do pet."],
  ["Expansão regional", "A operação pode começar local e evoluir para novas unidades."],
];

const middle = [
  "App Tutor",
  "App Passeador",
  "Painel Operacional",
  "Rede de Passeadores",
  "Governança",
  "Financeiro",
];
const outcomes = ["Nova Receita", "Fidelização", "Escala"];

const governance: [string, string][] = [
  ["Matching", "Regras operacionais para conectar demanda, região e disponibilidade."],
  ["Score", "Indicadores de reputação e qualidade para orientar decisões."],
  ["Credenciamento", "Processo de entrada, documentos e critérios mínimos."],
  ["Recovery", "Tratamento de exceções para proteger a confiança da jornada."],
  ["Financeiro", "Organização comercial para repasses, ganhos e acompanhamento."],
  ["Multiunidades", "Estrutura para operar mais de uma loja, clínica ou região."],
];

const rollout: [string, string][] = [
  ["Diagnóstico", "Mercado, unidades e região inicial mapeados com o seu time."],
  ["Personalização", "Desenho da experiência com marca própria e regras operacionais."],
  ["Configuração", "Matching, score, financeiro e treinamento da equipe."],
  ["Operação", "Onboarding da rede e acompanhamento dos primeiros ciclos comerciais."],
];

const objections: [string, string][] = [
  ["Preciso ter equipe técnica?", "Não. A proposta entrega tecnologia e método operacional para reduzir a complexidade inicial."],
  ["A operação aparece com minha marca?", "Sim. A experiência comercial é organizada para fortalecer a marca parceira."],
  ["Dá para começar pequeno?", "Sim. O diagnóstico define uma primeira área atendida e um plano de evolução."],
  ["Como o controle acontece?", "Por governança, indicadores, credenciamento, score, recovery e acompanhamento assistido."],
];

export default function WhiteLabelPage() {
  return (
    <>
      <section className="ov-section ov-wl ov-grain">
        <span className="ov-glow" />
        <div className="ov-wrap">
          <div className="ov-wl-top">
            <div>
              <p className="ov-eyebrow">
                <span className="ov-dot ov-dot-ember" /> White Label Enterprise
              </p>
              <h1 className="ov-ptitle">
                Lance passeios pet com <em>sua marca</em>, sem construir uma
                operação do zero.
              </h1>
            </div>
            <div>
              <p className="ov-lead">
                O Aumigão combina tecnologia, governança e implantação assistida
                para transformar confiança local em uma nova frente recorrente de
                receita.
              </p>
              <div className="ov-cta-row">
                <Link href="/contato" className="ov-btn ov-btn-primary">
                  Solicitar diagnóstico <span className="ov-arr">→</span>
                </Link>
                <Link href="/demo-white-label" className="ov-btn ov-btn-ghost">
                  Conhecer a plataforma
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ov-section ov-grain">
        <span className="ov-glow" />
        <div className="ov-wrap">
          <div className="ov-section-head">
            <p className="ov-eyebrow">
              <span className="ov-dot ov-dot-ember" /> Oportunidade de mercado
            </p>
            <h2>Quem já tem confiança pode criar uma nova rotina de consumo.</h2>
          </div>
          <div className="ov-tracks">
            {opportunity.map((item, index) => (
              <article key={item} className="ov-track">
                <p className="ov-role">{`0${index + 1}`}</p>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ov-section ov-flow ov-grain">
        <div className="ov-wrap">
          <div className="ov-section-head">
            <p className="ov-eyebrow">
              <span className="ov-dot ov-dot-ember" /> Nova fonte de receita
            </p>
            <h2>Passeio deixa de ser serviço avulso e vira produto recorrente.</h2>
          </div>
          <div className="ov-tracks">
            {revenue.map(([title, text]) => (
              <article key={title} className="ov-track">
                <p className="ov-role">Receita</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ov-section ov-wl ov-grain">
        <span className="ov-glow" />
        <div className="ov-wrap">
          <div className="ov-section-head">
            <p className="ov-eyebrow">
              <span className="ov-dot ov-dot-ember" /> Arquitetura da operação
            </p>
            <h2>Uma estrutura comercial protegida, modular e pronta para escalar.</h2>
          </div>
          <div className="ov-arch">
            <div className="ov-arch-node is-brand">Sua marca</div>
            <div className="ov-connector" />
            <div className="ov-arch-layer">
              {middle.map((item) => (
                <div className="ov-arch-cell" key={item}>
                  <span>Camada</span>
                  {item}
                </div>
              ))}
            </div>
            <div className="ov-connector" />
            <div className="ov-arch-layer is-out">
              {outcomes.map((item) => (
                <div className="ov-arch-node" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ov-section ov-grain">
        <span className="ov-glow" />
        <div className="ov-wrap">
          <div className="ov-section-head">
            <p className="ov-eyebrow">
              <span className="ov-dot ov-dot-ember" /> Governança operacional
            </p>
            <h2>A operação cresce com critérios, não só com demanda.</h2>
            <p className="ov-lead">
              Cada módulo representa um controle necessário para entregar confiança
              ao tutor, profissionalização ao passeador e previsibilidade à empresa.
            </p>
          </div>
          <div className="ov-tracks">
            {governance.map(([title, text]) => (
              <article key={title} className="ov-track">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ov-section ov-flow ov-grain">
        <div className="ov-wrap">
          <div className="ov-section-head">
            <p className="ov-eyebrow">
              <span className="ov-dot ov-dot-ember" /> Implantação assistida
            </p>
            <h2>Um caminho comercial antes de virar um projeto complexo.</h2>
          </div>
          <div className="ov-dsteps">
            {rollout.map(([title, text], index) => (
              <article key={title} className="ov-dstep">
                <span>{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ov-section ov-grain">
        <span className="ov-glow" />
        <div className="ov-wrap">
          <div className="ov-section-head">
            <p className="ov-eyebrow">
              <span className="ov-dot ov-dot-ember" /> Objeções comerciais
            </p>
            <h2>As perguntas que toda empresa pet faz primeiro.</h2>
          </div>
          <div className="ov-tracks ov-tracks-2">
            {objections.map(([question, answer]) => (
              <article key={question} className="ov-track">
                <h3>{question}</h3>
                <p>{answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ov-section ov-wl ov-grain" id="cta">
        <span className="ov-glow" />
        <div className="ov-wrap">
          <div className="ov-contact-grid">
            <div>
              <p className="ov-eyebrow">
                <span className="ov-dot ov-dot-ember" /> CTA consultivo
              </p>
              <h2 className="ov-ptitle">
                Vamos mapear o potencial <em>White Label</em> da sua empresa.
              </h2>
              <p className="ov-lead">
                O diagnóstico analisa público, região, unidades, marca, operação e
                plano de lançamento.
              </p>
              <a className="ov-contact-channel" href="mailto:contato@aumigaowalk.com.br">
                ✉ <b>contato@aumigaowalk.com.br</b>
              </a>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
