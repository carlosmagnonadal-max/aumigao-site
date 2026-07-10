import { test, expect } from "@playwright/test";

const PAGES_WITH_EXPECTED_TITLE: { path: string; titlePattern: RegExp }[] = [
  { path: "/", titlePattern: /aumig[aã]o walk/i },
  { path: "/para-empresas", titlePattern: /para empresas pet/i },
  { path: "/contato", titlePattern: /contato/i },
];

test.describe("SEO básico", () => {
  for (const { path, titlePattern } of PAGES_WITH_EXPECTED_TITLE) {
    test(`${path} tem <title> e meta description preenchidos`, async ({ page }) => {
      await page.goto(path);

      const title = await page.title();
      expect(title.trim().length).toBeGreaterThan(0);
      expect(title).toMatch(titlePattern);

      const description = await page
        .locator('meta[name="description"]')
        .getAttribute("content");
      expect(description?.trim().length ?? 0).toBeGreaterThan(0);
    });
  }

  test("/robots.txt responde 200", async ({ request }) => {
    const res = await request.get("/robots.txt");
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toMatch(/user-agent/i);
    expect(body).toMatch(/sitemap/i);
  });

  test("/sitemap.xml responde 200 com rotas principais", async ({ request }) => {
    const res = await request.get("/sitemap.xml");
    expect(res.status()).toBe(200);
    const body = await res.text();
    expect(body).toContain("<urlset");
    expect(body).toContain("/para-empresas");
    expect(body).toContain("/seja-passeador");
  });
});
