"use client";

import { useState } from "react";

type Role = "user" | "assistant";

export interface Message {
  role: Role;
  content: string;
  isError?: boolean;
}

const MAX_MESSAGES = 20;

export interface UseChatReturn {
  messages: Message[];
  input: string;
  setInput: (value: string) => void;
  loading: boolean;
  send: () => Promise<void>;
}

export function useChat(): UseChatReturn {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send(): Promise<void> {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const history = [...messages, userMsg].slice(-MAX_MESSAGES);
    setMessages(history);
    setInput("");
    setLoading(true);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20_000);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        // Tenta extrair a mensagem de erro da API (ex.: rate-limit 429)
        let errMsg = "Desculpe, tive um problema técnico. Tente novamente em instantes.";
        try {
          const d = (await res.json()) as { error?: string };
          if (d.error) errMsg = d.error;
        } catch {
          // body não-JSON — mantém fallback
        }
        throw new Error(errMsg);
      }

      const data = (await res.json()) as { reply?: string };
      // Fallback para reply vazio (bloco de texto ausente na resposta da API)
      const reply =
        data.reply && data.reply.trim().length > 0
          ? data.reply
          : "Não consegui gerar uma resposta. Tente novamente.";

      setMessages((prev) =>
        [...prev, { role: "assistant" as Role, content: reply }].slice(-MAX_MESSAGES)
      );
    } catch (err) {
      clearTimeout(timeoutId);

      let content = "Desculpe, tive um problema técnico. Tente novamente em instantes.";

      if (err instanceof Error) {
        if (err.name === "AbortError") {
          content = "O servidor demorou demais. Tente novamente ou use o WhatsApp.";
        } else {
          content = err.message;
        }
      }

      setMessages((prev) =>
        [
          ...prev,
          { role: "assistant" as Role, content, isError: true },
        ].slice(-MAX_MESSAGES)
      );
    } finally {
      setLoading(false);
    }
  }

  return { messages, input, setInput, loading, send };
}
