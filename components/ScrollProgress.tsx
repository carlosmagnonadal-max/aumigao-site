"use client";

/**
 * Barra fina de progresso de leitura no topo (assinatura de site premium).
 * Framer Motion: scaleX ligado ao progresso de scroll, suavizado com mola.
 */

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return <motion.div aria-hidden className="ov-scroll-progress" style={{ scaleX }} />;
}
