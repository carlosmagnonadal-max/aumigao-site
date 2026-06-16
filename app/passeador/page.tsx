import type { Metadata } from "next";
import { PasseadorContent } from "@/components/PasseadorContent";

export const metadata: Metadata = {
  title: "Seja passeador — renda recorrente, não bico",
  description:
    "Cuidar de cães virou profissão. Entre para a rede Aumigão (app Walk): receba passeios de várias empresas pet, ganhos transparentes, agenda própria e uma reputação que te acompanha em toda a rede.",
};

export default function PasseadorPage() {
  return <PasseadorContent />;
}
