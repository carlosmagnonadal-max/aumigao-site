import Image from "next/image";
import Link from "next/link";

type BrandLogoProps = {
  compact?: boolean;
};

export function BrandLogo({ compact = false }: BrandLogoProps) {
  return (
    <Link href="/" className="flex items-center gap-3 font-black text-brand-purple">
      <Image
        src="/aumigao-logo.png"
        alt="Logo Aumigão Walk"
        width={compact ? 42 : 54}
        height={compact ? 46 : 58}
        priority
        className="h-auto w-auto"
      />
      <span className={compact ? "text-base" : "text-lg"}>Aumigão Walk</span>
    </Link>
  );
}
