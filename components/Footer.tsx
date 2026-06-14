import Image from "next/image";
import Link from "next/link";

const groups = [
  {
    title: "Plataforma",
    links: [
      { href: "/#funciona", label: "Como funciona" },
      { href: "/#confianca", label: "Confiança" },
      { href: "/#whitelabel", label: "White Label" },
      { href: "/#cta", label: "Contato" },
    ],
  },
  {
    title: "Participantes",
    links: [
      { href: "/#jornada", label: "Para tutores" },
      { href: "/#passeadores", label: "Seja passeador" },
      { href: "/#whitelabel", label: "Para empresas" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { href: "/privacidade", label: "Privacidade · LGPD" },
      { href: "/termos", label: "Termos" },
      { href: "/contato", label: "Contato" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="ov-footer">
      <div className="ov-wrap">
        <div className="ov-footer-top">
          <div className="ov-footer-brand">
            <Link href="/" className="ov-brand" aria-label="Aumigão Walk">
              <span className="ov-logo" aria-hidden="true">
                <Image src="/au-mark.png" alt="" width={30} height={30} />
              </span>
              <span>Aumigão Walk</span>
            </Link>
            <p>
              Infraestrutura de passeios pet: operação auditável, rede credenciada
              e White Label.
            </p>
          </div>

          {groups.map((group) => (
            <div key={group.title} className="ov-footer-col">
              <h4>{group.title}</h4>
              {group.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="ov-footer-bottom">
          <span>© 2026 Aumigão Walk · CNPJ 49.617.734/0001-03</span>
          <span>Operação · auditável · multiunidades</span>
        </div>
      </div>
    </footer>
  );
}

export function Footer() {
  return <SiteFooter />;
}
