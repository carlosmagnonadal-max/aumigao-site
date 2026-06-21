"use client";

import { useState } from "react";

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.aumigaowalk.com.br";

export type ContactForm = {
  name: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  business_type: string;
  interest: string;
  message: string;
};

export const BUSINESS_TYPES = [
  "Pet shop",
  "Clínica veterinária",
  "Creche ou hotel pet",
  "Rede ou franquia",
  "Outro",
];

export const INTERESTS = [
  "Quero contratar White Label",
  "Quero ser passeador",
  "Quero suporte",
  "Quero parceria comercial",
];

const EMPTY: ContactForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  city: "",
  business_type: BUSINESS_TYPES[0],
  interest: INTERESTS[0],
  message: "",
};

export type ContactStatus = "idle" | "sending" | "sent" | "error";

export interface UseContactFormReturn {
  form: ContactForm;
  setField: <K extends keyof ContactForm>(
    key: K
  ) => (e: { target: { value: string } }) => void;
  honeypot: string;
  setHoneypot: (value: string) => void;
  status: ContactStatus;
  error: string;
  submit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  reset: () => void;
}

export function useContactForm(): UseContactFormReturn {
  const [form, setForm] = useState<ContactForm>(EMPTY);
  // M9: honeypot — se preenchido por bot, aborta silenciosamente
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [error, setError] = useState("");

  function setField<K extends keyof ContactForm>(key: K) {
    return (e: { target: { value: string } }) =>
      setForm((c) => ({ ...c, [key]: e.target.value }));
  }

  async function submit(
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> {
    e.preventDefault();
    // M9: campo honeypot preenchido → bot detectado; abortar silenciosamente
    if (honeypot) {
      setStatus("sent");
      return;
    }
    // Validação client-side independente do HTML (defesa em profundidade)
    const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!form.name.trim() || form.name.length > 200) {
      setError("Nome é obrigatório e deve ter no máximo 200 caracteres.");
      setStatus("error");
      return;
    }
    if (!EMAIL_RE.test(form.email)) {
      setError("E-mail inválido.");
      setStatus("error");
      return;
    }
    if (form.message.length > 2000) {
      setError("Mensagem deve ter no máximo 2000 caracteres.");
      setStatus("error");
      return;
    }
    if (form.business_type && !BUSINESS_TYPES.includes(form.business_type)) {
      setError("Tipo de negócio inválido.");
      setStatus("error");
      return;
    }
    if (form.interest && !INTERESTS.includes(form.interest)) {
      setError("Interesse inválido.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");

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
      if (!res.ok) {
        const d = (await res.json().catch(() => null)) as {
          detail?: string;
        } | null;
        throw new Error(d?.detail || "Não foi possível enviar agora.");
      }
      setStatus("sent");
      setForm(EMPTY);
    } catch (err) {
      clearTimeout(timeoutId);
      if (err instanceof Error && err.name === "AbortError") {
        setStatus("error");
        setError(
          "O servidor demorou demais. Tente novamente ou use o WhatsApp."
        );
      } else {
        setStatus("error");
        setError(err instanceof Error ? err.message : "Falha no envio.");
      }
    }
  }

  function reset(): void {
    setStatus("idle");
  }

  return { form, setField, honeypot, setHoneypot, status, error, submit, reset };
}
