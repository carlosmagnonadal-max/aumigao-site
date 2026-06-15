"use client";

import { useState, type CSSProperties } from "react";
import s from "./BrandSwapper.module.css";

const brands = [
  { name: "Aumigão Walk", tag: "padrão da plataforma", mark: "AU", color: "#ff6a2b" },
  { name: "Pet Vida", tag: "exemplo de petshop", mark: "PV", color: "#16a34a" },
  { name: "AuAu Walk", tag: "exemplo de petshop", mark: "AA", color: "#2563eb" },
  { name: "Lola Pet", tag: "exemplo de petshop", mark: "LP", color: "#db2777" },
];

export function BrandSwapper() {
  const [i, setI] = useState(0);
  const [custom, setCustom] = useState<string | null>(null);
  const b = brands[i];
  const color = custom ?? b.color;
  const style = { "--b": color } as CSSProperties;

  return (
    <div className={s.wrap}>
      {/* controles */}
      <div className={s.controls}>
        <div className={s.ctrlLabel}>Escolha uma marca</div>
        <div className={s.brands}>
          {brands.map((br, idx) => (
            <button
              key={br.name}
              onClick={() => { setI(idx); setCustom(null); }}
              className={`${s.brand} ${idx === i && !custom ? s.brandActive : ""}`}
              style={{ "--b": br.color } as CSSProperties}
            >
              <span className={s.brandMark} style={{ background: br.color }}>{br.mark}</span>
              <span>
                <span className={s.brandName}>{br.name}</span>
                <span className={s.brandTag} style={{ display: "block" }}>{br.tag}</span>
              </span>
            </button>
          ))}
        </div>
        <div className={s.colorRow}>
          <label htmlFor="bswap-color">…ou escolha a sua cor:</label>
          <input id="bswap-color" className={s.colorInput} type="color" value={color} onChange={(e) => setCustom(e.target.value)} />
        </div>
      </div>

      {/* preview do app */}
      <div className={s.stage} style={style}>
        <div className={s.phone}>
          <div className={s.screen}>
            <div className={s.notch}><div className={s.notchBar} /></div>
            <div className={s.appHead}>
              <div className={s.appMark}>{b.mark}</div>
              <div className={s.appName}>{b.name}<small>passeios · seu pet</small></div>
            </div>
            <div className={s.appCard}>
              <div className={s.appCardK}>Próximo passeio</div>
              <div className={s.appCardV}>Hoje, 16:30 · Thor</div>
              <div className={s.appCardRow}><span className={s.appCardDot} /> Passeador a caminho · em rota</div>
            </div>
            <div className={s.appBtn}>Agendar passeio →</div>
            <div className={s.appList}>
              <div className={s.appItem}><span className={s.appItemIcon}>📍</span><span><span className={s.appItemT} style={{ display: "block" }}>Acompanhar ao vivo</span><span className={s.appItemS}>rota e localização em tempo real</span></span></div>
              <div className={s.appItem}><span className={s.appItemIcon}>★</span><span><span className={s.appItemT} style={{ display: "block" }}>Avaliar passeio</span><span className={s.appItemS}>seu feedback melhora a operação</span></span></div>
            </div>
            <div className={s.appNav}>
              <div className={`${s.appNavI} ${s.appNavActive}`} />
              <div className={s.appNavI} />
              <div className={s.appNavI} />
              <div className={s.appNavI} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
