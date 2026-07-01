import type { Metadata } from "next";
import { TutorReferralInviteClient } from "@/components/TutorReferralInviteClient";

type Props = { params: Promise<{ code: string }> };

export const metadata: Metadata = {
  title: "Convite — Aumigão",
  description: "Você foi convidado para agendar os passeios do seu pet pelo app.",
  robots: { index: false },
};

export default async function TutorReferralPage({ params }: Props) {
  const { code } = await params;
  return <TutorReferralInviteClient code={code} />;
}
