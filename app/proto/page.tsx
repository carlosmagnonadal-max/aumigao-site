import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { HeroMerged } from "@/components/HeroMerged";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["400", "500", "600"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Proto · Direção oficial",
  robots: { index: false, follow: false },
};

export default function ProtoPage() {
  return (
    <div className={fraunces.variable}>
      <HeroMerged />
    </div>
  );
}
