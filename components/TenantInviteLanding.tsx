"use client";

/**
 * TenantInviteLanding — componente client do convite de tenant.
 *
 * Exibe:
 *   - O código curto (slug) para entrada manual no app.
 *   - Botão "Abrir no app" que tenta o Universal Link (funciona se o app
 *     estiver instalado; caso contrário o browser ignora silenciosamente).
 *   - Links de download (TestFlight para iOS / Play Store quando disponível).
 *
 * Não usa serviço de deep link pago (Branch, Adjust, Firebase Dynamic Links):
 * v1 usa apenas o mecanismo nativo de Universal Links / App Links + fallback manual.
 */
import { useEffect } from "react";
import s from "./inner.module.css";

type Props = {
  slug: string;
};

// URL do Universal Link — mesmo esquema do app (scheme "aumigao" + rota /c/:slug).
// iOS/Android interceptam antes de chegar ao browser se o app estiver instalado.
const UNIVERSAL_BASE = "https://app.aumigao.com.br/c";

// Links de download do app. TestFlight para iOS (beta); Play Store quando publicado.
const IOS_DOWNLOAD = "https://testflight.apple.com/join/aumigao"; // substituir pelo link real quando publicar
const ANDROID_DOWNLOAD = null; // Google Play ainda não publicado (em breve)

export function TenantInviteLanding({ slug }: Props) {
  // Tenta abrir o app via Universal Link após montagem.
  // Navegadores modernos ignoram silenciosamente se o app não estiver instalado.
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = `${UNIVERSAL_BASE}/${encodeURIComponent(slug)}`;
    }, 800);
    return () => clearTimeout(timer);
  }, [slug]);

  return (
    <div>
      {/* Código de entrada — sempre visível como fallback manual */}
      <div className={s.meta} style={{ textAlign: "center" }}>
        <strong>Seu código de acesso</strong><br />
        <span style={{ fontSize: 28, fontWeight: 800, letterSpacing: "0.08em" }}>{slug}</span>
        <br />
        <small>Digite esse código na tela &ldquo;Entrar em um estabelecimento&rdquo; do app.</small>
      </div>

      {/* Como usar */}
      <div className={s.block} style={{ marginTop: 32 }}>
        <ol style={{ paddingLeft: "1.4em", display: "flex", flexDirection: "column", gap: 10, fontSize: 16, lineHeight: "1.6", color: "var(--ink2)" }}>
          <li>Baixe o app <strong>Aumigão</strong> no seu celular.</li>
          <li>Abra o app e faça login ou crie sua conta.</li>
          <li>Na tela <strong>Conta</strong>, toque em <em>Meus estabelecimentos</em>.</li>
          <li>Escolha <strong>Entrar em outro (QR/código)</strong> e digite o código acima.</li>
          <li>Pronto! Você já pode agendar passeios com este estabelecimento.</li>
        </ol>
      </div>

      {/* Botões de download */}
      <div className={s.btnRow} style={{ marginTop: 28, justifyContent: "center" }}>
        <a
          href={IOS_DOWNLOAD}
          target="_blank"
          rel="noopener noreferrer"
          className={`${s.btn} ${s.btnPrimary}`}
        >
          ▶ Baixar para iPhone (TestFlight)
        </a>
        {ANDROID_DOWNLOAD ? (
          <a
            href={ANDROID_DOWNLOAD}
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.btn} ${s.btnGhost}`}
          >
            ▶ Google Play
          </a>
        ) : (
          <span
            className={`${s.btn} ${s.btnGhost}`}
            style={{ opacity: 0.6, cursor: "default" }}
          >
            ▶ Google Play <small style={{ fontSize: 11 }}>(em breve)</small>
          </span>
        )}
      </div>
    </div>
  );
}
