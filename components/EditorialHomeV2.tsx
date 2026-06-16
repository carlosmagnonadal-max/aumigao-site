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
  { route: "/tutor", tag: "Para tutores", title: "Acompanhe cada passeio", text: "Seu cão passeia com um passeador verificado e você vê tudo ao vivo — mapa, fotos e avaliação.", c: "#f4671e" },
  { route: "/passeador", tag: "Para passeadores", title: "Cuidar virou profissão", text: "Renda recorrente na rede Aumigão, com o app Walk. Não é bico: é a sua profissão.", c: "#6d2bbd" },
  { route: "/para-empresas", tag: "Para empresas pet", title: "Sua marca, sua receita", text: "Lance sua operação de passeios white-label — com a sua marca, sem montar tecnologia.", c: "#6d2bbd" },
];

export function EditorialHomeV2() {
  return (
    <div className={e.page}>
      <HeroMerged />

      {/* 3 PORTAS — entrada destacada pros sub-sites */}
      <section className={e.section} id="portas">
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
                    <span className={sub.doorBtn}>Entrar →</span>
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
