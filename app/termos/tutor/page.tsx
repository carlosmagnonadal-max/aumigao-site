import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos do Tutor — Aumigão Walk",
  description:
    "Termos específicos para Tutores no Aumigão Walk: agendamento, cancelamentos, reembolsos, responsabilidades e proteção de dados.",
};

export default function TermosTutorPage() {
  return (
    <section className="ov-section ov-center ov-grain">
      <span className="ov-glow" />
      <div className="ov-wrap">
        <div className="ov-section-head ov-section-center">
          <p className="ov-eyebrow">
            <span className="ov-dot ov-dot-ember" /> Termos
          </p>
          <h1 className="ov-ptitle">Termos do Tutor</h1>
          <p className="ov-lead">
            Regras específicas para quem utiliza a Plataforma para contratar
            passeios. Complementa os{" "}
            <Link href="/termos/gerais">Termos Gerais da Plataforma</Link>.
          </p>
        </div>

        <article className="ov-legal">
          <div className="ov-legal-sec">
            <p style={{ fontSize: ".85rem", color: "var(--ov-text-2)" }}>
              <strong>Empresa:</strong> C3X Intermediação e Agenciamento de Serviços e Negócios Ltda. &nbsp;·&nbsp;
              <strong>CNPJ:</strong> 49.617.734/0001-03 &nbsp;·&nbsp;
              <strong>Última atualização:</strong> 11 de junho de 2026
            </p>
            <div className="ov-legal-note" style={{ marginTop: 16 }}>
              <span className="ov-legal-note-ico">ℹ</span>
              <span>
                <strong>Leia antes de aceitar.</strong> As cláusulas que limitam direitos ou estabelecem obrigações relevantes estão sinalizadas com{" "}
                <strong>[ACEITE ESPECÍFICO]</strong> e exigem confirmação destacada no momento do cadastro.
              </span>
            </div>
          </div>

          <div className="ov-legal-sec">
            <h2>1. Quem é o Tutor</h2>
            <p>Tutor é a pessoa física maior de 18 anos que: (i) realiza cadastro na Plataforma informando seus dados pessoais; (ii) registra um ou mais animais de estimação; e (iii) utiliza a Plataforma para contratar passeios com passeadores verificados.</p>
          </div>

          <div className="ov-legal-sec">
            <h2>2. Cadastro e perfil do Tutor</h2>
            <h3>2.1. Dados exigidos no cadastro</h3>
            <p>O Tutor deve informar: nome completo, e-mail, telefone, CPF e senha. Os dados devem ser verídicos, completos e mantidos atualizados durante toda a utilização da Plataforma.</p>
            <h3>2.2. Perfil do animal</h3>
            <p>O Tutor é responsável por fornecer informações precisas sobre cada animal cadastrado, incluindo: nome, raça, porte, temperamento, necessidades especiais, histórico de saúde relevante e situação vacinal. Informações incorretas ou omitidas que resultem em incidentes durante o passeio são de responsabilidade exclusiva do Tutor.</p>
            <h3>2.3. Atualização de informações</h3>
            <p>O Tutor deve manter seu cadastro e o perfil dos animais sempre atualizados. A desatualização de informações relevantes (especialmente condições de saúde do animal) que causem danos ao passeador ou a terceiros é de responsabilidade do Tutor.</p>
          </div>

          <div className="ov-legal-sec">
            <h2>3. Como funciona o agendamento</h2>
            <h3>3.1. Solicitação de passeio</h3>
            <p>O Tutor realiza a solicitação de passeio pelo aplicativo, informando: o animal, a modalidade desejada, a data, o horário e o endereço de coleta. A solicitação é encaminhada pela Plataforma para os passeadores disponíveis e verificados na região.</p>
            <h3>3.2. Modalidades disponíveis</h3>
            <p>As modalidades de passeio disponíveis (individual, compartilhado, duração, etc.) são apresentadas no aplicativo conforme a configuração da operação ativa. Modalidades e preços podem variar conforme a marca (tenant) sob a qual o Tutor utiliza a Plataforma.</p>
            <h3>3.3. Confirmação</h3>
            <p>O passeio é considerado confirmado após a aceitação pelo passeador e a confirmação do pagamento. O Tutor receberá notificação sobre o status do agendamento.</p>
            <h3>3.4. Acompanhamento</h3>
            <p>O Tutor pode acompanhar o passeio em tempo real pelo aplicativo, conforme as funcionalidades disponíveis na versão ativa da Plataforma.</p>
          </div>

          <div className="ov-legal-sec">
            <h2>4. Responsabilidades do Tutor</h2>
            <p>O Tutor é responsável por:</p>
            <ul>
              <li>Fornecer informações corretas e completas sobre o(s) animal(is), especialmente no que se refere a temperamento, histórico de saúde, vacinação e necessidades especiais.</li>
              <li>Disponibilizar o animal e todos os itens necessários (coleira, guia, medicações, etc.) no horário e local combinados para o início do passeio.</li>
              <li>Garantir que o animal esteja em condições adequadas de saúde para a realização do passeio.</li>
              <li>Tratar o passeador com respeito e urbanidade.</li>
              <li>Arcar integralmente com os valores devidos pelos serviços contratados.</li>
              <li>Comunicar imediatamente à Plataforma qualquer problema, incidente ou irregularidade de que tome conhecimento.</li>
            </ul>
          </div>

          <div className="ov-legal-sec">
            <h2>5. Pagamentos</h2>
            <h3>5.1. Processamento</h3>
            <p>Os pagamentos são processados por meio do provedor de pagamentos terceirizado integrado à Plataforma (atualmente Asaas). O Tutor autoriza o débito do valor do passeio no momento da confirmação do agendamento, conforme a modalidade de pagamento escolhida (PIX, boleto ou outros disponíveis).</p>
            <h3>5.2. Comissão da Plataforma</h3>
            <p>A Plataforma e/ou a empresa parceira (tenant) podem reter comissão sobre o valor do serviço, cuja alíquota é informada ao Tutor antes da conclusão do agendamento.</p>
            <h3>5.3. Gorjetas</h3>
            <p>Gorjetas são voluntárias e integralmente destinadas ao passeador. A C3X não retém qualquer valor a título de gorjeta.</p>
            <h3>5.4. Contestação de cobrança</h3>
            <p>Dúvidas ou contestações sobre cobranças devem ser encaminhadas ao e-mail contato@aumigaowalk.com.br no prazo de 30 dias após a data da transação.</p>
          </div>

          <div className="ov-legal-sec">
            <h2>★ Cláusula 6 — Cancelamentos e Reembolsos</h2>
            <p style={{ color: "var(--ov-text-2)", fontStyle: "italic", fontSize: ".9rem", marginTop: 8 }}>
              [ACEITE ESPECÍFICO] Esta cláusula limita direitos do Tutor e exige aceite destacado, conforme art. 54, §4º do CDC.
            </p>

            <h3>6.1. Cancelamento pelo Tutor</h3>
            <table>
              <thead>
                <tr>
                  <th>Antecedência do cancelamento</th>
                  <th>Consequência</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mais de 24 horas antes do horário agendado</td>
                  <td>Cancelamento gratuito, reembolso integral</td>
                </tr>
                <tr>
                  <td>Entre 12 e 24 horas antes</td>
                  <td>Cobrança de 50% do valor do passeio</td>
                </tr>
                <tr>
                  <td>Menos de 12 horas antes</td>
                  <td>Cobrança integral do valor do passeio</td>
                </tr>
                <tr>
                  <td>Não comparecimento sem aviso</td>
                  <td>Cobrança integral + possibilidade de suspensão temporária</td>
                </tr>
              </tbody>
            </table>

            <h3>6.2. Cancelamento pelo passeador ou falha operacional</h3>
            <p>Em caso de não comparecimento do passeador sem justificativa, ou de falha na prestação do serviço atribuível ao passeador ou à Plataforma, o Tutor terá direito a reembolso integral do valor pago, sem prejuízo do reagendamento sem custo adicional.</p>

            <h3>6.3. Reagendamento</h3>
            <p>O reagendamento solicitado com mais de 24 horas de antecedência é gratuito. Abaixo desse prazo, aplica-se a tabela de cancelamento acima.</p>

            <h3>6.4. Processamento do reembolso</h3>
            <p>Reembolsos devidos são processados pelo mesmo meio de pagamento utilizado, observados os prazos do provedor de pagamentos (Asaas): PIX em até 1 dia útil; demais modalidades em até 10 dias úteis.</p>

            <h3>6.5. Casos de força maior</h3>
            <p>Em situações de caso fortuito ou força maior devidamente comprovadas (emergências médicas, desastres naturais, etc.), a C3X pode, a seu critério, aplicar condições diferenciadas de cancelamento e reembolso.</p>

            <div className="ov-legal-aceite">
              [ ] LI E ACEITO OS TERMOS DE CANCELAMENTO E REEMBOLSO
            </div>
          </div>

          <div className="ov-legal-sec">
            <h2>7. Relacionamento com o passeador</h2>
            <h3>7.1. Intermediação</h3>
            <p>A C3X atua como intermediadora entre o Tutor e o passeador. O vínculo jurídico para a prestação do serviço de passeio se estabelece entre o Tutor e o passeador, sendo a C3X alheia à execução do serviço.</p>
            <h3>7.2. Avaliações</h3>
            <p>Após cada passeio, o Tutor poderá avaliar o passeador por meio da Plataforma. As avaliações devem ser honestas, objetivas e baseadas na experiência real. Avaliações falsas ou maliciosas são vedadas e podem resultar no encerramento da conta.</p>
            <h3>7.3. Contato direto</h3>
            <p>O compartilhamento de dados de contato pessoal entre Tutor e passeador fora dos canais da Plataforma é permitido, mas a C3X não se responsabiliza por combinações, acordos ou conflitos realizados fora do ambiente da Plataforma.</p>
          </div>

          <div className="ov-legal-sec">
            <h2>★ Cláusula 8 — Dados Pessoais e LGPD</h2>
            <p style={{ color: "var(--ov-text-2)", fontStyle: "italic", fontSize: ".9rem", marginTop: 8 }}>
              [ACEITE ESPECÍFICO] Esta cláusula descreve o tratamento de dados pessoais do Tutor e exige aceite destacado.
            </p>

            <h3>8.1. Dados coletados do Tutor</h3>
            <p>A C3X coleta os seguintes dados pessoais do Tutor: nome completo, e-mail, telefone, CPF, senha (cifrada), dados dos animais, endereço de coleta e dados de localização durante o passeio, dados de pagamento (processados pelo provedor Asaas), histórico de passeios, avaliações e registros de acesso.</p>

            <h3>8.2. Finalidades do tratamento</h3>
            <p>Os dados do Tutor são utilizados para: (i) viabilizar o agendamento, a execução e o acompanhamento dos passeios; (ii) processar pagamentos; (iii) prevenir fraudes e garantir a segurança; (iv) enviar comunicações operacionais sobre o serviço; (v) melhorar a Plataforma; (vi) cumprir obrigações legais. O envio de comunicações de marketing depende de consentimento separado.</p>

            <h3>8.3. Compartilhamento com o passeador</h3>
            <p>Os dados necessários à execução do passeio (nome, endereço de coleta, informações do animal) são compartilhados com o passeador designado. O Tutor está ciente e concorda com esse compartilhamento.</p>

            <h3>8.4. Transferência internacional</h3>
            <p>Parte do processamento ocorre em servidores nos Estados Unidos (Railway, US West), conforme previsto na <Link href="/privacidade">Política de Privacidade</Link> e nos arts. 33 a 36 da LGPD.</p>

            <h3>8.5. Direitos do titular</h3>
            <p>O Tutor pode, a qualquer tempo, solicitar acesso, correção, portabilidade, eliminação ou bloqueio de seus dados, bem como revogar consentimentos, pelo e-mail contato@aumigaowalk.com.br.</p>

            <h3>8.6. Retenção</h3>
            <p>Os dados são retidos enquanto a conta estiver ativa e, após o encerramento, pelos prazos legais aplicáveis (em regra, até 5 anos para registros de transações).</p>

            <div className="ov-legal-aceite">
              [ ] LI E ACEITO OS TERMOS DE TRATAMENTO DOS MEUS DADOS PESSOAIS
            </div>
          </div>

          <div className="ov-legal-sec">
            <h2>9. Limitações e isenções de responsabilidade da C3X</h2>
            <p><strong>A C3X NÃO é responsável:</strong></p>
            <ul>
              <li>Pela qualidade, segurança ou resultado da execução do passeio, que é de responsabilidade exclusiva do passeador.</li>
              <li>Por atos, omissões, danos ou lesões causados pelo passeador ao animal, ao Tutor ou a terceiros durante o passeio.</li>
              <li>Por informações incorretas fornecidas pelo Tutor sobre o animal que resultem em incidentes.</li>
              <li>Por eventos de caso fortuito ou força maior.</li>
              <li>Por indisponibilidade temporária da Plataforma.</li>
            </ul>
            <p>Na máxima extensão permitida pela lei aplicável, a C3X não responde por danos indiretos, lucros cessantes ou perda de oportunidade decorrentes do uso da Plataforma. Esta limitação não afasta responsabilidades que não possam ser excluídas pela lei.</p>
          </div>

          <div className="ov-legal-sec">
            <h2>10. Disposições finais</h2>
            <p>Estes Termos do Tutor integram, juntamente com os <Link href="/termos/gerais">Termos Gerais da Plataforma</Link> e a <Link href="/privacidade">Política de Privacidade</Link>, o contrato entre o Tutor e a C3X. Em caso de conflito, prevalece o Termo mais específico. Lei aplicável: Brasil. Foro: Salvador/BA, ressalvada competência legal do domicílio do consumidor.</p>
          </div>
        </article>

        <div className="ov-cta-row" style={{ justifyContent: "center", marginTop: 40 }}>
          <Link href="/termos" className="ov-btn ov-btn-ghost">
            ← Todos os documentos
          </Link>
        </div>
      </div>
    </section>
  );
}
