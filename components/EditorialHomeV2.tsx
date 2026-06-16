"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { HeroMerged } from "./HeroMerged";
import { EditorialFooter } from "./EditorialFooter";
import { Reveal, Stagger, RevealItem } from "./Motion";
import e from "./editorial-home.module.css";
import sub from "./subsite.module.css";

/**
 * HOME = HUB enxuto: a primeira tela (hero da marca) + 3 PORTAS destacadas
 * para os sub-sites. Todo o conteúdo profundo (planos, módulos, app, white-label)
 * vive agora nos sub-sites /tutor, /passeador, /para-empresas.
 */
const doors = [
  { route: "/tutor", tag: "Sou tutor", title: "Veja seu cão no passeio, ao vivo", text: "Passeador verificado, mapa em tempo real e fotos no seu celular. Veja como seu cão fica em boas mãos enquanto você toca o dia.", cta: "Ver como funciona", c: "#f4671e" },
  { route: "/passeador", tag: "Quero ser passeador", title: "Transforme passeios em renda", text: "Entre na rede Aumigão pelo app Walk e receba demanda de várias empresas pet. Descubra quanto dá pra ganhar todo mês.", cta: "Quero ganhar passeando", c: "#6d2bbd" },
  { route: "/para-empresas", tag: "Tenho uma empresa pet", title: "Sua marca, nova receita recorrente", text: "Lance sua operação de passeios white-label, sem montar tecnologia. Veja os planos e como sua marca entra no ar.", cta: "Quero pra minha empresa", c: "#6d2bbd" },
];

export function EditorialHomeV2() {
  return (
    <div className={e.page}>
      <HeroMerged />

      {/* 3 PORTAS — entrada destacada pros sub-sites */}
      <section className={e.section} id="portas" style={{ paddingTop: "clamp(32px, 5vh, 56px)" }}>
        <div className={e.container}>
          <Reveal>
            <div className={e.eyebrow}><i /> Escolha seu caminho</div>
            <h2 className={e.h2}>Três trilhas, uma só <em>operação.</em></h2>
            <p className={e.lead}>Tutor, passeador e empresa entram por portas diferentes e se encontram na mesma infraestrutura. Escolha a sua e veja tudo por dentro.</p>
          </Reveal>
          <Stagger className={sub.doors}>
            {doors.map((d) => (
              <RevealItem key={d.route}>
                <Link href={d.route} className={sub.door} style={{ "--c": d.c } as CSSProperties}>
                  <span className={sub.doorTop} />
                  <span className={sub.doorBody}>
                    <span className={sub.doorTag}>{d.tag}</span>
                    <span className={sub.doorTitle}>{d.title}</span>
                    <span className={sub.doorText}>{d.text}</span>
                    <span className={sub.doorBtn}>{d.cta} →</span>
                  </span>
                </Link>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </section>

      <EditorialFooter />
    </div>
  );
}
