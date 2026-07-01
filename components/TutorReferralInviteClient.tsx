"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.aumigaowalk.com.br";

type ValidateResp = {
  tenant_id: string;
  tenant_name?: string | null;
  tenant_slug?: string | null;
  referrer_first_name?: string | null;
};

type UiState = "loading" | "valid" | "invalid";

export function TutorReferralInviteClient({ code }: { code: string }) {
  const [state, setState] = useState<UiState>("loading");
  const [data, setData] = useState<ValidateResp | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(`${API_URL}/api/referrals/tutors/validate-code`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });
        if (!alive) return;
        if (!res.ok) { setState("invalid"); return; }
        const body: ValidateResp = await res.json();
        setData(body);
        setState("valid");
      } catch {
        if (alive) setState("invalid");
      }
    })();
    return () => { alive = false; };
  }, [code]);

  if (state === "loading") return <Centered>Carregando convite…</Centered>;
  if (state === "invalid") {
    return (
      <Centered>
        <h1>Convite inválido</h1>
        <p>Este link de convite não é válido ou expirou.</p>
        <CtaTutor />
      </Centered>
    );
  }

  const who = data?.referrer_first_name ? `${data.referrer_first_name} te convidou` : "Você foi convidado";
  const where = data?.tenant_name ? ` para ${data.tenant_name}` : "";

  return (
    <main style={{ maxWidth: 560, margin: "0 auto", padding: 24, textAlign: "center" }}>
      <h1 style={{ fontSize: 24 }}>🐾 {who}{where}</h1>
      <p>Baixe o app e agende os passeios do seu pet. Ao entrar, você e quem te convidou ganham uma recompensa.</p>
      <CtaTutor />
    </main>
  );
}

function CtaTutor() {
  return (
    <a href="https://app.aumigaowalk.com.br" style={{
      display: "inline-block", background: "#111827", color: "#fff",
      padding: "12px 20px", borderRadius: 10, textDecoration: "none", fontWeight: 600, marginTop: 12,
    }}>
      Baixe o app e entre
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
