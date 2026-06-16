import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { EditorialHomeV2 } from "@/components/EditorialHomeV2";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["400", "500", "600"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: { absolute: "Aumigão Walk — Operação de passeios pet com a sua marca" },
  description:
    "A plataforma white-label que conecta tutores, passeadores e empresas pet numa só operação de passeios: acompanhamento ao vivo, rede credenciada, matching, score, recovery e financeiro. Lance a sua própria operação — com a sua marca.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className={fraunces.variable}>
      <EditorialHomeV2 />
    </div>
  );
}
