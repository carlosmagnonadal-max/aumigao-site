# Relatório Final — Arquitetura do Site Aumigão Walk: de "tudo numa página" para "hub + 3 sub-sites"

**Para:** Carlos
**De:** Arquiteto-chefe (síntese de 4 mapas do site real + pesquisa NN/g + 3 propostas + 3 juízes)
**Data:** 2026-06-16
**Decisão pedida:** aprovar o modelo recomendado e as decisões em aberto da seção 10.

---

## 1. Diagnóstico — por que "tudo numa página" confunde hoje

A confusão que você sente não é impressão: é estrutural e está comprovada nos arquivos reais. Três fatos concretos:

**a) A home é, na prática, um funil White-Label disfarçado de "porta de todos".** Das 9 seções de `EditorialHomeV2.tsx`, as seções 4 (White-Label + rede), 5 (Planos), 6 (Módulos) falam **só com a empresa pet que paga**. O Hero (1) lista "Tutor · Passeador · White-Label" no eyebrow, mas os CTAs ("Solicitar diagnóstico", "Portal do parceiro") e os stats ("módulos", "auditável") falam apenas com o B2B. Tutor e passeador são **citados como argumento de venda, nunca tratados como destinatários com jornada própria.**

**b) Três seções empilham 2–3 públicos no mesmo bloco — os "nós de mistura":**
- `PlatformPeek` (seção 3): abas que trocam tutor / passeador / admin **no mesmo componente**, cada aba com um CTA diferente (baixar app / baixar Walk / contato). Três jornadas comprimidas numa só. É o maior ponto de confusão.
- `AppDownload` (seção 7): app do tutor e app Walk (passeador) como cards gêmeos — dois públicos de natureza diferente lado a lado.
- `ContactSection` (seção 8): o form tem `interest` com "Quero ser passeador" e "Quero suporte" dentro de um funil desenhado para diagnóstico B2B ("número de unidades", "tipo de negócio"). Passeador e tutor caem num funil que não é deles.

**c) As "portas" para os 3 públicos não existem.** A seção "Para quem é" (`#para-quem`) é o único lugar que trata os 3 em pé de igualdade — mas **os cards não linkam para lugar nenhum** (apontam para `#contato` / `#`). E nas rotas: existe `/white-label` e `/seja-passeador`, mas **não existe `/tutor`** — o público tutor é órfão de marketing (só tem termos jurídicos). Dos 3 públicos, só 2 têm sub-site, e nenhum tem porta de entrada real.

**d) Agravante técnico: o chrome está triplicado.** O `layout.tsx` (linhas 109–111) injeta `Header`/`Footer` legados (`ov-*`, tema antigo "Operação Viva", roxo `#7B4DF2`, **com links para âncoras que não existem mais** — `#funciona`, `#confianca`, `#cta`). Por cima, as páginas internas usam `InnerPage` → `SiteHeader`/`SiteFooter` (editorial), com um hack `proto-clean` que **esconde via CSS** o legado em vez de removê-lo. E a home tem chrome próprio embutido. Resultado: até 3 headers e 3 footers convivendo, e tokens de cor duplicados à mão em 3 arquivos CSS (já divergindo: `--muted` é `#7a6e60` num, `#7c7468` noutro).

**Síntese do diagnóstico:** o site não está quebrado — está **desconvergido**. Os 3 públicos estão entrelaçados em quase toda a home, o tutor não tem casa, e o shell visual está triplicado. A seção "Para quem é" é o candidato natural a virar o roteador.

---

## 2. Princípio da solução (a tese em 1 parágrafo)

Mantemos a home atual como uma **camada geral (hub)** — a porta de entrada da marca que apresenta o Aumigão Walk como plataforma e **roteia** para 3 espaços; e criamos **3 sub-sites em subpasta** (`/tutor`, `/passeador`, `/para-empresas`), cada um um microsite completo com narrativa, prova e CTA próprios, amarrados por um **seletor de público sempre visível no topo** (estilo Uber: "Tutores · Passeadores · Para Empresas") que permite trocar de mundo a 1 clique. O hub **apresenta e distribui**; os sub-sites **convencem e convertem**. É um só site, três espaços nítidos — não três marcas, porque o palco visual (creme + Fraunces + botão roxo + motion) é imutável e compartilhado.

---

## 3. Modelo recomendado

### Nome: **Hub-and-Spoke + Audience Switcher persistente, em subpasta** — híbrido **"P3 (estrutura/prova) com o rigor de SEO da P1"**.

As 3 propostas convergiram para a **mesma arquitetura** (hub + 3 spokes em subpasta + switcher). A escolha, portanto, é de **execução**, e aqui eu não fico em cima do muro: **adoto a Proposta 3 como base e enxerto o rigor de rota/SEO da Proposta 1.** Por quê:

- **A P3 venceu nas duas lentes que mais importam para o seu negócio** — o Juiz 1 (clareza-UX, total **8.6**) e o Juiz 2 (negócio-conversão, total **8.6** para P1, mas elogiando a P3 como "mais rica em conteúdo de conversão"). A P3 é a **única que componentiza a prova que de fato converte**: `Testimonials`, `EarningsBars`, `VerifiedBadge`, `PricingPlans`, `FAQ` reutilizável por dados, `AudienceCard` — em vez de listar "conteúdo a produzir" como nota de rodapé. Para um site cujos sub-sites hoje são "100% texto sem prova visual", isso é a diferença entre subir "bonito e vazio" ou subir convertendo.
- **A P1 venceu na lente de negócio do Juiz 2 (8.6) e tem o melhor mapa de execução** — ordem faseada explícita, mapa MOVE/SHARED/CRIA por arquivo, e o rótulo comercialmente correto `/para-empresas` (não `/white-label`, que é jargão que ninguém busca). **Enxerto isso.**
- **O Juiz 3 (eng-SEO) preferiu a P2** só pela limpeza de redirect — mas apontou que o `localStorage` da P2 é "a feature de menor ROI do pacote" e adiciona risco de hidratação no Next 15. **Descartamos o localStorage do MVP** (vira melhoria opcional pós-lançamento) e adotamos os 308 limpos que ele elogiou.

O ponto fraco da P1 que o Juiz 3 puniu (SEO 7) era a **indecisão `/white-label` vs `/para-empresas`** (manter alias OU 308). Resolvo isso definitivamente abaixo: **308 limpo, sem alias ambíguo** (a abordagem que P2/P3 cravaram e o Juiz 3 deu nota 9).

### Mapa de rotas final (árvore)

```
/                         HUB — home Calor Editorial repaginada (apresenta + roteia)
│
├── /tutor                SUB-SITE TUTOR        (NOVO — preenche a lacuna órfã)
├── /passeador            SUB-SITE PASSEADOR    (eleva /seja-passeador)
├── /para-empresas        SUB-SITE WHITE-LABEL  (eleva /white-label; o público que paga)
│
├── /contato              roteador segmentado por ?perfil=tutor|passeador|empresa
│
├── /termos               (inalterado — já é por perfil)
│   ├── /termos/gerais
│   ├── /termos/tutor
│   ├── /termos/passeador
│   └── /termos/white-label
├── /privacidade          (inalterado)
│
├── /seja-passeador  ──── redirect 308 → /passeador
├── /white-label     ──── redirect 308 → /para-empresas
├── /como-funciona   ──── redirect 308 → /#plataforma-por-dentro (mantido)
├── /demo-white-label ─── redirect 308 → /#plataforma-por-dentro (mantido)
└── /proto                preview interno (fora do sitemap)
```

**Decisões de rota cravadas (fim da ambiguidade que custou SEO à P1):**
- URL canônica do B2B = **`/para-empresas`** (rótulo orientado a tarefa, recomendação NN/g; "white-label" é jargão que o tutor/passeador não entendem). `/white-label` faz **308 puro** para ela — sem alias, sem `rel=canonical` concorrente.
- URL canônica do passeador = **`/passeador`**; `/seja-passeador` faz **308 puro**.
- **Subpasta, nunca subdomínio**: domínio jovem (`aumigaowalk.com.br`), autoridade frágil — subpasta consolida link equity. Subdomínio (estilo `drivers.uber.com`) só se justifica para experiência operacionalmente separada, que não é o caso de páginas de marketing.

---

## 4. Anatomia de cada sub-site

Esqueleto editorial comum: **hero → prova → como funciona → FAQ → CTA → cross-link**. Varia copy, cor-assinatura e motivo gráfico.

### 4.1 `/tutor` — o público órfão (construir do zero)
- **JTBD / pergunta-chave ao chegar:** *"Meu cão vai estar seguro — e como eu acompanho isso?"*
- **Identidade visual:** cor-assinatura **tangerina `#f4671e` + âmbar `#ffb24d`** (afetivo, "meu cachorro"); motivo = **mapa ao vivo + patinha pulsante** (`LiveMap`) e phone afetivo (🐾).

| # | Seção | Headline-exemplo |
|---|---|---|
| 1 | Hero | **"Você sai. Ele passeia. *Você vê tudo.*"** (itálico Fraunces tangerina em "Você vê tudo") |
| 2 | Prova de segurança | "Cada passeador é *verificado*. Cada passeio é *rastreado*." — selo KYC + `LiveMap` + fotos do passeio |
| 3 | Como funciona (4 passos) | "Agende. Acompanhe. Respire." (baixar app da marca → cadastrar pet → agendar → acompanhar/avaliar) |
| 4 | E se algo der errado? | "Reembolso integral se o passeio falhar." (puxa a tabela de cancelamento de `/termos/tutor`) — *enxerto da P1* |
| 5 | FAQ confiança | É seguro? Quem é o passeador? Como pago/cancelo? Como acompanho? |
| 6 | CTA de fechamento | **"Seu petshop já usa Aumigão?"** → caminho duplo (ver abaixo) |

- **CTA (decisão de produto — ver seção 10):** o tutor **não baixa app genérico** — usa o app da marca do petshop dele. CTA duplo recomendado: **"Sim → baixar o app da minha marca"** / **"Não → indicar meu petshop"** (este vira **lead comercial White-Label**). Esse caminho duplo — o melhor achado das propostas — transforma o tráfego do público que **não paga** em pipeline do público que **paga**.

### 4.2 `/passeador` — tem base em `/seja-passeador`, falta aprofundar
- **JTBD / pergunta-chave:** *"Quanto eu ganho, quando recebo, e isso é estável/profissional?"*
- **Identidade visual:** cor-assinatura **roxo `#6d2bbd`** — *oficializa o que o app Walk já é* (a patinha do mapa, o marcador, o logo do app já são roxos no produto); motivo = **selo circular giratório verificado** + **barras de ganhos** (retematizar `.ov-walker-badge` / `.ov-earn-bars` do legado) + rota tracejada.

| # | Seção | Headline-exemplo |
|---|---|---|
| 1 | Hero | **"Cuidar de cães virou profissão. Com *renda recorrente*."** (não é bico) |
| 2 | Quanto dá pra ganhar | faixa realista + repasses + gorjetas + incentivos (`EarningsBars`) — *o que mais converte, hoje inexistente* |
| 3 | Rede global (canônico) | "Uma rede, vários petshops — você entra **por convite e aceite**." (regra canônica, hoje só no jurídico) |
| 4 | Credenciamento (KYC) + funil pós-clique | "Sério desde o cadastro." + tempo de aprovação, primeiros passeios |
| 5 | Reputação/Score + **direito de revisão** | "Foi suspenso injustamente? Você tem direito a revisão." (trunfo STJ/LGPD art.20, hoje preso no jurídico) |
| 6 | Prova social | depoimentos de passeadores, evolução por score (*a produzir*) |
| 7 | FAQ | Preciso de experiência? Tenho vínculo/CLT? Quando recebo? E se me suspenderem? |
| 8 | CTA + canal de dúvida | mini-`ContactSection` (perfil=passeador) |

- **CTA principal:** "Quero me cadastrar" → download Walk; secundário "Tenho dúvidas" → `/contato?perfil=passeador`.

### 4.3 `/para-empresas` — o mais maduro (`/white-label` atual), faltam os números
- **JTBD / pergunta-chave:** *"Quanto custa, quanto eu ganho, e qual o risco/esforço para minha equipe?"*
- **Identidade visual:** cor-assinatura **verde-confiança `#1f7a5a` + tangerina** (sério/auditável/receita) — **risco da 4ª cor, ver seção 11**; motivo = **diagrama de arquitetura** + mock admin escuro + efeito de rede.

| # | Seção | Headline-exemplo |
|---|---|---|
| 1 | Hero B2B | **"Sua marca pet. *Nova receita recorrente.* Zero tecnologia para montar."** + `BrandSwapper` |
| 2 | Oportunidade + efeito de rede | tutores são seus, passeadores são da rede pronta |
| 3 | Diagrama de arquitetura | "Sua marca → 6 camadas → resultados" (motivo gráfico que já existe) |
| 4 | 5 módulos + multiunidade | Matching / Score / Credenciamento / Recovery / Financeiro |
| 5 | **Planos visíveis** (`PricingPlans`) | Starter 197 / Business 597 / Enterprise sob consulta + comissão por plano — *o que mais vende B2B, hoje só na home* |
| 6 | Rollout assistido | Diagnóstico → Personalização → Configuração → Operação + "o que recebo no dia 1 / go-live" |
| 7 | Objeções/FAQ | as 4 atuais + "uso a rede pronta de passeadores?" → cross-link `/passeador` + exclusividade |
| 8 | `ContactSection` (perfil=empresa) | "Solicitar diagnóstico" |

- **CTA principal:** "Solicitar diagnóstico" → `/contato?perfil=empresa`; secundário "Ver planos".

---

## 5. Camada geral (hub) — o que mostra, o que delega

**Mostra (fica no hub — leve, é camada de marca):**
1. **Hero geral** (`HeroMerged` parametrizado para copy de **marca/plataforma**, não White-Label) — o eyebrow "Tutor · Passeador · White-Label" agora com **portas reais**.
2. **Bloco roteador "3 portas"** (evolução de `#para-quem`) = **o coração da bifurcação**. 3 cards grandes (`AudienceCard`), cada um na sua cor-assinatura, **com link real** para `/tutor`, `/passeador`, `/para-empresas`. **Este é o conserto central** — hoje esses cards não levam a lugar nenhum.
3. **Peek de plataforma enxuto** — 1 frase + 1 thumb por mundo, cada um linkando ao seu sub-site (substitui as abas-funil do `PlatformPeek`).
4. **Faixa White-Label curta** + teaser de efeito de rede → CTA "Para empresas".
5. **Grid dos 5 módulos** (capacidade de plataforma).
6. **Footer compartilhado** (coluna "Participantes" finalmente apontando para os 3 sub-sites).

**Delega aos sub-sites (sai da home — eram a fonte da confusão):**
- **Planos completos** → `/para-empresas` (resolve "tutor/passeador acham que pagam").
- **`AppDownload` duplo** → quebrado: card app do tutor → `/tutor`; card Walk → `/passeador`.
- **`ContactSection` B2B** → `/para-empresas` + `/contato` segmentado.
- **`BrandSwapper`** → `/para-empresas`.
- **`PlatformPeek` de 3 abas** → desmontado nos 3 sub-sites (o maior nó de mistura, eliminado).

Regra de ouro: **o hub apresenta e roteia; os spokes convencem e convertem.**

---

## 6. Navegação & troca de público (concreto)

**Audience Switcher persistente** no `SiteHeader` unificado, visível em **todas** as rotas:

```
[ 🐾 Aumigão Walk ]   Para tutores · Seja passeador · Para sua empresa   [ Portal do parceiro ↗ ]  [ CTA contextual ]
   logo → / (hub)            ↑ switcher (3 destinos, mundo atual marcado)      (externo admin)        (muda por mundo)
```

- **Rótulos orientados a tarefa** (mitigação NN/g do risco de autoidentificação): nav do header usa **"Para tutores / Seja passeador / Para sua empresa"** (verbo/tarefa, não identidade); o switcher curto pode usar "Tutor/Passeador/Empresas" por espaço.
- **Estado ativo:** o item do mundo atual fica marcado/sublinhado na **cor-assinatura** daquele mundo, com **`aria-current="page"`** (acessibilidade — enxerto da P2). No hub, nenhum fica ativo ("casa de todos").
- **Logo sempre → `/`**: volta ao hub a 1 clique = exigência NN/g de troca fácil; resolve o caso **"dono de petshop que também é tutor"** sem prender ninguém.
- **CTA do header é contextual:** hub → "Solicitar diagnóstico"; tutor → "Procure seu petshop"; passeador → "Quero me cadastrar"; empresa → "Solicitar diagnóstico".
- **Mobile:** as 3 portas viram as primeiras linhas do drawer (pills grandes, cor-assinatura como divisor), depois a nav contextual da seção atual.
- **Cross-linking disciplinado** (regra hub-and-spoke, **obrigatória ou os spokes viram ilhas**): `/para-empresas` → "rede de passeadores pronta" → `/passeador`; `/passeador` → "vínculo por convite do petshop" → contexto empresa; `/tutor` → "seu petshop ainda não usa?" → `/para-empresas`. Todo footer linka os 3 + hub. **Entra no mesmo PR do switcher, não depois.**
- **Memória de público (`localStorage`):** **fora do MVP.** Os 3 juízes convergiram que é a feature de menor ROI e adiciona risco de hidratação no Next 15. Pós-lançamento, se desejado: pré-marcar o switcher e reordenar a porta lembrada **sem nunca redirecionar a URL** (preserva SEO).

---

## 7. Plano de reuso/refactor de componentes

> **Imprecisão a corrigir (apontada pelo Juiz 3):** não há "colisão de símbolo `SiteFooter`" — o legado exporta `Footer` (em `Footer.tsx`) e o novo exporta `SiteFooter` (em `SiteFooter.tsx`). O problema real é **duplicação de chrome**, não conflito de nome. O executor não deve perder tempo "resolvendo colisão" inexistente.

| Componente atual (arquivo) | Destino | Ação |
|---|---|---|
| `Header.tsx` (legado `ov-*`) | — | **APOSENTAR** (remover de `layout.tsx` 109–111) |
| `Footer.tsx` (legado `ov-*`) | — | **APOSENTAR** |
| `SiteHeader.tsx` | shared | **SHARED** + adicionar `AudienceSwitcher` + CTA contextual (prop `aud`) |
| `SiteFooter.tsx` | shared | **SHARED** + coluna "os 3 mundos" apontando p/ sub-sites |
| `InnerPage.tsx` | shared | **SHARED** como shell de spoke; **remover hack `proto-clean`** |
| `EditorialHomeV2.tsx` | hub | **ENXUGAR** p/ hub; extrair Planos/Módulos/BrandSwapper |
| `HeroMerged.tsx` | shared | **SHARED parametrizado** (copy/CTA/`data-aud` via props) → template de hero |
| `LiveMap.tsx` | shared | **SHARED** (neutro: hub, tutor, passeador) |
| `ContactSection.tsx` | shared | **SHARED** com `interest`/`perfil` condicionado ao contexto |
| `PlatformPeek.tsx` | desmontar | `TutorPhone`→`/tutor`; `PasseadorPhone`→`/passeador`; `AdminBrowser`+`MiniMap`→`/para-empresas` |
| `AppDownload.tsx` | quebrar | card tutor→`/tutor`; card Walk→`/passeador` |
| `BrandSwapper.tsx` | mover | **MOVE** → `/para-empresas` |
| Bloco White-Label+rede + Planos (inline em `EditorialHomeV2`) | mover | **MOVE** → `/para-empresas` |
| `lib/content.ts` (`appDownloadHref="/contato"`) | corrigir | trocar placeholder pelos links reais de loja (depende do Carlos) |
| tokens em `editorial-home.module.css` (3–14), `hero-merged.module.css` (4–13), `inner.module.css` (2–6) | centralizar | **mover p/ `:root` em `globals.css`**; trocar hex literais (`#ff6a2b`, `#4a4036`) por `var()` |
| **NOVOS** | criar | `app/tutor/page.tsx`, `app/passeador/page.tsx`, `app/para-empresas/page.tsx`; `AudienceSwitcher.tsx`, `AudienceCard.tsx`, `lib/audiences.ts` (config central: rótulo/rota/`--accent`/CTA), `FAQ.tsx` (data-driven), `PricingPlans.tsx`, `Testimonials.tsx`, `EarningsBars.tsx` (retematiza `.ov-earn-bars`), `VerifiedBadge.tsx` (retematiza `.ov-walker-badge`) |

**Diferenciação visual (mecanismo único, dos 4 mapas):** promover tokens a `:root` e escopar por `data-aud` no wrapper de cada sub-site, trocando **só 3 coisas** (cor-assinatura, motivo, tom de foto). O **botão de ação roxo `#6d2bbd` com tilt `rotate(-1deg)` é inegociável em todos** — é a cola que prova "uma marca só".

```css
:root{ --accent:#f4671e; --accent-2:#ffb24d; --action:#6d2bbd; } /* hub */
[data-aud="tutor"]       { --accent:#f4671e; --accent-2:#ffb24d; } /* tangerina/âmbar afetivo */
[data-aud="passeador"]   { --accent:#6d2bbd; --accent-2:#8f45dd; } /* roxo — já é a cor do app Walk */
[data-aud="empresa"]     { --accent:#1f7a5a; --accent-2:#f4671e; } /* verde-confiança B2B + tangerina */
```

---

## 8. Plano de implementação faseado (sem código)

**Onda 0 — Faxina do shell + tokens (pré-requisito não-negociável).** Os 3 juízes foram unânimes: pular isto garante deriva visual com 3 sub-sites. Entrega: `Header`/`Footer` legados removidos do `layout.tsx`; `InnerPage` sem `proto-clean`; **um** `SiteHeader` + **um** `SiteFooter` aplicados a tudo; tokens centralizados em `:root`; hex literais → `var()`; destino do `--ov-*` legado decidido (aposentar/isolar). **Nada visível ao público muda — é custo afundado, mas inevitável.**

**Onda 1 — Shell de público + hub enxuto + rotas.** Entrega: `AudienceSwitcher` + `AudienceCard` + `lib/audiences.ts`; header com switcher e CTA contextual; home repaginada como hub (bloco "3 portas" com links reais; delegações tiradas da home); rotas vazias `/tutor`, `/passeador`, `/para-empresas` criadas. A bifurcação já funciona ponta a ponta.

**Onda 2 — Sub-site `/para-empresas` (primeiro, pois é quem paga).** Entrega: eleva `/white-label` + recebe Planos (`PricingPlans`) + Módulos + `BrandSwapper` + `AdminBrowser` + diagrama + objeções/FAQ (`FAQ` data-driven) + `ContactSection` perfil=empresa. **Maior valor comercial primeiro.**

**Onda 3 — Sub-site `/passeador`.** Entrega: eleva `/seja-passeador` + `EarningsBars` + `VerifiedBadge` + rede global/convite + direito de revisão + FAQ + canal de dúvida perfil=passeador.

**Onda 4 — Sub-site `/tutor` (por último — depende de decisão de produto).** Entrega: página do zero (hero afetivo + `SafetyProof` + LiveMap + "e se der errado" + FAQ + **CTA duplo petshop**). **Bloqueada até você decidir o fluxo de descoberta do tutor (seção 10).**

**Onda 5 — Amarração: redirects + sitemap + cross-linking + contato segmentado.** Entrega (atômica): 308 em `next.config.ts`; `sitemap.ts` atualizado **no mesmo PR**; cross-links entre spokes; `/contato?perfil=`. (O cross-linking idealmente já entra junto do switcher na Onda 1 — não deixar para depois.)

**Onda 6 (paralela, não-código) — Conteúdo de prova.** Depoimentos, faixas de ganho reais, screenshots de app/painel. **É o que de fato converte** e hoje não existe. Sem isto os sub-sites sobem "bonitos e vazios" — o maior risco de execução do modelo vencedor. Pode/deve correr em paralelo às ondas 2–4.

---

## 9. SEO / sitemap / redirects

- **`next.config.ts`** — adicionar **308 limpos** (o padrão de redirects já existe no arquivo, então é trivial): `/seja-passeador` → `/passeador`; `/white-label` → `/para-empresas`. Manter `/como-funciona` e `/demo-white-label` → `/#plataforma-por-dentro`. **Sem alias ambíguo, sem `rel=canonical` concorrente** (resolve o ponto que custou SEO 7 à P1).
- **`sitemap.ts`** — adicionar `/tutor` (0.8), `/passeador` (0.8, substitui `/seja-passeador`), `/para-empresas` (**0.9** — maior peso comercial, é quem paga). **Remover as URLs antigas no mesmo PR dos 308** (senão o Google vê sitemap apontando para rota redirecionada = sinal sujo). `/proto` segue fora.
- **Sem canibalização:** intenções distintas — "agendar passeio para meu cão" (`/tutor`) vs "ganhar dinheiro passeando cães" (`/passeador`) vs "plataforma white label para petshop" (`/para-empresas`). 1 H1 institucional no hub + 1 H1 específico por spoke; `metadata` própria por rota.
- **Subpasta consolida autoridade** do domínio jovem. Links quebrados do header legado (`#funciona`/`#cta`) somem ao remover o legado (Onda 0).
- **Risco de transição:** `/white-label` é hoje o único ativo de SEO B2B real — os 308 precisam estar corretos para não derrubar o ranking durante a migração.

---

## 10. Decisões em aberto para o Carlos

1. **CTA do tutor (BLOQUEIA `/tutor` — decisão de produto).** Como o tutor descobre o app da marca do petshop dele? Recomendo o **caminho duplo** ("Sim → baixar app da minha marca" / "Não → indicar meu petshop" como lead B2B). Você aprova?
2. **Nomes das rotas em PT.** Confirma `/para-empresas` (recomendado, NN/g) em vez de `/white-label`? E `/passeador` (não `/seja-passeador`) e `/empresas` vs `/para-empresas` (recomendo `/para-empresas`, mais descritivo)?
3. **Subpasta vs subdomínio.** Confirmado **subpasta** (recomendação unânime)? Só mudaria se houver intenção de portal logado separado.
4. **A 4ª cor (verde `#1f7a5a` no White-Label).** Topa validar em **preview** antes de espalhar, com plano B = roxo institucional? (ver Riscos)
5. **Expor preços por sub-site.** Confirmar Planos visíveis (197/597/sob consulta) **dentro de `/para-empresas`** — e **fora** das páginas de tutor/passeador?
6. **Links reais de loja/app** (`appDownloadHref` hoje é placeholder `/contato`). A memória registra que WhatsApp/links de app ainda são de teste — mantemos placeholder ou você libera os reais? Sem eles, os CTAs de download ficam fracos.
7. **Conteúdo de prova (Onda 6).** Você tem clientes-piloto/depoimentos reais e faixas de ganho que possamos usar? Isso destrava a conversão.
8. **Destino do legado `--ov-*`** (tema antigo "Operação Viva"): aposentar de vez ou isolar?

---

## 11. Riscos & mitigação

| Risco | Severidade | Mitigação |
|---|---|---|
| **4ª cor (verde) puxa o White-Label para "outra marca"** — e é o público que PAGA, então é o risco de marca mais sensível; ainda há dúvida de contraste AA sobre creme | Alta | Verde **só como acento** (eyebrow/ícone/KPI), nunca em texto longo; botão de ação **roxo** mantido; **validar AA + preview com Carlos** antes de espalhar; plano B = roxo institucional + ink escurecido |
| **Pré-trabalho (Onda 0) é chato e invisível** — se pulado, 3 sub-sites multiplicam a deriva e quebram "uma marca só" | Alta | Tratar como gate: nenhuma Onda de sub-site começa antes da Onda 0 fechada |
| **Sub-sites "bonitos e vazios"** — prova social (depoimentos, ganhos, screenshots) não existe e é o que converte | Alta | Onda 6 em paralelo; componentes de prova já criados (`Testimonials`/`EarningsBars`) prontos para receber conteúdo; depende da decisão 7 |
| **CTA do tutor pendente** bloqueia `/tutor` e o funil tutor→lead-B2B | Média-alta | Construir `/tutor` por **último** (Onda 4); escalar decisão 1 antes |
| **Migração de URLs derruba ranking** do `/white-label` (único ativo SEO B2B) | Média | 308 + remoção do sitemap **atômicos no mesmo PR**; sem alias concorrente; monitorar Search Console pós-deploy |
| **Spokes viram ilhas** sem cross-linking | Média | Cross-linking entra **no mesmo PR do switcher** (Onda 1), não depois |
| **`localStorage` (se adotado) quebra hidratação no Next 15** | Baixa (fora do MVP) | Mantido fora do MVP; se entrar, só pós-mount com fallback estável, nunca redirecionando a URL |
| **Mobile poluído** (switcher + nav contextual + CTA) | Baixa | Drawer com 3 pills grandes no topo + nav contextual abaixo; testar em device |

---

### Resumo de uma linha
Adote **Hub-and-Spoke + Audience Switcher em subpasta**, base **Proposta 3** (esqueleto editorial completo + componentes de prova que convertem) com o **rigor de rota/SEO da Proposta 1** (`/para-empresas`, 308 limpos, ordem faseada); faça a **faxina do shell/tokens (Onda 0) antes de qualquer sub-site**; construa **`/para-empresas` primeiro** (quem paga); e trate a **4ª cor verde** e o **CTA do tutor** como as duas decisões que dependem de você.
