import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contrato White Label — Aumigão Walk",
  description:
    "Contrato de Licença White Label Aumigão Walk para Empresas Parceiras: SLA, responsabilidade operacional, co-responsabilidade LGPD e rescisão.",
};

export default function TermosWhiteLabelPage() {
  return (
    <section className="ov-section ov-center ov-grain">
      <span className="ov-glow" />
      <div className="ov-wrap">
        <div className="ov-section-head ov-section-center">
          <p className="ov-eyebrow">
            <span className="ov-dot ov-dot-ember" /> Termos
          </p>
          <h1 className="ov-ptitle">Contrato de Licença White Label</h1>
          <p className="ov-lead">
            Contrato B2B entre a C3X e a Empresa Parceira para operação da
            Plataforma sob marca própria. Complementa os{" "}
            <Link href="/termos/gerais">Termos Gerais da Plataforma</Link>.
          </p>
        </div>

        <article className="ov-legal">
          <div className="ov-legal-sec">
            <p style={{ fontSize: ".85rem", color: "var(--ov-text-2)" }}>
              <strong>Licenciante:</strong> C3X Intermediação e Agenciamento de Serviços e Negócios Ltda. &nbsp;·&nbsp;
              <strong>CNPJ:</strong> 49.617.734/0001-03 &nbsp;·&nbsp;
              <strong>Última atualização:</strong> 11 de junho de 2026
            </p>
            <div className="ov-legal-note" style={{ marginTop: 16 }}>
              <span className="ov-legal-note-ico">ℹ</span>
              <span>
                <strong>Natureza do documento:</strong> Contrato B2B (empresa para empresa) regido pelo Código Civil e legislação empresarial brasileira. As cláusulas que estabelecem responsabilidades operacionais, SLA, dados e rescisão estão sinalizadas com{" "}
                <strong>[ACEITE ESPECÍFICO]</strong> e exigem confirmação destacada no ato da contratação.
              </span>
            </div>
          </div>

          <div className="ov-legal-sec">
            <h2>1. Definições</h2>
            <ul>
              <li><strong>Licenciante / C3X:</strong> C3X Intermediação e Agenciamento de Serviços e Negócios Ltda., operadora da infraestrutura Aumigão Walk.</li>
              <li><strong>Empresa Parceira / Tenant / Licenciada:</strong> a pessoa jurídica que celebra este Contrato para licenciar e operar a Plataforma sob sua própria marca.</li>
              <li><strong>Plataforma:</strong> o conjunto de aplicativos (Tutor e Passeador), painéis administrativos, APIs e serviços de tecnologia que compõem a infraestrutura Aumigão Walk.</li>
              <li><strong>Marca da Empresa Parceira:</strong> o nome comercial, logotipo, identidade visual e demais elementos de identidade da Empresa Parceira aplicados à Plataforma no modelo White Label.</li>
              <li><strong>Operação:</strong> o conjunto de atividades de intermediação de passeios de cães conduzidas pela Empresa Parceira em seu território, utilizando a infraestrutura da Plataforma.</li>
              <li><strong>Passeadores da Operação:</strong> os prestadores de serviço independentes cadastrados, verificados e aprovados pela Empresa Parceira (ou pela C3X, conforme acordado) para operar na Operação da Empresa Parceira.</li>
              <li><strong>Tutores da Operação:</strong> os usuários finais (donos de pets) cadastrados na Operação da Empresa Parceira.</li>
              <li><strong>Painel Administrativo:</strong> a interface de gestão fornecida pela C3X à Empresa Parceira para configuração, monitoramento e operação da sua instância da Plataforma.</li>
            </ul>
          </div>

          <div className="ov-legal-sec">
            <h2>2. Objeto do contrato</h2>
            <p>A C3X concede à Empresa Parceira <strong>licença de uso não exclusiva, intransferível e por prazo determinado</strong> da infraestrutura tecnológica da Plataforma Aumigão Walk, para que a Empresa Parceira opere, sob sua própria marca, um serviço de intermediação de passeios de cães em seu território de atuação, nos termos e condições deste Contrato.</p>
            <p>A licença inclui: (i) acesso e uso dos aplicativos Tutor e Passeador customizados com a Marca da Empresa Parceira; (ii) acesso ao Painel Administrativo; (iii) uso da infraestrutura de backend, matching, pagamentos e notificações; (iv) suporte técnico nos termos da Cláusula 5; (v) atualizações da Plataforma disponibilizadas pela C3X durante a vigência.</p>
          </div>

          <div className="ov-legal-sec">
            <h2>3. Configuração e personalização</h2>
            <h3>3.1. Identidade visual</h3>
            <p>A C3X disponibiliza à Empresa Parceira ferramentas para configuração da identidade visual da Operação: nome da marca, logotipo, paleta de cores primária e demais parâmetros disponíveis na versão vigente da Plataforma.</p>
            <h3>3.2. Configurações operacionais</h3>
            <p>A Empresa Parceira pode configurar, via Painel Administrativo: modalidades de passeio, preços, comissões, regras de matching, programas de fidelidade, cupons, unidades de operação e demais parâmetros disponíveis.</p>
            <h3>3.3. Limites da personalização</h3>
            <p>A personalização é limitada às funcionalidades disponíveis na Plataforma. Desenvolvimentos customizados além do escopo padrão são objeto de negociação separada entre as partes. A Empresa Parceira não pode: (i) remover ou ocultar atribuições legais obrigatórias; (ii) modificar o código-fonte da Plataforma; (iii) integrar sistemas de terceiros sem aprovação prévia da C3X.</p>
          </div>

          <div className="ov-legal-sec">
            <h2>4. Obrigações da C3X (Licenciante)</h2>
            <p>A C3X obriga-se a:</p>
            <ul>
              <li>Manter a infraestrutura da Plataforma em funcionamento, nos termos do SLA previsto na Cláusula 5.</li>
              <li>Disponibilizar o Painel Administrativo e as ferramentas de gestão acordadas.</li>
              <li>Fornecer suporte técnico conforme o plano contratado.</li>
              <li>Notificar a Empresa Parceira com antecedência mínima de 7 (sete) dias sobre manutenções programadas que impliquem indisponibilidade da Plataforma.</li>
              <li>Disponibilizar atualizações e melhorias da Plataforma durante a vigência do Contrato.</li>
              <li>Processar pagamentos e repasses conforme as configurações definidas pela Empresa Parceira, por meio do provedor Asaas.</li>
              <li>Tratar os dados pessoais dos Tutores e Passeadores da Operação em conformidade com a LGPD e com a <Link href="/privacidade">Política de Privacidade</Link>.</li>
              <li>Comunicar à Empresa Parceira, no menor prazo possível, incidentes de segurança que afetem dados de sua Operação.</li>
            </ul>
          </div>

          <div className="ov-legal-sec">
            <h2>★ Cláusula 5 — Disponibilidade e SLA</h2>
            <p style={{ color: "var(--ov-text-2)", fontStyle: "italic", fontSize: ".9rem", marginTop: 8 }}>
              [ACEITE ESPECÍFICO] Esta cláusula define os níveis de serviço garantidos e as consequências de descumprimento.
            </p>

            <h3>5.1. Disponibilidade garantida</h3>
            <p>A C3X garante disponibilidade mínima da Plataforma de <strong>99,0% ao mês</strong> (equivalente a aproximadamente 7,3 horas de indisponibilidade mensal tolerada), excluídas: (i) manutenções programadas notificadas com antecedência; (ii) indisponibilidades decorrentes de falhas de provedores de infraestrutura terceirizados (Railway, Neon, Vercel) fora do controle da C3X; (iii) eventos de força maior ou caso fortuito.</p>

            <h3>5.2. Medição</h3>
            <p>A disponibilidade é medida mensalmente com base nos registros de monitoramento da C3X. A Empresa Parceira pode solicitar o relatório mensal de disponibilidade pelo e-mail contato@aumigaowalk.com.br.</p>

            <h3>5.3. Consequências do descumprimento do SLA</h3>
            <p>Em caso de disponibilidade inferior ao mínimo garantido (excluídas as exceções da Cláusula 5.1), a Empresa Parceira terá direito a desconto proporcional na mensalidade do período afetado, calculado com base nas horas de indisponibilidade que excedam o limite tolerado. O desconto é o único remédio disponível para descumprimento do SLA, salvo dolo ou culpa grave da C3X.</p>

            <h3>5.4. Suporte técnico</h3>
            <p>O suporte técnico é prestado via e-mail (contato@aumigaowalk.com.br) em dias úteis, das 9h às 18h (horário de Brasília). O prazo de resposta inicial é de até 1 (um) dia útil para questões operacionais e de até 4 (quatro) horas úteis para incidentes críticos que afetem a disponibilidade da Operação.</p>

            <h3>5.5. Limitação de responsabilidade por indisponibilidade</h3>
            <p>A responsabilidade da C3X por danos decorrentes de indisponibilidade da Plataforma está limitada ao valor da mensalidade do período afetado, exceto em casos de dolo ou culpa grave. A C3X não responde por lucros cessantes ou perda de receita operacional da Empresa Parceira decorrentes de indisponibilidade.</p>

            <div className="ov-legal-aceite">
              [ ] LI E ACEITO OS TERMOS DE DISPONIBILIDADE E SLA, INCLUINDO A LIMITAÇÃO DE RESPONSABILIDADE POR INDISPONIBILIDADE
            </div>
          </div>

          <div className="ov-legal-sec">
            <h2>6. Obrigações da Empresa Parceira</h2>
            <p>A Empresa Parceira obriga-se a:</p>
            <ul>
              <li>Utilizar a Plataforma exclusivamente para os fins previstos neste Contrato e dentro do território acordado.</li>
              <li>Manter o acesso ao Painel Administrativo restrito a pessoas autorizadas e responsabilizar-se pelo uso feito por seus administradores.</li>
              <li>Cumprir toda a legislação aplicável à sua atividade, incluindo legislação trabalhista, tributária, sanitária e de defesa do consumidor.</li>
              <li>Informar e cumprir os Termos do Tutor e os Termos do Passeador da Plataforma junto aos seus usuários finais, podendo adaptá-los com autorização da C3X.</li>
              <li>Não praticar atos que prejudiquem a reputação, a segurança ou o funcionamento da Plataforma.</li>
              <li>Efetuar os pagamentos das mensalidades e demais valores acordados nos prazos estabelecidos.</li>
              <li>Comunicar à C3X, no prazo de 48 horas, qualquer incidente operacional grave (acidente com animal, reclamação judicial, investigação de autoridade) que envolva a Operação.</li>
            </ul>
          </div>

          <div className="ov-legal-sec">
            <h2>★ Cláusula 7 — Responsabilidade Operacional da Empresa Parceira</h2>
            <p style={{ color: "var(--ov-text-2)", fontStyle: "italic", fontSize: ".9rem", marginTop: 8 }}>
              [ACEITE ESPECÍFICO] Esta cláusula define as responsabilidades da Empresa Parceira perante tutores, passeadores e terceiros no âmbito de sua Operação.
            </p>

            <h3>7.1. Responsabilidade pela Operação local</h3>
            <p>A Empresa Parceira é <strong>responsável pela gestão e condução de sua Operação</strong> local, incluindo: (i) seleção, verificação e aprovação dos Passeadores da Operação, conforme os padrões mínimos da C3X; (ii) configuração dos parâmetros comerciais e operacionais; (iii) atendimento ao cliente no âmbito de sua Operação; (iv) cumprimento das regras locais de funcionamento e licenciamento.</p>

            <h3>7.2. Responsabilidade perante usuários finais</h3>
            <p>A Empresa Parceira que opera sob marca própria é considerada, perante os Tutores e Passeadores da sua Operação, a fornecedora do serviço de intermediação local. Eventuais demandas de consumidores relacionadas à Operação da Empresa Parceira são de responsabilidade primária desta, sem prejuízo do direito de regresso contra a C3X nos casos em que a falha seja atribuível à infraestrutura tecnológica.</p>

            <h3>7.3. Responsabilidade pelos passeadores aprovados</h3>
            <p>A Empresa Parceira que conduzir o processo de aprovação de Passeadores em sua Operação (total ou parcialmente) assume responsabilidade pela adequação desse processo, incluindo a verificação de documentos, histórico e idoneidade dos candidatos aprovados.</p>

            <h3>7.4. Indenidade da C3X</h3>
            <p>A Empresa Parceira obriga-se a manter a C3X livre e indene de reclamações, demandas e condenações originadas em falhas ou irregularidades na condução de sua Operação local que não sejam atribuíveis à infraestrutura tecnológica da C3X.</p>

            <div className="ov-legal-aceite">
              [ ] LI E ACEITO AS RESPONSABILIDADES OPERACIONAIS DA EMPRESA PARCEIRA, INCLUINDO A OBRIGAÇÃO DE INDENIDADE DA C3X
            </div>
          </div>

          <div className="ov-legal-sec">
            <h2>★ Cláusula 8 — Dados Pessoais e Co-Responsabilidade LGPD</h2>
            <p style={{ color: "var(--ov-text-2)", fontStyle: "italic", fontSize: ".9rem", marginTop: 8 }}>
              [ACEITE ESPECÍFICO] Esta cláusula define as obrigações de cada parte no tratamento de dados pessoais dos usuários da Operação, nos termos da LGPD (Lei nº 13.709/2018).
            </p>

            <h3>8.1. Papéis no tratamento de dados</h3>
            <p>Para fins da LGPD:</p>
            <ul>
              <li>A <strong>C3X</strong> atua como <strong>controladora</strong> dos dados pessoais tratados na infraestrutura da Plataforma (cadastro, KYC, transações, logs de sistema) e como <strong>operadora</strong> em relação aos dados configurados e geridos exclusivamente pela Empresa Parceira via Painel Administrativo.</li>
              <li>A <strong>Empresa Parceira</strong> atua como <strong>controladora</strong> dos dados pessoais dos Tutores e Passeadores de sua Operação para as finalidades de sua atividade comercial local, e como <strong>operadora</strong> em relação aos dados processados pela infraestrutura da C3X.</li>
            </ul>
            <p>Nas situações em que ambas determinam conjuntamente as finalidades e os meios do tratamento, configura-se co-controlação nos termos do art. 23, §1º da LGPD, devendo as partes observar as responsabilidades definidas nesta Cláusula.</p>

            <h3>8.2. Obrigações da Empresa Parceira como controladora</h3>
            <p>A Empresa Parceira obriga-se a: (i) tratar os dados pessoais dos usuários de sua Operação exclusivamente para as finalidades previstas em seus próprios termos de uso e política de privacidade, alinhados aos documentos da Plataforma; (ii) implementar medidas técnicas e organizacionais adequadas para proteção dos dados; (iii) não transferir dados pessoais dos usuários a terceiros sem base legal adequada; (iv) responder diretamente às solicitações de titulares relacionadas à sua Operação; (v) notificar a C3X no prazo de 24 horas sobre qualquer incidente de segurança que afete dados pessoais tratados na Plataforma.</p>

            <h3>8.3. Transferência internacional</h3>
            <p>Os dados são processados em parte em servidores nos Estados Unidos (Railway, US West), conforme informado na <Link href="/privacidade">Política de Privacidade</Link> da Plataforma. A Empresa Parceira deve informar essa transferência nos seus próprios documentos de privacidade destinados aos usuários finais.</p>

            <h3>8.4. Suboperadores</h3>
            <p>A C3X utiliza suboperadores de dados (Asaas para pagamentos, Resend para e-mails, Expo para notificações push, Neon para banco de dados). A Empresa Parceira autoriza o uso desses suboperadores para a operação da Plataforma.</p>

            <h3>8.5. Auditoria</h3>
            <p>A C3X fornecerá à Empresa Parceira, mediante solicitação fundamentada, informações sobre as medidas de segurança adotadas e os incidentes de segurança ocorridos, no prazo de 15 (quinze) dias úteis.</p>

            <div className="ov-legal-aceite">
              [ ] LI E ACEITO AS OBRIGAÇÕES DE TRATAMENTO DE DADOS PESSOAIS E CO-RESPONSABILIDADE LGPD NO ÂMBITO DA MINHA OPERAÇÃO
            </div>
          </div>

          <div className="ov-legal-sec">
            <h2>9. Remuneração e pagamento</h2>
            <h3>9.1. Modelo de remuneração</h3>
            <p>A remuneração devida pela Empresa Parceira à C3X é definida na proposta comercial aceita pelas partes e pode compreender: (i) mensalidade fixa de licença; (ii) percentual sobre o volume transacionado na Operação; ou (iii) combinação de ambos. Os valores são reajustados anualmente pelo IPCA, salvo acordo diverso.</p>
            <h3>9.2. Faturamento e pagamento</h3>
            <p>O faturamento é realizado mensalmente, com vencimento no dia acordado na proposta comercial. O atraso no pagamento superior a 15 (quinze) dias pode ensejar a suspensão do acesso à Plataforma, sem prejuízo da cobrança de multa de 2% e juros de 1% ao mês sobre o valor em atraso.</p>
            <h3>9.3. Contestação de cobranças</h3>
            <p>Contestações sobre faturas devem ser apresentadas no prazo de 10 (dez) dias úteis após o recebimento, por e-mail a contato@aumigaowalk.com.br. Contestações tempestivas suspendem a exigibilidade do valor contestado até a resolução.</p>
          </div>

          <div className="ov-legal-sec">
            <h2>10. Confidencialidade</h2>
            <p>As partes comprometem-se a manter em sigilo todas as informações confidenciais trocadas no âmbito deste Contrato, incluindo dados técnicos, comerciais, operacionais e financeiros, pelo prazo de 3 (três) anos após o encerramento do Contrato. A obrigação não se aplica a informações que: (i) já sejam públicas sem violação deste Contrato; (ii) sejam exigidas por autoridade competente; (iii) sejam desenvolvidas independentemente pela parte receptora.</p>
          </div>

          <div className="ov-legal-sec">
            <h2>★ Cláusula 11 — Rescisão</h2>
            <p style={{ color: "var(--ov-text-2)", fontStyle: "italic", fontSize: ".9rem", marginTop: 8 }}>
              [ACEITE ESPECÍFICO] Esta cláusula define as condições e consequências do encerramento do Contrato.
            </p>

            <h3>11.1. Rescisão por prazo ou notificação</h3>
            <p>O Contrato tem prazo determinado conforme a proposta comercial aceita. Ao final do prazo, renova-se automaticamente por igual período, salvo notificação de não renovação por qualquer das partes com antecedência mínima de 30 (trinta) dias.</p>

            <h3>11.2. Rescisão imotivada</h3>
            <p>Qualquer das partes pode rescindir o Contrato imotivadamente com aviso prévio de 30 (trinta) dias. Durante o aviso prévio, as obrigações de ambas as partes permanecem em vigor.</p>

            <h3>11.3. Rescisão por justa causa</h3>
            <p>A rescisão imediata por justa causa é cabível nas seguintes situações:</p>
            <p><em>Pela C3X:</em> (i) inadimplência da Empresa Parceira por mais de 30 (trinta) dias após notificação; (ii) uso da Plataforma para fins ilícitos ou que violem direitos de terceiros; (iii) violação grave das obrigações de proteção de dados; (iv) conduta que cause dano à reputação da C3X ou da Plataforma.</p>
            <p><em>Pela Empresa Parceira:</em> (i) violação grave pela C3X das obrigações de disponibilidade (SLA) não resolvida em 30 dias após notificação formal; (ii) alteração unilateral e substancial das condições deste Contrato pela C3X sem aceite da Empresa Parceira.</p>

            <h3>11.4. Efeitos da rescisão</h3>
            <p>Com a rescisão do Contrato: (i) a licença de uso da Plataforma é revogada imediatamente ou ao final do prazo de aviso prévio; (ii) a Empresa Parceira deve cessar o uso de quaisquer elementos de identidade da Plataforma em sua marca; (iii) os dados dos Tutores e Passeadores da Operação serão tratados conforme o protocolo de encerramento acordado entre as partes, respeitada a LGPD; (iv) os valores devidos até a data de rescisão permanecem exigíveis.</p>

            <h3>11.5. Portabilidade e exportação de dados</h3>
            <p>A Empresa Parceira pode solicitar a exportação dos dados dos usuários de sua Operação no prazo de até 60 (sessenta) dias após a rescisão, em formato estruturado e interoperável. Após esse prazo, os dados serão eliminados ou anonimizados conforme a <Link href="/privacidade">Política de Privacidade</Link>.</p>

            <div className="ov-legal-aceite">
              [ ] LI E ACEITO AS CONDIÇÕES DE RESCISÃO DO CONTRATO, INCLUINDO OS EFEITOS SOBRE O ACESSO À PLATAFORMA E AOS DADOS DA OPERAÇÃO
            </div>
          </div>

          <div className="ov-legal-sec">
            <h2>12. Propriedade intelectual</h2>
            <h3>12.1. Titularidade da C3X</h3>
            <p>A C3X mantém a titularidade exclusiva sobre toda a propriedade intelectual da Plataforma, incluindo código-fonte, design, algoritmos, bases de dados, documentação e a marca Aumigão Walk. A licença concedida neste Contrato não transfere nem implica cessão de qualquer direito de propriedade intelectual.</p>
            <h3>12.2. Titularidade da Empresa Parceira</h3>
            <p>A Empresa Parceira mantém a titularidade exclusiva sobre sua própria marca, logotipo e identidade visual aplicados à Operação. A C3X não adquire qualquer direito sobre a marca da Empresa Parceira pelo uso na Plataforma.</p>
            <h3>12.3. Dados da Operação</h3>
            <p>Os dados gerados pela Operação da Empresa Parceira (dados dos usuários, histórico de passeios, dados financeiros) são tratados conforme a Cláusula 8. A titularidade sobre os dados pessoais permanece com os titulares (usuários).</p>
          </div>

          <div className="ov-legal-sec">
            <h2>13. Limitação geral de responsabilidade</h2>
            <p>A responsabilidade total acumulada da C3X perante a Empresa Parceira, por qualquer causa, está limitada ao montante correspondente a 3 (três) mensalidades pagas pela Empresa Parceira nos 3 (três) meses anteriores ao evento que gerou o dano, exceto em casos de dolo ou culpa grave. As partes excluem mutuamente, na máxima extensão permitida em lei, a responsabilidade por lucros cessantes, danos indiretos e perda de receita.</p>
          </div>

          <div className="ov-legal-sec">
            <h2>14. Disposições gerais</h2>
            <ul>
              <li><strong>Lei aplicável:</strong> Brasil.</li>
              <li><strong>Foro:</strong> Salvador/BA para todas as disputas decorrentes deste Contrato.</li>
              <li><strong>Integralidade:</strong> este Contrato, juntamente com a proposta comercial aceita e os Termos Gerais da Plataforma, constitui o acordo integral entre as partes, substituindo quaisquer negociações ou entendimentos anteriores.</li>
              <li><strong>Alterações:</strong> modificações a este Contrato devem ser feitas por escrito e aceitas por ambas as partes.</li>
              <li><strong>Notificações:</strong> todas as comunicações formais devem ser feitas por e-mail com confirmação de leitura ou por correspondência ao endereço da sede de cada parte.</li>
            </ul>
          </div>
        </article>

        <div className="ov-cta-row" style={{ justifyContent: "center", marginTop: 40 }}>
          <Link href="/termos" className="ov-btn ov-btn-ghost">
            ← Todos os documentos
          </Link>
          <Link href="/contato" className="ov-btn ov-btn-primary">
            Quero ser parceiro <span className="ov-arr">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
