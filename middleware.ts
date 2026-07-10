import { NextRequest, NextResponse } from "next/server";

// sec-CSP — nonce-based CSP por request.
// Elimina 'unsafe-inline' e 'unsafe-eval' do script-src.
// Um nonce base64url de 128 bits é gerado a cada request, incluído no CSP via
// 'nonce-<value>' + 'strict-dynamic' (permite que scripts carregados pelo nonce
// propaguem confiança — necessário para o runtime/chunks do Next.js).
// O nonce é repassado ao layout via header interno x-nonce.
//
// style-src mantém 'unsafe-inline': Next.js, Tailwind, framer-motion e o AuWidget
// injetam estilos inline via JSX — não há nonce de stylesheet estável ainda.
// O ganho de segurança real está em script-src (vetor XSS); style-src inline é
// um risco menor e geralmente aceito em arquiteturas Next.js.
//
// connect-src inclui qrserver.com (QR codes gerados externamente nos sub-sites)
// e o ingest do Sentry (error tracking client-side).
// img-src inclui data:/blob:/https: para avatares, QR codes e imagens externas.

/** Gera um nonce criptograficamente aleatório (base64url, 16 bytes = 128 bits). */
function generateNonce(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return btoa(String.fromCharCode(...bytes))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

/** Monta o valor do header Content-Security-Policy com nonce. */
function buildCsp(nonce: string): string {
  // O runtime de DEV do Next (webpack HMR) chama eval() internamente. Sem
  // 'unsafe-eval', o CSP quebra a hidratação em `next dev` de forma
  // determinística (confirmado em e2e/formulario-contato.spec.ts e
  // e2e/helpers.ts) — o build de produção não usa eval() e não precisa disso.
  // Isolado ao ambiente de dev: nunca chega em produção.
  const scriptSrc =
    process.env.NODE_ENV === "development"
      ? `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' 'unsafe-eval'`
      : `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`;
  return [
    // 'none' = deny-by-default: tudo que não estiver explicitamente liberado abaixo
    // é bloqueado. Por isso enumeramos manifest/worker/media (antes pegavam carona
    // no fallback 'self'). Endurece o CSP (Observatory: "deny by default").
    "default-src 'none'",
    // 'strict-dynamic' permite que scripts autorizados pelo nonce carreguem outros
    // scripts (runtime/chunks do Next.js). 'self' é mantido como fallback para
    // browsers que não entendem strict-dynamic.
    scriptSrc,
    // style-src mantém 'unsafe-inline' (ver comentário no topo do arquivo).
    "style-src 'self' 'unsafe-inline'",
    "img-src 'self' data: blob: https:",
    "font-src 'self' data:",
    // connect-src: /api/chat + backend + qrserver (QR codes nos sub-sites) + Sentry ingest
    "connect-src 'self' https://api.aumigaowalk.com.br https://api.qrserver.com https://o4511710678417408.ingest.us.sentry.io",
    // Necessários explicitamente sob default-src 'none':
    "manifest-src 'self'", // webmanifest
    "worker-src 'self' blob:", // web workers do Next (blob:)
    "media-src 'self'", // áudio/vídeo
    "frame-src 'none'", // sem iframes
    "frame-ancestors 'none'",
    "base-uri 'self'",
    "form-action 'self' https://api.aumigaowalk.com.br",
    "object-src 'none'",
    // Sobe http->https em qualquer subrecurso acidental (anti mixed-content/downgrade).
    "upgrade-insecure-requests",
  ].join("; ");
}

export function middleware(req: NextRequest) {
  // Propagate or generate a requestId for end-to-end log correlation.
  // crypto.randomUUID() is Web Crypto API — Edge-safe.
  const requestId =
    req.headers.get("x-request-id") ?? crypto.randomUUID();

  const nonce = generateNonce();
  const csp = buildCsp(nonce);

  // Repassa o nonce, requestId ao layout via headers de request internos
  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set("x-request-id", requestId);
  // CRÍTICO: o Next.js lê o nonce do header Content-Security-Policy da REQUEST para
  // aplicá-lo automaticamente nos seus próprios <script> inline de bootstrap/streaming.
  // Sem isto, com 'strict-dynamic' + sem 'unsafe-inline', os scripts do Next são
  // bloqueados e a página não hidrata. (Padrão oficial do Next.js para CSP com nonce.)
  requestHeaders.set("Content-Security-Policy", csp);

  const res = NextResponse.next({ request: { headers: requestHeaders } });

  // Aplica o CSP no response (substitui o valor estático do next.config para todas as rotas)
  res.headers.set("Content-Security-Policy", csp);
  // Expose requestId to client for correlation (non-sensitive)
  res.headers.set("x-request-id", requestId);

  return res;
}

export const config = {
  // Aplica a todas as rotas exceto: internals do Next, assets estáticos e API.
  // A rota /api/chat não precisa de CSP (é JSON puro, sem HTML).
  // Os outros headers de segurança (HSTS, X-Frame-Options, etc.) continuam sendo
  // aplicados pelo next.config.ts para todas as rotas.
  matcher: [
    "/((?!api|_next/static|_next/image|favicon|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|txt|webmanifest)$).*)",
  ],
};
