"use client";

import { FormEvent, useState } from "react";
import s from "./editorial-home.module.css";
import { WHATSAPP_DISPLAY, WHATSAPP_LINK } from "@/lib/contact";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.aumigaowalk.com.br";
const interests = ["Quero contratar White Label", "Quero ser passeador", "Quero suporte", "Quero parceria comercial"];
const businessTypes = ["Pet shop", "Clínica veterinária", "Creche ou hotel pet", "Rede ou franquia", "Outro"];

type F = { name: string; company: string; email: string; phone: string; city: string; business_type: string; interest: string; message: string };
const EMPTY: F = { name: "", company: "", email: "", phone: "", city: "", business_type: businessTypes[0], interest: interests[0], message: "" };

// M9: Limites de comprimento por campo
const MAX_SHORT = 200;
const MAX_MSG = 2000;

export function ContactSection() {
  const [form, setForm] = useState<F>(EMPTY);
  // M9: honeypot — se preenchido por bot, aborta silenciosamente
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const up = <K extends keyof F>(k: K) => (e: { target: { value: string } }) => setForm((c) => ({ ...c, [k]: e.target.value }));

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // M9: campo honeypot preenchido → bot detectado; abortar silenciosamente
    if (honeypot) { setStatus("sent"); return; }
    setStatus("sending"); setError("");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15_000);

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (!res.ok) { const d = (await res.json().catch(() => null)) as { detail?: string } | null; throw new Error(d?.detail || "Não foi possível enviar agora."); }
      setStatus("sent"); setForm(EMPTY);
    } catch (err) {
      clearTimeout(timeoutId);
      if (err instanceof Error && err.name === "AbortError") {
        setStatus("error");
        setError("O servidor demorou demais. Tente novamente ou use o WhatsApp.");
      } else {
        setStatus("error");
        setError(err instanceof Error ? err.message : "Falha no envio.");
      }
    }
  }

  return (
    <div className={s.contactGrid}>
      <div className={s.contactAside}>
        <p className={s.lead} style={{ marginTop: 0 }}>Conte sobre o seu negócio e a gente mostra, num diagnóstico gratuito, como lançar passeios com a sua marca — em semanas, não meses.</p>
        <a className={s.waBtn} href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">💬 Falar no WhatsApp {WHATSAPP_DISPLAY}</a>
        <div className={s.contactMeta}>
          E-mail: <a href="mailto:contato@aumigaowalk.com.br">contato@aumigaowalk.com.br</a><br />
          Retorno em até 1 dia útil · seus dados ficam protegidos (LGPD).
        </div>
      </div>

      {status === "sent" ? (
        <div className={s.form}><div className={s.fok}>
          <div className={s.fokH}>Recebemos seu interesse 🐾</div>
          <p className={s.fokP}>Nossa equipe comercial retorna normalmente em até 1 dia útil.</p>
          <button className={s.planCta} style={{ maxWidth: 240, margin: "18px auto 0" }} onClick={() => setStatus("idle")}>Enviar outra mensagem</button>
        </div></div>
      ) : (
        <form className={s.form} onSubmit={onSubmit}>
          {/* M9: honeypot — oculto para humanos, bots costumam preencher */}
          <input
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />
          <div className={s.fgrid}>
            <label className={s.field}><span>Nome</span><input required className={s.finput} value={form.name} onChange={up("name")} placeholder="Seu nome" maxLength={MAX_SHORT} /></label>
            <label className={s.field}><span>Empresa</span><input className={s.finput} value={form.company} onChange={up("company")} placeholder="Nome da empresa" maxLength={MAX_SHORT} /></label>
            <label className={s.field}><span>E-mail</span><input type="email" required className={s.finput} value={form.email} onChange={up("email")} placeholder="voce@empresa.com" maxLength={MAX_SHORT} /></label>
            <label className={s.field}><span>Telefone</span><input className={s.finput} value={form.phone} onChange={up("phone")} placeholder="(00) 00000-0000" maxLength={MAX_SHORT} /></label>
            <label className={s.field}><span>Cidade</span><input className={s.finput} value={form.city} onChange={up("city")} placeholder="Cidade / UF" maxLength={MAX_SHORT} /></label>
            <label className={s.field}><span>Tipo de negócio</span><select className={s.fselect} value={form.business_type} onChange={up("business_type")}>{businessTypes.map((t) => <option key={t}>{t}</option>)}</select></label>
            <label className={`${s.field} ${s.fieldFull}`}><span>Interesse principal</span><select className={s.fselect} value={form.interest} onChange={up("interest")}>{interests.map((i) => <option key={i}>{i}</option>)}</select></label>
            <label className={`${s.field} ${s.fieldFull}`}><span>Mensagem</span><textarea className={s.ftext} value={form.message} onChange={up("message")} placeholder="Conte sobre sua operação, número de unidades, objetivo…" maxLength={MAX_MSG} /></label>
          </div>
          <div className={s.fsubmit}>
            <button type="submit" className={s.btn} disabled={status === "sending"}>{status === "sending" ? "Enviando…" : "Solicitar diagnóstico"} →</button>
            {status === "error" ? <span className={s.ferr} role="alert" aria-live="polite">{error}</span> : <span className={s.fnote}>Retorno em até 1 dia útil</span>}
          </div>
        </form>
      )}
    </div>
  );
}
