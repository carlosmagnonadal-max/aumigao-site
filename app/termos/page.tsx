import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de uso",
  description:
    "Termos de uso do Aumigão Walk — plataforma de intermediação de passeios com cães.",
};

// MINUTA para revisão jurídica (2026-06-10). Estrutura tailored ao serviço real
// (marketplace de passeios, passeadores autônomos, pagamentos via Asaas, white-label
// por empresa parceira/tenant). Os campos [EM COLCHETES] dependem do jurídico/empresa.
type Section = { title: string; paras?: string[]; bullets?: string[] };

const SECTIONS: Section[] = [
  {
    title: "1. Definições",
    bullets: [
      "Plataforma / Aumigão Walk: o aplicativo, o site e os serviços de tecnologia que conectam tutores a passeadores.",
      "Tutor: pessoa que contrata passeios para seu(s) animal(is) de estimação.",
      "Passeador: prestador de serviço independente, cadastrado e verificado, que realiza os passeios.",
      "Empresa parceira (tenant): empresa que opera sua própria marca sobre a Plataforma (modelo white-label), podendo ser responsável pela operação local junto aos tutores.",
      "Usuário: qualquer pessoa que acesse ou utilize a Plataforma.",
    ],
  },
  {
    title: "2. Objeto e natureza do serviço",
    paras: [
      "A Aumigão Walk é uma plataforma de intermediação tecnológica: aproxima tutores e passeadores e disponibiliza ferramentas de agendamento, comunicação, acompanhamento e pagamento. A Plataforma não presta diretamente o serviço de passeio.",
      "Os passeadores atuam como prestadores de serviço independentes, sem vínculo empregatício, societário ou de subordinação com a Aumigão Walk ou com as empresas parceiras. Não há relação de emprego decorrente do uso da Plataforma.",
    ],
  },
  {
    title: "3. Cadastro e elegibilidade",
    bullets: [
      "É necessário ser maior de 18 anos e fornecer informações verídicas, completas e atualizadas.",
      "O passeador passa por processo de verificação (incluindo documentos e dados pessoais) antes de operar; a aprovação é critério da Plataforma/empresa parceira.",
      "As credenciais de acesso são pessoais e intransferíveis; o Usuário é responsável pela confidencialidade de sua senha e pelas ações realizadas em sua conta.",
    ],
  },
  {
    title: "4. Responsabilidades do tutor",
    bullets: [
      "Prestar informações corretas sobre o animal (temperamento, saúde, vacinação, necessidades especiais).",
      "Disponibilizar o animal e os itens necessários no horário e local combinados.",
      "Tratar passeadores com respeito e arcar com os valores devidos pelos serviços contratados.",
    ],
  },
  {
    title: "5. Responsabilidades do passeador",
    bullets: [
      "Prestar o serviço com diligência, zelo e segurança, respeitando o bem-estar animal e a legislação aplicável.",
      "Manter seus dados e documentos de verificação atualizados.",
      "Comunicar imediatamente qualquer incidente ocorrido durante o passeio pelos canais da Plataforma.",
    ],
  },
  {
    title: "6. Pagamentos, comissões e gorjetas",
    paras: [
      "Os pagamentos são processados por meio de provedor de pagamentos terceirizado (atualmente a Asaas). A Plataforma e/ou a empresa parceira podem reter uma comissão sobre o valor do serviço, informada previamente.",
      "Eventuais gorjetas são voluntárias e destinadas ao passeador. Valores, formas de pagamento e repasses observam as regras vigentes na Plataforma no momento da contratação.",
    ],
  },
  {
    title: "7. Cancelamentos e reembolsos",
    paras: [
      "As regras de cancelamento, reagendamento e reembolso são apresentadas no momento da contratação e podem variar conforme a empresa parceira e a antecedência do cancelamento. [A POLÍTICA DETALHADA DE CANCELAMENTO/REEMBOLSO DEVE SER DEFINIDA E INSERIDA AQUI.]",
    ],
  },
  {
    title: "8. Conduta proibida",
    bullets: [
      "Usar a Plataforma para fins ilícitos, fraudulentos ou que violem direitos de terceiros.",
      "Contornar a Plataforma para combinar pagamentos por fora, quando vedado pelas regras vigentes.",
      "Inserir conteúdo ofensivo, discriminatório, falso ou que viole a propriedade intelectual de terceiros.",
      "Tentar acessar áreas, dados ou sistemas sem autorização.",
    ],
  },
  {
    title: "9. Avaliações e conteúdo do usuário",
    paras: [
      "Tutores e passeadores podem registrar avaliações, fotos e comentários. O Usuário é responsável pelo conteúdo que publica e concede à Plataforma licença não exclusiva para exibi-lo no contexto do serviço. Conteúdo que viole estes Termos pode ser removido.",
    ],
  },
  {
    title: "10. Limitação de responsabilidade",
    paras: [
      "A Plataforma atua como intermediadora e empenha-se para oferecer um serviço seguro e confiável, mas não garante a ausência de falhas. Na máxima extensão permitida pela legislação, a Aumigão Walk não se responsabiliza por danos decorrentes da conduta de tutores ou passeadores. [LIMITES E EXCLUDENTES ESPECÍFICOS A SEREM VALIDADOS PELO JURÍDICO, INCLUSIVE FRENTE AO CÓDIGO DE DEFESA DO CONSUMIDOR.]",
    ],
  },
  {
    title: "11. Suspensão e encerramento",
    paras: [
      "A Plataforma pode suspender ou encerrar contas que violem estes Termos, a legislação ou que coloquem em risco a segurança de pessoas, animais ou do serviço. O Usuário pode encerrar sua conta a qualquer momento pelos canais oficiais.",
    ],
  },
  {
    title: "12. Propriedade intelectual",
    paras: [
      "A marca, o software, o design e os demais elementos da Plataforma pertencem à Aumigão Walk (ou às empresas parceiras, quanto às suas próprias marcas) e não podem ser copiados ou utilizados sem autorização.",
    ],
  },
  {
    title: "13. Privacidade",
    paras: [
      "O tratamento de dados pessoais é regido pela nossa Política de Privacidade, parte integrante destes Termos, em conformidade com a Lei nº 13.709/2018 (LGPD).",
    ],
  },
  {
    title: "14. Alterações dos Termos",
    paras: [
      "Estes Termos podem ser atualizados. Mudanças relevantes serão comunicadas pelos canais oficiais. O uso continuado da Plataforma após a vigência das alterações implica concordância.",
    ],
  },
  {
    title: "15. Lei aplicável e foro",
    paras: [
      "Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de [COMARCA/UF A DEFINIR], salvo competência legal diversa, em especial a do domicílio do consumidor.",
    ],
  },
  {
    title: "16. Contato",
    paras: [
      "Dúvidas sobre estes Termos: [E-MAIL DE CONTATO]. Responsável: [RAZÃO SOCIAL], CNPJ [CNPJ], [ENDEREÇO].",
    ],
  },
];

export default function TermosPage() {
  return (
    <section className="ov-section ov-grain">
      <span className="ov-glow" />
      <div className="ov-wrap">
        <div className="ov-section-head ov-section-center">
          <p className="ov-eyebrow">
            <span className="ov-dot ov-dot-ember" /> Termos
          </p>
          <h1 className="ov-ptitle">Termos de uso</h1>
        </div>

        <article className="ov-legal">
          <div className="ov-legal-note">
            <span className="ov-legal-note-ico" aria-hidden="true">
              ⚠
            </span>
            <span>
              <strong>Minuta para revisão jurídica.</strong> Este texto é uma
              versão preliminar, estruturada conforme o serviço e a LGPD, e{" "}
              <strong>deve ser revisado e aprovado por advogado</strong> antes da
              publicação definitiva. Trechos entre colchetes dependem de definição
              da empresa. Última atualização: [data de publicação].
            </span>
          </div>

          {SECTIONS.map((section) => (
            <section key={section.title} className="ov-legal-sec">
              <h2>{section.title}</h2>
              {section.paras?.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
              {section.bullets ? (
                <ul>
                  {section.bullets.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </article>
      </div>
    </section>
  );
}
