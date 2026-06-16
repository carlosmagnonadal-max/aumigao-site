import { ReactNode } from "react";
import { InnerPage } from "./InnerPage";
import type { AudienceKey } from "@/lib/audiences";

type Props = {
  aud: AudienceKey;
  title?: ReactNode;
  children: ReactNode;
};

/**
 * Shell dos sub-sites por público. Envolve o conteúdo num <div data-aud={aud}>
 * para que os tokens escopados (cores accent do público) sejam aplicados via CSS,
 * e reusa o InnerPage para header/título/footer. Aditivo — não toca a home viva.
 */
export function AudienceLayout({ aud, title, children }: Props) {
  return (
    <div data-aud={aud}>
      <InnerPage title={title ?? ""}>{children}</InnerPage>
    </div>
  );
}
