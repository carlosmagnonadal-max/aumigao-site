import type { Metadata } from "next";
import Link from "next/link";
import { InnerPage } from "@/components/InnerPage";
import s from "@/components/inner.module.css";

export const metadata: Metadata = {
  title: "Política de Privacidade — Aumigão Walk",
  description:
    "Política de Privacidade do Aumigão Walk — como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a LGPD (Lei nº 13.709/2018).",
};

export default function PrivacidadePage() {
  return (
    <InnerPage
      narrow
      eyebrow="Privacidade"
      title="Política de Privacidade"
      lead="Como coletamos, usamos e protegemos seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)."
    >
      <article className={s.legal}>
        <div className={s.sec}>
          <p className={s.meta}>
            <strong>Empresa:</strong> C3X Intermediação e Agenciamento de Serviços e Negócios Ltda. &nbsp;·&nbsp;
            <strong>CNPJ:</strong> 49.617.734/0001-03 &nbsp;·&nbsp;
            <strong>DPO:</strong> Carlos Magno Nadal Sant&apos;Ana Sobrinho &nbsp;·&nbsp;
            <strong>Contato DPO:</strong> contato@aumigaowalk.com.br &nbsp;·&nbsp;
            <strong>Última atualização:</strong> 11 de junho de 2026
          </p>
        </div>

        <div className={s.sec}>
          <h2>1. Quem trata os seus dados</h2>
          <p>A Aumigão Walk é operada por <strong>C3X Intermediação e Agenciamento de Serviços e Negócios Ltda.</strong> (CNPJ 49.617.734/0001-03), que é a <strong>controladora</strong> dos dados pessoais tratados na Plataforma.</p>
          <p>No modelo White Label, a <strong>empresa parceira (tenant)</strong> que opera sob sua própria marca pode atuar como controladora ou co-controladora dos dados dos Tutores e Passeadores de sua Operação, conforme previsto no <Link href="/termos/white-label">Contrato White Label</Link>. Nesses casos, a empresa parceira é identificada no respectivo aplicativo.</p>
        </div>

        <div className={s.sec}>
          <h2>2. A quem se aplica esta Política</h2>
          <p>Esta Política se aplica a todos os usuários da Plataforma Aumigão Walk:</p>
          <ul>
            <li><strong>Tutores</strong> (donos de pets que contratam passeios).</li>
            <li><strong>Passeadores</strong> (prestadores de serviço independentes que realizam passeios).</li>
            <li><strong>Visitantes</strong> do site institucional (aumigaowalk.com.br).</li>
            <li><strong>Representantes</strong> de empresas parceiras (tenants) no âmbito do uso do Painel Administrativo.</li>
          </ul>
        </div>

        <div className={s.sec}>
          <h2>3. Dados que coletamos</h2>
          <h3>3.1. Dados dos Tutores</h3>
          <table>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Dados</th>
                <th>Finalidade principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identificação</td>
                <td>Nome completo, e-mail, CPF, telefone, senha (cifrada)</td>
                <td>Cadastro e autenticação</td>
              </tr>
              <tr>
                <td>Dados do animal</td>
                <td>Nome, raça, porte, saúde, comportamento</td>
                <td>Agendamento e segurança do passeio</td>
              </tr>
              <tr>
                <td>Localização</td>
                <td>Endereço de coleta; localização durante o passeio</td>
                <td>Execução do serviço</td>
              </tr>
              <tr>
                <td>Pagamento</td>
                <td>Dados de cobrança processados pela Asaas</td>
                <td>Processamento de pagamentos</td>
              </tr>
              <tr>
                <td>Atividade</td>
                <td>Histórico de passeios, avaliações, chat</td>
                <td>Qualidade e suporte</td>
              </tr>
              <tr>
                <td>Dispositivo</td>
                <td>Token push, logs de acesso</td>
                <td>Notificações e segurança</td>
              </tr>
            </tbody>
          </table>

          <h3>3.2. Dados dos Passeadores</h3>
          <table>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Dados</th>
                <th>Finalidade principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Identificação</td>
                <td>Nome completo, e-mail, CPF, telefone, data de nascimento, endereço, senha (cifrada)</td>
                <td>Cadastro e autenticação</td>
              </tr>
              <tr>
                <td>Verificação KYC</td>
                <td>RG/CNH, selfie, comprovante de residência</td>
                <td>Verificação de identidade e prevenção a fraudes</td>
              </tr>
              <tr>
                <td>Localização</td>
                <td>Localização durante os passeios</td>
                <td>Acompanhamento pelo tutor; segurança</td>
              </tr>
              <tr>
                <td>Financeiro</td>
                <td>Dados bancários para repasse</td>
                <td>Processamento de repasses via Asaas</td>
              </tr>
              <tr>
                <td>Atividade</td>
                <td>Histórico de passeios, avaliações, ocorrências</td>
                <td>Gestão de qualidade e desempenho</td>
              </tr>
              <tr>
                <td>Dispositivo</td>
                <td>Token push, logs de acesso</td>
                <td>Notificações e segurança</td>
              </tr>
            </tbody>
          </table>

          <h3>3.3. Dados de visitantes do site</h3>
          <p>O site institucional coleta apenas dados fornecidos voluntariamente pelo visitante por meio do formulário de contato (nome, empresa, e-mail, telefone, cidade, tipo de negócio, interesse e mensagem), para resposta às solicitações e intake de leads.</p>

          <h3>3.4. Dados que NÃO coletamos</h3>
          <ul>
            <li>Dados completos de cartão de crédito (processados diretamente pelo provedor Asaas).</li>
            <li>Dados de redes sociais (não há login social Google/Apple).</li>
            <li>Dados de menores de 18 anos (a Plataforma é destinada exclusivamente a maiores de 18 anos).</li>
          </ul>
        </div>

        <div className={s.sec}>
          <h2>4. Finalidades e bases legais (LGPD, arts. 7º e 11)</h2>
          <table>
            <thead>
              <tr>
                <th>Finalidade</th>
                <th>Base legal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Viabilizar o agendamento, execução e acompanhamento dos passeios</td>
                <td>Execução de contrato (art. 7º, V)</td>
              </tr>
              <tr>
                <td>Verificar identidade e idoneidade do Passeador (KYC)</td>
                <td>Legítimo interesse e cumprimento de obrigação legal (art. 7º, II e IX)</td>
              </tr>
              <tr>
                <td>Processar pagamentos e repasses</td>
                <td>Execução de contrato (art. 7º, V)</td>
              </tr>
              <tr>
                <td>Emitir registros fiscais e cumprir obrigações tributárias</td>
                <td>Obrigação legal (art. 7º, II)</td>
              </tr>
              <tr>
                <td>Segurança, prevenção a fraudes e auditoria</td>
                <td>Legítimo interesse (art. 7º, IX)</td>
              </tr>
              <tr>
                <td>Comunicações operacionais (confirmações, avisos, suporte)</td>
                <td>Execução de contrato e legítimo interesse (art. 7º, V e IX)</td>
              </tr>
              <tr>
                <td>Gestão de qualidade e desempenho de passeadores</td>
                <td>Legítimo interesse (art. 7º, IX)</td>
              </tr>
              <tr>
                <td>Decisões sobre suspensão/desativação de perfil (art. 20 LGPD)</td>
                <td>Legítimo interesse com garantia do direito de revisão (art. 7º, IX)</td>
              </tr>
              <tr>
                <td>Comunicações de marketing e novidades</td>
                <td><strong>Consentimento</strong> (art. 7º, I) — revogável a qualquer tempo</td>
              </tr>
              <tr>
                <td>Exercício regular de direitos em processos</td>
                <td>Exercício regular de direitos (art. 7º, VI)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={s.sec}>
          <h2>5. Compartilhamento e operadores</h2>
          <h3>5.1. Entre usuários</h3>
          <p>Dados mínimos necessários para o passeio são compartilhados entre Tutor e Passeador (nome, localização de coleta, dados do animal para o Passeador; nome do Passeador e avaliações para o Tutor).</p>

          <h3>5.2. Empresa parceira (tenant)</h3>
          <p>A empresa parceira que opera a instância White Label tem acesso aos dados dos Tutores e Passeadores da sua Operação via Painel Administrativo, nos termos do <Link href="/termos/white-label">Contrato White Label</Link>.</p>

          <h3>5.3. Provedores de serviço (operadores)</h3>
          <table>
            <thead>
              <tr>
                <th>Provedor</th>
                <th>Finalidade</th>
                <th>Localização</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Asaas</strong></td>
                <td>Processamento de pagamentos e repasses</td>
                <td>Brasil</td>
              </tr>
              <tr>
                <td><strong>Railway</strong></td>
                <td>Hospedagem da aplicação e armazenamento de uploads (fotos, documentos KYC)</td>
                <td>EUA (US West)</td>
              </tr>
              <tr>
                <td><strong>Neon</strong></td>
                <td>Banco de dados</td>
                <td>Brasil (sa-east-1, São Paulo)</td>
              </tr>
              <tr>
                <td><strong>Vercel</strong></td>
                <td>Hospedagem do site institucional</td>
                <td>EUA</td>
              </tr>
              <tr>
                <td><strong>Resend</strong></td>
                <td>Envio de e-mails transacionais e notificações</td>
                <td>EUA</td>
              </tr>
              <tr>
                <td><strong>Expo</strong></td>
                <td>Notificações push para o aplicativo</td>
                <td>EUA</td>
              </tr>
            </tbody>
          </table>

          <h3>5.4. Autoridades públicas</h3>
          <p>Dados podem ser compartilhados com autoridades judiciais ou administrativas quando exigido por lei, decisão judicial ou ordem de autoridade competente.</p>
        </div>

        <div className={s.sec}>
          <h2>6. Transferência internacional de dados</h2>
          <p>A aplicação da Plataforma é hospedada em servidores nos <strong>Estados Unidos</strong> (Railway, região US West), onde dados pessoais são processados durante o uso do serviço. O banco de dados relacional está hospedado no <strong>Brasil</strong> (Neon, região de São Paulo). Outros provedores (Resend, Expo, Vercel) também processam dados fora do Brasil.</p>
          <p>Essas transferências internacionais observam as bases e salvaguardas previstas nos arts. 33 a 36 da LGPD, incluindo cláusulas contratuais com garantias adequadas de proteção, e se limitam ao estritamente necessário para a prestação do serviço.</p>
        </div>

        <div className={s.sec}>
          <h2>7. Cookies e tecnologias semelhantes</h2>
          <h3>7.1. Site institucional</h3>
          <p>O site aumigaowalk.com.br utiliza apenas cookies e armazenamento local <strong>estritamente necessários</strong> ao funcionamento e à segurança do site. Não utilizamos cookies de publicidade, rastreamento ou analytics de terceiros. Portanto, o site não exibe banner de consentimento de cookies.</p>
          <h3>7.2. Aplicativo</h3>
          <p>O aplicativo utiliza identificadores técnicos necessários à autenticação e ao funcionamento do serviço: token de sessão JWT (autenticação) e token de notificação push (Expo). Esses identificadores não são utilizados para rastreamento publicitário.</p>
        </div>

        <div className={s.sec}>
          <h2>8. Por quanto tempo guardamos os dados</h2>
          <table>
            <thead>
              <tr>
                <th>Categoria de dado</th>
                <th>Prazo de retenção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dados de cadastro e perfil</td>
                <td>Enquanto a conta estiver ativa</td>
              </tr>
              <tr>
                <td>Histórico de passeios e transações</td>
                <td>Até 5 anos após o encerramento da relação (obrigação fiscal e civil)</td>
              </tr>
              <tr>
                <td>Documentos KYC do Passeador (RG, selfie, comprovante)</td>
                <td>Mínimo de 1 ano após encerramento; prazo adicional conforme obrigação legal</td>
              </tr>
              <tr>
                <td>Registros de acesso (logs)</td>
                <td>Mínimo de 6 meses (Marco Civil da Internet, art. 15)</td>
              </tr>
              <tr>
                <td>Dados do formulário de contato do site</td>
                <td>Até 2 anos após o último contato, salvo conversão em cliente</td>
              </tr>
              <tr>
                <td>Dados após exercício de direito de eliminação</td>
                <td>Eliminados ou anonimizados no prazo legal, ressalvadas hipóteses de guarda obrigatória</td>
              </tr>
            </tbody>
          </table>

          <h3>8.1. Encerramento de conta e solicitação de eliminação</h3>
          <p>O titular pode solicitar a eliminação de seus dados a qualquer momento pelo e-mail contato@aumigaowalk.com.br. A solicitação é atendida no prazo de até 15 (quinze) dias úteis, ressalvados os dados que a C3X deva reter por: (i) obrigação legal ou fiscal; (ii) exercício regular de direitos em processos; (iii) prevenção a fraudes.</p>
        </div>

        <div className={s.sec}>
          <h2>9. Segurança da informação</h2>
          <p>A C3X adota as seguintes medidas técnicas e organizacionais para proteger os dados pessoais:</p>
          <ul>
            <li>Controle de acesso baseado em papéis (RBAC) — cada usuário acessa apenas os dados necessários para sua função.</li>
            <li>Cifragem de senhas com algoritmo seguro (bcrypt/argon2).</li>
            <li>Validação e sanitização de dados de entrada e de uploads de arquivos.</li>
            <li>Registros de auditoria de ações administrativas sensíveis.</li>
            <li>Acesso restrito a documentos KYC (não expostos publicamente).</li>
            <li>Comunicação via HTTPS em todos os canais.</li>
            <li>Ambientes de produção separados dos ambientes de desenvolvimento.</li>
          </ul>
          <p>Em caso de violação de dados que possa gerar risco relevante aos titulares, a C3X atuará conforme a LGPD: comunicação à ANPD e, quando necessário, aos titulares afetados, no prazo legal.</p>
        </div>

        <div className={s.sec}>
          <h2>10. Direitos do titular (LGPD, art. 18)</h2>
          <p>O titular de dados pessoais tem os seguintes direitos, exercíveis pelo e-mail contato@aumigaowalk.com.br:</p>
          <ul>
            <li><strong>Confirmação e acesso:</strong> saber se há tratamento de seus dados e ter acesso a eles.</li>
            <li><strong>Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
            <li><strong>Anonimização, bloqueio ou eliminação:</strong> para dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.</li>
            <li><strong>Portabilidade:</strong> obter seus dados em formato estruturado e interoperável, nos termos da regulamentação da ANPD.</li>
            <li><strong>Eliminação:</strong> dos dados tratados com base em consentimento, salvo hipóteses legais de guarda obrigatória.</li>
            <li><strong>Informação sobre compartilhamento:</strong> saber com quais empresas e órgãos seus dados são compartilhados.</li>
            <li><strong>Revogação do consentimento:</strong> revogar consentimentos dados, sem prejuízo do tratamento realizado anteriormente.</li>
            <li><strong>Revisão de decisão automatizada:</strong> solicitar revisão humana de decisões tomadas com base exclusivamente em tratamento automatizado (ex.: suspensão de perfil por algoritmo) — art. 20 LGPD.</li>
            <li><strong>Oposição:</strong> opor-se a tratamento realizado com base em legítimo interesse em situações de desconformidade.</li>
          </ul>
          <p>A C3X responderá às solicitações no prazo de até 15 (quinze) dias úteis.</p>
        </div>

        <div className={s.sec}>
          <h2>11. Encarregado de Dados (DPO)</h2>
          <p><strong>Nome:</strong> Carlos Magno Nadal Sant&apos;Ana Sobrinho</p>
          <p><strong>E-mail:</strong> contato@aumigaowalk.com.br</p>
          <p>O titular também pode apresentar reclamações à <strong>Autoridade Nacional de Proteção de Dados (ANPD)</strong>: www.gov.br/anpd</p>
        </div>

        <div className={s.sec}>
          <h2>12. Menores de idade</h2>
          <p>A Plataforma é destinada exclusivamente a <strong>maiores de 18 anos</strong>. Não coletamos, processamos nem armazenamos intencionalmente dados pessoais de menores. Caso identifiquemos o cadastro de menor, os dados serão eliminados imediatamente, conforme o art. 14 da LGPD.</p>
        </div>

        <div className={s.sec}>
          <h2>13. Alterações desta Política</h2>
          <p>Esta Política pode ser atualizada a qualquer tempo. Alterações relevantes serão comunicadas aos usuários por e-mail cadastrado ou por notificação no aplicativo, com indicação da data da última atualização. O uso continuado da Plataforma após a entrada em vigor das alterações implica aceitação do novo texto.</p>
        </div>

        <div className={s.sec}>
          <h2>14. Contato</h2>
          <p>Para dúvidas, solicitações ou exercício de direitos relacionados ao tratamento de dados pessoais:</p>
          <p><strong>E-mail:</strong> contato@aumigaowalk.com.br</p>
          <p><strong>Controladora:</strong> C3X Intermediação e Agenciamento de Serviços e Negócios Ltda.</p>
          <p><strong>CNPJ:</strong> 49.617.734/0001-03</p>
          <p><strong>Endereço:</strong> Rua Doutor José Peroba, nº 297, Sala 1105, STIEP, Salvador/BA, CEP 41.770-235</p>
        </div>
      </article>

      <div className={`${s.btnRow} ${s.btnRowCenter}`}>
        <Link href="/termos" className={`${s.btn} ${s.btnGhost}`}>← Termos de uso</Link>
        <Link href="/contato" className={`${s.btn} ${s.btnPrimary}`}>Falar com o time →</Link>
      </div>
    </InnerPage>
  );
}
