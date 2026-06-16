"use client";

import Image from "next/image";
import { useEffect } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { LiveMap } from "./LiveMap";
import s from "./hero-merged.module.css";

const ease = [0.22, 1, 0.36, 1] as const;
const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };

export function HeroMerged() {
  const reduce = useReducedMotion();
  useEffect(() => {
    document.documentElement.classList.add("proto-clean");
    return () => document.documentElement.classList.remove("proto-clean");
  }, []);

  return (
    <section className={s.hero}>
      <div className={s.glow} />
      <div className={s.blob1} />
      <div className={s.blob2} />
      <div className={s.grain} />

      <header className={s.topbar}>
        <a href="#" className={s.brand}><img className={s.brandMark} src="/icon-rounded-512.png" alt="Aumigão Walk" /> Aumigão Walk</a>
        <nav className={s.nav}>
          <span className={s.navLinks}>
            <a href="#plataforma-por-dentro">Como funciona</a> <a href="#planos">Planos</a> <a href="#white-label">White Label</a>
          </span>
          <a href="https://aumigao-admin-web.vercel.app" target="_blank" rel="noopener noreferrer" className={s.navCta}>Portal do parceiro</a>
        </nav>
      </header>

      <motion.div
        className={s.stage}
        variants={reduce ? undefined : container}
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "show"}
      >
        <div>
          <motion.div variants={item} className={s.eyebrow}><i /> Tutor · Passeador · White-Label — uma só plataforma</motion.div>
          <motion.h1 variants={item} className={s.title}>Cuidar virou <em>operação.</em></motion.h1>
          <motion.p variants={item} className={s.sub}>
            A plataforma que conecta tutores, passeadores e petshops numa operação de
            passeios pet — com acompanhamento ao vivo, segurança e a sua marca.
          </motion.p>
          <motion.div variants={item} className={s.cta}>
            <a href="#contato" className={s.btn}>Solicitar diagnóstico →</a>
            <a href="#plataforma-por-dentro" className={s.ghost}>Ver como funciona</a>
          </motion.div>
          <motion.div variants={item} className={s.stats}>
            <div className={s.stat}><span className={s.statNum}>100%</span><span className={s.statLabel}>passeios auditáveis</span></div>
            <div className={s.stat}><span className={s.statNum}>5</span><span className={s.statLabel}>módulos numa plataforma</span></div>
            <div className={s.stat}><span className={s.statNum}>24/7</span><span className={s.statLabel}>operação monitorada</span></div>
          </motion.div>
        </div>

        <motion.div
          className={s.media}
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, rotate: 4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, transition: { duration: 1, ease, delay: 0.2 } }}
        >
          <div className={s.mediaBack} />
          <div className={s.mediaFrame}>
            <motion.div
              style={{ position: "absolute", inset: 0 }}
              animate={reduce ? undefined : { scale: [1.05, 1.12, 1.05] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/dog-happy.jpg" alt="Cachorro feliz em um passeio" fill sizes="50vw" style={{ objectFit: "cover" }} priority />
            </motion.div>
          </div>
          <div className={s.liveMapWrap}><LiveMap /></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
