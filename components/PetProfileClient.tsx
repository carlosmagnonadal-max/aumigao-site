"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.aumigaowalk.com.br";

type TimelineEvent = {
  event_type: "vaccine" | "weight" | "medication" | "health_note";
  title: string;
  occurred_at: string;
  payload_json: string | null;
};

type PetAge = { years: number; months: number };

type PetPayload = {
  pet_first_name: string;
  pet_photo_url: string | null;
  species: string | null;
  breed: string | null;
  size: string | null;
  age: PetAge | null;
  latest_weight_kg: number | null;
  allergies: string | null;
  medications: string | null;
  health_notes: string | null;
  vet_name: string | null;
  vet_phone: string | null;
  timeline: TimelineEvent[];
  tenant: { name: string | null; slug: string | null; logo_url: string | null };
};

type UiState = "loading" | "ok" | "notfound" | "gone";

const EVENT_ICON: Record<TimelineEvent["event_type"], string> = {
  vaccine: "💉",
  weight: "⚖️",
  medication: "💊",
  health_note: "📝",
};

const EVENT_LABEL: Record<TimelineEvent["event_type"], string> = {
  vaccine: "Vacina",
  weight: "Peso",
  medication: "Medicação",
  health_note: "Nota de saúde",
};

function formatAge(age: PetAge): string {
  const parts: string[] = [];
  if (age.years > 0) parts.push(`${age.years} ${age.years === 1 ? "ano" : "anos"}`);
  if (age.months > 0) parts.push(`${age.months} ${age.months === 1 ? "mês" : "meses"}`);
  return parts.length > 0 ? parts.join(" e ") : "Filhote";
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

export function PetProfileClient({ token }: { token: string }) {
  const [state, setState] = useState<UiState>("loading");
  const [data, setData] = useState<PetPayload | null>(null);

  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const res = await fetch(`${API_URL}/api/public/pet/${token}`);
        if (!alive) return;
        if (res.status === 404) { setState("notfound"); return; }
        if (res.status === 410) { setState("gone"); return; }
        if (!res.ok) { setState("notfound"); return; }
        const body: PetPayload = await res.json();
        setData(body);
        setState("ok");
      } catch {
        /* mantém estado de loading em erro transitório; tentativa única */
        if (alive) setState("notfound");
      }
    }
    load();
    return () => { alive = false; };
  }, [token]);

  if (state === "loading") return <Centered><LoadingSpinner /></Centered>;
  if (state === "notfound") {
    return (
      <Centered>
        <p style={{ fontSize: 40, margin: "0 0 16px" }}>🔍</p>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>Link não encontrado</h1>
        <p style={{ color: "var(--muted, #7c7468)", margin: "0 0 24px", fontSize: 15 }}>
          Verifique com o responsável pelo pet se o link está correto.
        </p>
        <Cta slug={null} />
      </Centered>
    );
  }
  if (state === "gone") {
    return (
      <Centered>
        <p style={{ fontSize: 40, margin: "0 0 16px" }}>🔒</p>
        <h1 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 8px" }}>Este link expirou ou foi revogado</h1>
        <p style={{ color: "var(--muted, #7c7468)", margin: "0 0 24px", fontSize: 15 }}>
          O tutor pode gerar um novo link de perfil no aplicativo.
        </p>
        <Cta slug={null} />
      </Centered>
    );
  }

  const pet = data!;
  const tenantName = pet.tenant.name || "Aumigão";

  return (
    <main style={{
      maxWidth: 640,
      margin: "0 auto",
      padding: "0 0 48px",
      fontFamily: "var(--font-body, system-ui, sans-serif)",
      color: "var(--ov-text, #1c1611)",
    }}>
      {/* ── Header do tenant ── */}
      <header style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "14px 16px",
        borderBottom: "1px solid rgba(40,25,10,.1)",
        background: "#faf4e8",
      }}>
        {pet.tenant.logo_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={pet.tenant.logo_url}
            alt={tenantName}
            height={36}
            style={{ borderRadius: 8, objectFit: "contain" }}
          />
        ) : (
          <span style={{ fontSize: 22 }}>🐾</span>
        )}
        <strong style={{ fontSize: 16, fontWeight: 700, color: "#1c1611" }}>{tenantName}</strong>
      </header>

      {/* ── Cartão de perfil ── */}
      <section style={{ padding: "24px 16px 0" }}>
        <div style={{
          background: "#fff",
          border: "1px solid rgba(40,25,10,.1)",
          borderRadius: 16,
          padding: 20,
          display: "flex",
          gap: 16,
          alignItems: "flex-start",
          boxShadow: "0 2px 16px rgba(40,25,10,.06)",
        }}>
          {/* Foto */}
          <div style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "#f3e9d6",
            flexShrink: 0,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 36,
            border: "2px solid #f4671e",
          }}>
            {pet.pet_photo_url ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={pet.pet_photo_url}
                alt={pet.pet_first_name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              <span>🐶</span>
            )}
          </div>

          {/* Nome + chips */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 style={{
              margin: "0 0 10px",
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: "-.01em",
              color: "#1c1611",
            }}>
              {pet.pet_first_name}
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {pet.species && <Chip label={capitalizeFirst(pet.species)} />}
              {pet.breed && <Chip label={pet.breed} />}
              {pet.size && <Chip label={sizeLabel(pet.size)} />}
              {pet.age && <Chip label={formatAge(pet.age)} />}
              {pet.latest_weight_kg != null && (
                <Chip label={`${pet.latest_weight_kg.toFixed(1)} kg`} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Saúde ── */}
      {(pet.allergies || pet.medications || pet.health_notes || pet.vet_name) && (
        <section style={{ padding: "20px 16px 0" }}>
          <SectionTitle icon="🩺" label="Saúde" />
          <div style={{
            background: "#fff",
            border: "1px solid rgba(40,25,10,.1)",
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "0 2px 16px rgba(40,25,10,.06)",
          }}>
            {pet.allergies && (
              <HealthRow icon="⚠️" label="Alergias" value={pet.allergies} divider />
            )}
            {pet.medications && (
              <HealthRow icon="💊" label="Medicações em uso" value={pet.medications} divider={!!(pet.health_notes || pet.vet_name)} />
            )}
            {pet.health_notes && (
              <HealthRow icon="📋" label="Observações de saúde" value={pet.health_notes} divider={!!pet.vet_name} />
            )}
            {pet.vet_name && (
              <HealthRow
                icon="🏥"
                label="Veterinário"
                value={pet.vet_phone ? `${pet.vet_name} · ${pet.vet_phone}` : pet.vet_name}
                divider={false}
              />
            )}
          </div>
        </section>
      )}

      {/* ── Histórico ── */}
      {pet.timeline && pet.timeline.length > 0 && (
        <section style={{ padding: "20px 16px 0" }}>
          <SectionTitle icon="📅" label="Histórico" />
          <div style={{
            background: "#fff",
            border: "1px solid rgba(40,25,10,.1)",
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "0 2px 16px rgba(40,25,10,.06)",
          }}>
            {pet.timeline.map((ev, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  padding: "12px 16px",
                  borderBottom: i < pet.timeline.length - 1 ? "1px solid rgba(40,25,10,.07)" : "none",
                  alignItems: "flex-start",
                }}
              >
                <span style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: eventBg(ev.event_type),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  flexShrink: 0,
                }}>
                  {EVENT_ICON[ev.event_type] ?? "📌"}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14, color: "#1c1611", marginBottom: 2 }}>
                    {ev.title || EVENT_LABEL[ev.event_type]}
                  </div>
                  <div style={{ fontSize: 12, color: "#7c7468" }}>
                    {EVENT_LABEL[ev.event_type]} · {formatDate(ev.occurred_at)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <div style={{ padding: "24px 16px 0", textAlign: "center" }}>
        <Cta slug={pet.tenant.slug || null} />
        <p style={{ fontSize: 11, color: "#aaa", marginTop: 12 }}>
          Perfil gerado pelo app Aumigão. Dados visíveis apenas para quem tem o link.
        </p>
      </div>
    </main>
  );
}

/* ── Sub-componentes ── */

function Chip({ label }: { label: string }) {
  return (
    <span style={{
      display: "inline-block",
      padding: "3px 10px",
      borderRadius: 20,
      background: "#f3e9d6",
      color: "#5c3d1e",
      fontSize: 12,
      fontWeight: 600,
      border: "1px solid rgba(244,103,30,.2)",
    }}>
      {label}
    </span>
  );
}

function SectionTitle({ icon, label }: { icon: string; label: string }) {
  return (
    <h2 style={{
      margin: "0 0 10px",
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 14,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".08em",
      color: "#7c7468",
    }}>
      <span>{icon}</span> {label}
    </h2>
  );
}

function HealthRow({
  icon,
  label,
  value,
  divider,
}: {
  icon: string;
  label: string;
  value: string;
  divider: boolean;
}) {
  return (
    <div style={{
      padding: "12px 16px",
      borderBottom: divider ? "1px solid rgba(40,25,10,.07)" : "none",
    }}>
      <div style={{ fontSize: 12, color: "#7c7468", marginBottom: 3, fontWeight: 600, textTransform: "uppercase", letterSpacing: ".04em" }}>
        {icon} {label}
      </div>
      <div style={{ fontSize: 14, color: "#1c1611", lineHeight: 1.5 }}>{value}</div>
    </div>
  );
}

function Cta({ slug }: { slug: string | null }) {
  const href = slug ? `/c/${slug}` : "/";
  return (
    <a
      href={href}
      style={{
        display: "inline-block",
        background: "linear-gradient(180deg, #8f45dd, #6d2bbd)",
        color: "#fff",
        padding: "12px 24px",
        borderRadius: 30,
        textDecoration: "none",
        fontWeight: 700,
        fontSize: 14,
        boxShadow: "0 10px 28px -8px rgba(109,43,189,.55)",
      }}
    >
      Agendar passeio para meu pet
    </a>
  );
}

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <main style={{
      minHeight: "60vh",
      display: "grid",
      placeItems: "center",
      textAlign: "center",
      padding: 24,
      fontFamily: "var(--font-body, system-ui, sans-serif)",
      background: "#faf4e8",
    }}>
      <div>{children}</div>
    </main>
  );
}

function LoadingSpinner() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div style={{
        width: 36,
        height: 36,
        border: "3px solid #f3e9d6",
        borderTop: "3px solid #f4671e",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }} />
      <p style={{ color: "#7c7468", fontSize: 14 }}>Carregando…</p>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

/* ── Helpers ── */

function capitalizeFirst(s: string): string {
  if (!s) return s;
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function sizeLabel(size: string): string {
  const map: Record<string, string> = {
    small: "Pequeno porte",
    medium: "Médio porte",
    large: "Grande porte",
    extra_large: "Extra grande",
  };
  return map[size.toLowerCase()] ?? capitalizeFirst(size);
}

function eventBg(type: TimelineEvent["event_type"]): string {
  const map: Record<TimelineEvent["event_type"], string> = {
    vaccine: "#e8f7ee",
    weight: "#fdf3e3",
    medication: "#f0eaf8",
    health_note: "#eef3fc",
  };
  return map[type] ?? "#f3e9d6";
}
