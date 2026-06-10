import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Política de privacidade do Aumigão Walk, em conformidade com a LGPD (Lei nº 13.709/2018).",
};

// MINUTA para revisão jurídica (2026-06-10). Tratamento real verificado no produto:
// cadastro (e-mail, nome, CPF, telefone), pets, localização de retirada, pagamentos
// via Asaas, documentos de verificação do passeador e fotos via Cloudinary, login
// Google/Apple, hospedagem Railway/Neon/Vercel, push via Expo. Campos [EM COLCHETES]
// dependem do jurídico/empresa (controlador, encarregado, prazos de retenção).
type Section = { title: string; paras?: string[]; bullets?: string[] };

const SECTIONS: Section[] = [
  {
    title: "1. Quem trata os seus dados",
    paras: [
      "A Aumigão Walk ([RAZÃO SOCIAL], CNPJ [CNPJ], [ENDEREÇO]) é a controladora dos dados tratados na Plataforma. No modelo white-label, a empresa parceira que opera sua própria marca pode atuar como controladora ou co-controladora dos dados dos seus tutores e passeadores; nesses casos, a empresa parceira é identificada no respectivo aplicativo.",
    ],
  },
  {
    title: "2. Dados que coletamos",
    bullets: [
      "Cadastro e identificação: nome completo, e-mail, telefone, CPF e senha (armazenada de forma cifrada).",
      "Dados do animal: nome, raça, porte, informações de saúde e comportamento fornecidas pelo tutor.",
      "Localização: endereço de retirada e, durante o passeio, dados de localização necessários ao acompanhamento.",
      "Pagamento: dados necessários ao processamento da cobrança e de repasses, tratados pelo provedor de pagamentos (Asaas). Não armazenamos dados completos de cartão em nossos servidores.",
      "Verificação do passeador: documentos e dados de identificação enviados para análise (KYC), além de informações como disponibilidade e veículo.",
      "Conteúdo gerado: fotos dos passeios, avaliações, mensagens de chat e ocorrências.",
      "Dados de uso e dispositivo: registros de acesso, identificadores e token de notificação push.",
      "Login social: ao usar Google ou Apple, recebemos os dados básicos que você autoriza nesses provedores.",
    ],
  },
  {
    title: "3. Finalidades e bases legais (LGPD, art. 7º e 11)",
    bullets: [
      "Executar o contrato e viabilizar o serviço (agendamento, passeio, pagamento, comunicação) — execução de contrato.",
      "Verificar identidade e idoneidade do passeador e prevenir fraudes — legítimo interesse e cumprimento de obrigação legal.",
      "Processar pagamentos, repasses e emitir registros fiscais — execução de contrato e obrigação legal.",
      "Segurança, suporte, auditoria e resolução de incidentes — legítimo interesse.",
      "Comunicações operacionais e, mediante consentimento, comunicações de marketing — consentimento/legítimo interesse.",
      "[REVISAR E COMPLETAR O MAPEAMENTO DE FINALIDADES × BASES LEGAIS COM O JURÍDICO/ENCARREGADO.]",
    ],
  },
  {
    title: "4. Compartilhamento e operadores",
    paras: [
      "Compartilhamos dados apenas no necessário para operar o serviço, com:",
    ],
    bullets: [
      "Tutores e passeadores entre si, no mínimo necessário para realizar o passeio contratado.",
      "Empresa parceira (tenant) responsável pela operação da marca utilizada.",
      "Provedor de pagamentos: Asaas (processamento de cobranças e repasses).",
      "Armazenamento de mídia e documentos: Cloudinary.",
      "Infraestrutura e hospedagem: Railway, Neon (banco de dados) e Vercel.",
      "Notificações push e login social: Expo, Google e Apple.",
      "Autoridades públicas, quando exigido por lei ou ordem judicial.",
    ],
  },
  {
    title: "5. Transferência internacional",
    paras: [
      "Alguns operadores podem tratar dados em servidores localizados fora do Brasil. Nesses casos, adotamos as salvaguardas exigidas pela LGPD para garantir nível adequado de proteção. [CONFIRMAR LOCALIZAÇÃO DOS PROCESSADORES E SALVAGUARDAS COM O JURÍDICO.]",
    ],
  },
  {
    title: "6. Cookies e tecnologias semelhantes",
    paras: [
      "O site e o aplicativo podem utilizar cookies e identificadores para funcionamento, segurança e métricas. Você pode gerenciar cookies nas configurações do seu navegador. [DETALHAR CATEGORIAS DE COOKIES E, SE APLICÁVEL, INSERIR BANNER DE CONSENTIMENTO.]",
    ],
  },
  {
    title: "7. Por quanto tempo guardamos",
    paras: [
      "Retemos dados pessoais pelo tempo necessário às finalidades informadas e ao cumprimento de obrigações legais (por exemplo, fiscais e de prevenção a fraudes). Encerrada a relação, os dados são eliminados ou anonimizados, salvo hipóteses legais de guarda. [DEFINIR PRAZOS DE RETENÇÃO POR CATEGORIA DE DADO.]",
    ],
  },
  {
    title: "8. Segurança da informação",
    paras: [
      "Adotamos medidas técnicas e organizacionais para proteger os dados, como controle de acesso por papéis, cifragem de senhas, validação de uploads, registros de auditoria e acesso restrito a documentos sensíveis por links assinados. Nenhum sistema é totalmente imune; em caso de incidente relevante, atuaremos conforme a LGPD.",
    ],
  },
  {
    title: "9. Direitos do titular (LGPD, art. 18)",
    bullets: [
      "Confirmação da existência de tratamento e acesso aos dados.",
      "Correção de dados incompletos, inexatos ou desatualizados.",
      "Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade.",
      "Portabilidade, nos termos da regulamentação.",
      "Informação sobre compartilhamento e revogação do consentimento.",
      "Para exercer seus direitos, contate o Encarregado em [E-MAIL DO ENCARREGADO/DPO].",
    ],
  },
  {
    title: "10. Encarregado (DPO)",
    paras: [
      "Encarregado pelo tratamento de dados: [NOME DO ENCARREGADO], e-mail [E-MAIL DO ENCARREGADO]. Você também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).",
    ],
  },
  {
    title: "11. Menores de idade",
    paras: [
      "A Plataforma destina-se a maiores de 18 anos. Não coletamos intencionalmente dados de menores; caso identifiquemos, eliminaremos conforme a legislação.",
    ],
  },
  {
    title: "12. Alterações desta Política",
    paras: [
      "Esta Política pode ser atualizada. Mudanças relevantes serão comunicadas pelos canais oficiais, indicando a data da última atualização.",
    ],
  },
  {
    title: "13. Contato",
    paras: [
      "Dúvidas sobre privacidade: [E-MAIL DE CONTATO/PRIVACIDADE]. Controlador: [RAZÃO SOCIAL], CNPJ [CNPJ].",
    ],
  },
];

export default function PrivacidadePage() {
  return (
    <section className="ov-section ov-grain">
      <span className="ov-glow" />
      <div className="ov-wrap">
        <div className="ov-section-head ov-section-center">
          <p className="ov-eyebrow">
            <span className="ov-dot ov-dot-ember" /> Privacidade
          </p>
          <h1 className="ov-ptitle">Política de privacidade</h1>
        </div>

        <article className="ov-legal">
          <div className="ov-legal-note">
            <span className="ov-legal-note-ico" aria-hidden="true">
              ⚠
            </span>
            <span>
              <strong>Minuta para revisão jurídica.</strong> Versão preliminar
              redigida conforme o tratamento real de dados do Aumigão Walk e a LGPD
              (Lei nº 13.709/2018).{" "}
              <strong>
                Deve ser revisada e aprovada por advogado/encarregado
              </strong>{" "}
              antes da publicação. Trechos entre colchetes dependem de definição da
              empresa. Última atualização: [data de publicação].
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
