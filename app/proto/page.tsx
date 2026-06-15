import type { Metadata } from "next";
import { HeroV2 } from "@/components/HeroV2";

export const metadata: Metadata = {
  title: "Proto · Hero V2",
  robots: { index: false, follow: false },
};

export default function ProtoPage() {
  return <HeroV2 />;
}
