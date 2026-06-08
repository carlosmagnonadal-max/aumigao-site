"use client";

import { useState } from "react";

const modules = [
  ["Matching", "Conecta demanda, região, disponibilidade e perfil operacional.", ["Tutor", "Região", "Agenda", "Passeador"]],
  ["Score", "Organiza reputação, qualidade e prioridade de atendimento.", ["Avaliação", "Histórico", "Critérios", "Evolução"]],
  ["Recovery", "Monitora exceções e orienta resposta operacional.", ["Alerta", "Análise", "Ação", "Registro"]],
  ["Financeiro", "Representa ganhos, repasses e previsibilidade comercial.", ["Receita", "Repasses", "Margem", "Ciclo"]],
  ["Rede", "Estrutura passeadores, regiões, status e capacidade.", ["Perfil", "Disponível", "Verificado", "Ativo"]],
  ["Credenciamento", "Organiza documentos, validações e entrada profissional.", ["Dados", "Documentos", "Critérios", "Liberação"]],
  ["Operação", "Centraliza rotina, governança e acompanhamento.", ["Online", "SLA", "Qualidade", "Escala"]],
  ["White Label", "Transforma a operação em produto com marca própria.", ["Marca", "App", "Painel", "Unidades"]],
] as const;

export function WhiteLabelShowroom() {
  const [active, setActive] = useState(0);
  const [label, text, chips] = modules[active];

  return (
    <div className="rounded-[2rem] bg-brand-night p-4 text-white shadow-premium md:p-7">
      <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
        <div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-1">
            {modules.map(([item], index) => (
              <button
                key={item}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-black transition ${
                  active === index
                    ? "bg-brand-orange text-white"
                    : "bg-white/[0.08] text-white/[0.72] hover:bg-white/[0.14] hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.08] p-5">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-peach">Módulo ativo</p>
            <h2 className="mt-3 text-3xl font-black">{label}</h2>
            <p className="mt-4 leading-7 text-white/[0.68]">{text}</p>
          </div>
        </div>

        <div className="relative min-h-[560px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6">
          <div className="absolute inset-8 rounded-[2rem] border border-dashed border-white/[0.12]" />
          <div className="relative z-10 mx-auto flex h-44 w-44 flex-col items-center justify-center rounded-[2rem] bg-white text-center text-brand-night shadow-premium">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-brand-orange">Showroom</span>
            <strong className="mt-2 text-3xl font-black">{label}</strong>
          </div>
          <div className="relative z-10 mt-12 grid gap-4 sm:grid-cols-2">
            {chips.map((chip, index) => (
              <article key={chip} className="rounded-[1.25rem] border border-white/10 bg-white/[0.09] p-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange text-sm font-black text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-xl font-black">{chip}</h3>
                <div className="mt-4 h-2 rounded-full bg-white/[0.12]">
                  <div className="h-2 rounded-full bg-brand-orange" style={{ width: `${55 + index * 12}%` }} />
                </div>
              </article>
            ))}
          </div>
          <div className="relative z-10 mt-8 rounded-[1.25rem] bg-white p-5 text-brand-night shadow-premium">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full bg-brand-cream px-4 py-2 text-sm font-black">Operação protegida</span>
              <span className="rounded-full bg-brand-blush px-4 py-2 text-sm font-black">Conceito comercial</span>
              <span className="rounded-full bg-brand-purple px-4 py-2 text-sm font-black text-white">Marca própria</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
