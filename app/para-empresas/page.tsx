import type { Metadata } from "next";
import Link from "next/link";
import { AudienceLayout } from "@/components/AudienceLayout";
import s from "@/components/inner.module.css";

export const metadata: Metadata = {
  title: "Para sua empresa — Aumigão Walk White Label",
  description:
    "Lance passeios pet com a sua marca e crie uma nova receita recorrente, sem montar tecnologia do zero. Tutores são seus; os passeadores vêm da rede pronta Aumigão. Planos a partir de R$197/mês.",
};

const oportunidade: [string, string][] = [
  ["Os tutores já são seus", "A empresa pet já tem confiança e relacionamento com o tutor. O passeio entra na rotina do pet e vira recorrência natural."],
  ["A rede de passeadores é pronta", "Você não recruta nem credencia ninguém do zero: pluga na rede global Aumigão, já formada e em operação."],
  ["O efeito de rede trabalha por você", "Mais tutores atraem mais passeadores disponíveis; mais passeadores melhoram a cobertura e a experiência do tutor."],
];

const modulos: [string, string][] = [
  ["Matching", "Conecta demanda, região e disponibilidade com regras operacionais — o tutor encontra o passeador certo, na hora certa."],
  ["Score", "Reputação e qualidade medidas em indicadores, para orientar decisões e proteger a confiança da sua marca."],
  ["Credenciamento", "Processo de entrada, documentos e critérios mínimos da rede de passeadores — você não monta esse fluxo."],
  ["Recovery", "Tratamento de exceções e imprevistos do passeio para preservar a experiência do tutor e a reputação da marca."],
  ["Financeiro", "Repasses, ganhos e acompanhamento comercial organizados, com previsibilidade para a empresa."],
];

const planos: { nome: string; preco: string; nota: string; comissao: string; itens: string[]; destaque?: boolean }[] = [
  {
    nome: "Starter",
    preco: "R$ 197",
    nota: "por mês",
    comissao: "Comissão 12% por passeio",
    itens: ["Marca própria no app do tutor", "Matching + Score", "Rede de passeadores pronta", "Operação de uma região"],
  },
  {
    nome: "Business",
    preco: "R$ 597",
    nota: "por mês",
    comissao: "Comissão 8% por passeio",
    destaque: true,
    itens: ["Tudo do Starter", "Credenciamento + Recovery + Financeiro", "Multiunidades", "Painel operacional completo"],
  },
  {
    nome: "Enterprise",
    preco: "Sob consulta",
    nota: "operação dedicada",
    comissao: "Comissão 5% por passeio",
    itens: ["Tudo do Business", "Múltiplas marcas e regiões", "Governança e SLA dedicados", "Implantação assistida ampliada"],
  },
];

const rollout: [string, string][] = [
  ["Diagnóstico", "Mapeamos com o seu time o mercado, as unidades e a região inicial de operação."],
  ["Personalização", "Desenhamos a experiência com a sua marca e as regras operacionais do seu negócio."],
  ["Configuração", "Matching, score, financeiro e treinamento da equipe prontos para operar."],
  ["Operação", "Onboarding com a rede pronta de passeadores e acompanhamento dos primeiros ciclos."],
];

const faq: [string, React.ReactNode][] = [
  [
    "Preciso de equipe técnica para começar?",
    "Não. Entregamos a tecnologia e o método operacional prontos. Você opera com a sua marca; a complexidade de plataforma fica conosco.",
  ],
  [
    "Uso a rede pronta de passeadores?",
    <>Sim. Os tutores são seus, mas os passeadores vêm da <Link href="/passeador">rede global Aumigão</Link> — já credenciada e em operação. Você não recruta nem credencia ninguém do zero.</>,
  ],
  [
    "A operação aparece com a minha marca?",
    "Sim. O app do tutor e a experiência comercial são organizados em torno da sua marca (White Label). O Aumigão é a tecnologia por trás.",
  ],
  [
    "Dá para começar pequeno?",
    "Dá. O diagnóstico define uma primeira região atendida e um plano de evolução — você cresce por unidade e por área, sem virar um projeto complexo.",
  ],
  [
    "Como funcionam os planos e a comissão?",
    "A mensalidade libera os módulos do plano (Starter R$197 / Business R$597 / Enterprise sob consulta) e cada passeio tem uma comissão que cai conforme o plano sobe (12% / 8% / 5%).",
  ],
];

export default function ParaEmpresasPage() {
  return (
    <AudienceLayout
      aud="empresa"
      title={<>Sua marca pet. Nova receita recorrente. <em>Zero tecnologia</em> para montar.</>}
    >
      <p className={s.lead}>
        Transforme a confiança que você já tem com os tutores em uma frente de receita recorrente.
        Os tutores são seus; os passeadores vêm da <Link href="/passeador">rede pronta Aumigão</Link>.
        Você entra com a marca — a operação e a tecnologia já estão de pé.
      </p>

      <div className={s.btnRow}>
        <Link href="/contato?perfil=empresa" className={`${s.btn} ${s.btnPrimary}`}>Solicitar diagnóstico →</Link>
        <Link href="/#plataforma-por-dentro" className={`${s.btn} ${s.btnGhost}`}>Conhecer a plataforma</Link>
      </div>

      {/* (2) Oportunidade + efeito de rede */}
      <div className={s.block}>
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Oportunidade de mercado</p>
          <h2 className={s.h2}>Quem já tem a confiança do tutor pode criar uma nova rotina de consumo.</h2>
          <p className={s.blockLead}>
            Empresas pet têm o relacionamento; o Aumigão tem a rede de passeadores e a plataforma.
            Juntos, o passeio deixa de ser serviço avulso e vira produto recorrente — com efeito de rede a seu favor.
          </p>
        </div>
        <div className={s.tracks}>
          {oportunidade.map(([title, text], index) => (
            <article key={title} className={s.track}>
              <p className={s.trackRole} style={{ color: "var(--accent)" }}>{`0${index + 1}`}</p>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>

      {/* (3) 5 módulos */}
      <div className={s.block}>
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> A plataforma por dentro</p>
          <h2 className={s.h2}>Cinco módulos que fazem a operação crescer com critério, não só com demanda.</h2>
          <p className={s.blockLead}>
            Cada módulo é um controle que entrega confiança ao tutor, profissionalização ao passeador
            e previsibilidade à sua empresa.
          </p>
        </div>
        <div className={s.tracks}>
          {modulos.map(([title, text]) => (
            <article key={title} className={s.track}>
              <p className={s.trackRole} style={{ color: "var(--accent)" }}>Módulo</p>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>

      {/* (4) Planos visíveis */}
      <div className={s.block} id="planos">
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Planos</p>
          <h2 className={s.h2}>Preço claro. A comissão cai conforme você cresce.</h2>
          <p className={s.blockLead}>
            A mensalidade libera os módulos do plano; cada passeio tem uma comissão que diminui à medida que o plano sobe.
          </p>
        </div>
        <div className={s.tracks}>
          {planos.map((p) => (
            <article
              key={p.nome}
              className={s.track}
              style={p.destaque ? { borderColor: "var(--accent)", boxShadow: "0 26px 54px -30px rgba(80,40,10,.35)" } : undefined}
            >
              <p className={s.trackRole} style={{ color: "var(--accent)" }}>
                {p.destaque ? "Mais escolhido" : "Plano"}
              </p>
              <h3>{p.nome}</h3>
              <p style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "30px", color: "var(--ink)", margin: "2px 0 2px" }}>
                {p.preco}
              </p>
              <p style={{ margin: "0 0 10px", fontSize: "13.5px" }}>{p.nota}</p>
              <p style={{ margin: "0 0 14px", fontSize: "13.5px", fontWeight: 600, color: "var(--accent)" }}>{p.comissao}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "8px" }}>
                {p.itens.map((it) => (
                  <li key={it} style={{ fontSize: "14.5px", lineHeight: 1.45, color: "var(--ink2)", paddingLeft: "18px", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "var(--accent)" }}>›</span>
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* (5) Rollout */}
      <div className={s.block}>
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Implantação assistida</p>
          <h2 className={s.h2}>Um caminho comercial antes de virar um projeto.</h2>
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

      {/* (6) FAQ */}
      <div className={s.block}>
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Perguntas frequentes</p>
          <h2 className={s.h2}>As perguntas que toda empresa pet faz primeiro.</h2>
        </div>
        <div className={`${s.tracks} ${s.tracks2}`}>
          {faq.map(([question, answer], index) => (
            <article key={index} className={s.track}>
              <h3>{question}</h3>
              <p>{answer}</p>
            </article>
          ))}
        </div>
      </div>

      {/* (7) CTA final */}
      <div className={s.block} id="cta">
        <div className={s.blockHead}>
          <p className={s.blockEye}><i /> Vamos começar</p>
          <h2 className={s.h2}>Vamos mapear o potencial da sua marca <em>com a rede pronta</em>.</h2>
          <p className={s.blockLead}>
            O diagnóstico analisa público, região, unidades, marca e plano de lançamento — sem compromisso.
          </p>
        </div>
        <div className={s.btnRow}>
          <Link href="/contato?perfil=empresa" className={`${s.btn} ${s.btnPrimary}`}>Solicitar diagnóstico →</Link>
          <Link href="/passeador" className={`${s.btn} ${s.btnGhost}`}>Ver a rede de passeadores</Link>
        </div>
      </div>
    </AudienceLayout>
  );
}
