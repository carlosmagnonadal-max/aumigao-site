import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/#funciona", label: "Como funciona" },
  { href: "/#confianca", label: "Confiança" },
  { href: "/#jornada", label: "Participantes" },
  { href: "/#whitelabel", label: "White Label" },
];

export function Header() {
  return (
    <header className="ov-header">
      <div className="ov-wrap ov-nav">
        <Link href="/" className="ov-brand" aria-label="Aumigão Walk">
          <span className="ov-logo" aria-hidden="true">
            <Image src="/au-mark.png" alt="" width={30} height={30} priority />
          </span>
          <span>Aumigão Walk</span>
        </Link>

        <nav className="ov-navlinks" aria-label="Navegação principal">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ov-navright">
          <span className="ov-navstatus">
            <span className="ov-dot" />
            Operação online
          </span>
          <Link className="ov-btn ov-btn-primary" href="/#cta">
            Solicitar diagnóstico White Label
            <span className="ov-arr">→</span>
          </Link>
        </div>

        <details className="ov-mobile-menu">
          <summary>Menu</summary>
          <div>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="ov-btn ov-btn-primary" href="/#cta">
              Solicitar diagnóstico White Label
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
