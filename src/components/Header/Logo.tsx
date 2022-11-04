import Image from "next/image";
import Link, { LinkProps } from "next/link";

type LogoProps = LinkProps;

export function Logo(props: LogoProps) {
  return (
    <Link className="relative w-28 h-8 lg:w-32 lg:h-9" {...props}>
      <Image
        src="/logo.png"
        alt="innovea"
        fill
        priority
        sizes="(max-width: 768px) 112px
                (min-width: 1024px) 128px             
                "
      />
    </Link>
  );
}
