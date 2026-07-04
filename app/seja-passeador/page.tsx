import type { Metadata } from "next";
import { Suspense } from "react";
import { InnerPage } from "@/components/InnerPage";
import { SejaPasseadorBody } from "@/components/SejaPasseadorBody";

export const metadata: Metadata = {
  title: "Seja passeador — ganhe dinheiro cuidando de cães",
  description:
    "Vire passeador na rede Aumigão Walk: defina seus horários, aceite passeios pelo app e receba via PIX. Credenciamento gratuito, sem mensalidade.",
};

export default function SejaPasseadorPage() {
  return (
    <InnerPage
      eyebrow="Seja passeador"
      title={
        <>
          Ganhe dinheiro <em>passeando</em> com cães.
        </>
      }
      lead="Defina seus horários, aceite passeios pelo app e receba por passeio via PIX — sem mensalidade, sem vínculo empregatício."
    >
      <Suspense>
        <SejaPasseadorBody />
      </Suspense>
    </InnerPage>
  );
}
