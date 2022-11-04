import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import clsx from "clsx";

interface NavItemProps extends LinkProps {
  children: ReactNode;
}

export function NavItem({ children, ...rest }: NavItemProps) {
  const { asPath } = useRouter();

  return (
    <li>
      <Link
        className={clsx(
          "flex h-16 px-2 items-center text-sm text-zinc-700 capitalize transition-background duration-200 hover:bg-gray-200 md:h-20 lg:text-base",
          {
            "font-semibold border-b-4 rounded border-b-cyan-500":
              rest.href === asPath,
          }
        )}
        {...rest}
      >
        {children}
      </Link>
    </li>
  );
}
