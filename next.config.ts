import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: process.env.NEXT_DIST_DIR || ".next",
  async redirects() {
    return [
      // Páginas redundantes com a nova home (conteúdo coberto por "Por dentro da plataforma").
      { source: "/como-funciona", destination: "/#plataforma-por-dentro", permanent: true },
      { source: "/demo-white-label", destination: "/#plataforma-por-dentro", permanent: true },
    ];
  },
};

export default nextConfig;
