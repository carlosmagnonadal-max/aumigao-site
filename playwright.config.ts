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
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["html", { open: "never" }]],
  timeout: 30_000,
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
