import type { ConsoleMessage, Page } from "@playwright/test";

/**
 * Ruído benigno de console esperado em `next dev` (HMR, DevTools, etc.) que
 * não representa um erro real da aplicação. Qualquer coisa fora desta lista
 * que aparecer como "error" no console derruba o teste de smoke.
 */
const BENIGN_CONSOLE_PATTERNS = [
  /Download the React DevTools/i,
  /\[Fast Refresh\]/i,
  /webpack-hmr/i,
  /HMR/i,
  // BUG REAL confirmado e reportado (ver formulario-contato.spec.ts e relatório final):
  // o CSP do middleware não inclui 'unsafe-eval', e o runtime de dev do Next
  // (webpack/HMR) usa eval() internamente — a exceção sobe como pageerror em TODA
  // página sob `next dev`. Verificado lado a lado: não ocorre no build de produção
  // (`next build && next start`), onde a CSP é a mesma mas o bundle não usa eval().
  // Filtrado aqui só para não afogar os testes de smoke/navegação em ruído — o
  // impacto real (hidratação quebrada em dev) é tratado explicitamente onde importa.
  /unsafe-eval/i,
];

export function isBenignConsoleMessage(msg: ConsoleMessage): boolean {
  const text = msg.text();
  return BENIGN_CONSOLE_PATTERNS.some((re) => re.test(text));
}

/** Anexa um coletor de erros de console (filtrando ruído benigno) e retorna o array. */
export function collectConsoleErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error" && !isBenignConsoleMessage(msg)) {
      errors.push(msg.text());
    }
  });
  page.on("pageerror", (err) => {
    if (!BENIGN_CONSOLE_PATTERNS.some((re) => re.test(err.message))) {
      errors.push(err.message);
    }
  });
  return errors;
}

/** Corpo de sucesso mockado para POST /api/contact (formato esperado pelo hook useContactForm). */
export function mockContactSuccess(page: Page) {
  return page.route("**/api/contact", (route) => {
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ ok: true }),
    });
  });
}

/** Corpo de erro mockado para POST /api/contact (500 com `detail`, formato lido pelo hook). */
export function mockContactError(page: Page) {
  return page.route("**/api/contact", (route) => {
    route.fulfill({
      status: 500,
      contentType: "application/json",
      body: JSON.stringify({ detail: "Erro simulado do servidor." }),
    });
  });
}
