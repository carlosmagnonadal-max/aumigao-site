import Link from "next/link";

const stores = ["App Store", "Google Play"];

export function AppDownload() {
  return (
    <section id="baixar-aplicativo" className="bg-brand-cream px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 rounded bg-brand-purple p-8 text-white shadow-soft lg:grid-cols-[1fr_0.8fr] lg:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-peach">
            Baixe o aplicativo
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">
            Disponível para tutores e passeadores.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
            Publicação nas lojas em fase de ativação. A estrutura já está
            preparada para App Store, Google Play e QR Code.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {stores.map((store) => (
              <Link
                key={store}
                href="#baixar-aplicativo"
                className="rounded bg-white px-6 py-3 text-center font-black text-brand-purple transition hover:bg-brand-peach hover:text-brand-ink"
              >
                {store}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid place-items-center rounded bg-white/10 p-6">
          <div className="grid h-48 w-48 grid-cols-5 gap-2 rounded bg-white p-4">
            {Array.from({ length: 25 }).map((_, index) => (
              <span
                key={index}
                className={
                  index % 2 === 0 || index % 7 === 0
                    ? "rounded bg-brand-ink"
                    : "rounded bg-brand-purple/20"
                }
              />
            ))}
          </div>
          <p className="mt-4 text-sm font-bold text-white/75">QR Code em breve</p>
        </div>
      </div>
    </section>
  );
}
