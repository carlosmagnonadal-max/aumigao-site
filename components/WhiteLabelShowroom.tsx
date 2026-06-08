"use client";

import { useState } from "react";

const modules = [
  {
    label: "Tutor",
    title: "Tutor agenda, acompanha e escolhe a melhor modalidade.",
    text: "A experiência concentra pet, planos, checkout e rotina em uma jornada visualmente simples.",
    image: "/screenshots/tutor/tutor-planos.png",
    type: "phone",
  },
  {
    label: "Passeador",
    title: "Passeador trabalha com agenda, ganhos e reputação.",
    text: "O app profissionaliza disponibilidade, solicitações, kit e evolução operacional.",
    image: "/screenshots/passeador/passeador-home.png",
    type: "phone",
  },
  {
    label: "Admin",
    title: "Admin acompanha a operação em tempo real.",
    text: "Painel para enxergar demanda, status, rede, unidades e qualidade da operação.",
    image: "/screenshots/admin/admin-dashboard.png",
    type: "admin",
  },
  {
    label: "Matching",
    title: "Matching conecta demanda e capacidade operacional.",
    text: "A operação visualiza encaixes entre tutor, janela de atendimento, região e passeador.",
    image: "/screenshots/admin/admin-matching.png",
    type: "admin",
  },
  {
    label: "Financeiro",
    title: "Financeiro organiza receita, ganhos e repasses.",
    text: "Controle comercial para transformar passeios em operação recorrente e gerenciável.",
    image: "/screenshots/admin/admin-financeiro.png",
    type: "admin",
  },
  {
    label: "Score",
    title: "Score torna qualidade e prioridade mais visíveis.",
    text: "Reputação, critérios de evolução e sinais operacionais apoiam decisões de rede.",
    image: "/screenshots/passeador/passeador-score.png",
    type: "phone",
  },
  {
    label: "Recovery",
    title: "Recovery acompanha exceções antes que virem ruído.",
    text: "Rotina para tratar desvios, alertas e pontos de cuidado com resposta operacional.",
    image: "/screenshots/admin/admin-recovery.png",
    type: "admin",
  },
];

export function WhiteLabelShowroom() {
  const [active, setActive] = useState(0);
  const module = modules[active];

  return (
    <div className="rounded-[2rem] bg-brand-night p-4 text-white shadow-premium md:p-7">
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
            {modules.map((item, index) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActive(index)}
                className={`rounded-2xl px-4 py-3 text-left text-sm font-black transition ${
                  active === index
                    ? "bg-brand-orange text-white"
                    : "bg-white/8 text-white/72 hover:bg-white/14 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/8 p-5">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-peach">Módulo ativo</p>
            <h2 className="mt-3 text-3xl font-black">{module.title}</h2>
            <p className="mt-4 leading-7 text-white/68">{module.text}</p>
          </div>
        </div>
        <div className="flex min-h-[560px] items-center justify-center rounded-[1.5rem] bg-white/8 p-4">
          <img
            className={
              module.type === "phone"
                ? "phone-shot max-h-[620px] w-auto object-contain"
                : "admin-shot h-[520px] w-full object-cover"
            }
            src={module.image}
            alt={`${module.label} Aumigão Walk`}
          />
        </div>
      </div>
    </div>
  );
}
