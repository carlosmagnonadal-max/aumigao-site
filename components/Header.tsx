import Link from "next/link";

const navigation = [
  { href: "/como-funciona", label: "Como funciona" },
  { href: "/seja-passeador", label: "Seja passeador" },
  { href: "/white-label", label: "White Label" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-brand-cloud/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3 font-bold">
          <span className="grid h-10 w-10 place-items-center rounded bg-brand-forest text-white">
            AW
          </span>
          <span className="text-lg text-brand-ink">Aumigao Walk</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-brand-ink/75 md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-forest">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/demo-white-label"
          className="hidden rounded bg-brand-coral px-4 py-2 text-sm font-bold text-white shadow-soft transition hover:bg-brand-forest sm:inline-flex"
        >
          Solicitar demo
        </Link>
      </div>
    </header>
  );
}
