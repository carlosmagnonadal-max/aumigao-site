import s from "./editorial-home.module.css";

/** Footer reutilizável (mesmo da home) para as páginas internas. */
export function SiteFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerTop}>
          <div>
            <a href="/" className={s.footerLogo}><img src="/icon-rounded-512.png" alt="" /><span>Aumigão Walk</span></a>
            <p className={s.footerTagline}>Infraestrutura de passeios pet: operação auditável, rede credenciada e White Label — com a sua marca.</p>
          </div>
          <div className={s.footerCol}>
            <h4>Plataforma</h4>
            <a href="/#plataforma-por-dentro">Como funciona</a>
            <a href="/#plataforma">Módulos</a>
            <a href="/#white-label">White Label</a>
            <a href="/#planos">Planos</a>
          </div>
          <div className={s.footerCol}>
            <h4>Participantes</h4>
            <a href="/#plataforma-por-dentro">Para tutores</a>
            <a href="/#baixar">Seja passeador (Walk)</a>
            <a href="/#white-label">Para empresas pet</a>
          </div>
          <div className={s.footerCol}>
            <h4>Empresa</h4>
            <a href="/contato">Contato</a>
            <a href="/termos">Termos</a>
            <a href="/privacidade">Privacidade · LGPD</a>
          </div>
        </div>
        <div className={s.footerBottom}>
          <span>© 2026 Aumigão Walk · CNPJ 49.617.734/0001-03</span>
          <nav className={s.footerLegal}>
            <a href="/termos">Termos</a>
            <a href="/privacidade">Privacidade · LGPD</a>
            <a href="/contato">Contato</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
