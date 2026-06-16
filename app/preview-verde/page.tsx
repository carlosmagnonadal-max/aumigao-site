import type { Metadata } from "next";
import { EmpresaContent } from "@/components/EmpresaContent";

export const metadata: Metadata = {
  title: "Preview · /para-empresas em verde",
  robots: { index: false, follow: false },
};

/**
 * Preview interno (noindex) do /para-empresas com a cor-assinatura VERDE-confiança como acento.
 * O wrapper [data-verde] ativa a regra de globals.css que troca --accent de roxo para #1f7a5a
 * APENAS aqui. A produção (/para-empresas) segue em roxo até o veredito do Carlos.
 */
export default function PreviewVerdePage() {
  return (
    <div data-verde>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: "#1f7a5a",
          color: "#fff",
          textAlign: "center",
          fontSize: 13,
          fontWeight: 600,
          padding: "6px 12px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        PREVIEW DO VERDE — compare com /para-empresas (roxo). Esta página não vai pro ar.
      </div>
      <EmpresaContent />
    </div>
  );
}
