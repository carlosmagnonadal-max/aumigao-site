/**
 * Server-side structured logger for site (Node runtime only).
 *
 * DO NOT import this module from middleware.ts — middleware runs on the Edge
 * runtime where Pino (and Node.js transports) are not available.
 * For Edge-runtime logging use the minimal console-based helpers in middleware.ts.
 *
 * Sensitive paths are redacted at the serialiser level — values at those paths
 * are replaced with "[Redacted]" before the log line is written, even if a
 * caller accidentally passes a credential-bearing object.
 */

import pino from "pino";

const REDACTED_PATHS: string[] = [
  "password",
  "*.password",
  "token",
  "*.token",
  "access_token",
  "*.access_token",
  "refresh_token",
  "*.refresh_token",
  "authorization",
  "*.authorization",
  "req.headers.authorization",
  "apiKey",
  "*.apiKey",
];

const rootLogger = pino({
  level: process.env.LOG_LEVEL ?? "info",
  redact: { paths: REDACTED_PATHS, censor: "[Redacted]" },
  base: { service: "site" },
  timestamp: pino.stdTimeFunctions.isoTime,
});

/**
 * Returns a child logger scoped to a component / module name.
 *
 * @example
 * const log = getLogger("api/chat");
 * log.warn({ ip, retryAfterSec }, "rate limit hit");
 */
export function getLogger(component: string): pino.Logger {
  return rootLogger.child({ component });
}

export default rootLogger;
