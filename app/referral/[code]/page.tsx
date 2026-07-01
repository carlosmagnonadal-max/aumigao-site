import type { Metadata } from "next";
import { ReferralInviteClient } from "@/components/ReferralInviteClient";

type Props = { params: Promise<{ code: string }> };

export const metadata: Metadata = {
  title: "Convite para ser passeador — Aumigão",
  description: "Você foi convidado para ser passeador na Aumigão.",
  robots: { index: false },
};

export default async function ReferralPage({ params }: Props) {
  const { code } = await params;
  return <ReferralInviteClient code={code} />;
}
