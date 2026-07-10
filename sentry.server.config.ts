import * as Sentry from "@sentry/nextjs";

// Sentry server-side (Node.js runtime) initialization.
// Carregado por instrumentation.ts quando NEXT_RUNTIME === "nodejs".
Sentry.init({
  dsn:
    process.env.NEXT_PUBLIC_SENTRY_DSN ??
    "https://c34cb0281f292acfc43bc65633450d52@o4511710678417408.ingest.us.sentry.io/4511710728290304",
  enabled: process.env.NODE_ENV === "production",
  tracesSampleRate: 0,
  sendDefaultPii: false,
});
