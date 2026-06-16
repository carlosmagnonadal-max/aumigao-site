import type { Metadata } from "next";
import { TutorContent } from "@/components/TutorContent";

export const metadata: Metadata = {
  title: "Para tutores — você sai, ele passeia, você vê tudo",
  description:
    "Seu cão passeia com um passeador verificado e você acompanha tudo: mapa ao vivo, fotos do passeio e avaliação. Reembolso integral se o passeio falhar.",
};

export default function TutorPage() {
  return <TutorContent />;
}
