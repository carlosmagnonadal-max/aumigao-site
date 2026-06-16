import type { Metadata } from "next";
import Link from "next/link";
import { InnerPage } from "@/components/InnerPage";
import s from "@/components/inner.module.css";

export const metadata: Metadata = {
  title: "Termos do Passeador — Aumigão Walk",
  description:
    "Termos específicos para Passeadores no Aumigão Walk: natureza autônoma, responsabilidade pela execução, indenidade, suspensão e revisão.",
};

export default function TermosPasseadorPage() {
  return (
    <InnerPage
      narrow
      eyebrow="Termos"
      title="Termos do Passeador"
      lead={
        <>
          Regras para prestadores de serviço cadastrados na Plataforma.
          Complementa os{" "}
          <Link href="/termos/gerais">Termos Gerais da Plataforma</Link>.
        </>
      }
    >
      <article className={s.legal}>
        <div className={s.sec}>
          <p className={s.meta}>
            <strong>Empresa:</strong> C3X Intermediação e Agenciamento de Serviços e Negócios Ltda. &nbsp;·&nbsp;
            <strong>CNPJ:</strong> 49.617.734/0001-03 &nbsp;·&nbsp;
            <strong>Última atualização:</strong> 11 de junho de 2026
          </p>
          <p>
            ℹ <strong>Leia com atenção antes de aceitar.</strong> Este documento complementa os Termos Gerais da Plataforma. As cláusulas que estabelecem responsabilidades relevantes, limitam direitos ou criam obrigações significativas estão sinalizadas com{" "}
            <strong>[ACEITE ESPECÍFICO]</strong> e exigem confirmação destacada e individual no momento do cadastro.
          </p>
        </div>

        <div className={s.sec}>
          <h2>1. Quem é o Passeador</h2>
          <p>Passeador é a pessoa física maior de 18 anos que: (i) se cadastra e passa pelo processo de verificação da Plataforma; (ii) é aprovado pela C3X ou pela empresa parceira (tenant) para prestar serviços de passeio; e (iii) recebe e executa solicitações de passeio originadas por tutores através da Plataforma.</p>
        </div>

        <div className={s.sec}>
          <h2>2. Processo de cadastro e verificação (KYC)</h2>
          <h3>2.1. Etapas de verificação</h3>
          <p>O cadastro do Passeador passa pelas seguintes etapas, que podem variar conforme a empresa parceira operadora:</p>
          <ul>
            <li>Preenchimento de dados pessoais (nome, e-mail, CPF, telefone, data de nascimento).</li>
            <li>Envio de documento de identidade (RG ou CNH) e selfie para verificação de identidade.</li>
            <li>Envio de comprovante de residência.</li>
            <li>Aceite dos presentes Termos e dos Termos Gerais da Plataforma.</li>
            <li>Análise e aprovação pela equipe operacional da C3X ou da empresa parceira.</li>
          </ul>
          <h3>2.2. Critérios de aprovação</h3>
          <p>A aprovação do cadastro é critério exclusivo da C3X ou da empresa parceira e pode ser negada sem necessidade de justificativa, especialmente em casos de: (i) inconsistências ou falsidade nos documentos enviados; (ii) histórico de condutas inadequadas em outras plataformas; (iii) impedimentos legais. A reprovação não gera direito a indenização.</p>
          <h3>2.3. Atualização obrigatória de dados</h3>
          <p>O Passeador deve manter seus dados e documentos de verificação sempre atualizados. A desatualização que impacte a prestação do serviço pode ensejar a suspensão temporária do perfil até a regularização.</p>
        </div>

        <div className={s.sec}>
          <h2>★ Cláusula 3 — Natureza do Vínculo com a Plataforma</h2>
          <p>
            [ACEITE ESPECÍFICO] Esta cláusula define a natureza jurídica da relação entre o Passeador e a C3X. Leia com atenção.
          </p>

          <h3>3.1. Prestador autônomo e independente</h3>
          <p>O Passeador que utiliza a Plataforma atua como <strong>prestador de serviço autônomo e independente</strong>, sem qualquer vínculo empregatício, societário, de subordinação, de exclusividade ou de qualquer outra natureza com a C3X ou com as empresas parceiras (tenants).</p>

          <h3>3.2. Ausência de relação de emprego</h3>
          <p>Não decorrem do uso da Plataforma: (i) vínculo empregatício; (ii) obrigação de exclusividade; (iii) subordinação jurídica ou pessoal; (iv) controle de jornada; (v) direito a benefícios trabalhistas (férias, 13º salário, FGTS, etc.). O Passeador é livre para prestar serviços a outras plataformas ou por meios próprios simultaneamente.</p>

          <h3>3.3. Liberdade operacional</h3>
          <p>O Passeador define livremente seus próprios horários de disponibilidade, aceita ou recusa solicitações de passeio conforme sua conveniência, e utiliza seus próprios recursos e equipamentos para a prestação do serviço. A Plataforma fornece apenas ferramentas tecnológicas de intermediação.</p>

          <h3>3.4. Responsabilidade tributária e previdenciária</h3>
          <p>O Passeador é o único responsável pelo recolhimento de impostos, contribuições previdenciárias (INSS como autônomo ou MEI) e demais obrigações fiscais decorrentes de sua atividade. A C3X não efetua qualquer retenção ou recolhimento em nome do Passeador, salvo quando expressamente exigido por lei.</p>

          <p>
            <strong>[ ] LI E ACEITO A NATUREZA AUTÔNOMA DA MINHA RELAÇÃO COM A PLATAFORMA, RECONHECENDO A INEXISTÊNCIA DE VÍNCULO EMPREGATÍCIO</strong>
          </p>
        </div>

        <div className={s.sec}>
          <h2>4. Obrigações operacionais do Passeador</h2>
          <p>O Passeador compromete-se a:</p>
          <ul>
            <li>Prestar o serviço de passeio com diligência, cuidado, segurança e profissionalismo, respeitando o bem-estar animal e a legislação aplicável.</li>
            <li>Comparecer no local e horário combinados, devidamente identificado.</li>
            <li>Utilizar equipamentos adequados (coleira, guia, kit do passeador quando aplicável).</li>
            <li>Não deixar o animal sem supervisão durante o passeio.</li>
            <li>Não utilizar métodos aversivos, cruéis ou que causem sofrimento desnecessário ao animal.</li>
            <li>Comunicar imediatamente à Plataforma qualquer incidente ocorrido durante o passeio (fuga, acidente, agressão, problema de saúde, etc.) pelos canais disponíveis no aplicativo.</li>
            <li>Manter seu perfil, avaliações e histórico com honestidade e transparência.</li>
            <li>Não compartilhar dados dos tutores ou animais obtidos pela Plataforma para finalidades alheias à prestação do serviço.</li>
          </ul>
        </div>

        <div className={s.sec}>
          <h2>5. Ganhos, repasses e comissões</h2>
          <h3>5.1. Formação do valor</h3>
          <p>O valor do passeio é definido pela Plataforma ou pela empresa parceira (tenant) e apresentado ao Passeador antes da aceitação da solicitação.</p>
          <h3>5.2. Comissão da Plataforma</h3>
          <p>A C3X ou a empresa parceira retém comissão sobre o valor de cada passeio executado, cuja alíquota é informada no aplicativo. O Passeador recebe o valor líquido (valor bruto menos a comissão).</p>
          <h3>5.3. Repasses</h3>
          <p>Os repasses são realizados pelo provedor de pagamentos (Asaas) conforme o cronograma informado na Plataforma. Atrasos decorrentes de falhas do provedor de pagamentos ou de erros bancários não são de responsabilidade da C3X.</p>
          <h3>5.4. Gorjetas</h3>
          <p>Gorjetas pagas pelo Tutor são integralmente repassadas ao Passeador, sem retenção de comissão pela C3X.</p>
          <h3>5.5. Bloqueio de repasse por disputa</h3>
          <p>Em caso de ocorrência, reclamação ou investigação relacionada a um passeio, a C3X pode reter temporariamente o repasse referente àquele serviço até a conclusão da apuração. O Passeador será comunicado sobre o bloqueio e seu motivo.</p>
        </div>

        <div className={s.sec}>
          <h2>★ Cláusula 6 — Responsabilidade Exclusiva pela Execução do Passeio</h2>
          <p>
            [ACEITE ESPECÍFICO] Esta é uma cláusula central deste contrato. Leia integralmente antes de aceitar.
          </p>

          <h3>6.1. Responsabilidade exclusiva do Passeador</h3>
          <p>O Passeador é o <strong>único e exclusivo responsável</strong> pela execução do passeio e por todos os atos, omissões e consequências que dele decorram, incluindo, sem limitação: (i) lesões ou morte do animal durante o passeio; (ii) danos causados pelo animal a terceiros ou a bens de terceiros; (iii) acidentes envolvendo o Passeador ou o animal; (iv) furto, perda ou fuga do animal; (v) danos materiais ou morais causados ao Tutor ou a terceiros em razão da conduta do Passeador.</p>

          <h3>6.2. Responsabilidade por informações do Tutor</h3>
          <p>O Passeador deve verificar as informações do animal antes do início do passeio. Caso identifique sinais de doença, comportamento agressivo não informado ou condição que represente risco, deve comunicar o Tutor e, se necessário, recusar o serviço. A aceitação do passeio mesmo diante de sinais de risco visíveis implica assunção de responsabilidade pelo Passeador.</p>

          <h3>6.3. Cobertura de seguros</h3>
          <p>A C3X não mantém cobertura de seguro para os passeios realizados pelo Passeador. É recomendável que o Passeador contrate, por sua conta, seguro de responsabilidade civil que cubra danos causados a terceiros durante a prestação do serviço. A ausência de seguro é de responsabilidade exclusiva do Passeador.</p>

          <p>
            <strong>[ ] LI E ACEITO SER O ÚNICO RESPONSÁVEL PELA EXECUÇÃO DO PASSEIO E PELAS SUAS CONSEQUÊNCIAS</strong>
          </p>
        </div>

        <div className={s.sec}>
          <h2>★ Cláusula 7 — Indenidade (Hold-Harmless)</h2>
          <p>
            [ACEITE ESPECÍFICO] Esta cláusula estabelece obrigação de indenizar a C3X em certas situações. Leia com atenção.
          </p>

          <h3>7.1. Obrigação de indenidade</h3>
          <p>O Passeador obriga-se a <strong>manter a C3X livre e indene</strong> de toda e qualquer reclamação, perda, dano, despesa, condenação ou demanda — inclusive honorários advocatícios razoáveis e custas processuais — que a C3X venha a suportar de tutores, terceiros ou autoridades em decorrência de: (i) atos ou omissões do Passeador na execução dos passeios; (ii) violação pelo Passeador destes Termos ou da legislação aplicável; (iii) informações falsas fornecidas pelo Passeador no cadastro ou durante o uso da Plataforma; (iv) danos causados pelo animal sob guarda do Passeador.</p>

          <h3>7.2. Procedimento</h3>
          <p>Em caso de demanda contra a C3X que possa ativar esta cláusula, a C3X comunicará o Passeador assim que possível, dando-lhe a oportunidade de participar da defesa. O Passeador não poderá celebrar acordo em nome da C3X sem autorização prévia e por escrito.</p>

          <h3>7.3. Limites</h3>
          <p>Esta cláusula não se aplica a danos decorrentes de ato exclusivo da C3X, de terceiros alheios ao passeio, ou de caso fortuito ou força maior.</p>

          <p>
            <strong>[ ] LI E ACEITO A OBRIGAÇÃO DE MANTER A C3X INDENE DE RECLAMAÇÕES DECORRENTES DOS PASSEIOS QUE REALIZAR</strong>
          </p>
        </div>

        <div className={s.sec}>
          <h2>★ Cláusula 8 — Suspensão, Desativação e Direito de Revisão</h2>
          <p>
            [ACEITE ESPECÍFICO] Esta cláusula define os direitos do Passeador em caso de suspensão ou desativação do perfil, conforme o STJ (REsp 2.135.783/DF, 2024) e o art. 20 da LGPD.
          </p>

          <h3>8.1. Motivos de suspensão ou desativação</h3>
          <p>A C3X pode suspender temporariamente ou desativar definitivamente o perfil do Passeador nos seguintes casos:</p>
          <ul>
            <li>Violação dos presentes Termos ou dos Termos Gerais da Plataforma.</li>
            <li>Recebimento de reclamações graves ou recorrentes de tutores.</li>
            <li>Avaliações abaixo do mínimo operacional estabelecido pela Plataforma.</li>
            <li>Conduta que coloque em risco a segurança de animais, tutores ou terceiros.</li>
            <li>Fornecimento de informações falsas ou documentos fraudulentos.</li>
            <li>Inatividade prolongada sem justificativa.</li>
            <li>Prática de atos ilícitos ou fraudulentos.</li>
            <li>Determinação de autoridade competente.</li>
          </ul>

          <h3>8.2. Direito de informação</h3>
          <p>Conforme o entendimento do Superior Tribunal de Justiça (REsp 2.135.783/DF, 3ª Turma, junho de 2024) e o art. 20 da LGPD, <strong>o Passeador tem o direito de ser informado sobre o motivo da suspensão ou desativação de seu perfil</strong>, salvo quando a comunicação prejudicar investigação em curso ou quando exigida por autoridade competente.</p>
          <p>A comunicação será realizada pelo e-mail cadastrado no prazo de até 5 (cinco) dias úteis após a suspensão ou desativação, exceto nas exceções previstas acima.</p>

          <h3>8.3. Direito de revisão</h3>
          <p>O Passeador pode solicitar a revisão da decisão de suspensão ou desativação pelo e-mail contato@aumigaowalk.com.br no prazo de 15 (quinze) dias corridos a contar da comunicação. A C3X responderá no prazo de 10 (dez) dias úteis, podendo manter, rever ou reverter a decisão, com fundamentação.</p>

          <h3>8.4. Suspensão cautelar imediata</h3>
          <p>Nos casos de risco imediato e comprovado à segurança de animais, tutores ou terceiros, a C3X pode suspender o perfil de forma imediata e cautelar, comunicando o motivo ao Passeador tão logo a situação o permita.</p>

          <h3>8.5. Desativação definitiva</h3>
          <p>A desativação definitiva encerra o acesso do Passeador à Plataforma e aos seus dados de atividade. O Passeador receberá confirmação por e-mail e poderá solicitar cópia dos dados pessoais tratados nos termos da <Link href="/privacidade">Política de Privacidade</Link>.</p>

          <p>
            <strong>[ ] LI E ACEITO AS REGRAS DE SUSPENSÃO E DESATIVAÇÃO, RECONHECENDO MEU DIREITO DE SER INFORMADO DO MOTIVO E DE SOLICITAR REVISÃO DA DECISÃO</strong>
          </p>
        </div>

        <div className={s.sec}>
          <h2>★ Cláusula 9 — Dados Pessoais e LGPD</h2>
          <p>
            [ACEITE ESPECÍFICO] Esta cláusula descreve o tratamento dos dados pessoais do Passeador, incluindo dados sensíveis de verificação (KYC).
          </p>

          <h3>9.1. Dados coletados do Passeador</h3>
          <p>A C3X coleta os seguintes dados pessoais do Passeador: nome completo, e-mail, telefone, CPF, data de nascimento, endereço, senha (cifrada), documento de identidade (RG/CNH), selfie, comprovante de residência, histórico de passeios, avaliações recebidas, registros de acesso, localização durante os passeios e token de notificação push.</p>
          <p>Os documentos de identidade e selfie (dados de verificação/KYC) são armazenados em volume de disco nos servidores da Plataforma (Railway, conforme <Link href="/privacidade">Política de Privacidade</Link>) e utilizados exclusivamente para fins de verificação de identidade e prevenção a fraudes.</p>

          <h3>9.2. Finalidades do tratamento</h3>
          <p>Os dados do Passeador são utilizados para: (i) verificação de identidade e prevenção a fraudes (KYC); (ii) gerenciamento de perfil e atividades na Plataforma; (iii) processamento de repasses; (iv) avaliação de desempenho e gestão de qualidade; (v) comunicações operacionais; (vi) cumprimento de obrigações legais; (vii) decisões sobre suspensão e desativação (dados tratados com base no art. 20 da LGPD, com garantia do direito de revisão previsto na Cláusula 8).</p>

          <h3>9.3. Decisões automatizadas</h3>
          <p>A Plataforma pode utilizar métricas automatizadas (avaliações médias, taxa de cancelamento, frequência de ocorrências) para gerar alertas ou recomendar revisões de perfil. Conforme o art. 20 da LGPD, o Passeador tem direito de solicitar revisão humana de decisões significativas tomadas com base exclusivamente em tratamento automatizado de dados pessoais.</p>

          <h3>9.4. Retenção</h3>
          <p>Dados de cadastro e atividade são retidos enquanto o perfil estiver ativo. Documentos KYC são retidos pelo período necessário à prevenção a fraudes e ao cumprimento de obrigações legais, podendo estender-se por até 5 anos após o encerramento da relação.</p>

          <h3>9.5. Direitos do titular</h3>
          <p>O Passeador pode, a qualquer tempo, exercer os direitos previstos no art. 18 da LGPD (acesso, correção, eliminação, portabilidade, revogação de consentimento, revisão de decisão automatizada) pelo e-mail contato@aumigaowalk.com.br.</p>

          <p>
            <strong>[ ] LI E ACEITO OS TERMOS DE TRATAMENTO DOS MEUS DADOS PESSOAIS, INCLUINDO DADOS DE VERIFICAÇÃO DE IDENTIDADE (KYC) E DECISÕES BASEADAS EM DADOS</strong>
          </p>
        </div>

        <div className={s.sec}>
          <h2>10. Kit do Passeador</h2>
          <p>Conforme disponível na operação ativa, o Passeador pode receber ou ter acesso a um kit operacional (coleira, identificação, capa de chuva, etc.) para padronização e segurança na prestação do serviço. As condições de fornecimento, uso e devolução do kit são informadas pela C3X ou pela empresa parceira no momento da aprovação do cadastro.</p>
        </div>

        <div className={s.sec}>
          <h2>11. Disposições finais</h2>
          <p>Estes Termos do Passeador integram, juntamente com os <Link href="/termos/gerais">Termos Gerais da Plataforma</Link> e a <Link href="/privacidade">Política de Privacidade</Link>, o contrato entre o Passeador e a C3X. Em caso de conflito, prevalece o Termo mais específico. Lei aplicável: Brasil. Foro: Salvador/BA, ressalvada competência legal do domicílio do consumidor quando aplicável.</p>
        </div>
      </article>

      <div className={`${s.btnRow} ${s.btnRowCenter}`}>
        <Link href="/termos" className={`${s.btn} ${s.btnGhost}`}>← Todos os documentos</Link>
      </div>
    </InnerPage>
  );
}
