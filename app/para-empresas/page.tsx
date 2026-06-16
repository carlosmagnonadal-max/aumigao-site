import type { Metadata } from "next";
import { EmpresaContent } from "@/components/EmpresaContent";

export const metadata: Metadata = {
  title: "Para empresas pet — sua marca, nova receita recorrente",
  description:
    "Lance sua própria operação de passeios com a sua marca, sem montar tecnologia. Painel white-label, rede de passeadores pronta, 5 módulos e planos a partir de R$197/mês. Solicite um diagnóstico gratuito.",
};

export default function ParaEmpresasPage() {
  return <EmpresaContent />;
}
