import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: "Esta página não existe no Aumigão Walk.",
};

export default function NotFound() {
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
        Erro 404
      </p>

      {/* Título */}
      <h1
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
        Essa página sumiu no passeio 🐾
      </h1>

      {/* Descrição */}
      <p
        style={{
          fontSize: "1rem",
          color: "var(--ov-text-2)",
          lineHeight: 1.65,
          maxWidth: "400px",
          marginBottom: "40px",
        }}
      >
        O endereço que você acessou não existe ou foi movido. Que tal voltar para o início?
      </p>

      {/* CTA */}
      <Link
        href="/"
        style={{
          display: "inline-block",
          background: "linear-gradient(180deg, #FFA24D, #FF6A2B)",
          color: "#1B1320",
          fontWeight: 700,
          fontSize: "0.95rem",
          padding: "13px 28px",
          borderRadius: "12px",
          textDecoration: "none",
          boxShadow: "0 8px 24px -6px rgba(255,106,43,0.5)",
          transition: "opacity 0.15s",
        }}
      >
        Ir para o início →
      </Link>
    </div>
  );
}
