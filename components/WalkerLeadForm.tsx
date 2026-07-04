"use client";

import { useState, useEffect } from "react";
import s from "./editorial-home.module.css";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.aumigaowalk.com.br";

type Status = "idle" | "sending" | "sent" | "error";

/** Máscara de WhatsApp BR: (XX) XXXXX-XXXX */
function maskPhone(raw: string): string {
  const digits = raw.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits.length ? `(${digits}` : "";
  if (digits.length <= 7)
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

/** Valida número de telefone BR (10 ou 11 dígitos). */
function isValidPhone(raw: string): boolean {
  const d = raw.replace(/\D/g, "");
  return d.length >= 10 && d.length <= 11;
}

interface Props {
  indicationId?: string;
  tenantSlug?: string;
}

export function WalkerLeadForm({ indicationId, tenantSlug }: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  // prevent resubmit across pages if already sent
  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("wl_sent")) {
      setStatus("sent");
    }
  }, []);

  function handlePhone(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(maskPhone(e.target.value));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // honeypot — silently succeed for bots
    if (honeypot) {
      setStatus("sent");
      return;
    }

    if (!name.trim() || name.length > 200) {
      setError("Nome completo é obrigatório (máx. 200 caracteres).");
      setStatus("error");
      return;
    }
    if (!isValidPhone(phone)) {
      setError("WhatsApp inválido — informe DDD + número (ex: (71) 99999-9999).");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

    const controller = new AbortController();
    const tid = setTimeout(() => controller.abort(), 15_000);

    try {
      const body: Record<string, string> = {
        name: name.trim(),
        phone: phone.replace(/\D/g, ""),
      };
      if (city.trim()) body.city = city.trim();
      if (indicationId) body.indication_id = indicationId;
      if (tenantSlug) body.tenant_slug = tenantSlug;

      const res = await fetch(`${API_URL}/api/public/walker-leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      clearTimeout(tid);

      if (!res.ok) {
        const d = (await res.json().catch(() => null)) as { detail?: string } | null;
        throw new Error(d?.detail || "Não foi possível enviar agora.");
      }

      sessionStorage.setItem("wl_sent", "1");
      setStatus("sent");
    } catch (err) {
      clearTimeout(tid);
      if (err instanceof Error && err.name === "AbortError") {
        setStatus("error");
        setError("O servidor demorou demais. Tente novamente em instantes.");
      } else {
        setStatus("error");
        setError(err instanceof Error ? err.message : "Falha no envio.");
      }
    }
  }

  if (status === "sent") {
    return (
      <div className={s.form}>
        <div className={s.fok}>
          <div className={s.fokH}>Recebemos seu interesse!</div>
          <p className={s.fokP}>
            Vamos te chamar no WhatsApp em breve. Enquanto isso, baixe o app
            Aumigão Walk e comece a explorar.
          </p>
          <a
            href="https://onelink.to/aumigao"
            target="_blank"
            rel="noopener noreferrer"
            className={s.btn}
            style={{ marginTop: 20, display: "inline-flex" }}
          >
            Baixar o app Walk →
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className={s.form} onSubmit={handleSubmit} noValidate>
      {/* honeypot — oculto para humanos */}
      <input
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      />

      <div className={s.fgrid}>
        <label className={`${s.field} ${s.fieldFull}`}>
          <span>Nome completo *</span>
          <input
            required
            className={s.finput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome completo"
            maxLength={200}
            autoComplete="name"
          />
        </label>

        <label className={`${s.field} ${s.fieldFull}`}>
          <span>WhatsApp *</span>
          <input
            required
            type="tel"
            inputMode="numeric"
            className={s.finput}
            value={phone}
            onChange={handlePhone}
            placeholder="(00) 99999-9999"
            autoComplete="tel"
          />
        </label>

        <label className={`${s.field} ${s.fieldFull}`}>
          <span>Cidade (opcional)</span>
          <input
            className={s.finput}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Ex: Salvador / BA"
            maxLength={100}
            autoComplete="address-level2"
          />
        </label>
      </div>

      <div className={s.fsubmit}>
        <button
          type="submit"
          className={s.btn}
          disabled={status === "sending"}
          style={{ fontSize: 15, height: 52 }}
        >
          {status === "sending" ? "Enviando…" : "Quero ser passeador →"}
        </button>
        {status === "error" ? (
          <span className={s.ferr} role="alert" aria-live="polite">
            {error}
          </span>
        ) : (
          <span className={s.fnote}>Sem mensalidade · sem compromisso</span>
        )}
      </div>
    </form>
  );
}
