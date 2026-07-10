import { test, expect } from "@playwright/test";
import { mockContactSuccess, mockContactError } from "./helpers";

/**
 * ⚠️ O formulário de contato chama um backend real (`${API_URL}/api/contact`,
 * https://api.aumigaowalk.com.br em produção). TODOS os testes aqui interceptam
 * a rota com `page.route` — nenhuma submissão real é feita nem contra prod nem
 * contra qualquer ambiente. Não remover os mocks.
 *
 * Histórico: até aqui 3 dos 4 testes ficavam pulados sob `next dev` porque o
 * CSP do middleware não incluía 'unsafe-eval', e o runtime de dev do Next
 * (webpack HMR) usa eval() internamente — a hidratação quebrava e o onSubmit
 * do formulário nunca era anexado. Corrigido em middleware.ts: 'unsafe-eval'
 * agora é adicionado ao script-src somente quando NODE_ENV==='development'
 * (produção mantém a CSP original, sem 'unsafe-eval').
 */

test.describe("formulário de contato — validação e submissão", () => {
  test("bloqueia envio com campos obrigatórios vazios (nome/e-mail)", async ({ page }) => {
    let calls = 0;
    await page.route("**/api/contact", (route) => {
      calls++;
      route.fulfill({ status: 200, contentType: "application/json", body: "{}" });
    });

    await page.goto("/contato");
    await page.getByRole("button", { name: /solicitar diagnóstico/i }).click();

    // Validação HTML5 (required) impede o submit — handler nunca chega a chamar a API.
    expect(calls).toBe(0);
    await expect(page.getByRole("button", { name: /solicitar diagnóstico/i })).toBeVisible();
  });

  test("envio válido com API mockada mostra feedback de sucesso", async ({ page }) => {
    await mockContactSuccess(page);

    await page.goto("/contato");
    await page.getByLabel("Nome").fill("Maria Teste");
    await page.getByLabel("E-mail").fill("maria.teste@example.com");
    await page.getByLabel("Cidade").fill("Salvador / BA");

    await page.getByRole("button", { name: /solicitar diagnóstico/i }).click();

    await expect(page.getByText(/recebemos seu interesse/i)).toBeVisible();
    await expect(page.getByRole("button", { name: /enviar outra mensagem/i })).toBeVisible();
  });

  test("erro do servidor mockado mostra mensagem amigável e não trava o formulário", async ({ page }) => {
    await mockContactError(page);

    await page.goto("/contato");
    await page.getByLabel("Nome").fill("João Teste");
    await page.getByLabel("E-mail").fill("joao.teste@example.com");

    const submit = page.getByRole("button", { name: /solicitar diagnóstico/i });
    await submit.click();

    // .filter() é necessário: com a hidratação funcionando, o route announcer
    // interno do Next (#__next-route-announcer__, também role="alert") também
    // casa com getByRole("alert") — precisamos do alerta específico do formulário.
    await expect(
      page.getByRole("alert").filter({ hasText: /erro simulado do servidor/i })
    ).toBeVisible();
    // Formulário permanece visível e reenviável — não trava em estado de loading.
    await expect(submit).toBeVisible();
    await expect(submit).toBeEnabled();
  });

  test("honeypot preenchido finge sucesso sem chamar a API (defesa anti-bot)", async ({ page }) => {
    let calls = 0;
    await page.route("**/api/contact", (route) => {
      calls++;
      route.fulfill({ status: 200, contentType: "application/json", body: "{}" });
    });

    await page.goto("/contato");
    await page.getByLabel("Nome").fill("Bot Teste");
    await page.getByLabel("E-mail").fill("bot@example.com");
    // Campo honeypot é oculto visualmente (name="website"), mas presente no DOM para bots.
    await page.locator('input[name="website"]').fill("http://spam.example.com");

    await page.getByRole("button", { name: /solicitar diagnóstico/i }).click();

    await expect(page.getByText(/recebemos seu interesse/i)).toBeVisible();
    expect(calls).toBe(0);
  });
});
