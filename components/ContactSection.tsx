"use client";

import s from "./editorial-home.module.css";
import { WHATSAPP_DISPLAY, WHATSAPP_LINK } from "@/lib/contact";
import {
  useContactForm,
  BUSINESS_TYPES,
  INTERESTS,
} from "@/hooks/useContactForm";

// M9: Limites de comprimento por campo
const MAX_SHORT = 200;
const MAX_MSG = 2000;

export function ContactSection() {
  const { form, setField, honeypot, setHoneypot, status, error, submit, reset } =
    useContactForm();

  return (
    <div className={s.contactGrid}>
      <div className={s.contactAside}>
        <p className={s.lead} style={{ marginTop: 0 }}>Conte sobre o seu negócio e a gente mostra, num diagnóstico gratuito, como lançar passeios com a sua marca — em semanas, não meses.</p>
        <a className={s.waBtn} href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">💬 Falar no WhatsApp {WHATSAPP_DISPLAY}</a>
        <div className={s.contactMeta}>
          E-mail: <a href="mailto:contato@aumigaowalk.com.br">contato@aumigaowalk.com.br</a><br />
          Retorno em até 1 dia útil · seus dados ficam protegidos (LGPD).
        </div>
      </div>

      {status === "sent" ? (
        <div className={s.form}><div className={s.fok}>
          <div className={s.fokH}>Recebemos seu interesse 🐾</div>
          <p className={s.fokP}>Nossa equipe comercial retorna normalmente em até 1 dia útil.</p>
          <button className={s.planCta} style={{ maxWidth: 240, margin: "18px auto 0" }} onClick={reset}>Enviar outra mensagem</button>
        </div></div>
      ) : (
        <form className={s.form} onSubmit={submit}>
          {/* M9: honeypot — oculto para humanos, bots costumam preencher */}
          <input
            name="website"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />
          <div className={s.fgrid}>
            <label className={s.field}><span>Nome</span><input required className={s.finput} value={form.name} onChange={setField("name")} placeholder="Seu nome" maxLength={MAX_SHORT} /></label>
            <label className={s.field}><span>Empresa</span><input className={s.finput} value={form.company} onChange={setField("company")} placeholder="Nome da empresa" maxLength={MAX_SHORT} /></label>
            <label className={s.field}><span>E-mail</span><input type="email" required className={s.finput} value={form.email} onChange={setField("email")} placeholder="voce@empresa.com" maxLength={MAX_SHORT} /></label>
            <label className={s.field}><span>Telefone</span><input className={s.finput} value={form.phone} onChange={setField("phone")} placeholder="(00) 00000-0000" maxLength={MAX_SHORT} /></label>
            <label className={s.field}><span>Cidade</span><input className={s.finput} value={form.city} onChange={setField("city")} placeholder="Cidade / UF" maxLength={MAX_SHORT} /></label>
            <label className={s.field}><span>Tipo de negócio</span><select className={s.fselect} value={form.business_type} onChange={setField("business_type")}>{BUSINESS_TYPES.map((t) => <option key={t}>{t}</option>)}</select></label>
            <label className={`${s.field} ${s.fieldFull}`}><span>Interesse principal</span><select className={s.fselect} value={form.interest} onChange={setField("interest")}>{INTERESTS.map((i) => <option key={i}>{i}</option>)}</select></label>
            <label className={`${s.field} ${s.fieldFull}`}><span>Mensagem</span><textarea className={s.ftext} value={form.message} onChange={setField("message")} placeholder="Conte sobre sua operação, número de unidades, objetivo…" maxLength={MAX_MSG} /></label>
          </div>
          <div className={s.fsubmit}>
            <button type="submit" className={s.btn} disabled={status === "sending"}>{status === "sending" ? "Enviando…" : "Solicitar diagnóstico"} →</button>
            {status === "error" ? <span className={s.ferr} role="alert" aria-live="polite">{error}</span> : <span className={s.fnote}>Retorno em até 1 dia útil</span>}
          </div>
        </form>
      )}
    </div>
  );
}
