"use client";

import { useEffect, useRef, useState, KeyboardEvent } from "react";

type Role = "user" | "assistant";
interface Message {
  role: Role;
  content: string;
}

const MAX_MESSAGES = 20;

const WELCOME: Message = {
  role: "assistant",
  content: "Oi! Sou o Au, assistente do Aumigão Walk 🐾 Como posso te ajudar?",
};

// ── Dots animados (loading) ────────────────────────────────────────────────
function LoadingDots() {
  return (
    <span className="au-dots" aria-label="digitando">
      <span />
      <span />
      <span />
    </span>
  );
}

// ── Bolha de mensagem ──────────────────────────────────────────────────────
function Bubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "10px",
      }}
    >
      <div
        style={{
          maxWidth: "82%",
          borderRadius: isUser ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
          padding: "10px 14px",
          background: isUser ? "#FF6A2B" : "#2A2137",
          color: "#F6F1F8",
          fontSize: "0.9rem",
          lineHeight: "1.55",
          wordBreak: "break-word",
          boxShadow: isUser
            ? "0 4px 16px -4px rgba(255, 106, 43, 0.45)"
            : "0 4px 14px -4px rgba(0,0,0,0.35)",
        }}
      >
        {msg.content}
      </div>
    </div>
  );
}

// ── Componente principal ───────────────────────────────────────────────────
export function AuWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [everOpened, setEverOpened] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Scroll automático
  useEffect(() => {
    if (open) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, open]);

  // Foca o textarea ao abrir
  useEffect(() => {
    if (open) {
      setTimeout(() => textareaRef.current?.focus(), 80);
    }
  }, [open]);

  function toggleOpen() {
    setOpen((v) => {
      if (!v) setEverOpened(true);
      return !v;
    });
  }

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const history = [...messages, userMsg].slice(-MAX_MESSAGES);
    setMessages(history);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      if (!res.ok) throw new Error("non-ok");

      const data = (await res.json()) as { reply?: string };
      const reply = data.reply ?? "Não entendi. Pode reformular?";

      setMessages((prev) =>
        [...prev, { role: "assistant" as Role, content: reply }].slice(-MAX_MESSAGES)
      );
    } catch {
      setMessages((prev) =>
        [
          ...prev,
          {
            role: "assistant" as Role,
            content:
              "Desculpe, tive um problema técnico. Tente novamente em instantes.",
          },
        ].slice(-MAX_MESSAGES)
      );
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  // Lista de mensagens a exibir (welcome se vazio)
  const displayed: Message[] = messages.length === 0 ? [WELCOME] : messages;

  return (
    <>
      {/* ── Estilos inline ── */}
      <style>{`
        @keyframes au-dots {
          0%, 80%, 100% { opacity: 0.2; transform: scale(0.7); }
          40% { opacity: 1; transform: scale(1); }
        }
        .au-dots {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          height: 18px;
        }
        .au-dots span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(246,241,248,0.6);
          animation: au-dots 1.3s infinite ease-in-out;
        }
        .au-dots span:nth-child(1) { animation-delay: 0s; }
        .au-dots span:nth-child(2) { animation-delay: 0.2s; }
        .au-dots span:nth-child(3) { animation-delay: 0.4s; }

        .au-panel {
          transition: opacity 0.22s cubic-bezier(.2,.7,.2,1),
                      transform 0.22s cubic-bezier(.2,.7,.2,1);
        }
        .au-panel[data-open="false"] {
          opacity: 0;
          transform: scale(0.94) translateY(10px);
          pointer-events: none;
        }
        .au-panel[data-open="true"] {
          opacity: 1;
          transform: scale(1) translateY(0);
          pointer-events: auto;
        }

        .au-fab {
          transition: transform 0.18s cubic-bezier(.2,.7,.2,1),
                      box-shadow 0.18s;
        }
        .au-fab:hover {
          transform: scale(1.08);
          box-shadow: 0 12px 32px -8px rgba(157,109,255,0.65) !important;
        }
        .au-fab:active { transform: scale(0.96); }

        .au-send-btn:hover { opacity: 0.85; }
        .au-send-btn:disabled { opacity: 0.4; cursor: not-allowed; }

        .au-textarea:focus { outline: none; }
        .au-textarea::placeholder { color: rgba(246,241,248,0.35); }

        .au-scroll::-webkit-scrollbar { width: 4px; }
        .au-scroll::-webkit-scrollbar-track { background: transparent; }
        .au-scroll::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.12);
          border-radius: 4px;
        }
        .au-scroll { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.12) transparent; }
      `}</style>

      {/* ── Painel de chat ── */}
      <div
        ref={panelRef}
        className="au-panel"
        data-open={open ? "true" : "false"}
        role="dialog"
        aria-label="Chat com Au"
        aria-modal="true"
        style={{
          position: "fixed",
          zIndex: 9998,
          bottom: "88px",
          right: "24px",
          width: "360px",
          maxHeight: "520px",
          borderRadius: "20px",
          background: "#221A2D",
          border: "1px solid rgba(255,255,255,0.09)",
          boxShadow:
            "0 32px 80px -24px rgba(0,0,0,0.7), 0 0 0 0.5px rgba(255,255,255,0.05) inset",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            background: "linear-gradient(135deg, #9d6dff 0%, #6a3de0 100%)",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            flexShrink: 0,
          }}
        >
          {/* Avatar */}
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              flexShrink: 0,
              border: "1.5px solid rgba(255,255,255,0.25)",
            }}
          >
            🐾
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.97rem",
                lineHeight: 1.2,
              }}
            >
              Au
            </div>
            <div
              style={{
                color: "rgba(255,255,255,0.72)",
                fontSize: "0.75rem",
                marginTop: "1px",
              }}
            >
              Assistente Aumigão
            </div>
          </div>
          {/* Botão fechar */}
          <button
            onClick={() => setOpen(false)}
            aria-label="Fechar chat"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "none",
              borderRadius: "8px",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#fff",
              fontSize: "16px",
              lineHeight: 1,
              transition: "background 0.15s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.22)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.12)")
            }
          >
            ✕
          </button>
        </div>

        {/* Área de mensagens */}
        <div
          className="au-scroll"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "16px 14px 8px",
          }}
        >
          {displayed.map((msg, i) => (
            <Bubble key={i} msg={msg} />
          ))}

          {/* Loading indicator */}
          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  maxWidth: "82%",
                  borderRadius: "18px 18px 18px 4px",
                  padding: "10px 14px",
                  background: "#2A2137",
                  boxShadow: "0 4px 14px -4px rgba(0,0,0,0.35)",
                }}
              >
                <LoadingDots />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div
          style={{
            padding: "10px 12px 12px",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            background: "#221A2D",
            flexShrink: 0,
            display: "flex",
            gap: "8px",
            alignItems: "flex-end",
          }}
        >
          <textarea
            ref={textareaRef}
            className="au-textarea"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua dúvida..."
            rows={1}
            disabled={loading}
            style={{
              flex: 1,
              background: "#2A2137",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "12px",
              padding: "10px 12px",
              color: "#F6F1F8",
              fontSize: "0.88rem",
              lineHeight: "1.5",
              resize: "none",
              maxHeight: "96px",
              overflowY: "auto",
              fontFamily: "inherit",
              transition: "border-color 0.2s",
            }}
            onFocus={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,106,43,0.5)")
            }
            onBlur={(e) =>
              (e.currentTarget.style.borderColor = "rgba(255,255,255,0.09)")
            }
          />
          <button
            className="au-send-btn"
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            aria-label="Enviar mensagem"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "11px",
              border: "none",
              background: "linear-gradient(180deg, #FFA24D, #FF6A2B)",
              color: "#1B1320",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 6px 18px -6px rgba(255,106,43,0.6)",
              transition: "opacity 0.15s",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.5 8L2 2.5L4.5 8L2 13.5L14.5 8Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ── FAB (botão flutuante) ── */}
      <button
        className="au-fab"
        onClick={toggleOpen}
        aria-label={open ? "Fechar chat Au" : "Abrir chat Au"}
        style={{
          position: "fixed",
          zIndex: 9999,
          bottom: "24px",
          right: "24px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "none",
          background: "linear-gradient(150deg, #9d6dff 0%, #6a3de0 100%)",
          color: "#fff",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow:
            "0 8px 24px -6px rgba(106,61,224,0.65), 0 2px 6px rgba(0,0,0,0.3)",
          fontSize: open ? "20px" : "0.93rem",
          fontWeight: 800,
          letterSpacing: "0.01em",
          fontFamily: "inherit",
        }}
      >
        {open ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 5L15 15M15 5L5 15"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <>
            Au
            {/* Badge de notificação (some após primeira abertura) */}
            {!everOpened && (
              <span
                style={{
                  position: "absolute",
                  top: "3px",
                  right: "3px",
                  width: "11px",
                  height: "11px",
                  borderRadius: "50%",
                  background: "#FF6A2B",
                  border: "2px solid #140F1B",
                }}
              />
            )}
          </>
        )}
      </button>

      {/* ── Media query mobile (< 640px): painel ocupa quase a tela ── */}
      <style>{`
        @media (max-width: 639px) {
          .au-panel[data-open="true"] {
            bottom: 0 !important;
            right: 0 !important;
            left: 0 !important;
            width: 100% !important;
            max-height: 88dvh !important;
            border-radius: 20px 20px 0 0 !important;
          }
        }
      `}</style>
    </>
  );
}
