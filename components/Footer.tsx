import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

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
    <footer className="border-t border-brand-purple/10 bg-brand-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1fr_2fr] lg:px-8">
        <div>
          <div className="[&_span]:text-white">
            <BrandLogo compact />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Passeios com carinho, tutores mais tranquilos e negócios pet prontos
            para crescer com uma experiência que tem afeto no centro.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-brand-peach"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
