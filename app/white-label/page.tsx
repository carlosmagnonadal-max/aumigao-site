import type { Metadata } from "next";
import Link from "next/link";
import { InnerPage } from "@/components/InnerPage";
import { ContactSection } from "@/components/ContactSection";
import s from "@/components/inner.module.css";

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

const middle = ["App Tutor", "App Passeador", "Painel Operacional", "Rede de Passeadores", "Governança", "Financeiro"];
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
    <InnerPage
      eyebrow="White Label Enterprise"
      title={<>Lance passeios pet com <em>sua marca</em>, sem construir uma operação do zero.</>}
      lead="O Aumigão combina tecnologia, governança e implantação assistida para transformar confiança local em uma nova frente recorrente de receita."
    >
      <div className={s.btnRow}>
        <Link href="/contato" className={`${s.btn} ${s.btnPrimary}`}>Solicitar diagnóstico →</Link>
        <Link href="/#plataforma-por-dentro" className={`${s.btn} ${s.btnGhost}`}>Conhecer a plataforma</Link>
      </div>

      <div className={s.block}>
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Oportunidade de mercado</p>
          <h2 className={s.h2}>Quem já tem confiança pode criar uma nova rotina de consumo.</h2>
        </div>
        <div className={s.tracks}>
          {opportunity.map((item, index) => (
            <article key={item} className={s.track}>
              <p className={s.trackRole}>{`0${index + 1}`}</p>
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </div>

      <div className={s.block}>
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Nova fonte de receita</p>
          <h2 className={s.h2}>Passeio deixa de ser serviço avulso e vira produto recorrente.</h2>
        </div>
        <div className={s.tracks}>
          {revenue.map(([title, text]) => (
            <article key={title} className={s.track}>
              <p className={s.trackRole}>Receita</p>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={s.block}>
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Arquitetura da operação</p>
          <h2 className={s.h2}>Uma estrutura comercial protegida, modular e pronta para escalar.</h2>
        </div>
        <div className={s.arch}>
          <div className={s.archNode}>Sua marca</div>
          <div className={s.archConn} />
          <div className={s.archLayer}>
            {middle.map((item) => (
              <div className={s.archCell} key={item}><span>Camada</span>{item}</div>
            ))}
          </div>
          <div className={s.archConn} />
          <div className={`${s.archLayer} ${s.archOut}`}>
            {outcomes.map((item) => <div className={s.archNode} key={item}>{item}</div>)}
          </div>
        </div>
      </div>

      <div className={s.block}>
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Governança operacional</p>
          <h2 className={s.h2}>A operação cresce com critérios, não só com demanda.</h2>
          <p className={s.blockLead}>Cada módulo representa um controle necessário para entregar confiança ao tutor, profissionalização ao passeador e previsibilidade à empresa.</p>
        </div>
        <div className={s.tracks}>
          {governance.map(([title, text]) => (
            <article key={title} className={s.track}>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={s.block}>
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Implantação assistida</p>
          <h2 className={s.h2}>Um caminho comercial antes de virar um projeto complexo.</h2>
        </div>
        <div className={s.dsteps}>
          {rollout.map(([title, text], index) => (
            <article key={title} className={s.dstep}>
              <span>{index + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={s.block}>
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Objeções comerciais</p>
          <h2 className={s.h2}>As perguntas que toda empresa pet faz primeiro.</h2>
        </div>
        <div className={`${s.tracks} ${s.tracks2}`}>
          {objections.map(([question, answer]) => (
            <article key={question} className={s.track}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </div>

      <div className={s.block} id="cta">
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Vamos começar</p>
          <h2 className={s.h2}>Vamos mapear o potencial <em>White Label</em> da sua empresa.</h2>
          <p className={s.blockLead}>O diagnóstico analisa público, região, unidades, marca, operação e plano de lançamento. Conheça os planos Começar, Pro e Enterprise em{" "}<Link href="/para-empresas#planos" style={{ color: "var(--accent)", fontWeight: 600 }}>Para Empresas →</Link></p>
        </div>
        <ContactSection />
      </div>
    </InnerPage>
  );
}
