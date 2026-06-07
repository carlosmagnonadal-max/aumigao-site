import Link from "next/link";

const links = [
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/seja-passeador", label: "Seja passeador" },
  { href: "/white-label", label: "White Label" },
  { href: "/demo-white-label", label: "Demo White Label" },
  { href: "/contato", label: "Contato" },
  { href: "/termos", label: "Termos" },
  { href: "/privacidade", label: "Privacidade" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_2fr] lg:px-8">
        <div>
          <p className="text-lg font-bold text-brand-ink">Aumigao Walk</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-brand-ink/65">
            Plataforma institucional para tutores, passeadores e operacoes pet
            que desejam escalar com tecnologia.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-ink/70 hover:text-brand-forest"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
