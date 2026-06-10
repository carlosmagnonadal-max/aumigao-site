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

const inputClass =
  "rounded border border-black/10 px-4 py-3 font-normal outline-none focus:border-brand-orange";

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
      <div className="grid gap-3 rounded border border-black/5 bg-white p-8 text-center shadow-soft">
        <p className="text-2xl font-black text-brand-ink">Recebemos seu interesse! 🐾</p>
        <p className="font-semibold text-brand-ink/70">
          Nossa equipe retorna normalmente em até 1 dia útil.
        </p>
        <div>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-2 rounded bg-brand-purple px-6 py-3 font-bold text-white transition hover:bg-brand-orange"
          >
            Enviar outra mensagem
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 rounded border border-black/5 bg-white p-6 shadow-soft md:grid-cols-2"
    >
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        Nome
        <input className={inputClass} value={form.name} onChange={update("name")} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        Empresa
        <input className={inputClass} value={form.company} onChange={update("company")} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        E-mail
        <input
          type="email"
          required
          className={inputClass}
          value={form.email}
          onChange={update("email")}
        />
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        Telefone
        <input className={inputClass} value={form.phone} onChange={update("phone")} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        Cidade
        <input className={inputClass} value={form.city} onChange={update("city")} />
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        Tipo de negócio
        <select className={inputClass} value={form.business_type} onChange={update("business_type")}>
          {businessTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink md:col-span-2">
        Interesse principal
        <select className={inputClass} value={form.interest} onChange={update("interest")}>
          {interests.map((interest) => (
            <option key={interest}>{interest}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink md:col-span-2">
        Mensagem
        <textarea
          rows={6}
          className={inputClass}
          value={form.message}
          onChange={update("message")}
        />
      </label>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded bg-brand-purple px-6 py-3 font-bold text-white transition hover:bg-brand-orange disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Enviando..." : "Enviar interesse"}
        </button>
        {status === "error" ? (
          <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>
        ) : (
          <p className="mt-3 text-sm font-semibold text-brand-ink/60">
            Retornamos normalmente em até 1 dia útil.
          </p>
        )}
      </div>
    </form>
  );
}
