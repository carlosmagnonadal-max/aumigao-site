import type { NextConfig } from "next";

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
