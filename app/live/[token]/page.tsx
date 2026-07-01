import type { Metadata } from "next";
import { LiveTrackClient } from "@/components/LiveTrackClient";

type Props = { params: Promise<{ token: string }> };

export const metadata: Metadata = {
  title: "Acompanhe ao vivo — Aumigão",
  description: "Acompanhe o passeio do pet ao vivo.",
  robots: { index: false },
};

export default async function LivePage({ params }: Props) {
  const { token } = await params;
  return <LiveTrackClient token={token} />;
}
