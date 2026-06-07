import Link from "next/link";
import { whiteLabelFeatures } from "@/lib/content";

export function WhiteLabelCTA() {
  return (
    <section className="bg-brand-cream px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded bg-brand-purple p-8 text-white md:grid-cols-[1fr_0.9fr] md:p-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-peach">
            Expansão para negócios pet
          </p>
          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            Sua marca pode levar cuidado para muito mais pets.
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-white/75">
            O White Label do Aumigão Walk ajuda pet shops, clínicas, hotéis e
            redes a criarem uma frente de passeios com identidade própria,
            comunidade local e relacionamento mais próximo com tutores.
          </p>
          <Link
            href="/white-label"
            className="mt-8 inline-flex rounded bg-brand-orange px-6 py-3 font-bold text-white transition hover:bg-brand-peach hover:text-brand-ink"
          >
            Conhecer a expansão
          </Link>
        </div>
        <div className="grid gap-3">
          {whiteLabelFeatures.map((feature) => (
            <div key={feature} className="rounded bg-white/10 px-4 py-3 font-semibold">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
