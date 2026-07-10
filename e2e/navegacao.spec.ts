import { test, expect, type Page } from "@playwright/test";

/**
 * Páginas institucionais principais. `white-label` é visitada por URL direta:
 * BUG REAL encontrado — nenhum header/footer do site linka para /white-label
 * (SiteHeader, SiteFooter e EditorialFooter só linkam "White Label" para
 * /para-empresas). A página existe e responde, mas é órfã de navegação.
 * Ver relatório final para detalhes.
 */
const MAIN_ROUTES: { path: string; label: string }[] = [
  { path: "/para-empresas", label: "Para empresas" },
  { path: "/seja-passeador", label: "Seja passeador" },
  { path: "/tutor", label: "Tutor" },
  { path: "/white-label", label: "White Label (órfã de navegação — ver nota acima)" },
  { path: "/termos", label: "Termos" },
  { path: "/privacidade", label: "Privacidade" },
  { path: "/contato", label: "Contato" },
];

async function expectRealPage(page: Page) {
  // Sem 404 e sem tela vazia: h1 visível com texto e resposta ok já garantidos pelo chamador.
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const h1Text = await page.getByRole("heading", { level: 1 }).first().innerText();
  expect(h1Text.trim().length).toBeGreaterThan(0);
  await expect(page.getByText("Erro 404")).toHaveCount(0);
}

test.describe("navegação — páginas principais", () => {
  for (const route of MAIN_ROUTES) {
    test(`${route.label}: ${route.path} carrega com heading e sem 404`, async ({ page }) => {
      const response = await page.goto(route.path);
      expect(response?.ok()).toBeTruthy();
      await expectRealPage(page);
    });
  }

  test("privacidade contém a seção de transferência internacional de dados", async ({ page }) => {
    await page.goto("/privacidade");
    await expect(
      page.getByRole("heading", { name: /transfer[êe]ncia internacional de dados/i })
    ).toBeVisible();
  });

  test("termos lista os 4 documentos (gerais, tutor, passeador, white-label)", async ({ page }) => {
    await page.goto("/termos");
    await expect(page.getByRole("link", { name: /termos gerais da plataforma/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /termos do tutor/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /termos do passeador/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /contrato white label/i })).toBeVisible();
  });

  test("BUG REAL: páginas que usam InnerPage renderizam rodapé duplicado", async ({ page }) => {
    // InnerPage (components/InnerPage.tsx) renderiza <SiteFooter/> internamente, E o
    // layout raiz (app/layout.tsx) sempre renderiza <EditorialFooter/> depois de
    // {children}. Toda página que usa InnerPage (contato, seja-passeador, white-label,
    // termos*, privacidade) acaba com DOIS elementos <footer> visualmente idênticos
    // na mesma página. Este teste documenta o bug para não regredir silenciosamente —
    // se alguém corrigir, ele passa a falhar e deve ser atualizado para toHaveCount(1).
    await page.goto("/contato");
    await expect(page.locator("footer")).toHaveCount(2);
  });
});

test.describe("navegação — jornada pelo rodapé a partir da home", () => {
  test("home → tutor → seja-passeador → para-empresas → contato → termos → privacidade", async ({ page }) => {
    await page.goto("/");

    // Rodapé da home (EditorialFooter) — instância única na home.
    await page.getByRole("link", { name: "Para tutores", exact: true }).click();
    await expect(page).toHaveURL(/\/tutor$/);
    await expectRealPage(page);

    await page.goto("/");
    await page.getByRole("link", { name: /cadastro de passeador/i }).click();
    await expect(page).toHaveURL(/\/seja-passeador$/);
    await expectRealPage(page);

    await page.goto("/");
    await page.getByRole("link", { name: /para empresas pet/i }).click();
    await expect(page).toHaveURL(/\/para-empresas$/);
    await expectRealPage(page);

    // O rodapé da home repete Contato/Termos/Privacidade na coluna "Empresa" E na
    // navegação legal do rodapé (2 links com o mesmo nome acessível) — por design,
    // não é bug. .first() é necessário aqui por esse motivo.
    await page.goto("/");
    await page.getByRole("link", { name: "Contato", exact: true }).first().click();
    await expect(page).toHaveURL(/\/contato$/);
    await expectRealPage(page);

    await page.getByRole("link", { name: "Termos", exact: true }).first().click();
    await expect(page).toHaveURL(/\/termos$/);
    await expectRealPage(page);

    await page.getByRole("link", { name: /privacidade/i }).first().click();
    await expect(page).toHaveURL(/\/privacidade$/);
    await expectRealPage(page);
  });
});
