"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AUDIENCES, resolveAudience } from "@/lib/audiences";
import s from "./AudienceSwitcher.module.css";

/**
 * Alternador entre os 3 sub-sites (Tutor / Passeador / Empresa).
 * O item ativo recebe aria-current="page" e o sublinhado/cor do accent do público.
 * Logo NÃO é responsabilidade deste componente.
 */
export function AudienceSwitcher() {
  const pathname = usePathname() ?? "";
  const active = resolveAudience(pathname);

  return (
    <nav className={s.switcher} aria-label="Escolha seu perfil">
      {AUDIENCES.map((a) => {
        const isActive = active?.key === a.key;
        return (
          <Link
            key={a.key}
            href={a.route}
            className={`${s.item} ${isActive ? s.active : ""}`}
            aria-current={isActive ? "page" : undefined}
            style={isActive ? { color: a.accent, borderColor: a.accent } : undefined}
          >
            {a.navLabel}
          </Link>
        );
      })}
    </nav>
  );
}
