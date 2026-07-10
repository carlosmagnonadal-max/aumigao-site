import { test, expect, type Page, type Route } from "@playwright/test";

/**
 * Página pública /live/[token] (GPS ao vivo compartilhável).
 * ⚠️ Regra de ouro da suíte: TUDO mockado, nenhuma chamada real ao backend
 * (`${API_URL}/api/public/live/{token}`, https://api.aumigaowalk.com.br em
 * produção) nem aos tiles do OpenStreetMap — ambos interceptados abaixo.
 */

// 1x1 PNG transparente — evita depender de rede real para os tiles do mapa.
const BLANK_PNG = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
  "base64"
);

async function mockTiles(page: Page) {
  await page.route("**/*.tile.openstreetmap.org/**", (route: Route) =>
    route.fulfill({ status: 200, contentType: "image/png", body: BLANK_PNG })
  );
}

test.describe("página pública /live/[token]", () => {
  test("token inválido mostra 'Link inválido'", async ({ page }) => {
    await page.route("**/api/public/live/**", (route) =>
      route.fulfill({ status: 404, contentType: "application/json", body: "{}" })
    );

    await page.goto("/live/token-que-nao-existe");

    await expect(page.getByRole("heading", { name: /link inválido/i })).toBeVisible();
  });

  test("passeio ativo mockado mostra o nome do pet e o CTA", async ({ page }) => {
    await mockTiles(page);
    await page.route("**/api/public/live/**", (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          status: "active",
          pet_first_name: "Bela",
          pet_photo_url: null,
          tenant: { name: "Aumigão Walk", slug: "aumigao", logo_url: null },
          pings: [
            { latitude: -12.9777, longitude: -38.5016, recorded_at: "2026-07-10T12:00:00Z" },
            { latitude: -12.978, longitude: -38.502, recorded_at: "2026-07-10T12:00:07Z" },
          ],
          count: 2,
        }),
      })
    );

    await page.goto("/live/token-valido-mock");

    await expect(page.getByRole("heading", { name: /bela está passeando/i })).toBeVisible();
    await expect(page.getByText(/ao vivo/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /agende passeios para seu pet/i })).toHaveAttribute(
      "href",
      "/c/aumigao"
    );
  });

  test("passeio encerrado mockado mostra mensagem de fim e CTA", async ({ page }) => {
    await page.route("**/api/public/live/**", (route) =>
      route.fulfill({ status: 410, contentType: "application/json", body: "{}" })
    );

    await page.goto("/live/token-encerrado-mock");

    await expect(page.getByRole("heading", { name: /esse passeio já terminou/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /agende passeios para seu pet/i })).toBeVisible();
  });

  test("R15.3: falha de rede/CORS na API sai do 'Carregando' eterno e mostra erro amigável, recuperando sozinho", async ({ page }) => {
    // 3 polls (a cada 7s) até o erro + mais 1 poll de recuperação passam do
    // timeout padrão de 30s do runner — este teste precisa de mais fôlego.
    test.setTimeout(60_000);

    // Simula exatamente o bug real: a API responde com falha de rede (CORS
    // bloqueado pelo navegador aparece como request abortada no fetch) em
    // toda chamada até o mock ser trocado — o polling de 7s do componente faz
    // isso acontecer ~3x seguidas antes de mostrarmos o estado de erro.
    await page.route("**/api/public/live/**", (route) => route.abort("failed"));

    await page.goto("/live/token-cors-quebrado-mock");

    // Enquanto não bateu 3 falhas, ainda está em "Carregando…".
    await expect(page.getByText("Carregando…")).toBeVisible();

    await expect(page.getByText(/não foi possível carregar o passeio/i)).toBeVisible({ timeout: 30_000 });

    // Recupera sozinho: assim que a API volta a responder, o próximo poll (7s) mostra o passeio ativo.
    await page.unroute("**/api/public/live/**");
    await mockTiles(page);
    await page.route("**/api/public/live/**", (route) =>
      route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({
          status: "active",
          pet_first_name: "Bela",
          pet_photo_url: null,
          tenant: { name: "Aumigão Walk", slug: "aumigao", logo_url: null },
          pings: [{ latitude: -12.9777, longitude: -38.5016, recorded_at: "2026-07-10T12:00:00Z" }],
          count: 1,
        }),
      })
    );

    await expect(page.getByRole("heading", { name: /bela está passeando/i })).toBeVisible({ timeout: 10_000 });
  });
});
