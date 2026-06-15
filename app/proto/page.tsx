import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import { EditorialHomeV2 } from "@/components/EditorialHomeV2";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", weight: ["400", "500", "600"], style: ["normal", "italic"] });

export const metadata: Metadata = {
  title: "Proto · Home completa",
  robots: { index: false, follow: false },
};

export default function ProtoPage() {
  return (
    <div className={fraunces.variable}>
      <EditorialHomeV2 />
    </div>
  );
}
