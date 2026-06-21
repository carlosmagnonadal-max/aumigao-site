import Image from "next/image";
import s from "./inner.module.css";
import { ADMIN_PORTAL_URL } from "@/lib/contact";

/** Header das páginas internas — estilo Calor Editorial (creme, marca + nav pra âncoras da home). */
export function SiteHeader() {
  return (
    <header className={s.header}>
      <div className={s.headInner}>
        <a href="/" className={s.brand}>
          <Image className={s.brandMark} src="/icon-rounded-512.png" alt="Aumigão Walk" width={40} height={40} /> Aumigão Walk
        </a>
        <nav className={s.nav}>
          <span className={s.navLinks}>
            <a href="/#portas">Como funciona</a>
            <a href="/para-empresas#planos">Planos</a>
            <a href="/para-empresas">White Label</a>
          </span>
          <a href={ADMIN_PORTAL_URL} target="_blank" rel="noopener noreferrer" className={s.navGhost}>Portal do parceiro</a>
          <a href="/contato?perfil=empresa" className={s.navCta}>Solicitar diagnóstico</a>
        </nav>
      </div>
    </header>
  );
}
