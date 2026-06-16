/**
 * Mockup DARK do app do passeador (Walk) — espelha o app real (tema escuro + roxo).
 * Estrutura baseada nas telas reais: Início / passeio atual / status / score / ganhos / nav.
 * Representação ilustrativa.
 */
const PURPLE = "#8f45dd";
const CARD = "#221a30";
const BG = "#15111d";
const INK = "#f3eefb";
const MUTED = "#a99fc0";

export function WalkPhoneDark() {
  return (
    <div
      style={{
        width: 252,
        maxWidth: "100%",
        borderRadius: 36,
        padding: 10,
        background: "#0e0b15",
        border: "1px solid rgba(255,255,255,.07)",
        boxShadow: "0 44px 90px -34px rgba(20,10,40,.75)",
      }}
    >
      <div style={{ borderRadius: 28, background: BG, color: INK, overflow: "hidden", fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {/* status bar */}
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, padding: "10px 18px 2px", color: MUTED }}>
          <span>18:23</span>
          <span>5G&nbsp;&#9646;&#9646;</span>
        </div>

        {/* header */}
        <div style={{ padding: "8px 16px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 23, fontWeight: 800, letterSpacing: "-.01em" }}>Início</div>
            <div style={{ fontSize: 12.5, color: MUTED, marginTop: 1 }}>Olá, Marina</div>
          </div>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: CARD, display: "grid", placeItems: "center", fontSize: 14 }}>🔔</div>
        </div>

        {/* passeio atual */}
        <div style={{ margin: "14px 12px 0", background: CARD, borderRadius: 14, padding: "12px 14px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontWeight: 700, fontSize: 13.5 }}>Passeio atual</span>
            <span style={{ color: PURPLE, fontSize: 11, fontWeight: 700 }}>Abrir agenda</span>
          </div>
          <div style={{ fontSize: 11.5, color: MUTED, marginTop: 6 }}>Thor · em rota · 18 min restantes</div>
          <div style={{ height: 6, borderRadius: 6, background: "rgba(255,255,255,.08)", marginTop: 10 }}>
            <div style={{ width: "62%", height: "100%", borderRadius: 6, background: `linear-gradient(90deg, ${PURPLE}, #b07bff)` }} />
          </div>
        </div>

        {/* status operacional */}
        <div style={{ margin: "10px 12px 0", background: CARD, borderRadius: 14, padding: "11px 14px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 9.5, letterSpacing: ".12em", textTransform: "uppercase", color: MUTED }}>Status</div>
            <div style={{ fontWeight: 700, fontSize: 15, marginTop: 2 }}>Online</div>
          </div>
          <span style={{ background: "rgba(120,220,150,.16)", color: "#7fe0a0", fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 20 }}>Disponível</span>
        </div>

        {/* stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, margin: "10px 12px 0" }}>
          {[["3", "hoje"], ["4.9★", "score"], ["Ouro", "nível"]].map(([v, l]) => (
            <div key={l} style={{ background: CARD, borderRadius: 12, padding: "10px 4px", textAlign: "center" }}>
              <div style={{ fontWeight: 800, fontSize: 14 }}>{v}</div>
              <div style={{ fontSize: 9.5, color: MUTED, marginTop: 2 }}>{l}</div>
            </div>
          ))}
        </div>

        {/* ganhos */}
        <div style={{ margin: "10px 12px 0", background: `linear-gradient(135deg, #6d2bbd, ${PURPLE})`, borderRadius: 14, padding: "12px 14px" }}>
          <div style={{ fontSize: 10.5, color: "rgba(255,255,255,.82)" }}>Disponível para saque</div>
          <div style={{ fontWeight: 800, fontSize: 21, color: "#fff", marginTop: 2 }}>R$ 1.240,00</div>
        </div>

        {/* nav */}
        <div style={{ display: "flex", justifyContent: "space-around", padding: "11px 4px 14px", marginTop: 12, borderTop: "1px solid rgba(255,255,255,.06)", fontSize: 8.5 }}>
          {[["⌂", "Início", true], ["✦", "Solic."], ["🐾", "Passeios"], ["▦", "Ganhos"], ["📈", "Evolução"]].map(([ic, l, on]) => (
            <div key={l as string} style={{ textAlign: "center", color: on ? PURPLE : MUTED, fontWeight: on ? 700 : 400 }}>
              <div style={{ fontSize: 15 }}>{ic}</div>
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
