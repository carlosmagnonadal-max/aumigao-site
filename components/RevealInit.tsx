"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Revela os elementos `.ov-reveal` (que começam com opacity:0) ao entrarem na
 * viewport, adicionando `.is-visible`. As páginas premium do site dependem disso;
 * a home tem seu próprio observer, mas as demais páginas não — este inicializador
 * global garante o reveal em qualquer rota. Re-roda a cada navegação (App Router).
 */
export function RevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".ov-reveal"));
    if (els.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => {
      // Já visível no primeiro paint? revela imediatamente (evita flash em viewport).
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add("is-visible");
      } else {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
