# Site Aumigão — Hub + 3 Sub-sites — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reestruturar o site de "tudo numa home" para um **hub geral** (`/`) que roteia + **3 sub-sites em subpasta** (`/tutor`, `/passeador`, `/para-empresas`) amarrados por um **seletor de público** no header, sem virar 3 marcas.

**Architecture:** Hub-and-Spoke + Audience Switcher persistente, em subpasta. Shell único (`SiteHeader`/`SiteFooter`/`InnerPage`) compartilhado; diferenciação por público via tokens CSS escopados em `[data-aud="..."]`; config central de públicos em `lib/audiences.ts`. Base = Proposta 3 (estrutura/prova) + rigor de rota/SEO da Proposta 1. Spec aprovada: `site/docs/2026-06-16-arquitetura-hub-3-subsites.md`.

**Tech Stack:** Next 15 (App Router), TypeScript, Framer Motion, CSS Modules + `globals.css`, deploy Vercel (git-connect repo `aumigao-site`).

**Decisões do Carlos (2026-06-16):** (1) CTA tutor = **caminho duplo** ("petshop já usa? Sim→baixar app da marca / Não→indicar petshop = lead B2B"); (2) **4ª cor verde** do `/para-empresas` = **só entra após validação em preview** (gate na Onda 2; plano B = roxo institucional).

**Como verificamos (este codebase NÃO tem test runner):** cada tarefa de UI verifica por **`npm run build` limpo** + **preview visual no `/proto`** (screenshot via gstack/browse) + **sign-off do Carlos em deploy** (ele só valida em produção/preview, ver `feedback-deploy-cada-coisa-no-lugar`). A única lógica com teste unitário é o resolvedor de público (`lib/audiences`) — feito com TDD via Node `assert` (Task 1.1). **NÃO pushar para a Vercel sem OK do Carlos.**

**Gate de deploy:** Vercel é git-connect → `git push` na `main` publica em produção. Para validação intermediária usar a rota `/proto` (noindex) que espelha trabalho sem tocar as rotas públicas, conforme fluxo já usado nesta empreitada.

---

## Nota de escopo

A spec cobre subsistemas semi-independentes (cada sub-site). Mantemos **um plano** porque todos dependem do mesmo shell/tokens (Ondas 0–1) e a sequência importa. Cada Onda produz software funcionando e verificável por conta própria. Se preferir, as Ondas 2/3/4 podem virar planos separados na execução — o ponto de corte natural é depois da Onda 1.

## Estrutura de arquivos (decisões de decomposição)

**Novos:**
- `site/lib/audiences.ts` — fonte única de verdade dos 3 públicos (chave, rótulo nav, rótulo curto, rota, `--accent`/`--accent-2`, CTA contextual, href do CTA). Consumido por switcher, cards, headers, wrappers.
- `site/components/AudienceSwitcher.tsx` (+ `.module.css`) — seletor de público no header, com estado ativo por rota.
- `site/components/AudienceCard.tsx` (+ usa CSS do hub) — card "porta" do hub, na cor-assinatura.
- `site/components/AudienceLayout.tsx` — wrapper de sub-site: aplica `data-aud`, injeta `InnerPage` (shell), título/hero slot.
- `site/components/PricingPlans.tsx`, `FAQ.tsx`, `Testimonials.tsx`, `EarningsBars.tsx`, `VerifiedBadge.tsx` (+ módulos CSS) — componentes de prova/seções data-driven.
- `site/app/tutor/page.tsx`, `site/app/passeador/page.tsx`, `site/app/para-empresas/page.tsx` — os 3 sub-sites.
- `site/lib/audiences.test.mjs` — teste do resolvedor (Node assert).

**Modificados:**
- `site/app/layout.tsx` — remover `Header`/`Footer` legados; manter shell único.
- `site/components/SiteHeader.tsx` / `SiteFooter.tsx` — receber `AudienceSwitcher`; footer com coluna "3 mundos".
- `site/components/InnerPage.tsx` — virar shell de spoke; remover hack `proto-clean`.
- `site/components/EditorialHomeV2.tsx` — enxugar para hub (mover Planos/Módulos/BrandSwapper/ContactSection B2B p/ `/para-empresas`; cards "Para quem é" com links reais).
- `site/components/HeroMerged.tsx` — parametrizar (copy/CTA/`data-aud` via props).
- `site/components/ContactSection.tsx` — aceitar `perfil` (tutor/passeador/empresa) condicionando `interest`.
- `site/components/PlatformPeek.tsx`, `AppDownload.tsx` — desmontar/quebrar por público.
- `site/app/globals.css` — promover tokens a `:root` + blocos `[data-aud="..."]`; aposentar/isolar `--ov-*`.
- `site/next.config.ts` — 308 redirects.
- `site/app/sitemap.ts` — novas rotas, remover antigas.

**Aposentados:** `site/components/Header.tsx`, `site/components/Footer.tsx`.

---

## ONDA 0 — Faxina do shell + tokens (GATE: nenhuma onda de sub-site começa antes)

Objetivo: shell único e tokens centralizados. **Nada visível ao público muda.** Verificação: build limpo + screenshot do `/` e de uma interna idêntico ao atual.

### Task 0.1: Centralizar tokens de cor em `:root`

**Files:**
- Modify: `site/app/globals.css`
- Reference: `site/components/editorial-home.module.css:3-14`, `hero-merged.module.css:4-13`, `inner.module.css:2-6`

- [ ] **Step 1:** Em `globals.css`, dentro de `:root`, declarar os tokens canônicos (resolvendo a divergência `--muted` `#7a6e60` vs `#7c7468` → escolher um, documentar no comentário):

```css
:root{
  --cream:#faf4e8;
  --ink:#2a2118;
  --muted:#7a6e60;      /* canônico — antes divergia (#7c7468) em hero-merged */
  --accent:#f4671e;     /* tangerina (hub padrão) */
  --accent-2:#ffb24d;   /* âmbar */
  --action:#6d2bbd;     /* roxo do botão de ação — cola de marca, em TODOS os públicos */
}
```

- [ ] **Step 2:** Nos 3 módulos CSS acima, substituir os hex literais duplicados (`#ff6a2b`, `#4a4036`, etc.) por `var(--...)`. Não alterar valores visuais — só trocar a fonte do valor.
- [ ] **Step 3:** Verificar: `cd site && npm run build` → build limpo.
- [ ] **Step 4:** Preview: screenshot de `/` e `/contato` (ver `screenshot-site-workflow`). Esperado: pixel-idêntico ao atual.
- [ ] **Step 5:** Commit: `git add site/app/globals.css site/components/*.module.css && git commit -m "refactor(site): centraliza tokens de cor em :root"`

### Task 0.2: Remover chrome legado do layout

**Files:**
- Modify: `site/app/layout.tsx:109-111` (injeção de `Header`/`Footer` legados)
- Modify: `site/components/InnerPage.tsx` (remover hack `proto-clean`)
- Delete: `site/components/Header.tsx`, `site/components/Footer.tsx`

- [ ] **Step 1:** Em `layout.tsx`, remover import e render de `Header`/`Footer` legados. Garantir que `SiteHeader`/`SiteFooter` (via `InnerPage` ou diretos) são o único chrome.
- [ ] **Step 2:** Em `InnerPage.tsx`, remover o `useEffect`/className `proto-clean` (não há mais legado para esconder).
- [ ] **Step 3:** Em `globals.css`, remover as regras `html.proto-clean .ov-header{display:none}` e afins (manter `.ov-scroll-progress`, ainda usado por `ScrollProgress`). Isolar o restante dos `--ov-*` órfãos sob um comentário `/* LEGADO — aposentar */` ou remover os comprovadamente mortos.
- [ ] **Step 4:** `git rm site/components/Header.tsx site/components/Footer.tsx`.
- [ ] **Step 5:** Verificar: `npm run build` limpo + grep por `from "./Header"`/`Footer` sem resultados.
- [ ] **Step 6:** Preview: screenshot `/` e `/contato` → um só header/footer, sem flash de chrome antigo.
- [ ] **Step 7:** Commit: `git commit -am "refactor(site): aposenta Header/Footer legados, shell único"`

### Task 0.3 (GATE de aprovação): Deploy de verificação da Onda 0

- [ ] **Step 1:** Com OK do Carlos, `git push` (ou preview branch) → conferir produção/preview sem regressão visual.
- [ ] **Step 2:** Carlos confirma "está igual / shell limpo". **Só então iniciar Onda 1.**

---

## ONDA 1 — Config de públicos + seletor + hub + rotas vazias

Objetivo: a bifurcação funciona ponta a ponta (clicar numa "porta" leva ao sub-site; trocar de público no header funciona), mesmo com sub-sites ainda esqueléticos.

### Task 1.1: `lib/audiences.ts` + resolvedor (TDD)

**Files:**
- Create: `site/lib/audiences.ts`
- Create: `site/lib/audiences.test.mjs`

- [ ] **Step 1 (teste falhando):** criar `audiences.test.mjs`:

```js
import assert from "node:assert";
import { AUDIENCES, resolveAudience } from "./audiences.ts";

assert.equal(AUDIENCES.length, 3);
assert.equal(resolveAudience("/para-empresas").key, "empresa");
assert.equal(resolveAudience("/passeador/qualquer").key, "passeador");
assert.equal(resolveAudience("/"), null);          // hub = sem público ativo
assert.equal(resolveAudience("/contato"), null);   // rota neutra
console.log("ok");
```

- [ ] **Step 2 (rodar, ver falhar):** `cd site && node --experimental-strip-types lib/audiences.test.mjs` → FAIL (módulo não existe).
- [ ] **Step 3 (implementar mínimo):** criar `audiences.ts`:

```ts
export type AudienceKey = "tutor" | "passeador" | "empresa";

export interface Audience {
  key: AudienceKey;
  navLabel: string;     // header (orientado a tarefa)
  shortLabel: string;   // switcher curto
  route: string;
  accent: string;
  accent2: string;
  ctaLabel: string;
  ctaHref: string;
}

export const AUDIENCES: Audience[] = [
  { key: "tutor", navLabel: "Para tutores", shortLabel: "Tutor",
    route: "/tutor", accent: "#f4671e", accent2: "#ffb24d",
    ctaLabel: "Procure seu petshop", ctaHref: "/tutor#encontrar" },
  { key: "passeador", navLabel: "Seja passeador", shortLabel: "Passeador",
    route: "/passeador", accent: "#6d2bbd", accent2: "#8f45dd",
    ctaLabel: "Quero me cadastrar", ctaHref: "/passeador#cadastro" },
  { key: "empresa", navLabel: "Para sua empresa", shortLabel: "Empresas",
    route: "/para-empresas", accent: "#1f7a5a", accent2: "#f4671e",
    ctaLabel: "Solicitar diagnóstico", ctaHref: "/contato?perfil=empresa" },
];

export function resolveAudience(pathname: string): Audience | null {
  return AUDIENCES.find(a => pathname === a.route || pathname.startsWith(a.route + "/")) ?? null;
}
```

- [ ] **Step 4 (rodar, ver passar):** repetir Step 2 → `ok`.
- [ ] **Step 5:** Commit: `git add site/lib/audiences.* && git commit -m "feat(site): config central de públicos + resolveAudience (TDD)"`

> **Nota verde (gate da decisão 2):** o `accent` de `empresa` está como verde `#1f7a5a` mas **não é aplicado visualmente até a Task 2.0** (preview de validação). Até lá ele existe só na config.

### Task 1.2: `AudienceSwitcher` no header

**Files:**
- Create: `site/components/AudienceSwitcher.tsx`, `site/components/AudienceSwitcher.module.css`
- Modify: `site/components/SiteHeader.tsx`

- [ ] **Step 1:** `AudienceSwitcher.tsx` (client): usa `usePathname()` + `resolveAudience`; renderiza os 3 `navLabel` como links; o ativo recebe `aria-current="page"` e sublinhado na cor `accent` do público. Logo do header sempre `href="/"`.
- [ ] **Step 2:** CTA contextual no header: se há público ativo, mostra `ctaLabel`/`ctaHref` dele; no hub mostra "Solicitar diagnóstico".
- [ ] **Step 3:** Plugar no `SiteHeader.tsx`. Mobile: as 3 portas como primeiras linhas do drawer (pills grandes na cor-assinatura).
- [ ] **Step 4:** Verificar: `npm run build` limpo.
- [ ] **Step 5:** Preview no `/proto` (montar instância do header) → screenshot: switcher visível, ativo marcado ao navegar.
- [ ] **Step 6:** Commit: `git commit -am "feat(site): AudienceSwitcher persistente no header"`

### Task 1.3: Rotas vazias dos 3 sub-sites + `AudienceLayout`

**Files:**
- Create: `site/components/AudienceLayout.tsx`
- Create: `site/app/tutor/page.tsx`, `site/app/passeador/page.tsx`, `site/app/para-empresas/page.tsx`

- [ ] **Step 1:** `AudienceLayout.tsx`: recebe `aud: AudienceKey`, envolve o conteúdo num wrapper com `data-aud={aud}` (para os tokens escopados), reusa `InnerPage`/shell. Slot de hero + children.
- [ ] **Step 2:** Em `globals.css`, adicionar os blocos escopados (com o verde **comentado/neutralizado** até a Task 2.0):

```css
[data-aud="tutor"]     { --accent:#f4671e; --accent-2:#ffb24d; }
[data-aud="passeador"] { --accent:#6d2bbd; --accent-2:#8f45dd; }
[data-aud="empresa"]   { --accent:#6d2bbd; --accent-2:#f4671e; } /* TEMP roxo; vira verde após preview (Task 2.0) */
```

- [ ] **Step 3:** Criar as 3 `page.tsx` mínimas (hero placeholder + `metadata` própria + `export const` título), cada uma via `AudienceLayout` com seu `aud`.
- [ ] **Step 4:** Verificar: `npm run build` → 3 rotas geradas; navegar `/tutor`, `/passeador`, `/para-empresas` carrega.
- [ ] **Step 5:** Commit: `git commit -am "feat(site): rotas /tutor /passeador /para-empresas + AudienceLayout"`

### Task 1.4: Hub enxuto — cards "3 portas" com links reais

**Files:**
- Create: `site/components/AudienceCard.tsx`
- Modify: `site/components/EditorialHomeV2.tsx` (seção `#para-quem`)

- [ ] **Step 1:** `AudienceCard.tsx`: card grande na cor-assinatura do público (lê de `AUDIENCES`), com `href={route}`. Substitui os cards mortos (`#contato`/`#`).
- [ ] **Step 2:** Em `EditorialHomeV2.tsx`, trocar a seção `#para-quem` por 3 `AudienceCard` (tutor/passeador/empresa). Esta é a bifurcação central.
- [ ] **Step 3:** Verificar: build limpo; clicar cada card vai à rota certa.
- [ ] **Step 4:** Preview `/proto` → screenshot dos 3 cards coloridos linkando.
- [ ] **Step 5:** Commit: `git commit -am "feat(site): hub roteia via 3 portas (AudienceCard) com links reais"`

### Task 1.5 (GATE): Deploy de verificação da Onda 1
- [ ] Com OK do Carlos: deploy → confirmar que a bifurcação funciona ao vivo (hub → sub-site → troca de público). **Só então Onda 2.**

---

## ONDA 2 — Sub-site `/para-empresas` (primeiro: é quem paga)

### Task 2.0 (GATE da 4ª cor): Preview de validação do verde

**Files:** Modify: `site/app/globals.css` ([data-aud="empresa"]) — em branch/`/proto` primeiro.

- [ ] **Step 1:** Montar no `/proto` uma amostra do hero `/para-empresas` em DUAS versões: (A) verde `#1f7a5a` como acento (eyebrow/ícone/KPI, nunca texto longo) + botão roxo; (B) roxo institucional (plano B).
- [ ] **Step 2:** Checar contraste **WCAG AA** do verde sobre creme (texto e UI). Registrar resultado.
- [ ] **Step 3:** Carlos escolhe A ou B em preview (design-shotgun style). Travar `[data-aud="empresa"]` com a escolha (remover o TEMP roxo da Task 1.3 se for A).
- [ ] **Step 4:** Commit: `git commit -am "design(site): trava cor-assinatura do /para-empresas (verde|roxo) pós-preview"`

### Task 2.1: Migrar conteúdo B2B da home + Planos/Módulos/BrandSwapper

**Files:**
- Modify: `site/app/para-empresas/page.tsx`, `site/components/EditorialHomeV2.tsx`
- Move: bloco White-Label+rede + Planos (inline em `EditorialHomeV2`) → `/para-empresas`
- Move: `site/components/BrandSwapper.tsx` (uso) → `/para-empresas`
- Create: `site/components/PricingPlans.tsx`, `site/components/FAQ.tsx`
- Reuse: conteúdo de `site/app/white-label/page.tsx`

- [ ] **Step 1:** `PricingPlans.tsx` data-driven (Starter 197 / Business 597 / Enterprise sob consulta + comissão por plano). Fonte de dados em `lib/content.ts`.
- [ ] **Step 2:** `FAQ.tsx` data-driven (recebe array de Q&A); popular com as 4 objeções atuais do `/white-label` + "uso a rede pronta de passeadores?" (cross-link `/passeador`).
- [ ] **Step 3:** Montar `/para-empresas` na ordem da spec §4.3: Hero B2B + BrandSwapper → Oportunidade/rede → Diagrama arquitetura → 5 módulos → PricingPlans → Rollout → FAQ → ContactSection perfil=empresa.
- [ ] **Step 4:** Remover esses blocos da `EditorialHomeV2` (hub fica leve).
- [ ] **Step 5:** Verificar build + preview `/proto` da página inteira.
- [ ] **Step 6:** Commit: `git commit -am "feat(site): sub-site /para-empresas completo (planos, módulos, brandswapper, faq)"`

### Task 2.2: `ContactSection` segmentado por perfil

**Files:** Modify: `site/components/ContactSection.tsx`; `site/app/contato/page.tsx`

- [ ] **Step 1:** `ContactSection` aceita prop `perfil?: "tutor"|"passeador"|"empresa"`; condiciona campos/`interest` (empresa: unidades/tipo de negócio; passeador: cidade; tutor: petshop).
- [ ] **Step 2:** `/contato` lê `?perfil=` (searchParams) e pré-seleciona.
- [ ] **Step 3:** Build + preview `/contato?perfil=empresa`.
- [ ] **Step 4:** Commit: `git commit -am "feat(site): ContactSection segmentado por perfil"`

### Task 2.3 (GATE): Deploy + sign-off do `/para-empresas`

---

## ONDA 3 — Sub-site `/passeador`

### Task 3.1: Componentes de prova do passeador
**Files:** Create `site/components/EarningsBars.tsx` (retematiza `.ov-earn-bars`), `VerifiedBadge.tsx` (retematiza `.ov-walker-badge`).
- [ ] EarningsBars: barras de faixa de ganho (dados em `lib/content.ts`, placeholder até Onda 6). VerifiedBadge: selo circular giratório. Build + preview. Commit.

### Task 3.2: Montar `/passeador` (eleva `/seja-passeador`)
**Files:** Modify `site/app/passeador/page.tsx`; reuse `site/app/seja-passeador/page.tsx`.
- [ ] Ordem da spec §4.2: Hero "renda recorrente" → EarningsBars → Rede global/convite (canônico, ver `modelo-tutor-passeador-tenant`) → Credenciamento KYC → Score + direito de revisão → prova social → FAQ → ContactSection perfil=passeador. Build + preview. Commit.

### Task 3.3 (GATE): Deploy + sign-off.

---

## ONDA 4 — Sub-site `/tutor` (último; CTA duplo aprovado)

### Task 4.1: Página do zero com CTA duplo
**Files:** Modify `site/app/tutor/page.tsx`; reuse `LiveMap.tsx`; create `SafetyProof` (seção).
- [ ] Ordem da spec §4.1: Hero afetivo → Prova de segurança (selo KYC + LiveMap + fotos) → Como funciona (4 passos) → "E se der errado" (tabela de cancelamento de `/termos/tutor`) → FAQ → **CTA duplo**: "Seu petshop já usa? Sim→baixar app da marca / Não→indicar petshop (lead B2B → `/contato?perfil=empresa`)". Build + preview. Commit.

### Task 4.2 (GATE): Deploy + sign-off.

---

## ONDA 5 — Amarração: redirects + sitemap + cross-linking

### Task 5.1: Redirects 308 (atômico com sitemap)
**Files:** Modify `site/next.config.ts`, `site/app/sitemap.ts`
- [ ] **Step 1:** Adicionar 308: `/seja-passeador`→`/passeador`; `/white-label`→`/para-empresas` (manter `/como-funciona` e `/demo-white-label`→`/#plataforma-por-dentro`). Sem alias ambíguo.
- [ ] **Step 2:** `sitemap.ts`: adicionar `/tutor` (0.8), `/passeador` (0.8), `/para-empresas` (0.9); **remover** `/seja-passeador` e `/white-label` **no mesmo commit**.
- [ ] **Step 3:** Build; checar `curl -I` (ou navegação) das rotas antigas → 308 para as novas.
- [ ] **Step 4:** Commit único: `git commit -am "feat(site): 308 redirects + sitemap das novas rotas (atômico)"`

### Task 5.2: Cross-linking entre spokes + footer 3 mundos
**Files:** Modify `site/components/SiteFooter.tsx` + cada sub-site.
- [ ] Footer com coluna "Participantes" → 3 sub-sites + hub. Cross-links: empresas→passeador (rede pronta); passeador→contexto empresa (convite); tutor→empresas ("seu petshop ainda não usa?"). Build + preview. Commit.

### Task 5.3: Desmontar `PlatformPeek` e `AppDownload` residuais
**Files:** Modify/Delete conforme tabela §7 da spec (TutorPhone→/tutor, PasseadorPhone→/passeador, AdminBrowser→/para-empresas; AppDownload card tutor→/tutor, Walk→/passeador). Build + preview. Commit.

### Task 5.4 (GATE): Deploy + sign-off da estrutura completa.

---

## ONDA 6 — Conteúdo de prova (paralela, não-código) — depende do Carlos

- [ ] Coletar depoimentos reais (tutor/passeador/empresa), faixas de ganho reais, screenshots de app/painel em alta. Popular `lib/content.ts` (dados de `Testimonials`/`EarningsBars`/`PricingPlans`). **Bloqueada pela decisão 7 da spec** (Carlos tem clientes-piloto/depoimentos?).
- [ ] Substituir `appDownloadHref` placeholder (`/contato`) pelos links reais de loja **quando o Carlos liberar** (hoje são de teste — ver `retomada-2026-06-16`). Sem isso, CTAs de download ficam fracos.

---

## Self-Review (writing-plans)

**1. Cobertura da spec:** §1 diagnóstico→contexto; §3 rotas→Tasks 1.3/5.1; §4 anatomia→Ondas 2/3/4; §5 hub→Task 1.4/2.1; §6 navegação/switcher→Task 1.2 + cross-link 5.2; §7 refactor→Ondas 0/2/5 (tabela coberta); §8 ondas→1:1; §9 SEO→Task 5.1; §10 decisões→1 e 2 já respondidas, 3-8 marcadas como dependências (Onda 6/gates); §11 riscos→gates (Onda 0 GATE, Task 2.0 preview verde, cross-link junto do switcher, redirect atômico). Gaps conscientes: decisões 3/5/8 da spec a confirmar na execução (rota names, expor preços só em /para-empresas, destino `--ov-*`) — listadas, não esquecidas.

**2. Placeholders:** código determinístico (audiences.ts, tokens, redirects, teste) está completo; tarefas de design (heros/seções) são especificadas por **ordem + headline + CTA + componentes** (não JSX final de propósito — o visual passa por preview/design-shotgun e a cor verde tem gate). Isso é intencional dado o caráter visual e a decisão de validar em preview, não um placeholder de lógica.

**3. Consistência de tipos:** `AudienceKey`/`Audience`/`resolveAudience`/`AUDIENCES` usados consistentemente entre 1.1→1.2→1.3→1.4. `data-aud` casa com os blocos CSS escopados. `perfil` em ContactSection casa com `?perfil=` e com `ctaHref` de empresa.

---

## Execução

Plano salvo em `site/docs/2026-06-16-plano-hub-3-subsites.md`. Duas opções:
1. **Subagent-Driven (recomendado)** — um subagente por tarefa, revisão entre tarefas.
2. **Inline** — executar nesta sessão com checkpoints.

**Importante:** a Onda 0 é GATE; a Task 2.0 (verde) é GATE de design; deploys são GATE do Carlos (Vercel = produção). Nada vai ao ar sem o "ok".
