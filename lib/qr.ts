/** Gerador de URL de QR Code via api.qrserver.com. */

export interface QrOptions {
  /** Cor do QR (hex sem #, padrão: cores do tutor) */
  fg?: string;
  /** Cor de fundo (hex sem #, padrão: cores do tutor) */
  bg?: string;
  /** Tamanho em pixels (padrão: 220) */
  size?: number;
}

/**
 * Retorna a URL de um QR Code para `url`.
 * Defaults: fg=1c1611 bg=fffdf8 size=220 (paleta do tutor/home).
 */
export function qrCodeUrl(url: string, opts: QrOptions = {}): string {
  const { fg = "1c1611", bg = "fffdf8", size = 220 } = opts;
  return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&margin=0&color=${fg}&bgcolor=${bg}&data=${encodeURIComponent(url)}`;
}
