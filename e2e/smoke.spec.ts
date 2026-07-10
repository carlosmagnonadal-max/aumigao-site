import { test, expect } from "@playwright/test";
import { collectConsoleErrors } from "./helpers";

test.describe("smoke — home", () => {
  test("home carrega sem erro crítico de console e mostra o hero", async ({ page }) => {
    const errors = collectConsoleErrors(page);

    const response = await page.goto("/");
    expect(response?.ok()).toBeTruthy();

    // A home é o hub: topbar com marca + hero (h1 "Cuidar virou operação.") + CTAs.
    await expect(page.getByRole("link", { name: /aumig[aã]o walk/i }).first()).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/cuidar virou/i);
    await expect(page.getByRole("link", { name: /conheça os 3 caminhos/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /solicitar diagnóstico/i }).first()).toBeVisible();

    expect(errors, `Erros de console inesperados: ${errors.join(" | ")}`).toEqual([]);
  });

  test("home carrega no mobile sem erro crítico de console", async ({ page, isMobile }) => {
    test.skip(!isMobile, "cenário específico do projeto mobile");
    const errors = collectConsoleErrors(page);

    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(/cuidar virou/i);

    expect(errors, `Erros de console inesperados: ${errors.join(" | ")}`).toEqual([]);
  });
});
