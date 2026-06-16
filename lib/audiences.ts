export type AudienceKey = "tutor" | "passeador" | "empresa";
export interface Audience { key: AudienceKey; navLabel: string; shortLabel: string; route: string; accent: string; accent2: string; ctaLabel: string; ctaHref: string; }
export const AUDIENCES: Audience[] = [
  { key: "tutor", navLabel: "Para tutores", shortLabel: "Tutor", route: "/tutor", accent: "#f4671e", accent2: "#ffb24d", ctaLabel: "Procure seu petshop", ctaHref: "/tutor#encontrar" },
  { key: "passeador", navLabel: "Seja passeador", shortLabel: "Passeador", route: "/passeador", accent: "#6d2bbd", accent2: "#8f45dd", ctaLabel: "Quero me cadastrar", ctaHref: "/passeador#cadastro" },
  { key: "empresa", navLabel: "Para sua empresa", shortLabel: "Empresas", route: "/para-empresas", accent: "#1f7a5a", accent2: "#f4671e", ctaLabel: "Solicitar diagnóstico", ctaHref: "/contato?perfil=empresa" },
];
export function resolveAudience(pathname: string): Audience | null { return AUDIENCES.find(a => pathname === a.route || pathname.startsWith(a.route + "/")) ?? null; }
