import { test, expect } from "@playwright/test";

test.describe("página 404", () => {
  test("rota inexistente mostra 404 amigável com caminho de volta para a home", async ({ page }) => {
    const response = await page.goto("/esta-rota-nao-existe-e2e");
    // Next.js responde a rota inexistente com status 404.
    expect(response?.status()).toBe(404);

    await expect(page.getByText("Erro 404")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

    const backHome = page.getByRole("link", { name: /ir para o início/i });
    await expect(backHome).toBeVisible();
    await backHome.click();
    await expect(page).toHaveURL(/\/$/);
  });

  test("subrota inexistente sob página válida também cai no 404", async ({ page }) => {
    const response = await page.goto("/contato/rota-que-nao-existe");
    expect(response?.status()).toBe(404);
    await expect(page.getByText("Erro 404")).toBeVisible();
  });
});
