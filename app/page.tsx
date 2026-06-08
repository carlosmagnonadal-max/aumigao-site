import type { Metadata } from "next";
import { OperationVivaHome } from "@/components/OperationViva";

export const metadata: Metadata = {
  title: "Aumigão Walk | Operação Viva",
  description:
    "Operação Viva para passeios pet: matching, score, credenciamento, recovery e White Label em uma plataforma auditável.",
};

export default function Home() {
  return <OperationVivaHome />;
}
