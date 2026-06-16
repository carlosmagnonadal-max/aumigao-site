import s from "./inner.module.css";

/** Header das páginas internas — estilo Calor Editorial (creme, marca + nav pra âncoras da home). */
export function SiteHeader() {
  return (
    <header className={s.header}>
      <div className={s.headInner}>
        <a href="/" className={s.brand}>
          <img className={s.brandMark} src="/icon-rounded-512.png" alt="Aumigão Walk" /> Aumigão Walk
        </a>
        <nav className={s.nav}>
          <span className={s.navLinks}>
            <a href="/#plataforma-por-dentro">Como funciona</a>
            <a href="/#planos">Planos</a>
            <a href="/#white-label">White Label</a>
          </span>
          <a href="https://aumigao-admin-web.vercel.app" target="_blank" rel="noopener noreferrer" className={s.navGhost}>Portal do parceiro</a>
          <a href="/#contato" className={s.navCta}>Solicitar diagnóstico</a>
        </nav>
      </div>
    </header>
  );
}
