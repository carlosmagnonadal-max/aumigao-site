"use client";

import { useState, useEffect, type CSSProperties, type ChangeEvent } from "react";
import s from "./BrandSwapper.module.css";

const examples = [
  { name: "Pet Vida", color: "#16a34a" },
  { name: "AuAu Walk", color: "#2563eb" },
  { name: "Lola Pet", color: "#db2777" },
];

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  return ((parts[0]?.[0] ?? "A") + (parts[1]?.[0] ?? "")).toUpperCase();
}

export function BrandSwapper() {
  const [name, setName] = useState("Aumigão Walk");
  const [color, setColor] = useState("#ff6a2b");
  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const style = { "--b": color } as CSSProperties;

  // Cria e revoga a objectURL dentro do mesmo efeito, garantindo ciclo de vida coeso.
  useEffect(() => {
    if (!logoFile) { setLogoUrl(null); return; }
    const url = URL.createObjectURL(logoFile);
    setLogoUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [logoFile]);

  function onLogo(e: ChangeEvent<HTMLInputElement>) {
    setLogoFile(e.target.files?.[0] ?? null);
  }

  return (
    <div className={s.wrap} style={style}>
      {/* controles */}
      <div>
        <div className={s.field}>
          <div className={s.ctrlLabel}>Nome da sua marca</div>
          <input className={s.input} value={name} onChange={(e) => setName(e.target.value)} placeholder="Ex.: Pet Vida" maxLength={28} />
        </div>

        <div className={s.field}>
          <div className={s.ctrlLabel}>Sua logo</div>
          <div className={s.row}>
            <label className={s.uploadBtn}>
              📷 Enviar logo
              <input type="file" accept="image/*" onChange={onLogo} />
            </label>
            {logoUrl && <button className={s.removeLogo} onClick={() => setLogoFile(null)}>remover</button>}
          </div>
        </div>

        <div className={s.field}>
          <div className={s.ctrlLabel}>Sua cor</div>
          <div className={s.colorWrap}>
            <input className={s.colorInput} type="color" value={color} onChange={(e) => setColor(e.target.value)} />
            <span>{color.toUpperCase()}</span>
          </div>
        </div>

        <div className={s.examples}>
          Exemplos:
          {examples.map((ex) => (
            <button key={ex.name} className={s.exChip} onClick={() => { setName(ex.name); setColor(ex.color); setLogoFile(null); }}>{ex.name}</button>
          ))}
        </div>
      </div>

      {/* preview do app (fiel ao tutor-home) */}
      <div className={s.stage}>
        <div className={s.phone}>
          <div className={s.screen}>
            <div className={s.statusbar}><span>14:04</span><small>📶 🔋</small></div>

            <div className={s.appHead}>
              <div className={s.logoBox}>
                {logoUrl
                  ? <>
                      <span className={s.logoIcon}><img src={logoUrl} alt="logo" /></span>
                      <span className={s.logoName}>{name}<small>passeios pet</small></span>
                    </>
                  : <>
                      <span className={s.logoMark}>{initials(name)}</span>
                      <span className={s.logoName}>{name}<small>passeios pet</small></span>
                    </>}
              </div>
              <div className={s.headIcons}>
                <span className={s.headIcon}>🎧</span>
                <span className={s.headIcon}>🔔</span>
                <span className={s.headIcon}>👤</span>
              </div>
            </div>

            <div className={s.greet}>
              <div className={s.greetH}>Olá, tutor! 👋</div>
              <div className={s.greetS}>Cuidado organizado, passeio seguro e rotina leve para o seu pet.</div>
            </div>

            <div className={s.agendar}>
              <div className={s.agendarT}>
                <b>Agendar passeio</b>
                <span>Encontre um passeador verificado e acompanhe cada etapa.</span>
              </div>
              <div className={s.agendarBtn}>→</div>
            </div>

            <div className={s.pills}>
              <div className={s.pill}><div className={s.pillIcon}>🛡️</div><div className={s.pillT}>Passeadores verificados</div></div>
              <div className={s.pill}><div className={s.pillIcon}>💬</div><div className={s.pillT}>Chat protegido</div></div>
              <div className={s.pill}><div className={s.pillIcon}>📍</div><div className={s.pillT}>Status em tempo real</div></div>
            </div>

            <div className={s.stats}>
              <div className={s.statc}><div className={s.statcV}>0 de 3</div><div className={s.statcL}>passeios esta semana</div></div>
              <div className={s.statc}><div className={s.statcV}>Nível 1</div><div className={s.statcL}>começando a rotina</div></div>
            </div>

            <div className={s.nav}>
              {[["🏠", "Início", true], ["🐾", "Passeios", false], ["❤️", "Pet", false], ["👤", "Conta", false], ["📋", "Planos", false]].map(([ic, lb, act]) => (
                <div key={lb as string} className={act ? `${s.navI} ${s.navActive}` : s.navI}>
                  <span className={s.navDot} />{lb}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
