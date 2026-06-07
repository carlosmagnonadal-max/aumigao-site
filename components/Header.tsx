import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";

const navigation = [
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/seja-passeador", label: "Seja passeador" },
  { href: "/white-label", label: "White Label" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-purple/10 bg-brand-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
        <BrandLogo compact />

        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-ink/75 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-orange">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/demo-white-label"
          className="hidden rounded bg-brand-orange px-4 py-2 text-sm font-bold text-white shadow-soft transition hover:bg-brand-purple sm:inline-flex"
        >
          Solicitar demo
        </Link>

        <details className="group relative md:hidden">
          <summary className="list-none rounded bg-white px-4 py-2 text-sm font-black text-brand-purple shadow-soft">
            Menu
          </summary>
          <div className="absolute right-0 mt-3 grid w-56 gap-2 rounded bg-white p-4 shadow-soft">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="font-bold text-brand-ink">
                {item.label}
              </Link>
            ))}
            <Link
              href="/demo-white-label"
              className="rounded bg-brand-orange px-4 py-2 text-center font-bold text-white"
            >
              Solicitar demo
            </Link>
          </div>
        </details>
      </div>
    </header>
  );
}
