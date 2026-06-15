"use client";

/**
 * Transição de página (App Router roda este template a cada navegação).
 * Fade + leve subida ao entrar — vale para o site inteiro, sem tocar em cada página.
 * Respeita prefers-reduced-motion.
 */

import { motion, useReducedMotion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
