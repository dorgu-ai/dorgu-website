import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/mascot.jpg" alt="Dorgu mascot" width={32} height={32} className="rounded-full" />
      <span className="text-xl font-bold text-foreground">dorgu</span>
    </Link>
  );
}
