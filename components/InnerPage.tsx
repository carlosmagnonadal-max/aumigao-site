"use client";

import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { useProtoClean } from "@/hooks/useProtoClean";
import s from "./inner.module.css";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  narrow?: boolean;
  children: ReactNode;
};

/** Shell das páginas internas: esconde o chrome antigo (proto-clean), header + faixa de título + conteúdo + footer. */
export function InnerPage({ eyebrow, title, lead, center, narrow, children }: Props) {
  useProtoClean();

  return (
    <div className={s.page}>
      <SiteHeader />
      <main className={narrow ? s.mainNarrow : s.main}>
        <section className={`${s.hero} ${center ? s.heroCenter : ""}`}>
          {eyebrow && <p className={s.eyebrow}><i /> {eyebrow}</p>}
          <h1 className={s.h1}>{title}</h1>
          {lead && <p className={s.lead}>{lead}</p>}
        </section>
        <div className={s.body}>{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
