import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

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
Se não souber responder ou o visitante pedir para falar com alguém: oriente a usar o formulário de contato em aumigaowalk.com.br/contato e encerre com "Posso te ajudar com mais alguma coisa?".`;

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
