"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./inner.module.css";

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

  if (state === "loading") {
    return (
      <ReferralShell>
        <p className={s.lead} style={{ textAlign: "center", marginInline: "auto" }}>Carregando…</p>
      </ReferralShell>
    );
  }
  if (state === "invalid") {
    return (
      <ReferralShell>
        <div className={s.heroCenter}>
          <h1 className={s.h1} style={{ fontSize: "clamp(26px,4.5vw,42px)" }}>Convite indisponível</h1>
          <p className={s.lead}>Esse código de convite não é válido ou expirou.</p>
          <div className={`${s.btnRow} ${s.btnRowCenter}`}>
            <Cta />
          </div>
        </div>
      </ReferralShell>
    );
  }

  return (
    <ReferralShell>
      <div className={s.heroCenter}>
        <p className={s.eyebrow}><i />Convite de passeador</p>
        <h1 className={s.h1} style={{ fontSize: "clamp(28px,4.5vw,46px)" }}>
          Você foi convidado para ser <em>passeador</em> na Aumigão
        </h1>
        {data?.city ? (
          <p className={s.lead}>
            Região: {data.city}{data.neighborhood ? ` — ${data.neighborhood}` : ""}
          </p>
        ) : null}
        <p className={s.lead}>Baixe o app, cadastre-se como passeador e use o código abaixo:</p>
      </div>

      {/* Código de convite em destaque — tokens da marca */}
      <div
        style={{
          maxWidth: 420,
          margin: "clamp(24px,4vh,36px) auto",
          padding: "clamp(18px,3vw,28px) clamp(22px,4vw,36px)",
          background: "#fffdf8",
          border: "2px dashed var(--tang)",
          borderRadius: 18,
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "block",
            fontFamily: "var(--font-fraunces), serif",
            fontWeight: 600,
            fontSize: "clamp(28px,5vw,42px)",
            letterSpacing: "0.08em",
            color: "var(--tang)",
            lineHeight: 1.1,
          }}
        >
          {code}
        </span>
        <small style={{ display: "block", marginTop: 8, fontSize: 13, color: "var(--muted)" }}>
          Digite esse código ao se cadastrar como passeador no app.
        </small>
      </div>

      <div className={`${s.btnRow} ${s.btnRowCenter}`} style={{ marginTop: 0 }}>
        <Cta />
      </div>
    </ReferralShell>
  );
}

/** Shell editorial claro com header da marca (padrão das páginas internas). */
function ReferralShell({ children }: { children: React.ReactNode }) {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <div className={s.headInner}>
          <Link href="/" className={s.brand}>
            <Image src="/icon-rounded-512.png" alt="" width={34} height={34} className={s.brandMark} />
            <span>Aumigão Walk</span>
          </Link>
        </div>
      </header>
      <div className={s.mainNarrow}>
        <div className={s.hero}>{children}</div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <Link href="/seja-passeador" className={`${s.btn} ${s.btnPrimary}`}>
      Baixe o app e cadastre-se
    </Link>
  );
}
