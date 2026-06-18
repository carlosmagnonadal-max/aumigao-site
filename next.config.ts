import type { NextConfig } from "next";

// ─── A3: Headers de segurança ────────────────────────────────────────────────
// CSP usa 'unsafe-inline'/'unsafe-eval' no script-src porque o Next.js injeta
// runtime inline sem nonce; manter permissivo aqui é o mesmo padrão do admin-web.
// connect-src: 'self' para /api/chat + https://api.anthropic.com (SDK chama direto
// do servidor, mas incluso por precaução) + https://api.aumigaowalk.com.br para o
// formulário de contato. img-src: data: e https: para avatares e imagens externas.
// TODO (pós-lançamento): migrar script-src para nonce/hash quando Next suportar
// nonce via middleware estável, removendo 'unsafe-inline'/'unsafe-eval'.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://api.aumigaowalk.com.br https://api.anthropic.com",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self' https://api.aumigaowalk.com.br",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: CSP },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Páginas redundantes com a nova home (conteúdo coberto por "Por dentro da plataforma").
      { source: "/como-funciona", destination: "/#plataforma-por-dentro", permanent: true },
      { source: "/demo-white-label", destination: "/#plataforma-por-dentro", permanent: true },
    ];
  },
};

export default nextConfig;
