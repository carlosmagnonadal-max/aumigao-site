import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

// ─── A4: Rate limit por IP ─────────────────────────────────────────────────────
// Estratégia em dois níveis:
//   1. Upstash Redis (sliding window, cross-instância) — preferencial em produção.
//      Requer UPSTASH_REDIS_REST_URL e UPSTASH_REDIS_REST_TOKEN no ambiente.
//   2. Fallback in-memory — ativo quando as envs do Upstash não estão configuradas.
//      Protege contra abuso casual, mas não é compartilhado entre instâncias Vercel.
//
// Limite: 10 req/min por IP (sliding window).

const RATE_WINDOW_MS = 60_000; // 1 minuto
const RATE_MAX_REQ = 10;

// ── Nível 1: Upstash (carregado lazily só se as envs existirem) ──────────────
let upstashLimiter: import("@upstash/ratelimit").Ratelimit | null = null;

async function getUpstashLimiter() {
  if (upstashLimiter !== null) return upstashLimiter;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null; // fallback in-memory

  try {
    const { Redis } = await import("@upstash/redis");
    const { Ratelimit } = await import("@upstash/ratelimit");
    upstashLimiter = new Ratelimit({
      redis: new Redis({ url, token }),
      limiter: Ratelimit.slidingWindow(RATE_MAX_REQ, "60 s"),
      analytics: false,
      prefix: "aw_chat_rl",
    });
  } catch {
    // Se a importação falhar por qualquer razão, cai no fallback
    upstashLimiter = null;
  }

  return upstashLimiter;
}

// ── Nível 2: Fallback in-memory ───────────────────────────────────────────────
// NOTA: controle por instância Node (não cross-instância em Vercel Serverless).
// Protege contra uso casual/acidental. Configure Upstash para proteção global.
interface RateEntry { count: number; windowStart: number }
const rateLimitMap = new Map<string, RateEntry>();

function checkRateLimitMemory(ip: string): { allowed: boolean; retryAfterSec: number } {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.windowStart >= RATE_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, windowStart: now });
    return { allowed: true, retryAfterSec: 0 };
  }

  if (entry.count >= RATE_MAX_REQ) {
    const retryAfterMs = RATE_WINDOW_MS - (now - entry.windowStart);
    return { allowed: false, retryAfterSec: Math.ceil(retryAfterMs / 1000) };
  }

  entry.count += 1;
  return { allowed: true, retryAfterSec: 0 };
}

// Limpeza periódica do mapa in-memory para evitar vazamento de memória
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap.entries()) {
    if (now - entry.windowStart >= RATE_WINDOW_MS * 2) rateLimitMap.delete(ip);
  }
}, RATE_WINDOW_MS * 5);

// ── Checagem unificada ────────────────────────────────────────────────────────
async function checkRateLimit(ip: string): Promise<{ allowed: boolean; retryAfterSec: number }> {
  const limiter = await getUpstashLimiter();

  if (limiter) {
    try {
      const { success, reset } = await limiter.limit(ip);
      const retryAfterSec = success ? 0 : Math.ceil((reset - Date.now()) / 1000);
      return { allowed: success, retryAfterSec };
    } catch {
      // Se o Redis estiver indisponível, cai no fallback silenciosamente
    }
  }

  return checkRateLimitMemory(ip);
}

const SYSTEM_PROMPT = `Você é Au, o assistente virtual do Aumigão Walk — uma plataforma premium de passeios pet com operação auditável, matching inteligente e White Label para empresas.

Seu papel: responder dúvidas de visitantes do site com clareza, simpatia e objetividade. Você conhece o produto a fundo.

## Sobre o Aumigão Walk
Aumigão Walk é uma infraestrutura completa de passeios pet que conecta tutores a passeadores verificados. A plataforma oferece dois aplicativos (o app do Tutor e o app do Passeador, chamado Walk), um painel administrativo completo e uma solução White Label para empresas do setor pet.

## Os 5 módulos da plataforma (+ White Label)
A plataforma tem exatamente 5 módulos integrados, mais o White Label como camada de marca. Sempre que perguntarem quantos módulos são, responda 5 módulos (+ White Label). Nunca diga 4.
1. Matching — distribui o passeador certo por região, score e disponibilidade.
2. Score — reputação viva que melhora a qualidade da operação a cada passeio.
3. Credenciamento — documentos, validação e trilha de auditoria de cada passeador.
4. Recovery — tratamento dedicado de exceções, monitorado 24/7.
5. Financeiro — repasses, comissões e relatórios rastreáveis.
Mais o White Label: coloca a marca do cliente no app do tutor, no app do passeador (Walk) e no painel administrativo.

## Para tutores (donos de pets)
- Agendam passeios pelo app (individual ou compartilhado)
- Escolhem modalidade e duração
- Acompanham o passeio em tempo real pelo app
- Têm histórico do pet, rotina e planos recorrentes
- Pagamento integrado ao app

## Para passeadores
- Cadastro pelo app com etapas: dados, documentos, aprovação operacional
- Após aprovação recebem solicitações e gerenciam agenda pelo app
- Kit do passeador para padronização e segurança
- Sistema de reputação, score e missões semanais com gamificação
- Ganhos e repasses conforme a operação ativa

## White Label (para empresas)
Indicado para: pet shops, clínicas veterinárias, hotéis pet, creches pet, redes.
Inclui:
- App com a marca da empresa (nome, cores, logo)
- Painel administrativo completo
- Rede de passeadores própria
- Operação auditável com os 5 módulos (matching, score, credenciamento, recovery, financeiro)
- Suporte a múltiplas unidades
- Implantação assistida pela equipe Aumigão

Para contratar White Label: a empresa agenda uma demonstração pelo site.

## O que você NÃO sabe / deve encaminhar
- Preços exatos: diga que dependem do escopo e oriente a falar com a equipe
- Prazo de implantação: depende do escopo, oriente a demonstração
- Suporte técnico para clientes já cadastrados: oriente a contatar pelo app

## Tom
Prestativo, direto, leve. Sem exageros. Respostas curtas (2-4 parágrafos max). Português brasileiro. Não use emojis em excesso — no máximo 1 por mensagem se ajudar.

## Escalada
Se não souber responder ou o visitante pedir para falar com alguém: ofereça as duas opções de contato comercial —
1. Formulário em aumigaowalk.com.br/contato (retorno em até 1 dia útil).
2. WhatsApp comercial: (71) 3599-9983 — https://wa.me/557135999983 (canal de contato comercial; não é suporte técnico para clientes já cadastrados).
Encerre com "Posso te ajudar com mais alguma coisa?".`;

const MAX_MESSAGES = 20;
const MAX_CONTENT_LENGTH = 2000;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

function isValidMessage(msg: unknown): msg is ChatMessage {
  if (typeof msg !== "object" || msg === null) return false;
  const m = msg as Record<string, unknown>;
  return (
    (m.role === "user" || m.role === "assistant") &&
    typeof m.content === "string" &&
    m.content.length > 0 &&
    m.content.length <= MAX_CONTENT_LENGTH
  );
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  // A4: verificar rate limit antes de qualquer processamento
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";
  const { allowed, retryAfterSec } = await checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { error: "Muitas requisições. Tente novamente em instantes." },
      {
        status: 429,
        headers: {
          "Retry-After": String(retryAfterSec),
          "X-RateLimit-Limit": String(RATE_MAX_REQ),
          "X-RateLimit-Window": "60",
        },
      }
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Chat temporariamente indisponível." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Payload inválido." },
      { status: 400 }
    );
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !Array.isArray((body as Record<string, unknown>).messages)
  ) {
    return NextResponse.json(
      { error: "Campo 'messages' é obrigatório e deve ser um array." },
      { status: 400 }
    );
  }

  const { messages } = body as { messages: unknown[] };

  if (messages.length === 0) {
    return NextResponse.json(
      { error: "A lista de mensagens não pode estar vazia." },
      { status: 400 }
    );
  }

  if (messages.length > MAX_MESSAGES) {
    return NextResponse.json(
      { error: `Máximo de ${MAX_MESSAGES} mensagens permitido.` },
      { status: 400 }
    );
  }

  if (!messages.every(isValidMessage)) {
    return NextResponse.json(
      {
        error: `Mensagens inválidas. Cada mensagem deve ter role ('user' ou 'assistant') e content (até ${MAX_CONTENT_LENGTH} caracteres).`,
      },
      { status: 400 }
    );
  }

  const validMessages = messages as ChatMessage[];

  try {
    const client = new Anthropic({ apiKey });

    const response = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: validMessages,
    });

    const replyBlock = response.content.find((block) => block.type === "text");
    const reply =
      replyBlock && replyBlock.type === "text" ? replyBlock.text : "";

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      { error: "Chat temporariamente indisponível." },
      { status: 503 }
    );
  }
}
