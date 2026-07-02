import type { Metadata } from "next";
import { EmpresaContent } from "@/components/EmpresaContent";

export const metadata: Metadata = {
  title: "Para empresas pet — sua marca, nova receita recorrente",
  description:
    "Lance sua própria operação de passeios com a sua marca, sem montar tecnologia. Plano Começar gratuito, Pro R$129,90/mês e Enterprise. Painel white-label, rede de passeadores pronta e 5 módulos integrados.",
};

export default function ParaEmpresasPage() {
  return <EmpresaContent />;
}
