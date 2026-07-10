import { test, expect, type Page } from "@playwright/test";

/**
 * Páginas institucionais principais. `/white-label` foi removida (era órfã de
 * navegação — nenhum header/footer linkava para ela) e agora é um redirect
 * permanente para /para-empresas — ver teste dedicado mais abaixo.
 */
const MAIN_ROUTES: { path: string; label: string }[] = [
  { path: "/para-empresas", label: "Para empresas" },
  { path: "/seja-passeador", label: "Seja passeador" },
  { path: "/tutor", label: "Tutor" },
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

  test("páginas que usam InnerPage renderizam um único rodapé", async ({ page }) => {
    // Regressão: InnerPage (components/InnerPage.tsx) chegou a renderizar
    // <SiteFooter/> internamente ALÉM do <EditorialFooter/> que o layout raiz
    // (app/layout.tsx) sempre renderiza depois de {children} — duplicando o
    // rodapé em contato, seja-passeador, termos* e privacidade. Corrigido
    // removendo o <SiteFooter/> redundante de InnerPage.
    await page.goto("/contato");
    await expect(page.locator("footer")).toHaveCount(1);
  });
});

test.describe("navegação — redirect de /white-label", () => {
  test("/white-label redireciona permanentemente para /para-empresas", async ({ page }) => {
    const response = await page.goto("/white-label");
    expect(response?.ok()).toBeTruthy();
    await expect(page).toHaveURL(/\/para-empresas$/);
    await expectRealPage(page);
  });
});

test.describe("navegação — jornada pelo rodapé a partir da home", () => {
  test("home → tutor → seja-passeador → para-empresas → contato → termos → privacidade", async ({ page }) => {
    // Este teste visita 7 rotas distintas em sequência; sob `next dev`, cada
    // primeira visita a uma rota nesta execução dispara compilação sob
    // demanda (segundos), e com múltiplos workers competindo pelo mesmo dev
    // server o acumulado pode passar do timeout padrão de 30s.
    test.setTimeout(60_000);
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
