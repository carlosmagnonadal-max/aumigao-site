"use client";

import { useState } from "react";
import s from "./PlatformPeek.module.css";

type Tab = "tutor" | "passeador" | "admin";

export function TutorPhone() {
  return (
    <div className={s.phone}><div className={s.screen}>
      <div className={s.bar}><span>14:04</span><small>📶 🔋</small></div>
      <div className={s.ahead}>
        <div className={s.aname}><span className={s.amark}>AU</span> Aumigão Walk</div>
        <div className={s.aicons}><span className={s.aicon}>🔔</span><span className={s.aicon}>👤</span></div>
      </div>
      <div className={s.agreet}>Olá, tutor! 👋</div>
      <div className={s.acard}><div className={s.acardK}>Agendar passeio</div><div className={s.acardV}>Encontre um passeador</div><div className={s.acardS}>verificado e acompanhe cada etapa →</div></div>
      <div className={s.arow}>
        <div className={s.acell}><div className={s.acellV}>🛡️</div><div className={s.acellL}>Verificados</div></div>
        <div className={s.acell}><div className={s.acellV}>💬</div><div className={s.acellL}>Chat protegido</div></div>
        <div className={s.acell}><div className={s.acellV}>📍</div><div className={s.acellL}>Tempo real</div></div>
      </div>
      <div className={s.alist}>
        <div className={s.aitem}><span className={s.aitemIc}>🐕</span><span><div className={s.aitemT}>Thor · hoje 16:30</div><div className={s.aitemS}>passeador a caminho · em rota</div></span></div>
        <div className={s.aitem}><span className={s.aitemIc}>★</span><span><div className={s.aitemT}>Avaliar último passeio</div><div className={s.aitemS}>seu feedback melhora a operação</div></span></div>
      </div>
      <div className={s.anav}><span className={`${s.anavD} ${s.anavOn}`} /><span className={s.anavD} /><span className={s.anavD} /><span className={s.anavD} /><span className={s.anavD} /></div>
    </div></div>
  );
}

export function PasseadorPhone() {
  return (
    <div className={s.phone}><div className={s.screen}>
      <div className={s.bar}><span>18:24</span><small>📶 🔋</small></div>
      <div className={s.ahead}>
        <div className={s.aname}><span className={s.amark}>W</span> Walk · passeador</div>
        <div className={s.aicons}><span className={s.aicon}>🔔</span></div>
      </div>
      <div className={s.agreet}>Olá, Marina! 🐾</div>
      <div className={s.acard}><div className={s.acardK}>Disponível para saque</div><div className={s.acardV}>R$ 1.240,00</div><div className={s.acardS}>+ R$ 180 em processamento · este mês</div></div>
      <div className={s.arow}>
        <div className={s.acell}><div className={s.acellV}>12</div><div className={s.acellL}>passeios na semana</div></div>
        <div className={s.acell}><div className={s.acellV}>4.9 ★</div><div className={s.acellL}>seu score</div></div>
        <div className={s.acell}><div className={s.acellV}>Ouro</div><div className={s.acellL}>nível</div></div>
      </div>
      <div className={s.alist}>
        <div className={s.aitem}><span className={s.aitemIc}>📅</span><span><div className={s.aitemT}>Mel · amanhã 09:00</div><div className={s.aitemS}>Pinheiros · 45 min · R$ 38</div></span></div>
        <div className={s.aitem}><span className={s.aitemIc}>📍</span><span><div className={s.aitemT}>Bob · amanhã 17:30</div><div className={s.aitemS}>Vila Madalena · 30 min · R$ 30</div></span></div>
      </div>
      <div className={s.anav}><span className={s.anavD} /><span className={s.anavD} /><span className={s.anavD} /><span className={`${s.anavD} ${s.anavOn}`} /><span className={s.anavD} /></div>
    </div></div>
  );
}

// Mini-mapa idêntico ao LiveMap do hero: ruas claras + rota roxa (cor do app) + marcador da patinha.
const ROUTE = "M 60 205 L 60 170 L 150 170 L 150 74 L 330 74 L 400 45";
function MiniMap() {
  return (
    <div className={s.bmap}>
      <svg viewBox="0 0 480 240" preserveAspectRatio="xMidYMid slice" fill="none">
        <rect x="18" y="138" width="116" height="84" rx="10" fill="#cfe3c4" />
        <g fill="rgba(40,25,10,.04)">
          <rect x="170" y="90" width="140" height="60" rx="4" />
          <rect x="350" y="90" width="110" height="60" rx="4" />
          <rect x="170" y="190" width="140" height="44" rx="4" />
        </g>
        <g stroke="#ffffff" strokeWidth="13" strokeLinecap="round">
          <line x1="-10" y1="74" x2="490" y2="74" /><line x1="-10" y1="170" x2="490" y2="170" />
          <line x1="150" y1="-10" x2="150" y2="250" /><line x1="330" y1="-10" x2="330" y2="250" />
        </g>
        <g stroke="#efe9dd" strokeWidth="5" strokeLinecap="round">
          <line x1="-10" y1="120" x2="490" y2="120" /><line x1="240" y1="-10" x2="240" y2="250" /><line x1="410" y1="-10" x2="410" y2="250" />
        </g>
        <path d={ROUTE} stroke="#6d2bbd" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity=".25" />
        <path d={ROUTE} stroke="#6d2bbd" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="500" strokeDashoffset="500">
          <animate attributeName="stroke-dashoffset" from="500" to="0" dur="4s" repeatCount="indefinite" />
        </path>
        <circle cx="60" cy="205" r="5" fill="#fff" stroke="#6d2bbd" strokeWidth="2.5" />
      </svg>
      <span className={s.bpawRing} style={{ left: "83.3%", top: "18.8%" }} />
      <span className={s.bpaw} style={{ left: "83.3%", top: "18.8%" }}>🐾</span>
    </div>
  );
}

export function AdminBrowser() {
  return (
    <div className={s.browser}>
      <div className={s.bbar}>
        <span className={s.bdot} style={{ background: "#ff5f57" }} /><span className={s.bdot} style={{ background: "#febc2e" }} /><span className={s.bdot} style={{ background: "#28c840" }} />
        <span className={s.burl}>painel.suamarca.com.br/operacao</span>
      </div>
      <div className={s.bscreen}>
        <aside className={s.bside}>
          <div className={s.bsideBrand}><span className={s.bsideLogo}>SM</span><span className={s.bsideName}>Sua Marca<small>Ops Center</small></span></div>
          <div className={s.bsideGroup}>Operação</div>
          <div className={`${s.bnav} ${s.bnavOn}`}><span className={s.bnavMk}>D</span> Dashboard</div>
          <div className={s.bnav}><span className={s.bnavMk}>Op</span> Operação</div>
          <div className={s.bnav}><span className={s.bnavMk}>Mx</span> Matching</div>
          <div className={s.bsideGroup}>Rede</div>
          <div className={s.bnav}><span className={s.bnavMk}>Pa</span> Passeadores</div>
          <div className={s.bnav}><span className={s.bnavMk}>Ql</span> Qualidade</div>
          <div className={s.bsideGroup}>Financeiro</div>
          <div className={s.bnav}><span className={s.bnavMk}>Fi</span> Financeiro</div>
          <div className={s.bnav}><span className={s.bnavMk}>Wl</span> White-label</div>
        </aside>
        <div className={s.bmain}>
          <div className={s.bhead}>
            <div className={s.bbrand}>Operação<span className={s.bheadSub}> · tempo real</span></div>
            <div className={s.blive}><span className={s.bliveDot} /> Ao vivo</div>
          </div>
          <div className={s.bkpis}>
            <div className={`${s.bkpi} ${s.kEmber}`}><div className={s.bkpiV}>128</div><div className={s.bkpiL}>passeios ativos</div></div>
            <div className={`${s.bkpi} ${s.kGreen}`}><div className={s.bkpiV}>342</div><div className={s.bkpiL}>passeadores</div></div>
            <div className={`${s.bkpi} ${s.kSky}`}><div className={s.bkpiV}>98%</div><div className={s.bkpiL}>matching</div></div>
            <div className={`${s.bkpi} ${s.kAmber}`}><div className={s.bkpiV}>R$42k</div><div className={s.bkpiL}>no mês</div></div>
          </div>
          <div className={s.bgrid}>
            <MiniMap />
            <div className={s.btable}>
              <div className={s.btHd}>Passeadores em campo</div>
              <div className={s.btrow}><span className={s.btName}>Marina S.</span><span className={`${s.btTag} ${s.btOk}`}>Em rota</span></div>
              <div className={s.btrow}><span className={s.btName}>Diego R.</span><span className={`${s.btTag} ${s.btOk}`}>Em rota</span></div>
              <div className={s.btrow}><span className={s.btName}>Paula M.</span><span className={`${s.btTag} ${s.btAmber}`}>Recovery</span></div>
              <div className={s.btrow}><span className={s.btName}>João T.</span><span className={`${s.btTag} ${s.btMuted}`}>Concluído</span></div>
            </div>
          </div>
          <p className={s.bnote}>Representação ilustrativa do painel. Dados conceituais.</p>
        </div>
      </div>
    </div>
  );
}

const content = {
  tutor: { cap: <>O app do <em>tutor</em>.</>, lead: "Agendar, acompanhar ao vivo no mapa e avaliar — simples e seguro, com a sua marca.", bullets: ["Agendamento em segundos", "Acompanhamento ao vivo", "Passeador verificado", "Avaliação e histórico"], link: "#baixar", linkLabel: "Baixar o app" },
  passeador: { cap: <>O app do <em>passeador</em>: o Walk.</>, lead: "Cadastre-se uma vez no app Walk e entre para a rede de passeadores da Aumigão. Em vez de depender de um único cliente, você recebe passeios de várias empresas pet parceiras — e a sua reputação te acompanha em toda a rede. Quem cuida bem, ganha mais demanda.", bullets: ["Uma rede, várias empresas pet parceiras", "Ganhos transparentes e saque fácil", "Agenda própria e matching por região", "Credenciamento, kit e suporte"], link: "#baixar", linkLabel: "Baixar o Walk e ser passeador" },
  admin: { cap: <>O painel <em>white-label</em>.</>, lead: "Você opera com a sua marca: matching, operação ao vivo, passeadores e financeiro num só painel.", bullets: ["Operação ao vivo no mapa", "Gestão da rede de passeadores", "Financeiro e repasses rastreáveis", "Tudo com a sua marca"], link: "#contato", linkLabel: "Conheça o White Label" },
} as const;

export function PlatformPeek() {
  const [tab, setTab] = useState<Tab>("tutor");
  const c = content[tab];
  return (
    <>
      <div className={s.tabs}>
        <button className={`${s.tab} ${tab === "tutor" ? s.tabActive : ""}`} onClick={() => setTab("tutor")}>📱 Tutor</button>
        <button className={`${s.tab} ${tab === "passeador" ? s.tabActive : ""}`} onClick={() => setTab("passeador")}>🐾 Passeador</button>
        <button className={`${s.tab} ${tab === "admin" ? s.tabActive : ""}`} onClick={() => setTab("admin")}>🖥️ Admin · White-Label</button>
      </div>
      <div className={s.split}>
        <div>
          <h3 className={s.cap}>{c.cap}</h3>
          <p className={s.capLead}>{c.lead}</p>
          <ul className={s.ul}>{c.bullets.map((b) => <li key={b} className={s.li}><span>✓</span> {b}</li>)}</ul>
          <a href={c.link} className={s.saiba}>{c.linkLabel} →</a>
        </div>
        <div className={s.stage}>
          {tab === "tutor" && <TutorPhone />}
          {tab === "passeador" && <PasseadorPhone />}
          {tab === "admin" && <AdminBrowser />}
        </div>
      </div>
    </>
  );
}
