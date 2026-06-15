import type { Metadata } from "next";
import { EditorialHome } from "@/components/EditorialHome";

export const metadata: Metadata = {
  title: "Proto · Home Editorial",
  robots: { index: false, follow: false },
};

export default function ProtoPage() {
  return <EditorialHome />;
}
