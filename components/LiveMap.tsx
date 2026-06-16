"use client";

import s from "./LiveMap.module.css";

// Rota roxa acompanhando as ruas (igual ao app: Polyline cor primária + marcador paw).
const ROUTE = "M 60 205 L 60 170 L 150 170 L 150 74 L 330 74 L 400 45";

export function LiveMap() {
  return (
    <div className={s.card}>
      <div className={s.head}>
        <span className={s.live}>aumigão · operação ao vivo</span>
        <span className={s.badge}><span className={s.dot} /> Ao vivo</span>
      </div>

      <div className={s.map}>
        <svg viewBox="0 0 480 240" preserveAspectRatio="xMidYMid slice" fill="none">
          {/* praça/parque */}
          <rect x="18" y="138" width="116" height="84" rx="10" fill="#cfe3c4" />
          {/* quarteirões sutis */}
          <g fill="rgba(40,25,10,.04)">
            <rect x="170" y="90" width="140" height="60" rx="4" />
            <rect x="350" y="90" width="110" height="60" rx="4" />
            <rect x="170" y="190" width="140" height="44" rx="4" />
          </g>
          {/* ruas principais (claras) */}
          <g stroke="#ffffff" strokeWidth="13" strokeLinecap="round">
            <line x1="-10" y1="74" x2="490" y2="74" />
            <line x1="-10" y1="170" x2="490" y2="170" />
            <line x1="150" y1="-10" x2="150" y2="250" />
            <line x1="330" y1="-10" x2="330" y2="250" />
          </g>
          {/* ruas secundárias */}
          <g stroke="#efe9dd" strokeWidth="5" strokeLinecap="round">
            <line x1="-10" y1="120" x2="490" y2="120" />
            <line x1="240" y1="-10" x2="240" y2="250" />
            <line x1="410" y1="-10" x2="410" y2="250" />
          </g>
          {/* rota roxa (cor primária do app) */}
          <path d={ROUTE} stroke="#6d2bbd" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity=".25" />
          <path d={ROUTE} stroke="#6d2bbd" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="500" strokeDashoffset="500">
            <animate attributeName="stroke-dashoffset" from="500" to="0" dur="4s" repeatCount="indefinite" />
          </path>
          {/* origem */}
          <circle cx="60" cy="205" r="5" fill="#fff" stroke="#6d2bbd" strokeWidth="2.5" />
        </svg>

        {/* marcador da patinha (posição ao vivo) — igual ao app */}
        <span className={s.pawRing} style={{ left: "83.3%", top: "18.8%" }} />
        <span className={s.pawMarker} style={{ left: "83.3%", top: "18.8%" }}>🐾</span>
      </div>

      <div className={s.status}>
        <div className={s.stat}><div className={s.statK}>Status</div><div className={`${s.statV} ${s.statOk}`}>Em rota</div></div>
        <div className={s.stat}><div className={s.statK}>Passeador</div><div className={s.statV}>Verificado ✓</div></div>
        <div className={s.stat}><div className={s.statK}>Score</div><div className={`${s.statV} ${s.statEmber}`}>4.9/5</div></div>
      </div>
      <p className={s.note}>Representação ilustrativa da operação ao vivo.</p>
    </div>
  );
}
