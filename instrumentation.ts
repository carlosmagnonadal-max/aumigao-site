import type { Instrumentation } from "next";

// Ponto de entrada de instrumentação do Next.js — chamado uma vez na
// inicialização de cada runtime (nodejs e edge). Carrega o config do Sentry
// correspondente ao runtime atual.
export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

// Captura erros de renderização no servidor (nested React Server Components,
// route handlers, etc.) que não passam pelos error boundaries do App Router.
export const onRequestError: Instrumentation.onRequestError = async (
  ...args
) => {
  const Sentry = await import("@sentry/nextjs");
  await Sentry.captureRequestError(...args);
};
