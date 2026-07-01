"use client";

import { useEffect, useRef, useState } from "react";

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
      trail.current = L.polyline(pts, { color: "#f97316", weight: 4 }).addTo(leafletMap.current);
      if (marker.current) marker.current.remove();
      marker.current = L.circleMarker(last, { radius: 8, color: "#f97316", fillOpacity: 1 }).addTo(leafletMap.current);
      leafletMap.current.setView(last, leafletMap.current.getZoom());
    })();
    return () => { cancelled = true; };
  }, [state, data]);

  if (state === "loading") return <Centered>Carregando…</Centered>;
  if (state === "notfound") return <Centered>Link inválido.</Centered>;
  if (state === "ended") {
    return (
      <Centered>
        <h1>Esse passeio já terminou 🐾</h1>
        <p>Quer acompanhar seu pet ao vivo também?</p>
        <Cta slug={null} />
      </Centered>
    );
  }

  const petName = data?.pet_first_name || "o pet";
  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: 16 }}>
      <header style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        {data?.tenant.logo_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={data.tenant.logo_url} alt={data.tenant.name || ""} height={40} />
        ) : null}
        <strong>{data?.tenant.name || "Aumigão"}</strong>
      </header>
      <h1 style={{ fontSize: 20 }}>🐕 {petName} está passeando ao vivo</h1>
      <div ref={mapRef} style={{ height: 360, borderRadius: 12, overflow: "hidden", margin: "12px 0" }} />
      <Cta slug={data?.tenant.slug || null} />
      <p style={{ fontSize: 12, color: "#666", marginTop: 16 }}>
        Localização aproximada, exibida apenas durante o passeio.
      </p>
    </main>
  );
}

function Cta({ slug }: { slug: string | null }) {
  const href = slug ? `/c/${slug}` : "/";
  return (
    <a href={href} style={{
      display: "inline-block", background: "#f97316", color: "#fff",
      padding: "12px 20px", borderRadius: 10, textDecoration: "none", fontWeight: 600,
    }}>
      Agende passeios para seu pet
    </a>
  );
}

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ minHeight: "60vh", display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
      <div>{children}</div>
    </main>
  );
}
