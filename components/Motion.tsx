"use client";

/**
 * Fundação de animação do site (Framer Motion).
 * Premium, consistente e acessível: tudo respeita prefers-reduced-motion.
 * Substitui/eleva o reveal-on-scroll CSS (.ov-reveal) por física de mola + stagger.
 */

import {
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import type { ReactNode } from "react";

// Easing "expo-out" — saída premium, desacelera suave no fim.
const EASE = [0.22, 1, 0.36, 1] as const;

const VIEWPORT = { once: true, margin: "0px 0px -12% 0px" } as const;

type Dir = "up" | "down" | "left" | "right" | "none";

function offset(dir: Dir, dist: number) {
  switch (dir) {
    case "up":
      return { y: dist };
    case "down":
      return { y: -dist };
    case "left":
      return { x: dist };
    case "right":
      return { x: -dist };
    default:
      return {};
  }
}

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** direção de entrada (default: up) */
  from?: Dir;
  /** atraso em segundos */
  delay?: number;
  /** distância do deslocamento em px (default 24) */
  distance?: number;
  /** duração em s (default 0.7) */
  duration?: number;
} & Omit<HTMLMotionProps<"div">, "children">;

/** Revela o bloco ao entrar na viewport (fade + slide com easing premium). */
export function Reveal({
  children,
  className,
  from = "up",
  delay = 0,
  distance = 24,
  duration = 0.7,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();
  const hidden = reduce ? { opacity: 0 } : { opacity: 0, ...offset(from, distance) };
  const shown = { opacity: 1, x: 0, y: 0 };
  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={VIEWPORT}
      transition={{ duration, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Container que escalona (stagger) a entrada dos filhos <RevealItem>. */
export function Stagger({
  children,
  className,
  gap = 0.09,
  delay = 0,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  delay?: number;
} & Omit<HTMLMotionProps<"div">, "children">) {
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: gap, delayChildren: delay } },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Filho de <Stagger>: entra escalonado pelo pai. */
export function RevealItem({
  children,
  className,
  from = "up",
  distance = 22,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  from?: Dir;
  distance?: number;
} & Omit<HTMLMotionProps<"div">, "children">) {
  const reduce = useReducedMotion();
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, ...offset(from, distance) },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.6, ease: EASE },
    },
  };
  return (
    <motion.div className={className} variants={item} {...rest}>
      {children}
    </motion.div>
  );
}

/**
 * Wrapper de micro-interação para CTAs/cards: leve subida + escala no hover,
 * "press" no toque. Desliga com reduced-motion.
 */
export function Hoverable({
  children,
  className,
  lift = -4,
  scale = 1.02,
  ...rest
}: {
  children: ReactNode;
  className?: string;
  lift?: number;
  scale?: number;
} & Omit<HTMLMotionProps<"div">, "children">) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      whileHover={reduce ? undefined : { y: lift, scale }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Re-export do motion para usos pontuais (parallax, contadores, etc.). */
export { motion, useReducedMotion };
