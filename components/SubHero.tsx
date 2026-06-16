"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { LiveMap } from "./LiveMap";
import { AUDIENCES, type AudienceKey } from "@/lib/audiences";
import s from "./hero-merged.module.css";

const ease = [0.22, 1, 0.36, 1] as const;
const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } };

export type SubHeroProps = {
  current: AudienceKey;
  eyebrow: string;
  title: ReactNode;
  sub: string;
  primary: { label: string; href: string };
  ghost?: { label: string; href: string };
  stats: { num: string; label: string }[];
  image: string;
  imageAlt: string;
  showMap?: boolean;
};

/**
 * Hero de sub-site no MESMO vocabulário visual da home (reusa hero-merged.module.css):
 * creme quente + Fraunces + foto calorosa + (opcional) mapa ao vivo. Topbar com a marca
 * (volta ao hub) + as 3 portas (público atual marcado) + CTA contextual.
 */
export function SubHero({ current, eyebrow, title, sub, primary, ghost, stats, image, imageAlt, showMap = true }: SubHeroProps) {
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
        <Link href="/" className={s.brand}>
          <img className={s.brandMark} src="/icon-rounded-512.png" alt="Aumigão Walk" /> Aumigão Walk
        </Link>
        <nav className={s.nav}>
          <span className={s.navLinks}>
            {AUDIENCES.map((a) => (
              <Link
                key={a.key}
                href={a.route}
                aria-current={a.key === current ? "page" : undefined}
                style={a.key === current ? { color: "var(--ink)", fontWeight: 700 } : undefined}
              >
                {a.navLabel}
              </Link>
            ))}
          </span>
          <Link href="/" className={s.navGhost}>← Início</Link>
          <Link href={primary.href} className={s.navCta}>{primary.label}</Link>
        </nav>
      </header>

      <motion.div
        className={s.stage}
        variants={reduce ? undefined : container}
        initial={false}
        animate={reduce ? undefined : "show"}
      >
        <div>
          <motion.div variants={item} className={s.eyebrow}><i /> {eyebrow}</motion.div>
          <motion.h1 variants={item} className={s.title}>{title}</motion.h1>
          <motion.p variants={item} className={s.sub}>{sub}</motion.p>
          <motion.div variants={item} className={s.cta}>
            <Link href={primary.href} className={s.btn}>{primary.label} →</Link>
            {ghost && <Link href={ghost.href} className={s.ghost}>{ghost.label}</Link>}
          </motion.div>
          <motion.div variants={item} className={s.stats}>
            {stats.map((st) => (
              <div key={st.label} className={s.stat}>
                <span className={s.statNum}>{st.num}</span>
                <span className={s.statLabel}>{st.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div className={s.media} initial={false} animate={{ opacity: 1, scale: 1, rotate: 0 }}>
          <div className={s.mediaBack} />
          <div className={s.mediaFrame}>
            <motion.div
              style={{ position: "absolute", inset: 0 }}
              animate={reduce ? undefined : { scale: [1.05, 1.12, 1.05] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src={image} alt={imageAlt} fill sizes="50vw" style={{ objectFit: "cover" }} priority />
            </motion.div>
          </div>
          {showMap && <div className={s.liveMapWrap}><LiveMap /></div>}
        </motion.div>
      </motion.div>
    </section>
  );
}
