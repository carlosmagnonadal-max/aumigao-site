"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
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
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

export function HeroV2() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // parallax cinematográfico: a foto sobe devagar e dá um leve zoom ao rolar
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);

  return (
    <section ref={ref} className={s.hero}>
      <motion.div className={s.media} style={reduce ? undefined : { y, scale }}>
        <Image
          src="/walker-hero.jpg"
          alt="Passeadora da Aumigão caminhando com um cachorro em uma rua arborizada"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className={s.scrim} />
      <div className={s.grain} />

      <motion.div
        className={s.wrap}
        variants={reduce ? undefined : container}
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "show"}
      >
        <motion.div className={s.eyebrow} variants={item}>
          <i />
          Operação Viva · Plataforma White-Label
        </motion.div>

        <motion.h1 className={s.title} variants={item}>
          Cada passeio,
          <br />
          uma <span className={s.em}>operação.</span>
        </motion.h1>

        <motion.p className={s.sub} variants={item}>
          Matching, score, credenciamento, recovery e financeiro — numa só
          plataforma auditável. Com a sua marca, do primeiro passeio à escala.
        </motion.p>

        <motion.div className={s.cta} variants={item}>
          <Link href="/#cta" className={`${s.btn} ${s.primary}`}>
            Solicitar diagnóstico <span aria-hidden>→</span>
          </Link>
          <Link href="/#funciona" className={`${s.btn} ${s.ghost}`}>
            Ver a operação ao vivo <i aria-hidden>→</i>
          </Link>
        </motion.div>

        <motion.div className={s.meta} variants={item}>
          <div className={s.metaItem}>
            <span className={s.metaNum}>100%</span>
            <span className={s.metaLabel}>passeios auditáveis</span>
          </div>
          <div className={s.metaItem}>
            <span className={s.metaNum}>White-label</span>
            <span className={s.metaLabel}>a sua marca, ponta a ponta</span>
          </div>
          <div className={s.metaItem}>
            <span className={s.metaNum}>Recovery</span>
            <span className={s.metaLabel}>exceções monitoradas</span>
          </div>
        </motion.div>
      </motion.div>

      <div className={s.scroll}>
        Role para ver
        <i />
      </div>
    </section>
  );
}
