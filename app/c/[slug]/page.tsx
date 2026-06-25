/**
 * /c/[slug] — landing page de convite para o tenant (Modelo B).
 *
 * Este é o fallback do Universal Link / App Link para
 *   https://app.aumigao.com.br/c/:slug
 *
 * Quando o app está instalado, o SO intercepta o link antes de chegar aqui
 * e abre diretamente app/c/[slug].tsx. Esta página é exibida apenas quando:
 *   a) O usuário não tem o app instalado, ou
 *   b) O browser abre sem o app (ex.: compartilhamento por e-mail).
 *
 * Estratégia v1 (código deferred — sem serviço de deep link pago):
 *   - Exibe o código curto (slug) com instrução de digitá-lo no app.
 *   - Tenta abrir o Universal Link via JS (funciona se o app já estiver instalado).
 *   - Mostra links para baixar o app (TestFlight / Play Store quando disponível).
 *
 * Nota de deploy (PASSO 5):
 *   Para que os Universal Links / App Links funcionem, o domínio app.aumigao.com.br
 *   precisa servir:
 *     iOS:     https://app.aumigao.com.br/.well-known/apple-app-site-association
 *     Android: https://app.aumigao.com.br/.well-known/assetlinks.json
 *   Esses arquivos são hospedados no PASSO 5, não aqui.
 */
import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { TenantInviteLanding } from "@/components/TenantInviteLanding";
import s from "@/components/inner.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: `Convite — ${slug}`,
    description: "Baixe o app Aumigão e agende passeios com seu estabelecimento favorito.",
    robots: { index: false }, // página de convite: não indexar
  };
}

export default async function TenantInvitePage({ params }: Props) {
  const { slug } = await params;
  return (
    <InnerPage
      eyebrow="Convite de estabelecimento"
      title={<>Baixe e agende na <em>{slug}</em></>}
      lead="Você foi convidado a acessar os serviços de passeio de pet deste estabelecimento. Baixe o app e use o código abaixo para entrar."
      narrow
    >
      <TenantInviteLanding slug={slug} />

      {/* Já tem o app instalado? O Universal Link (https://app.aumigao.com.br/c/:slug)
          é tentado automaticamente pelo componente acima. Não usamos custom-scheme
          aqui porque "aumigao://" só funciona no build combinado; os apps reais
          do tutor e do walker usam "aumigaotutor://" e "aumigaowalker://" — e
          o site não sabe qual está instalado. O link universal cobre ambos. */}
    </InnerPage>
  );
}
