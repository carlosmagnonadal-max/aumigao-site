import type { Metadata } from "next";
import { Fraunces, Bricolage_Grotesque, Unbounded } from "next/font/google";
import { ProtoShowcase } from "@/components/ProtoShowcase";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["400", "500", "600"], style: ["normal", "italic"] });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", weight: ["600", "700", "800"] });
const unbounded = Unbounded({ subsets: ["latin"], variable: "--font-unbounded", weight: ["600", "700", "800"] });

export const metadata: Metadata = {
  title: "Proto · 3 direções",
  robots: { index: false, follow: false },
};

export default function ProtoPage() {
  return (
    <div className={`${fraunces.variable} ${bricolage.variable} ${unbounded.variable}`}>
      <ProtoShowcase />
    </div>
  );
}
