import s from "./editorial-home.module.css";

// TODO: trocar pelos links reais (App Store / Google Play / TestFlight) quando publicados.
const apps = [
  { tag: "App do tutor", title: "Agende e acompanhe os passeios", desc: "Para os clientes do seu petshop agendarem e acompanharem ao vivo.", url: "https://www.aumigaowalk.com.br", ios: "#", android: "#" },
  { tag: "App do passeador", title: "Faça parte da rede", desc: "Para passeadores receberem demanda, ganhos e construírem reputação.", url: "https://www.aumigaowalk.com.br", ios: "#", android: "#" },
];

function qr(url: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=0&color=1c1611&bgcolor=fffdf8&data=${encodeURIComponent(url)}`;
}

export function AppDownload() {
  return (
    <div className={s.downloads}>
      {apps.map((a) => (
        <div key={a.tag} className={s.dl}>
          <div className={s.dlInfo}>
            <div className={s.dlTag}>{a.tag}</div>
            <div className={s.dlTitle}>{a.title}</div>
            <p className={s.dlDesc}>{a.desc}</p>
            <div className={s.dlBadges}>
              <a className={s.dlBadge} href={a.ios}> Baixar na<small>App Store</small></a>
              <a className={s.dlBadge} href={a.android}>▶ Disponível no<small>Google Play</small></a>
            </div>
          </div>
          <div className={s.dlQR}><img src={qr(a.url)} alt={`QR ${a.tag}`} /></div>
        </div>
      ))}
    </div>
  );
}
