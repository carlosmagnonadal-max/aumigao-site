"use client";

import { FormEvent, useState } from "react";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://aumigao-backend-production.up.railway.app";

const interests = [
  "Quero contratar White Label",
  "Quero ser passeador",
  "Quero suporte",
  "Quero parceria comercial",
];

const businessTypes = [
  "Pet shop",
  "Clínica veterinária",
  "Creche ou hotel pet",
  "Rede ou franquia",
  "Outro",
];

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  business_type: string;
  interest: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  company: "",
  email: "",
  phone: "",
  city: "",
  business_type: businessTypes[0],
  interest: interests[0],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  function update<K extends keyof FormState>(key: K) {
    return (event: { target: { value: string } }) =>
      setForm((current) => ({ ...current, [key]: event.target.value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { detail?: string } | null;
        throw new Error(data?.detail || "Não foi possível enviar agora. Tente novamente.");
      }
      setStatus("sent");
      setForm(EMPTY);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Falha no envio.");
    }
  }

  if (status === "sent") {
    return (
      <div className="ov-form-ok">
        <h3>Recebemos seu interesse 🐾</h3>
        <p>Nossa equipe comercial retorna normalmente em até 1 dia útil.</p>
        <div>
          <button type="button" className="ov-btn ov-btn-ghost" onClick={() => setStatus("idle")}>
            Enviar outra mensagem
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className="ov-formcard" onSubmit={onSubmit}>
      <div className="ov-form">
        <div className="ov-form-grid">
          <label className="ov-field">
            <span>Nome</span>
            <input className="ov-input" value={form.name} onChange={update("name")} placeholder="Seu nome" />
          </label>
          <label className="ov-field">
            <span>Empresa</span>
            <input className="ov-input" value={form.company} onChange={update("company")} placeholder="Nome da empresa" />
          </label>
          <label className="ov-field">
            <span>E-mail</span>
            <input type="email" required className="ov-input" value={form.email} onChange={update("email")} placeholder="voce@empresa.com" />
          </label>
          <label className="ov-field">
            <span>Telefone</span>
            <input className="ov-input" value={form.phone} onChange={update("phone")} placeholder="(00) 00000-0000" />
          </label>
          <label className="ov-field">
            <span>Cidade</span>
            <input className="ov-input" value={form.city} onChange={update("city")} placeholder="Cidade / UF" />
          </label>
          <label className="ov-field">
            <span>Tipo de negócio</span>
            <select className="ov-select" value={form.business_type} onChange={update("business_type")}>
              {businessTypes.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </label>
          <label className="ov-field is-full">
            <span>Interesse principal</span>
            <select className="ov-select" value={form.interest} onChange={update("interest")}>
              {interests.map((interest) => (
                <option key={interest}>{interest}</option>
              ))}
            </select>
          </label>
          <label className="ov-field is-full">
            <span>Mensagem</span>
            <textarea className="ov-textarea" value={form.message} onChange={update("message")} placeholder="Conte sobre sua operação, número de unidades, objetivo…" />
          </label>
        </div>

        <div className="ov-form-foot">
          <button type="submit" className="ov-btn ov-btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Enviando…" : "Enviar interesse"}
            <span className="ov-arr">→</span>
          </button>
          {status === "error" ? (
            <span className="ov-form-err">{error}</span>
          ) : (
            <span className="ov-form-note">Retorno em até 1 dia útil · seus dados ficam protegidos</span>
          )}
        </div>
      </div>
    </form>
  );
}
