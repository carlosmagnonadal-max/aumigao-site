import * as Sentry from "@sentry/nextjs";

// Sentry client-side (browser) initialization.
// enabled só em produção — evita ruído/consumo de quota em dev local.
// tracesSampleRate: 0 — só error tracking por enquanto, sem performance tracing.
// sendDefaultPii: false — não envia IP/headers/cookies por padrão (LGPD).
Sentry.init({
  dsn:
    process.env.NEXT_PUBLIC_SENTRY_DSN ??
    "https://c34cb0281f292acfc43bc65633450d52@o4511710678417408.ingest.us.sentry.io/4511710728290304",
  enabled: process.env.NODE_ENV === "production",
  tracesSampleRate: 0,
  sendDefaultPii: false,
});

// Hook de instrumentação de navegação client-side do Next.js (App Router).
// Nome exigido pelo Next.js: "onRouterTransitionStart". A função do Sentry
// que implementa esse hook, nesta versão do SDK, chama-se
// `captureRouterTransitionStart` (renomeada de `onRouterTransitionStart` em
// versões mais antigas do @sentry/nextjs).
export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
