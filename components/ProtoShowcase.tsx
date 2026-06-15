"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import s from "./proto-showcase.module.css";

const ease = [0.22, 1, 0.36, 1] as const;

function useProtoClean() {
  useEffect(() => {
    document.documentElement.classList.add("proto-clean");
    return () => document.documentElement.classList.remove("proto-clean");
  }, []);
}

function In({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function ProtoShowcase() {
  useProtoClean();
  return (
    <div className={s.wrap}>
      {/* ───────── DIREÇÃO 1 — CALOR EDITORIAL ───────── */}
      <div className={s.label}>
        <span className={s.labelNum}>01</span> Calor Editorial
        <span className={s.labelHint}>claro · quente · serifa expressiva</span>
      </div>
      <section className={s.a}>
        <div className={s.aLeft}>
          <In className={s.aEyebrow}><><i /> Plataforma white-label · operação pet</></In>
          <In delay={0.08}>
            <h1 className={s.aTitle}>Cuidar virou <em>operação.</em></h1>
          </In>
          <In delay={0.16}>
            <p className={s.aSub}>Matching, score, recovery e financeiro — a sua marca cuidando de cada passeio, do agendamento à escala.</p>
          </In>
          <In delay={0.24} className={s.aCta}>
            <a href="#" className={s.aBtn}>Solicitar diagnóstico →</a>
            <a href="#" className={s.aGhost}>Ver como funciona</a>
          </In>
        </div>
        <div className={s.aMedia}>
          <Image src="/dog-happy.jpg" alt="" fill sizes="50vw" style={{ objectFit: "cover" }} />
          <span className={s.aTag}>🐾 Recovery monitorado</span>
        </div>
      </section>

      {/* ───────── DIREÇÃO 2 — NOITE QUENTE ───────── */}
      <div className={s.label}>
        <span className={s.labelNum}>02</span> Noite Quente
        <span className={s.labelHint}>escuro · quente · operação ao vivo</span>
      </div>
      <section className={s.b}>
        <div className={s.bGrain} />
        <div className={s.bWrap}>
          <div>
            <In className={s.bEyebrow}><><i /> Operação ao vivo</></In>
            <In delay={0.08}>
              <h1 className={s.bTitle}>A operação que <span>não dorme.</span></h1>
            </In>
            <In delay={0.16}>
              <p className={s.bSub}>Passeios auditáveis 24/7, com a sua marca. Matching, score, credenciamento e recovery numa só plataforma.</p>
            </In>
            <In delay={0.24} className={s.bCta}>
              <a href="#" className={s.bBtn}>Solicitar diagnóstico →</a>
              <a href="#" className={s.bGhost}>Ver a operação</a>
            </In>
          </div>
          <In delay={0.3} className={s.bPanel}>
            <div className={s.bPanelHead}><span className={s.bDot} /> Operação ao vivo</div>
            <div className={s.bRow}><span>Passeio</span><span>#1284 · em rota</span></div>
            <div className={s.bRow}><span>Passeador</span><span>Verificado ✓</span></div>
            <div className={s.bRow}><span>Score</span><span>4.9 ★</span></div>
            <div className={s.bRow}><span>Chegada</span><span>~12 min</span></div>
          </In>
        </div>
      </section>

      {/* ───────── DIREÇÃO 3 — POP VIBRANTE ───────── */}
      <div className={s.label}>
        <span className={s.labelNum}>03</span> Pop Vibrante
        <span className={s.labelHint}>cor ousada · redonda · energia pet</span>
      </div>
      <section className={s.c}>
        <div className={`${s.cBlob} ${s.cBlob1}`} />
        <div className={`${s.cBlob} ${s.cBlob2}`} />
        <div className={s.cWrap}>
          <div>
            <In className={s.cEyebrow}>● White-label pet</In>
            <In delay={0.08}>
              <h1 className={s.cTitle}>Passeios que viram <span>negócio.</span></h1>
            </In>
            <In delay={0.16}>
              <p className={s.cSub}>Seu petshop com app, operação e marca próprios. A tecnologia é nossa; o lucro é seu.</p>
            </In>
            <In delay={0.24} className={s.cCta}>
              <a href="#" className={s.cBtn}>Quero meu diagnóstico →</a>
              <a href="#" className={s.cGhost}>Ver planos</a>
            </In>
          </div>
          <In delay={0.3} className={s.cMedia}>
            <Image src="/dog-happy.jpg" alt="" fill sizes="40vw" style={{ objectFit: "cover" }} />
          </In>
        </div>
      </section>
    </div>
  );
}
