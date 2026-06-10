import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com o Aumigão Walk: White Label, rede de passeadores, suporte ou parceria comercial.",
};

const highlights = [
  {
    icon: "◆",
    title: "White Label sob medida.",
    text: "Seu app, sua marca e uma operação auditável — sem construir do zero.",
  },
  {
    icon: "↺",
    title: "Resposta humana.",
    text: "Retornamos normalmente em até 1 dia útil, com um plano para o seu caso.",
  },
  {
    icon: "✦",
    title: "Para todo o ecossistema.",
    text: "Tutores, passeadores e empresas parceiras falam com a gente por aqui.",
  },
];

export default function ContatoPage() {
  return (
    <section className="ov-section ov-center ov-grain">
      <span className="ov-glow" />
      <div className="ov-wrap">
        <div className="ov-contact-grid">
          <div>
            <p className="ov-eyebrow">
              <span className="ov-dot ov-dot-ember" /> Contato
            </p>
            <h1 className="ov-ptitle">
              Vamos desenhar a sua <em>operação</em>.
            </h1>
            <p className="ov-lead">
              White Label, rede credenciada de passeadores, suporte ou parceria
              comercial — conte seu objetivo e a gente responde com um plano sob
              medida.
            </p>

            <ul className="ov-contact-list">
              {highlights.map((item) => (
                <li key={item.title}>
                  <span className="ov-contact-ico">{item.icon}</span>
                  <span>
                    <b>{item.title}</b> {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <a className="ov-contact-channel" href="mailto:contato@aumigaowalk.com.br">
              ✉ <b>contato@aumigaowalk.com.br</b>
            </a>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
