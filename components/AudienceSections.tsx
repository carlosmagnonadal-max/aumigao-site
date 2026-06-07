import Link from "next/link";
import { appDownloadHref } from "@/lib/content";

const audiences = [
  {
    eyebrow: "Para tutores",
    title: "Seu pet com mais rotina, cuidado e felicidade.",
    cta: "Quero baixar o app",
    href: appDownloadHref,
    benefits: [
      "Passeios organizados",
      "Rotina do pet",
      "Acompanhamento",
      "Planos por duração",
      "Modalidades de passeio",
      "Histórico e evolução",
    ],
  },
  {
    eyebrow: "Para passeadores",
    title: "Transforme cuidado com pets em oportunidade profissional.",
    cta: "Quero ser passeador",
    href: appDownloadHref,
    benefits: [
      "Solicitações organizadas",
      "Agenda",
      "Ganhos",
      "Reputação",
      "Credenciamento",
      "Kit operacional",
      "Evolução profissional",
    ],
  },
];

export function AudienceSections() {
  return (
    <section className="bg-white px-5 py-16 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        {audiences.map((audience) => (
          <article
            key={audience.eyebrow}
            className="rounded border border-brand-purple/10 bg-brand-cloud p-8 shadow-soft"
          >
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-orange">
              {audience.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-black text-brand-ink md:text-4xl">
              {audience.title}
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {audience.benefits.map((benefit) => (
                <div key={benefit} className="rounded bg-white px-4 py-3 font-bold text-brand-ink">
                  {benefit}
                </div>
              ))}
            </div>
            <Link
              href={audience.href}
              className="mt-8 inline-flex rounded bg-brand-purple px-6 py-3 font-bold text-white transition hover:bg-brand-orange"
            >
              {audience.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
