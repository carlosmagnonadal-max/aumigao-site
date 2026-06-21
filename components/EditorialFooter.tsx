import Image from "next/image";
import Link from "next/link";
import s from "./editorial-home.module.css";
import { ADMIN_PORTAL_URL } from "@/lib/contact";

/** Rodapé dos sub-sites — mesmo visual da home, com links reais para os 3 mundos. */
export function EditorialFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.footerTop}>
          <div>
            <Link href="/" className={s.footerLogo}>
              <Image src="/icon-rounded-512.png" alt="" width={40} height={40} /><span>Aumigão Walk</span>
            </Link>
            <p className={s.footerTagline}>
              Infraestrutura de passeios pet: operação auditável, rede credenciada e White Label — com a sua marca.
            </p>
          </div>
          <div className={s.footerCol}>
            <h4>Participantes</h4>
            <Link href="/tutor">Para tutores</Link>
            <Link href="/passeador">Seja passeador</Link>
            <Link href="/para-empresas">Para empresas pet</Link>
          </div>
          <div className={s.footerCol}>
            <h4>Plataforma</h4>
            <Link href="/#plataforma-por-dentro">Como funciona</Link>
            <Link href="/para-empresas">White Label</Link>
            <Link href="/para-empresas#planos">Planos</Link>
          </div>
          <div className={s.footerCol}>
            <h4>Empresa</h4>
            <Link href="/contato">Contato</Link>
            <a href={ADMIN_PORTAL_URL} target="_blank" rel="noopener noreferrer">Portal do parceiro</a>
            <Link href="/termos">Termos</Link>
            <Link href="/privacidade">Privacidade · LGPD</Link>
          </div>
        </div>
        <div className={s.footerBottom}>
          <span>© 2026 Aumigão Walk · CNPJ 67.562.337/0001-63</span>
          <nav className={s.footerLegal}>
            <Link href="/termos">Termos</Link>
            <Link href="/privacidade">Privacidade · LGPD</Link>
            <Link href="/contato">Contato</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
