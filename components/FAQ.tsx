const groups = [
  {
    title: "Tutores",
    questions: [
      {
        question: "Como agendo um passeio?",
        answer:
          "Pelo aplicativo, o tutor escolhe o pet, define a modalidade e envia a solicitação para a operação.",
      },
      {
        question: "Como acompanho o passeio?",
        answer:
          "A experiência do app é preparada para mostrar status do passeio e dar mais previsibilidade ao tutor.",
      },
      {
        question: "Como escolho modalidade?",
        answer:
          "As modalidades e durações são apresentadas no fluxo do aplicativo conforme a operação ativa.",
      },
      {
        question: "Como funciona o pagamento?",
        answer:
          "O pagamento é apresentado no app conforme a configuração comercial e operacional da marca ativa.",
      },
    ],
  },
  {
    title: "Passeadores",
    questions: [
      {
        question: "Como faço cadastro?",
        answer:
          "O cadastro acontece pelo aplicativo, com etapas de dados, documentos e aprovação operacional.",
      },
      {
        question: "Como recebo solicitações?",
        answer:
          "Depois da aprovação, o passeador acompanha solicitações e agenda pelo app.",
      },
      {
        question: "Como funcionam ganhos?",
        answer:
          "Ganhos e repasses dependem da operação ativa e são organizados no fluxo do passeador.",
      },
      {
        question: "O que é o kit do passeador?",
        answer:
          "É o conjunto operacional usado para padronizar a experiência e apoiar segurança, identificação e qualidade.",
      },
    ],
  },
  {
    title: "Empresas",
    questions: [
      {
        question: "Como funciona o White Label?",
        answer:
          "A empresa usa a operação Aumigão Walk com sua própria marca, app, painel, unidades e rede de passeadores.",
      },
      {
        question: "Quanto tempo leva a implantação?",
        answer:
          "O prazo depende de personalização, unidades e escopo operacional. A demonstração ajuda a estimar o plano.",
      },
      {
        question: "Posso usar minha marca?",
        answer:
          "Sim. A proposta White Label permite uma experiência com identidade da empresa parceira.",
      },
      {
        question: "Posso operar mais de uma unidade?",
        answer:
          "Sim. A estrutura é preparada para negócios com múltiplas unidades e expansão assistida.",
      },
    ],
  },
];

export function FAQ() {
  return (
    <section className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
            Perguntas frequentes
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-4xl">
            Respostas rápidas para cada público.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {groups.map((group) => (
            <article key={group.title} className="rounded bg-brand-cloud p-6">
              <h3 className="text-2xl font-black text-brand-ink">{group.title}</h3>
              <div className="mt-6 grid gap-4">
                {group.questions.map((item) => (
                  <div key={item.question} className="rounded bg-white p-4">
                    <h4 className="font-black text-brand-purple">{item.question}</h4>
                    <p className="mt-2 text-sm leading-6 text-brand-ink/65">
                      {item.answer}
                    </p>
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
