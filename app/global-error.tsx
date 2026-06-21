"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

// global-error envolve o root layout inteiro — precisa fornecer <html> e <body>
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("[app/global-error]", error);
  }, [error]);

  return (
    <html lang="pt-BR">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          background: "#140f1b",
          color: "#f6f1f8",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 24px",
          textAlign: "center",
          fontFamily: "system-ui, sans-serif",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {/* Marca em texto puro — sem depender das font-vars do layout */}
        <span
          style={{
            fontWeight: 800,
            fontSize: "1.6rem",
            color: "#ff6a2b",
            letterSpacing: "-0.01em",
            display: "inline-block",
            marginBottom: "40px",
          }}
        >
          Aumigão Walk
        </span>

        <p
          style={{
            fontSize: "0.8rem",
            color: "rgba(246,241,248,0.46)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "12px",
            margin: "0 0 12px",
          }}
        >
          Erro crítico
        </p>

        <h1
          style={{
            fontWeight: 500,
            fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
            lineHeight: 1.15,
            color: "#f2eadc",
            margin: "0 0 16px",
            maxWidth: "520px",
          }}
        >
          O site encontrou um problema grave
        </h1>

        <p
          style={{
            fontSize: "1rem",
            color: "rgba(246,241,248,0.72)",
            lineHeight: 1.65,
            maxWidth: "420px",
            marginBottom: "40px",
          }}
        >
          Tente recarregar a página. Se o problema persistir, entre em contato pelo WhatsApp ou e-mail no rodapé.
        </p>

        <button
          onClick={reset}
          style={{
            display: "inline-block",
            background: "linear-gradient(180deg, #FFA24D, #FF6A2B)",
            color: "#1B1320",
            fontWeight: 700,
            fontSize: "0.95rem",
            padding: "13px 28px",
            borderRadius: "12px",
            border: "none",
            cursor: "pointer",
            boxShadow: "0 8px 24px -6px rgba(255,106,43,0.5)",
          }}
        >
          Tentar novamente
        </button>
      </body>
    </html>
  );
}
