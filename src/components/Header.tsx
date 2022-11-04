import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { clsx } from "clsx";

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className="bg-gray-100">
      <div className="max-w-[1000px] h-16 my-0 mx-auto px-4 flex justify-between items-center md:px-8 md:h-20">
        <div className="relative w-28 h-8 lg:w-32 lg:h-9">
          <Image
            src="/logo.png"
            alt="innovea"
            fill
            priority
            sizes="(max-width: 768px) 112px
                (min-width: 1024px) 128px             
                "
          />
        </div>
        <nav>
          <ul className="flex gap-4">
            <li className="">
              <Link
                href="/"
                className={clsx(
                  "relative flex h-16 px-2 items-center text-sm text-zinc-700 font-semibold capitalize after:block after:h-3 after:absolute after:bottom-0 after:left-0 after:bg-black transition-background duration-200 hover:bg-gray-200 md:text-base md:h-20",
                  {
                    "font-semibold border-b-4 rounded border-b-cyan-500":
                      asPath === "/",
                  }
                )}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className={clsx(
                  "flex h-16 px-2 items-center text-sm text-zinc-700 capitalize hover:bg-gray-200 transition-background duration-200 md:text-base md:h-20",
                  {
                    "font-semibold border-b-4 rounded border-b-cyan-500":
                      asPath === "/posts",
                  }
                )}
              >
                posts
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
