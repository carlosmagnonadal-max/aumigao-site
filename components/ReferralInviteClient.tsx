"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.aumigaowalk.com.br";

type ValidateResp = {
  valid: boolean;
  referred_name?: string | null;
  city?: string | null;
  neighborhood?: string | null;
};

type UiState = "loading" | "valid" | "invalid";

export function ReferralInviteClient({ code }: { code: string }) {
  const [state, setState] = useState<UiState>("loading");
  const [data, setData] = useState<ValidateResp | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(`${API_URL}/api/referrals/walkers/validate-code`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ referral_code: code }),
        });
        if (!alive) return;
        if (!res.ok) { setState("invalid"); return; }
        const body: ValidateResp = await res.json();
        setData(body);
        setState(body.valid ? "valid" : "invalid");
      } catch {
        if (alive) setState("invalid");
      }
    })();
    return () => { alive = false; };
  }, [code]);

  if (state === "loading") return <Centered>Carregando…</Centered>;
  if (state === "invalid") {
    return (
      <Centered>
        <h1>Convite indisponível</h1>
        <p>Esse código de convite não é válido ou expirou.</p>
        <Cta />
      </Centered>
    );
  }

  return (
    <main style={{ maxWidth: 560, margin: "0 auto", padding: 24, textAlign: "center" }}>
      <h1 style={{ fontSize: 24 }}>🐾 Você foi convidado para ser passeador na Aumigão</h1>
      {data?.city ? (
        <p style={{ color: "#555" }}>Região: {data.city}{data.neighborhood ? ` — ${data.neighborhood}` : ""}</p>
      ) : null}
      <p>Baixe o app, cadastre-se como passeador e use o código abaixo:</p>
      <div style={{
        fontSize: 22, fontWeight: 700, letterSpacing: 1, background: "#fff7ed",
        border: "2px dashed #f97316", borderRadius: 12, padding: "12px 16px", margin: "16px 0",
        color: "#9a3412",
      }}>
        {code}
      </div>
      <Cta />
    </main>
  );
}

function Cta() {
  return (
    <a href="/seja-passeador" style={{
      display: "inline-block", background: "#f97316", color: "#fff",
      padding: "12px 20px", borderRadius: 10, textDecoration: "none", fontWeight: 600, marginTop: 12,
    }}>
      Baixe o app e cadastre-se
    </a>
  );
}

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ minHeight: "60vh", display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
      <div>{children}</div>
    </main>
  );
}
