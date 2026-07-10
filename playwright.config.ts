import { defineConfig, devices } from "@playwright/test";

/**
 * Config Playwright do site institucional Aumigão Walk.
 * Roda contra `next dev` (não build de produção) para exercitar o middleware
 * de CSP (nonce-based) tal como ele existe hoje — parte do que a suíte valida
 * é que a página funciona sob essa CSP estrita.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // 1 retry local: sob workers em paralelo, `next dev` pode ocasionalmente atrasar
  // a compilação sob demanda de uma rota além do esperado (contenção, não bug do
  // app — ver nota em `expect.timeout` acima). CI já roda serial (workers: 1) +
  // 2 retries por ser mais sensível a isso.
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html", { open: "never" }]],
  timeout: 30_000,
  // `next dev` compila rotas sob demanda: o primeiro hit em uma rota ainda não
  // visitada nesta execução (ex.: clicar num link para uma página nova, ou o
  // primeiro goto() de um teste) pode levar vários segundos (Fast Refresh
  // rebuild) antes da navegação client-side completar. O default de 5s do
  // Playwright é curto demais para isso — não é flakiness, é o custo normal
  // de rodar contra o dev server (ver playwright.config.ts topo do arquivo).
  expect: { timeout: 15_000 },
  use: {
    baseURL: "http://localhost:3200",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium-desktop",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "chromium-mobile",
      use: { ...devices["Pixel 7"] },
    },
  ],
  webServer: {
    command: "npx next dev -p 3200",
    url: "http://localhost:3200",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
