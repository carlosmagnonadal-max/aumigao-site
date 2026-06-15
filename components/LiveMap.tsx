"use client";

import s from "./LiveMap.module.css";

const ROUTE = "M 56 196 C 150 196 130 118 224 120 C 312 122 332 64 424 52";

export function LiveMap() {
  return (
    <div className={s.card}>
      <div className={s.head}>
        <span className={s.live}>aumigão · operação ao vivo</span>
        <span className={s.badge}><span className={s.dot} /> Ao vivo</span>
      </div>

      <div className={s.map}>
        <svg viewBox="0 0 480 240" preserveAspectRatio="xMidYMid slice" fill="none">
          {/* grid de ruas */}
          <g stroke="rgba(255,255,255,.05)" strokeWidth="1">
            {[40, 80, 120, 160, 200].map((y) => <line key={"h" + y} x1="0" y1={y} x2="480" y2={y} />)}
            {[60, 120, 180, 240, 300, 360, 420].map((x) => <line key={"v" + x} x1={x} y1="0" x2={x} y2="240" />)}
          </g>
          <g fill="rgba(255,255,255,.03)">
            <rect x="66" y="46" width="48" height="28" rx="3" />
            <rect x="186" y="86" width="48" height="28" rx="3" />
            <rect x="306" y="126" width="48" height="28" rx="3" />
            <rect x="246" y="166" width="48" height="28" rx="3" />
          </g>

          {/* rota: base + linha animada */}
          <path id="lm-route" d={ROUTE} stroke="#ff6a2b" strokeOpacity=".22" strokeWidth="9" strokeLinecap="round" />
          <path d={ROUTE} stroke="url(#lm-grad)" strokeWidth="3" strokeLinecap="round" strokeDasharray="7 9">
            <animate attributeName="stroke-dashoffset" from="160" to="0" dur="4s" repeatCount="indefinite" />
          </path>
          <defs>
            <linearGradient id="lm-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#ffa24d" />
              <stop offset="1" stopColor="#ff6a2b" />
            </linearGradient>
          </defs>

          {/* pins */}
          <circle cx="56" cy="196" r="6" fill="#fff" />
          <circle cx="56" cy="196" r="11" stroke="#fff" strokeOpacity=".5" />
          <text x="40" y="222" className={s.pinLabel}>Tutor</text>
          <circle cx="424" cy="52" r="6" fill="#ff6a2b" />
          <circle cx="424" cy="52" r="11" stroke="#ff6a2b" strokeOpacity=".6" />
          <text x="398" y="38" className={s.pinLabel}>Destino</text>

          {/* passeador se movendo */}
          <g>
            <circle r="5" fill="#fff" />
            <circle r="10" fill="none" stroke="#ff6a2b" strokeWidth="2" strokeOpacity=".8" />
            <animateMotion dur="4s" repeatCount="indefinite" rotate="auto" path={ROUTE} />
          </g>
        </svg>
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
