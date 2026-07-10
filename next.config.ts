import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

// ─── A3: Headers de segurança ────────────────────────────────────────────────
// Content-Security-Policy NÃO está aqui — é gerada por request no middleware.ts
// com nonce por request (elimina 'unsafe-inline'/'unsafe-eval' do script-src).
// Os demais headers de segurança continuam aplicados aqui para todas as rotas,
// inclusive as que o middleware não cobre (assets estáticos, /api/*).
const securityHeaders = [
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false, // remove o header X-Powered-By: Next.js (reduz fingerprinting)
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      // ── Deep Link verification files (PASSO 5) ──────────────────────────────
      // iOS Universal Links: AASA precisa de Content-Type: application/json
      // SEM redirect (301/302 invalida a verificação do OS).
      // Android App Links: assetlinks.json também precisa de application/json.
      // O middleware.ts não cobre assets estáticos (ver matcher), então o header
      // deve vir aqui (next.config.ts headers).
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          { key: "Content-Type", value: "application/json" },
        ],
      },
      {
        source: "/.well-known/assetlinks.json",
        headers: [
          { key: "Content-Type", value: "application/json" },
        ],
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

// withSentryConfig: apenas o necessário para o SDK funcionar em runtime
// (instrumentação automática de route handlers, tree-shaking de logs).
// SEM upload de source maps (não há SENTRY_AUTH_TOKEN configurado) — por
// isso omitimos org/project e desativamos sourcemaps/upload explicitamente.
export default withSentryConfig(nextConfig, {
  silent: true,
  sourcemaps: {
    disable: true,
  },
  telemetry: false,
  webpack: {
    treeshake: {
      removeDebugLogging: true,
    },
  },
});
