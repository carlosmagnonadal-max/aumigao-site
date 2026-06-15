"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import s from "./HeroV2.module.css";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export function HeroV2() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  // esconde o header/footer escuros globais só nesta página (preview limpo)
  useEffect(() => {
    document.documentElement.classList.add("proto-clean");
    return () => document.documentElement.classList.remove("proto-clean");
  }, []);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.12]);

  return (
    <section ref={ref} className={s.hero}>
      {/* topbar minimal */}
      <header className={s.topbar}>
        <Link href="/" className={s.brand}>
          <span className={s.brandMark}>AU</span> Aumigão Walk
        </Link>
        <nav className={s.nav}>
          <span className={s.navLinks}>
            <Link href="/#funciona">Como funciona</Link>{" "}
            <Link href="/#confianca">Confiança</Link>{" "}
            <Link href="/white-label">White Label</Link>
          </span>
          <Link href="/#cta" className={s.portal}>
            Portal do parceiro
          </Link>
        </nav>
      </header>

      {/* foto P&B dissolvendo na névoa — parallax (scroll) + Ken Burns (contínuo) */}
      <motion.div className={s.photo} style={reduce ? undefined : { y, scale }}>
        <motion.div
          className={s.photoInner}
          animate={reduce ? undefined : { scale: [1.06, 1.13, 1.06], x: ["0%", "-3%", "0%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="/walker-hero.jpg"
            alt="Passeadora da Aumigão caminhando com um cachorro"
            fill
            priority
            sizes="70vw"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </motion.div>
      <div className={s.photoFade} />

      {/* palco com título monumental */}
      <motion.div
        className={s.stage}
        variants={reduce ? undefined : container}
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "show"}
      >
        <motion.div className={s.eyebrow} variants={item}>
          <i /> Plataforma White-Label de operação pet
        </motion.div>
        <motion.h1 className={s.title} variants={item}>
          Operação<br />que cresce<span className={s.dot}>.</span>
        </motion.h1>
      </motion.div>

      {/* rodapé: apoio + stats em ember */}
      <motion.div
        className={s.foot}
        variants={reduce ? undefined : container}
        initial={reduce ? undefined : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true }}
      >
        <motion.div variants={item}>
          <p className={s.lead}>
            Matching, score, credenciamento, recovery e financeiro — numa só
            plataforma auditável de passeios pet. Com a sua marca, do primeiro
            passeio à escala.
          </p>
          <Link href="/white-label" className={s.leadLink}>
            Conheça o White Label
          </Link>
        </motion.div>

        <motion.div className={s.stats} variants={item}>
          <div className={s.stat}>
            <div className={s.statNum}>100%</div>
            <div className={s.statLabel}>passeios auditáveis, ponta a ponta</div>
          </div>
          <div className={s.stat}>
            <div className={s.statNum}>5 min</div>
            <div className={s.statLabel}>do agendamento ao passeador certo</div>
          </div>
          <div className={s.stat}>
            <div className={s.statNum}>24/7</div>
            <div className={s.statLabel}>operação e recovery monitorados</div>
          </div>
        </motion.div>
      </motion.div>

      <div className={s.scroll}>
        <i /> Role para ver
      </div>
    </section>
  );
}
