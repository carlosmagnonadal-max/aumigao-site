"use client";

/**
 * Fundo "aurora": glows radiais (ember + roxo) que flutuam lentamente.
 * Dá vida e ar premium às áreas escuras. Respeita prefers-reduced-motion
 * (fica estático, mas ainda colorido).
 */

import { motion, useReducedMotion } from "framer-motion";

export function Aurora({
  className = "",
  intensity = 1,
}: {
  className?: string;
  intensity?: number;
}) {
  const reduce = useReducedMotion();
  const o = 0.85 * intensity;

  return (
    <div className={`ov-aurora ${className}`} aria-hidden>
      <motion.div
        className="ov-aurora-blob ov-aurora-ember"
        style={{ opacity: o }}
        animate={
          reduce
            ? undefined
            : { x: [0, 48, -24, 0], y: [0, -34, 22, 0], scale: [1, 1.18, 1] }
        }
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ov-aurora-blob ov-aurora-purple"
        style={{ opacity: o }}
        animate={
          reduce
            ? undefined
            : { x: [0, -36, 22, 0], y: [0, 28, -18, 0], scale: [1, 1.12, 1] }
        }
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="ov-aurora-blob ov-aurora-violet"
        style={{ opacity: o * 0.8 }}
        animate={
          reduce
            ? undefined
            : { x: [0, 24, -30, 0], y: [0, -18, 26, 0], scale: [1, 1.2, 1] }
        }
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
