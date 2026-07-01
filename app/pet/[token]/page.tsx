import type { Metadata } from "next";
import { PetProfileClient } from "@/components/PetProfileClient";

type Props = { params: Promise<{ token: string }> };

export const metadata: Metadata = {
  title: "Perfil do Pet — Aumigão",
  description: "Veja o perfil de saúde e histórico do seu pet.",
  robots: { index: false },
};

export default async function PetProfilePage({ params }: Props) {
  const { token } = await params;
  return <PetProfileClient token={token} />;
}
