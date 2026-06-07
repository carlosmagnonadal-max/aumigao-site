export function ContactForm() {
  return (
    <form className="grid gap-5 rounded border border-black/5 bg-white p-6 shadow-soft md:grid-cols-2">
      {/* TODO: integrar com n8n. */}
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        Nome
        <input className="rounded border border-black/10 px-4 py-3 font-normal outline-none focus:border-brand-forest" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        Empresa
        <input className="rounded border border-black/10 px-4 py-3 font-normal outline-none focus:border-brand-forest" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        E-mail
        <input type="email" className="rounded border border-black/10 px-4 py-3 font-normal outline-none focus:border-brand-forest" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        Telefone
        <input className="rounded border border-black/10 px-4 py-3 font-normal outline-none focus:border-brand-forest" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink md:col-span-2">
        Tipo de negocio
        <select className="rounded border border-black/10 px-4 py-3 font-normal outline-none focus:border-brand-forest">
          <option>Pet shop</option>
          <option>Clinica veterinaria</option>
          <option>Creche ou hotel pet</option>
          <option>Rede ou franquia</option>
          <option>Outro</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink md:col-span-2">
        Mensagem
        <textarea rows={6} className="rounded border border-black/10 px-4 py-3 font-normal outline-none focus:border-brand-forest" />
      </label>
      <div className="md:col-span-2">
        <button
          type="button"
          className="w-full rounded bg-brand-forest px-6 py-3 font-bold text-white transition hover:bg-brand-ink sm:w-auto"
        >
          Enviar interesse
        </button>
      </div>
    </form>
  );
}
