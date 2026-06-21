"use client";

import { useEffect } from "react";

/**
 * Adiciona a classe `proto-clean` ao <html> enquanto o componente estiver montado
 * e a remove ao desmontar. Esconde o chrome legado do proto em páginas novas.
 */
export function useProtoClean() {
  useEffect(() => {
    document.documentElement.classList.add("proto-clean");
    return () => document.documentElement.classList.remove("proto-clean");
  }, []);
}
