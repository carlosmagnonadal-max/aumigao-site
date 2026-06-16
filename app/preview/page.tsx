import type { Metadata } from "next";
import Link from "next/link";
import { AUDIENCES } from "@/lib/audiences";

export const metadata: Metadata = {
  title: "Preview · Hub + 3 sub-sites",
  robots: { index: false, follow: false },
};

const NOTE: Record<string, string> = {
  tutor: "Público antes órfão — página nova. Hero afetivo, prova de segurança, 4 passos e CTA duplo (Sim → app da marca / Não → indicar petshop).",
  passeador: "Renda recorrente (não bico), faixas de ganho ilustrativas, rede por convite, score com direito de revisão, FAQ.",
  empresa: "B2B que paga: planos visíveis (197/597/sob consulta), comissão por plano, 5 módulos, rollout e FAQ.",
};

export default function PreviewIndex() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--cream, #faf4e8)",
        color: "var(--ink, #2a2118)",
        padding: "clamp(32px, 8vw, 96px)",
        fontFamily: "var(--font-fraunces), Georgia, serif",
      }}
    >
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
        <p
          style={{
            textTransform: "uppercase",
            letterSpacing: ".18em",
            fontSize: 13,
            color: "var(--muted, #7a6e60)",
            margin: 0,
          }}
        >
          Preview interno · não indexado
        </p>
        <h1 style={{ fontSize: "clamp(32px, 6vw, 60px)", lineHeight: 1.05, margin: "12px 0 8px" }}>
          Hub + 3 sub-sites
        </h1>
        <p style={{ fontSize: 18, color: "var(--muted, #7a6e60)", maxWidth: 620, margin: "0 0 40px" }}>
          A home vira o hub e o site se divide em três espaços. Clique cada um para revisar. (O seletor
          de público no header e os links da home ainda não foram ligados — isso entra na próxima etapa.)
        </p>

        <div style={{ display: "grid", gap: 18 }}>
          {AUDIENCES.map((a) => (
            <Link
              key={a.key}
              href={a.route}
              data-aud={a.key}
              style={{
                display: "block",
                padding: "26px 28px",
                borderRadius: 18,
                background: "#fff",
                border: "1px solid rgba(0,0,0,.08)",
                borderLeft: `6px solid ${a.accent}`,
                textDecoration: "none",
                color: "inherit",
                boxShadow: "0 6px 24px rgba(0,0,0,.05)",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: ".14em",
                  color: a.accent,
                  fontWeight: 600,
                }}
              >
                {a.shortLabel} · {a.route}
              </span>
              <span style={{ display: "block", fontSize: 24, margin: "6px 0 8px" }}>{a.navLabel}</span>
              <span style={{ display: "block", fontSize: 16, color: "var(--muted, #7a6e60)", fontFamily: "system-ui, sans-serif" }}>
                {NOTE[a.key]}
              </span>
            </Link>
          ))}
        </div>

        <p style={{ marginTop: 40, fontSize: 14, color: "var(--muted, #7a6e60)", fontFamily: "system-ui, sans-serif" }}>
          Nota: a cor-assinatura do <strong>/para-empresas</strong> está em roxo temporário — o verde só
          entra após sua validação aqui no preview.
        </p>
      </div>
    </main>
  );
}
