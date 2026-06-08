# Handoff — Implementar a identidade "Operação Viva" do Aumigão Walk

## Fonte da verdade visual
`app/site/_design/aumigao-walk-v7.html` — protótipo estático, completo e responsivo.
**Reproduza fielmente este arquivo.** Em dúvida visual, o HTML manda.
NÃO embutir em iframe: recriar em componentes nativos do projeto (Next.js App Router).

## Conceito da marca
"Operação Viva": infraestrutura séria com pulso vivo — a precisão de uma fintech/logística,
com calor. Dark-first, técnico, premium. Não é fofo, não é frio.

## Escopo
- Trabalhar **apenas** em `app/site`.
- **Não** alterar: `backend`, `frontend`, `admin-web`.
- **Não** commit, push ou deploy.

## Regras invioláveis
- **Zero screenshots** públicos. Não referenciar `/screenshots/` nem `public/screenshots/`.
- Visualizações 100% **conceituais** (SVG/CSS): rota, pulso, painel — nunca a UI real.
- Painel e ganhos usam **dados ilustrativos** com nota visível. Nunca métricas/logos falsos.

## Hierarquia de conversão (importante)
- **CTA primário único** (gradiente âmbar): "Solicitar diagnóstico White Label".
- Passeador = público secundário, CTA secundário (ghost): "Quero ser passeador".
- Não criar dois CTAs primários concorrentes.

## Stack
Detectar a convenção de `app/site` e seguir.
- Tailwind: portar tokens para `tailwind.config` (theme.extend).
- CSS Modules/styled: replicar via tokens.
- Fontes via `next/font/google`.

## Design tokens
**Cores**
- bg `#140F1B` · bg-2 `#1A1422` · surface `#221A2D` · surface-2 `#2A2137`
- text `#F6F1F8` · text-2 `rgba(246,241,248,.72)` · text-3 `rgba(246,241,248,.46)`
- **ember (acento)** `#FF6A2B` · ember-2 `#FFA24D` · ember-deep `#E2490F`
- bone (seção clara) `#F2EADC` · bone-2 `#FBF6EC` · ink `#1B1320` · ink-2 `#5C5468`
- ok/live `#4FD69C`
- linha `rgba(255,255,255,.09)` · hairline `rgba(255,255,255,.15)` · linha-ink `rgba(27,19,32,.12)`

**Tipografia**
- Display: **Schibsted Grotesk** (700/800), tracking -0.025 a -0.035em
- Corpo: **Hanken Grotesk** (400–600)
- Dados/eyebrows/labels: **JetBrains Mono** (500), uppercase, tracking 0.1–0.24em
- Logotipo (somente a marca AUmigão): **Baloo 2** (700/800) — não usar em texto corrido

**Forma**: botões/cards 12–16px · pills 999px · console 24px · raio padrão 14–20px.

**Motivos assinatura (manter consistentes)**
- **Rota/pulso**: linha animada (dash flow + ponto viajante) = passeio + monitoramento. Aparece no card "operação ao vivo" (hero) e como divisor na seção de fluxo.
- **Status "ao vivo"**: ponto pulsante (verde=ok, âmbar=recovery) + timestamps/labels mono.
- Predominância dark; **bone só como respiro pontual** (seção Confiança).
- Âmbar é o **único** acento de cor; "tecnologia" vem de estrutura/dados/precisão, não de uma 2ª cor.
- Glow + grão de ruído + sombras profundas contidas.


## Assets de marca (já prontos — pasta aumigao-brand-pack)
Colocar em `app/site/public/`:
- Logos transparentes: `au-mark.png` (header/selos), `aumigao-walk-lockup.png`, `aumigao-walk-lockup-roxo.png`
- Favicon/app: `favicon.ico`, `favicon-16.png`, `favicon-32.png`, `apple-touch-icon-180.png`, `icon-192.png`, `icon-512.png`
- `site.webmanifest` em `public/`; tags do `<head>` em `favicons-head.html` → colar no `app/layout.tsx`
- Header/rodapé: usar `au-mark.png` num squircle roxo (#8C52FF→#6A3DE0), como no protótipo v7. NÃO recriar a marca em fonte.

## Seções da Home (ordem)
1. Header (com indicador "Operação online")
2. **EcosystemHero** + **LiveOperationCard** (rota animada + score + status)
3. **TrustMarquee** (faixa de atributos: credenciamento, auditoria, LGPD, recovery…)
4. **OperationFlow** (8 passos + divisor de pulso)
5. **ConceptCommandCenter** (módulos + sparklines + anel de score; nota ilustrativa)
6. **SecurityTrust** ("Confiança não é promessa, é arquitetura") — 6 pilares — **seção bone**
7. **ParticipantJourney** (Tutor / Passeador / Empresa)
8. **WalkerOpportunity** (renda recorrente; CTA secundário; viz de ganhos ilustrativa)
9. **WhiteLabelArchitecture** (Sua marca → camadas → Receita/Fidelização/Escala)
10. **AssistedDeployment** (4 passos)
11. **Faq** (acordeão)
12. **EnterpriseCTA**
13. **Footer** robusto (mapa do site, LGPD, CNPJ, ©)

## Componentes a criar
`EcosystemHero`, `LiveOperationCard`, `TrustMarquee`, `OperationFlow`, `ConceptCommandCenter`,
`SecurityTrust`, `ParticipantJourney`, `WalkerOpportunity`, `WhiteLabelArchitecture`,
`AssistedDeployment`, `Faq`, `EnterpriseCTA`, `SiteFooter`.
Primitivos: `SectionEyebrow`, `StatusPill`, `LiveDot`, `MetricChip`, `RouteVisual`.

## Comportamentos
- Reveal-on-scroll com stagger (IntersectionObserver).
- Anel de score anima no reveal; rota/pulso animam (dash + ponto).
- Marquee de confiança em loop, pausa no hover.
- FAQ acordeão (uma aberta por vez).
- Responsivo nos breakpoints do protótipo: 940 / 920 / 880 / 860 / 840 / 780 / 480px.
- Logo: usar a marca AUmigão (monograma 'AU' + coração âmbar) em Baloo 2, conforme app/site/_design/logo-refresh.html. Monograma 'AU' para ícone/favicon; lockup horizontal no header. NÃO substituir por marca abstrata.

## Critérios de aceite
- [ ] Bate visualmente com `aumigao-walk-v7.html` (cor, tipografia, espaçamento, motivos).
- [ ] CTA primário único = White Label; passeador é secundário.
- [ ] Nenhuma página pública usa `/screenshots/`.
- [ ] Dados de painel/ganhos marcados como ilustrativos; sem números/logos falsos.
- [ ] Componentes criados conforme a lista (ou equivalentes documentados).
- [ ] Responsivo; `npm run build` passa.

## Validação final (reportar)
1. Arquivos criados · 2. Alterados · 3. `npm run build`
4. `git status --short` · 5. `git diff --stat`
6. Confirmação: nenhuma página pública usa `/screenshots/`
**Sem commit. Sem push. Sem deploy.**
