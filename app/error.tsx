"use client";

import { useEffect } from "react";
import Link from "next/link";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Registra o erro no console para debugging; sem vazar detalhes pro usuário
    console.error("[app/error]", error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "var(--ov-bg)",
        color: "var(--ov-text)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        textAlign: "center",
        fontFamily: "var(--ov-body)",
      }}
    >
      {/* Logo / marca */}
      <Link href="/" aria-label="Voltar para a página inicial">
        <span
          style={{
            fontFamily: "var(--font-logo), sans-serif",
            fontWeight: 800,
            fontSize: "1.6rem",
            color: "var(--ov-ember)",
            letterSpacing: "-0.01em",
            display: "inline-block",
            marginBottom: "40px",
          }}
        >
          Aumigão Walk
        </span>
      </Link>

      {/* Código de erro */}
      <p
        style={{
          fontFamily: "var(--ov-mono)",
          fontSize: "0.8rem",
          color: "var(--ov-text-3)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        Algo deu errado
      </p>

      {/* Título */}
      <h2
        style={{
          fontFamily: "var(--font-fraunces), serif",
          fontWeight: 500,
          fontSize: "clamp(1.8rem, 5vw, 2.8rem)",
          lineHeight: 1.15,
          color: "var(--ov-bone)",
          margin: "0 0 16px",
          maxWidth: "520px",
        }}
      >
        Tivemos um problema inesperado
      </h2>

      {/* Descrição */}
      <p
        style={{
          fontSize: "1rem",
          color: "var(--ov-text-2)",
          lineHeight: 1.65,
          maxWidth: "420px",
          marginBottom: "40px",
        }}
      >
        Nossa equipe já foi notificada. Você pode tentar novamente agora ou voltar para o início.
      </p>

      {/* Ações */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
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

        <Link
          href="/"
          style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.07)",
            color: "var(--ov-text-2)",
            fontWeight: 600,
            fontSize: "0.95rem",
            padding: "13px 28px",
            borderRadius: "12px",
            textDecoration: "none",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          Ir para o início
        </Link>
      </div>
    </div>
  );
}
