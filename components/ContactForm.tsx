const interests = [
  "Quero contratar White Label",
  "Quero ser passeador",
  "Quero suporte",
  "Quero parceria comercial",
];

export function ContactForm() {
  return (
    <form className="grid gap-5 rounded border border-black/5 bg-white p-6 shadow-soft md:grid-cols-2">
      {/* TODO: integrar com n8n para envio automático para negocios@aumigaowalk.com.br */}
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        Nome
        <input className="rounded border border-black/10 px-4 py-3 font-normal outline-none focus:border-brand-orange" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        Empresa
        <input className="rounded border border-black/10 px-4 py-3 font-normal outline-none focus:border-brand-orange" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        E-mail
        <input type="email" className="rounded border border-black/10 px-4 py-3 font-normal outline-none focus:border-brand-orange" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        Telefone
        <input className="rounded border border-black/10 px-4 py-3 font-normal outline-none focus:border-brand-orange" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        Cidade
        <input className="rounded border border-black/10 px-4 py-3 font-normal outline-none focus:border-brand-orange" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink">
        Tipo de negócio
        <select className="rounded border border-black/10 px-4 py-3 font-normal outline-none focus:border-brand-orange">
          <option>Pet shop</option>
          <option>Clínica veterinária</option>
          <option>Creche ou hotel pet</option>
          <option>Rede ou franquia</option>
          <option>Outro</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink md:col-span-2">
        Interesse principal
        <select className="rounded border border-black/10 px-4 py-3 font-normal outline-none focus:border-brand-orange">
          {interests.map((interest) => (
            <option key={interest}>{interest}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm font-bold text-brand-ink md:col-span-2">
        Mensagem
        <textarea rows={6} className="rounded border border-black/10 px-4 py-3 font-normal outline-none focus:border-brand-orange" />
      </label>
      <div className="md:col-span-2">
        <button
          type="button"
          className="w-full rounded bg-brand-purple px-6 py-3 font-bold text-white transition hover:bg-brand-orange sm:w-auto"
        >
          Enviar interesse
        </button>
        <p className="mt-3 text-sm font-semibold text-brand-ink/60">
          Retornamos normalmente em até 1 dia útil.
        </p>
      </div>
    </form>
  );
}
