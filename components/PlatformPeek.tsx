"use client";

import { useState } from "react";
import s from "./PlatformPeek.module.css";

type Tab = "tutor" | "passeador" | "admin";

function TutorPhone() {
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

function PasseadorPhone() {
  return (
    <div className={s.phone}><div className={s.screen}>
      <div className={s.bar}><span>18:24</span><small>📶 🔋</small></div>
      <div className={s.ahead}>
        <div className={s.aname}><span className={s.amark}>AU</span> Aumigão · Passeador</div>
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

function AdminBrowser() {
  return (
    <div className={s.browser}>
      <div className={s.bbar}>
        <span className={s.bdot} style={{ background: "#ff5f57" }} /><span className={s.bdot} style={{ background: "#febc2e" }} /><span className={s.bdot} style={{ background: "#28c840" }} />
        <span className={s.burl}>painel.suamarca.com.br/operacao</span>
      </div>
      <div className={s.bscreen}>
        <div className={s.bhead}>
          <div className={s.bbrand}><span className={s.bbrandM}>SM</span> Sua Marca · Operação</div>
          <div className={s.blive}><span className={s.bliveDot} /> Ao vivo</div>
        </div>
        <div className={s.bkpis}>
          <div className={s.bkpi}><div className={s.bkpiV}>128</div><div className={s.bkpiL}>passeios ativos</div></div>
          <div className={s.bkpi}><div className={s.bkpiV}>342</div><div className={s.bkpiL}>passeadores</div></div>
          <div className={s.bkpi}><div className={s.bkpiV}>98%</div><div className={s.bkpiL}>matching</div></div>
          <div className={s.bkpi}><div className={s.bkpiV}>R$ 42k</div><div className={s.bkpiL}>no mês</div></div>
        </div>
        <div className={s.bgrid}>
          <div className={s.bmap}>
            <svg viewBox="0 0 200 200" width="100%" height="100%" fill="none">
              <g stroke="rgba(255,255,255,.05)"><line x1="0" y1="66" x2="200" y2="66" /><line x1="0" y1="133" x2="200" y2="133" /><line x1="66" y1="0" x2="66" y2="200" /><line x1="133" y1="0" x2="133" y2="200" /></g>
              <path d="M26 168 C 90 168 80 90 160 40" stroke="#ff6a2b" strokeOpacity=".25" strokeWidth="6" strokeLinecap="round" />
              <path d="M26 168 C 90 168 80 90 160 40" stroke="#ffa24d" strokeWidth="2.5" strokeDasharray="6 7"><animate attributeName="stroke-dashoffset" from="120" to="0" dur="4s" repeatCount="indefinite" /></path>
              <circle cx="26" cy="168" r="5" fill="#fff" /><circle cx="160" cy="40" r="5" fill="#ff6a2b" />
              <g><circle r="4" fill="#fff" /><circle r="8" fill="none" stroke="#ff6a2b" strokeWidth="1.5" /><animateMotion dur="4s" repeatCount="indefinite" path="M26 168 C 90 168 80 90 160 40" /></g>
            </svg>
          </div>
          <div className={s.btable}>
            <div className={s.btrow}><span className={s.btName}>Marina S.</span><span className={`${s.btTag} ${s.btOk}`}>Em rota</span></div>
            <div className={s.btrow}><span className={s.btName}>Diego R.</span><span className={`${s.btTag} ${s.btOk}`}>Em rota</span></div>
            <div className={s.btrow}><span className={s.btName}>Paula M.</span><span className={`${s.btTag} ${s.btEmber}`}>Recovery</span></div>
            <div className={s.btrow}><span className={s.btName}>João T.</span><span className={`${s.btTag} ${s.btOk}`}>Concluído</span></div>
          </div>
        </div>
        <p className={s.bnote}>Representação ilustrativa do painel. Dados conceituais.</p>
      </div>
    </div>
  );
}

const content = {
  tutor: { cap: <>O app do <em>tutor</em>.</>, lead: "Agendar, acompanhar ao vivo no mapa e avaliar — simples e seguro, com a sua marca.", bullets: ["Agendamento em segundos", "Acompanhamento ao vivo", "Passeador verificado", "Avaliação e histórico"], link: "/como-funciona", linkLabel: "Ver como funciona" },
  passeador: { cap: <>O app do <em>passeador</em>.</>, lead: "A rede de passeadores é nossa: demanda qualificada, ganhos claros e reputação que valoriza quem cuida.", bullets: ["Ganhos transparentes e saque fácil", "Agenda própria", "Matching por região e score", "Kit, credenciamento e suporte"], link: "/seja-passeador", linkLabel: "Quero ser passeador" },
  admin: { cap: <>O painel <em>white-label</em>.</>, lead: "Você opera com a sua marca: matching, operação ao vivo, passeadores e financeiro num só painel.", bullets: ["Operação ao vivo no mapa", "Gestão da rede de passeadores", "Financeiro e repasses rastreáveis", "Tudo com a sua marca"], link: "/white-label", linkLabel: "Conheça o White Label" },
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
