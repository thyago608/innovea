import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="relative w-28 h-8 lg:w-32 lg:h-9">
      <Image
        src="/logo.png"
        alt="innovea"
        fill
        title="innovea"
        priority
        sizes="(max-width: 768px) 112px
                (min-width: 1024px) 128px             
                "
      />
    </Link>
  );
}
