import * as Sentry from "@sentry/nextjs";

// Sentry edge runtime initialization (middleware.ts e rotas com runtime = "edge").
// Carregado por instrumentation.ts quando NEXT_RUNTIME === "edge".
Sentry.init({
  dsn:
    process.env.NEXT_PUBLIC_SENTRY_DSN ??
    "https://c34cb0281f292acfc43bc65633450d52@o4511710678417408.ingest.us.sentry.io/4511710728290304",
  enabled: process.env.NODE_ENV === "production",
  tracesSampleRate: 0,
  sendDefaultPii: false,
});
