import type { Metadata } from "next";
import Link from "next/link";
import { InnerPage } from "@/components/InnerPage";
import s from "@/components/inner.module.css";

export const metadata: Metadata = {
  title: "Termos Gerais da Plataforma — Aumigão Walk",
  description:
    "Termos Gerais da Plataforma Aumigão Walk — regras aplicáveis a todos os usuários: Tutores, Passeadores e Empresas Parceiras.",
};

export default function TermosGeraisPage() {
  return (
    <InnerPage
      narrow
      eyebrow="Termos"
      title="Termos Gerais da Plataforma"
      lead="Regras gerais aplicáveis a todos os usuários da Plataforma. Cada perfil de usuário está sujeito adicionalmente ao seu Termo Específico."
    >
      <article className={s.legal}>
        <p className={s.meta}>
          <strong>Empresa:</strong> C3X Intermediação e Agenciamento de Serviços e Negócios Ltda. &nbsp;·&nbsp;
          <strong>CNPJ:</strong> 49.617.734/0001-03 &nbsp;·&nbsp;
          <strong>Última atualização:</strong> 11 de junho de 2026
        </p>

        <div className={s.sec}>
          <h2>1. Definições</h2>
          <ul>
            <li><strong>Plataforma / Aumigão Walk:</strong> o conjunto de aplicativos, site institucional, painéis administrativos e serviços de tecnologia desenvolvidos e operados pela C3X, que conectam tutores a passeadores de cães.</li>
            <li><strong>Tutor:</strong> pessoa física maior de 18 anos que utiliza a Plataforma para contratar passeios para seu(s) animal(is) de estimação.</li>
            <li><strong>Passeador:</strong> prestador de serviço independente, cadastrado, verificado e aprovado pela Plataforma, que realiza os passeios contratados pelos tutores.</li>
            <li><strong>Empresa Parceira / Tenant:</strong> pessoa jurídica que licencia a infraestrutura da Plataforma para operar sob sua própria marca (modelo White Label), nos termos do Contrato White Label.</li>
            <li><strong>Usuário:</strong> qualquer pessoa — tutor, passeador ou representante de empresa parceira — que acesse ou utilize a Plataforma.</li>
            <li><strong>Conta:</strong> o perfil individual de cada Usuário, criado mediante cadastro, por meio do qual ele acessa as funcionalidades da Plataforma.</li>
            <li><strong>Conteúdo do Usuário:</strong> textos, imagens, avaliações, comentários e demais materiais inseridos pelo Usuário na Plataforma.</li>
            <li><strong>C3X:</strong> C3X Intermediação e Agenciamento de Serviços e Negócios Ltda., operadora da Plataforma.</li>
          </ul>
        </div>

        <div className={s.sec}>
          <h2>2. Natureza do serviço</h2>
          <h3>2.1. Intermediação tecnológica</h3>
          <p>A Aumigão Walk é uma plataforma de intermediação tecnológica que conecta tutores e passeadores, atuando como agente nos termos do art. 710 do Código Civil. A C3X disponibiliza ferramentas de agendamento, comunicação, acompanhamento e pagamento, mas <strong>não presta, não executa, não supervisiona nem fiscaliza</strong> o serviço de passeio.</p>
          <h3>2.2. Autonomia do passeador</h3>
          <p>Os passeadores que utilizam a Plataforma atuam como prestadores de serviço independentes e autônomos, <strong>sem vínculo empregatício, societário, de subordinação, de exclusividade ou de qualquer outra natureza</strong> com a C3X ou com as empresas parceiras. Eles atuam por conta própria, com seus próprios recursos, e o mero uso da Plataforma não estabelece relação de emprego.</p>
          <h3>2.3. Modelo White Label</h3>
          <p>No modelo White Label, a empresa parceira (tenant) opera a Plataforma sob sua própria marca, podendo ser responsável pela operação local, configuração comercial e gestão da rede de passeadores em seu território. As obrigações específicas desse modelo estão previstas no Contrato White Label.</p>
        </div>

        <div className={s.sec}>
          <h2>3. Aceitação dos Termos</h2>
          <p>O acesso e o uso da Plataforma implicam a aceitação integral destes Termos Gerais e, conforme o perfil do Usuário, do Termo Específico correspondente (Tutor, Passeador ou Empresa Parceira). Caso o Usuário não concorde com qualquer disposição, deve abster-se de utilizar a Plataforma.</p>
          <p>Estes Termos constituem contrato de adesão nos termos do art. 54 do Código de Defesa do Consumidor. As cláusulas que limitam direitos do Usuário estão redigidas com destaque, conforme exige o art. 54, §4º do CDC.</p>
        </div>

        <div className={s.sec}>
          <h2>4. Cadastro e elegibilidade</h2>
          <ul>
            <li>Ser maior de 18 anos e plenamente capaz.</li>
            <li>Fornecer informações verídicas, completas e atualizadas no momento do cadastro e durante toda a utilização da Plataforma.</li>
            <li>Não ter sido previamente suspenso ou banido da Plataforma.</li>
            <li>As credenciais de acesso (e-mail e senha) são pessoais e intransferíveis. O Usuário é o único responsável pela confidencialidade de sua senha e por todas as ações realizadas em sua conta. Em caso de uso não autorizado, comunicar imediatamente a C3X pelo e-mail contato@aumigaowalk.com.br.</li>
          </ul>
          <p>A C3X poderá suspender ou encerrar a conta de Usuário que fornecer informações falsas, incompletas ou desatualizadas, sem prejuízo das medidas legais cabíveis.</p>
        </div>

        <div className={s.sec}>
          <h2>5. Conduta proibida</h2>
          <p>É vedado a qualquer Usuário da Plataforma:</p>
          <ul>
            <li>Usar a Plataforma para fins ilícitos, fraudulentos ou que violem direitos de terceiros.</li>
            <li>Contornar a Plataforma para combinar pagamentos diretamente entre tutor e passeador, quando vedado pelas regras vigentes.</li>
            <li>Inserir conteúdo ofensivo, discriminatório, falso, difamatório ou que viole a propriedade intelectual de terceiros.</li>
            <li>Tentar acessar áreas, dados ou sistemas sem autorização.</li>
            <li>Utilizar meios automatizados (bots, scrapers, crawlers) para acessar ou coletar dados da Plataforma sem autorização expressa da C3X.</li>
            <li>Praticar qualquer ato que comprometa a segurança, a integridade ou a disponibilidade da Plataforma.</li>
            <li>Criar múltiplas contas para contornar suspensões ou restrições aplicadas.</li>
          </ul>
        </div>

        <div className={s.sec}>
          <h2>6. Avaliações e conteúdo do usuário</h2>
          <p>O Usuário é integralmente responsável pelo Conteúdo do Usuário que insere na Plataforma, incluindo avaliações, fotos e comentários. A inserção de conteúdo falso, ofensivo ou que viole direitos de terceiros é vedada e pode ensejar suspensão ou encerramento da conta, além de responsabilidade civil e criminal.</p>
          <p>Ao inserir Conteúdo do Usuário na Plataforma, o Usuário concede à C3X licença não exclusiva, gratuita, transferível e sublicenciável para exibir, reproduzir e utilizar esse conteúdo exclusivamente no contexto da operação da Plataforma e de suas comunicações institucionais, pelo prazo de vigência destes Termos.</p>
          <p>A C3X reserva-se o direito de remover, sem aviso prévio, Conteúdo do Usuário que viole estes Termos, a legislação aplicável ou os padrões de comunidade da Plataforma.</p>
        </div>

        <div className={s.sec}>
          <h2>7. Propriedade intelectual</h2>
          <p>A marca Aumigão Walk, os logotipos, o software, o design, as interfaces, os textos e os demais elementos da Plataforma são de titularidade da C3X ou licenciados a ela, e estão protegidos pela legislação brasileira de propriedade intelectual. É vedada a cópia, reprodução, modificação, distribuição ou utilização desses elementos sem autorização prévia e expressa da C3X.</p>
          <p>No modelo White Label, a empresa parceira mantém a titularidade sobre sua própria marca, sendo a licença de uso da infraestrutura da Plataforma regida pelo Contrato White Label.</p>
        </div>

        <div className={s.sec}>
          <h2>8. Disponibilidade da Plataforma</h2>
          <p>A C3X empreende esforços razoáveis para manter a Plataforma disponível de forma contínua, mas não garante disponibilidade ininterrupta ou isenta de falhas. A Plataforma pode ser temporariamente indisponível em razão de manutenções programadas, emergências técnicas, eventos de força maior ou caso fortuito. A C3X não responde por danos decorrentes de indisponibilidade temporária.</p>
        </div>

        <div className={s.sec}>
          <h2>9. Privacidade e proteção de dados</h2>
          <p>O tratamento de dados pessoais dos Usuários é regido pela <Link href="/privacidade">Política de Privacidade</Link> da Plataforma, parte integrante destes Termos, em conformidade com a Lei nº 13.709/2018 (LGPD). O Usuário declara ter lido e aceito a Política de Privacidade.</p>
        </div>

        <div className={s.sec}>
          <h2>10. Suspensão e encerramento de conta</h2>
          <p>A C3X poderá suspender ou encerrar a conta de qualquer Usuário, com ou sem aviso prévio, nos seguintes casos: (i) violação destes Termos ou do Termo Específico aplicável; (ii) conduta que coloque em risco a segurança de pessoas, animais ou da Plataforma; (iii) fornecimento de informações falsas; (iv) prática de atos fraudulentos ou ilícitos; (v) inatividade prolongada da conta.</p>
          <p>O Usuário pode encerrar sua conta a qualquer momento, pelo aplicativo ou por solicitação ao e-mail contato@aumigaowalk.com.br. O encerramento não afeta obrigações já constituídas nem o tratamento de dados que a C3X deva manter por obrigação legal.</p>
          <p>Conforme entendimento do Superior Tribunal de Justiça (REsp 2.135.783/DF, 2024) e o art. 20 da LGPD, o passeador tem direito de ser informado sobre a razão da suspensão ou desativação de seu perfil e de solicitar revisão dessa decisão. Os mecanismos específicos estão previstos nos <Link href="/termos/passeador">Termos do Passeador</Link>.</p>
        </div>

        <div className={s.sec}>
          <h2>11. Alterações dos Termos</h2>
          <p>A C3X pode atualizar estes Termos a qualquer tempo. Alterações relevantes serão comunicadas pelos canais oficiais da Plataforma (e-mail cadastrado ou notificação no aplicativo) com antecedência mínima razoável. O uso continuado da Plataforma após a entrada em vigor das alterações implica aceitação do novo texto. Caso o Usuário não concorde com as alterações, deve encerrar sua conta antes da data de vigência.</p>
        </div>

        <div className={s.sec}>
          <h2>12. Lei aplicável e foro</h2>
          <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de Salvador/BA para dirimir quaisquer disputas decorrentes destes Termos, salvo competência legal diversa, em especial a do domicílio do consumidor nos termos do Código de Defesa do Consumidor.</p>
        </div>

        <div className={s.sec}>
          <h2>13. Contato e Encarregado de Dados (DPO)</h2>
          <p>Dúvidas, reclamações e exercício de direitos: <strong>contato@aumigaowalk.com.br</strong></p>
          <p><strong>Encarregado pelo tratamento de dados (DPO):</strong> Carlos Magno Nadal Sant&apos;Ana Sobrinho</p>
          <p>Operadora: C3X Intermediação e Agenciamento de Serviços e Negócios Ltda. — CNPJ 49.617.734/0001-03 — Rua Doutor José Peroba, nº 297, Sala 1105, STIEP, Salvador/BA, CEP 41.770-235.</p>
        </div>
      </article>

      <div className={`${s.btnRow} ${s.btnRowCenter}`}>
        <Link href="/termos" className={`${s.btn} ${s.btnGhost}`}>← Todos os documentos</Link>
        <Link href="/privacidade" className={`${s.btn} ${s.btnPrimary}`}>Política de Privacidade →</Link>
      </div>
    </InnerPage>
  );
}
