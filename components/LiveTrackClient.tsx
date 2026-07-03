"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import s from "./inner.module.css";
import lm from "./LiveMap.module.css";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.aumigaowalk.com.br";

type Ping = { latitude: number; longitude: number; recorded_at: string };
type LivePayload = {
  status: string;
  pet_first_name: string;
  pet_photo_url: string | null;
  tenant: { name: string | null; slug: string | null; logo_url: string | null };
  pings: Ping[];
  count: number;
};

type UiState = "loading" | "active" | "ended" | "notfound";

// Roxo da marca (Calor Editorial) — usado na trilha e no marcador do mapa.
const BRAND_PURPLE = "#6d2bbd";

export function LiveTrackClient({ token }: { token: string }) {
  const [state, setState] = useState<UiState>("loading");
  const [data, setData] = useState<LivePayload | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const leafletMap = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const trail = useRef<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const marker = useRef<any>(null);

  useEffect(() => {
    let alive = true;
    async function poll() {
      try {
        const res = await fetch(`${API_URL}/api/public/live/${token}`);
        if (!alive) return;
        if (res.status === 410) { setState("ended"); return; }
        if (res.status === 404) { setState("notfound"); return; }
        if (!res.ok) return;
        const body: LivePayload = await res.json();
        setData(body);
        setState("active");
      } catch {
        /* mantém estado atual em erro transitório de rede */
      }
    }
    poll();
    const id = setInterval(poll, 7000);
    return () => { alive = false; clearInterval(id); };
  }, [token]);

  useEffect(() => {
    if (state !== "active" || !data || !mapRef.current || data.pings.length === 0) return;
    let cancelled = false;
    (async () => {
      const L = (await import("leaflet")).default;
      // @ts-ignore — CSS module type not declared; intentional dynamic import to avoid SSR
      await import("leaflet/dist/leaflet.css");
      if (cancelled || !mapRef.current) return;
      const pts = data.pings.map((p) => [p.latitude, p.longitude] as [number, number]);
      const last = pts[pts.length - 1];
      if (!leafletMap.current) {
        leafletMap.current = L.map(mapRef.current).setView(last, 16);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap",
          maxZoom: 19,
        }).addTo(leafletMap.current);
      }
      if (trail.current) trail.current.remove();
      trail.current = L.polyline(pts, { color: BRAND_PURPLE, weight: 4 }).addTo(leafletMap.current);
      if (marker.current) marker.current.remove();
      marker.current = L.circleMarker(last, {
        radius: 8,
        color: BRAND_PURPLE,
        fillColor: BRAND_PURPLE,
        fillOpacity: 1,
      }).addTo(leafletMap.current);
      leafletMap.current.setView(last, leafletMap.current.getZoom());
    })();
    return () => { cancelled = true; };
  }, [state, data]);

  if (state === "loading") {
    return (
      <LiveShell tenantName={null} tenantLogo={null}>
        <p className={s.lead} style={{ textAlign: "center", marginInline: "auto" }}>Carregando…</p>
      </LiveShell>
    );
  }
  if (state === "notfound") {
    return (
      <LiveShell tenantName={null} tenantLogo={null}>
        <div style={{ textAlign: "center" }}>
          <h1 className={s.h1} style={{ fontSize: "clamp(24px,4vw,38px)", marginInline: "auto" }}>Link inválido</h1>
          <p className={s.lead} style={{ marginInline: "auto" }}>
            Esse link de acompanhamento não existe ou foi digitado errado.
          </p>
        </div>
      </LiveShell>
    );
  }
  if (state === "ended") {
    return (
      <LiveShell tenantName={data?.tenant.name ?? null} tenantLogo={data?.tenant.logo_url ?? null}>
        <div style={{ textAlign: "center" }}>
          <h1 className={s.h1} style={{ fontSize: "clamp(24px,4vw,38px)", marginInline: "auto" }}>
            Esse passeio já terminou 🐾
          </h1>
          <p className={s.lead} style={{ margin: "16px auto 28px" }}>Quer acompanhar seu pet ao vivo também?</p>
          <Cta slug={data?.tenant.slug || null} />
        </div>
      </LiveShell>
    );
  }

  const petName = data?.pet_first_name || "o pet";
  return (
    <LiveShell tenantName={data?.tenant.name ?? null} tenantLogo={data?.tenant.logo_url ?? null}>
      <div className={lm.head} style={{ marginBottom: 4 }}>
        <h1
          style={{
            margin: 0,
            fontFamily: "var(--font-fraunces), serif",
            fontWeight: 600,
            fontSize: "clamp(22px,3.4vw,32px)",
            letterSpacing: "-.01em",
            color: "var(--ink)",
          }}
        >
          🐕 {petName} está passeando
        </h1>
        <span className={lm.badge}>
          <span className={lm.dot} />
          <span>Ao vivo</span>
        </span>
      </div>
      <div
        ref={mapRef}
        style={{
          height: 380,
          borderRadius: 18,
          overflow: "hidden",
          border: "1px solid var(--hair)",
          margin: "16px 0 22px",
          boxShadow: "0 26px 54px -30px rgba(80,40,10,.4)",
        }}
      />
      <div style={{ textAlign: "center" }}>
        <Cta slug={data?.tenant.slug || null} />
      </div>
      <p style={{ fontSize: 12.5, color: "var(--muted)", marginTop: 18, textAlign: "center", lineHeight: 1.5 }}>
        Localização aproximada, exibida apenas durante o passeio.
      </p>
    </LiveShell>
  );
}

/** Shell editorial claro com header da marca (padrão das páginas internas). */
function LiveShell({
  tenantName,
  tenantLogo,
  children,
}: {
  tenantName: string | null;
  tenantLogo: string | null;
  children: React.ReactNode;
}) {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <div className={s.headInner}>
          <Link href="/" className={s.brand}>
            {tenantLogo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={tenantLogo} alt="" width={34} height={34} className={s.brandMark} style={{ objectFit: "cover" }} />
            ) : (
              <Image src="/icon-rounded-512.png" alt="" width={34} height={34} className={s.brandMark} />
            )}
            <span>{tenantName || "Aumigão Walk"}</span>
          </Link>
        </div>
      </header>
      <div className={s.mainNarrow} style={{ maxWidth: 680, paddingBlock: "clamp(28px,5vh,56px)" }}>
        {children}
      </div>
    </div>
  );
}

function Cta({ slug }: { slug: string | null }) {
  const href = slug ? `/c/${slug}` : "/";
  return (
    <Link href={href} className={`${s.btn} ${s.btnPrimary}`}>
      Agende passeios para seu pet
    </Link>
  );
}
